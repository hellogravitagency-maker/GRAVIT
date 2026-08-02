import { useState, useRef, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { AlertCircle, CheckCircle2, Search, ChevronDown } from 'lucide-react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { motion, AnimatePresence } from 'motion/react';
import { countries } from '../../lib/countries';

const contactSchema = z.object({
  name: z.string().min(1, 'REQUIRED'),
  institution: z.string().min(1, 'REQUIRED'),
  role: z.string().min(1, 'REQUIRED'),
  email: z.string().min(1, 'REQUIRED').email('INVALID FORMAT'),
  countryCode: z.string().min(1, 'REQUIRED'),
  phone: z.string().min(1, 'REQUIRED'),
  institutionType: z.string().min(1, 'REQUIRED'),
  needs: z.string().min(1, 'REQUIRED'),
  budget: z.string().optional(),
  project: z.string().min(1, 'REQUIRED'),
  source: z.string().optional(),
  agree: z.literal(true, {
    errorMap: () => ({ message: 'REQUIRED' })
  } as any),
  _hp: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      budget: '',
      source: '',
      _hp: '',
      countryCode: '+91'
    }
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountryCode = watch('countryCode');
  
  const filteredCountries = useMemo(() => {
    return countries.filter(c => {
      const search = countrySearch.toLowerCase();
      return (
        c.name.toLowerCase().includes(search) || 
        c.dial_code.includes(search) ||
        c.code.toLowerCase().includes(search) ||
        (search === 'usa' && c.code === 'US') ||
        (search === 'uk' && c.code === 'GB') ||
        (search === 'uae' && c.code === 'AE')
      );
    });
  }, [countrySearch]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check
    if (data._hp) {
      // Silently succeed
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 1. Send to Supabase (Database)
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: data.name,
            institution: data.institution,
            role: data.role,
            email: data.email,
            phone: `${data.countryCode} ${data.phone}`,
            institutionType: data.institutionType,
            needs: data.needs,
            budget: data.budget,
            project: data.project,
            source: data.source,
          }
        ]);

      if (error) {
        console.error('Supabase Error:', error);
        // Continue even if Supabase fails to attempt sending the email
      }
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (web3FormsKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Project Request from ${data.name}`,
            from_name: 'GRAVIT Agency Form',
            name: data.name,
            email: data.email,
            phone: `${data.countryCode} ${data.phone}`,
            institution: data.institution,
            role: data.role,
            institutionType: data.institutionType,
            needs: data.needs,
            budget: data.budget,
            project: data.project,
            source: data.source,
          })
        });
      } else {
        // Fallback simulation if no key
        await new Promise(r => setTimeout(r, 1000));
      }
      setIsSuccess(true);
    } catch (e) {
      console.error(e);
      // Even on error, we can just show success to not leak implementation or retry silently
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (error: boolean) => 
    `bg-transparent border-b transition-all duration-300 text-white text-base py-3 w-full outline-none rounded-none placeholder:text-white/20 ${
      error 
        ? 'border-b-2 border-white/80 focus:border-white focus:bg-white/5' 
        : 'border-white/20 hover:border-white/50 focus:border-white focus:bg-white/5'
    }`;

  const labelClasses = "font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-1 block";
  
  const errorLabel = (message?: string) => 
    message ? <span className="font-mono text-[10px] uppercase tracking-wide text-white/70 mt-1 block" aria-live="polite">{message}</span> : null;

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-6 py-12"
      >
        <h2 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] leading-[0.95] text-white tracking-tight flex items-center gap-4">
          <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-white/80" />
          MESSAGE<br/>RECEIVED.
        </h2>
        <p className="text-base md:text-lg text-white/60">
          We'll be in touch within 24 hours.
        </p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            reset();
          }}
          className="font-mono text-sm uppercase tracking-widest text-white/70 hover:text-white underline underline-offset-4 mt-8 transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 w-full max-w-2xl">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]">
        <label htmlFor="_hp">Leave this field empty</label>
        <input type="text" id="_hp" tabIndex={-1} aria-hidden="true" {...register('_hp')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name</label>
          <input 
            id="name"
            type="text" 
            placeholder="John Doe"
            className={inputClasses(!!errors.name)} 
            {...register('name')} 
          />
          {errorLabel(errors.name?.message)}
        </div>
        
        <div>
          <label htmlFor="institution" className={labelClasses}>Company / Organization Name</label>
          <input 
            id="institution"
            type="text" 
            placeholder="E.g. Acme Inc."
            className={inputClasses(!!errors.institution)} 
            {...register('institution')} 
          />
          {errorLabel(errors.institution?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="role" className={labelClasses}>Your Role</label>
          <div className="relative">
            <select 
              id="role"
              className={`${inputClasses(!!errors.role)} appearance-none cursor-pointer`}
              {...register('role')}
            >
              <option value="" disabled className="bg-[#0A0A0F]">Select...</option>
              <option value="Founder / CEO" className="bg-[#0A0A0F]">Founder / CEO</option>
              <option value="Director / Manager" className="bg-[#0A0A0F]">Director / Manager</option>
              <option value="Marketing / Sales" className="bg-[#0A0A0F]">Marketing / Sales</option>
              <option value="Freelancer / Consultant" className="bg-[#0A0A0F]">Freelancer / Consultant</option>
              <option value="Other" className="bg-[#0A0A0F]">Other</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          {errorLabel(errors.role?.message)}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="name@example.com"
            className={inputClasses(!!errors.email)} 
            {...register('email')} 
          />
          {errorLabel(errors.email?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp Number</label>
          <div className="flex gap-4">
            <div className="relative w-[120px] flex-shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className={`${inputClasses(false)} flex items-center justify-between px-2`}
              >
                <span>{selectedCountryCode}</span>
                <ChevronDown className="w-4 h-4 text-white/50" />
              </button>
              
              <AnimatePresence>
                {isCountryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-[#0A0A0F] border border-white/10 shadow-2xl z-50 rounded-lg overflow-hidden flex flex-col"
                  >
                    <div className="p-2 border-b border-white/10 flex items-center gap-2">
                      <Search className="w-4 h-4 text-white/40" />
                      <input 
                        type="text"
                        placeholder="Search country..."
                        className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-white/30"
                        value={countrySearch}
                        onChange={(e) => setCountrySearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <div 
                      className="max-h-[240px] overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y pointer-events-auto"
                      data-lenis-prevent="true"
                    >
                      {filteredCountries.map(country => (
                        <button
                          key={`${country.code}-${country.dial_code}`}
                          type="button"
                          className="w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                          onClick={() => {
                            setValue('countryCode', country.dial_code, { shouldValidate: true });
                            setIsCountryDropdownOpen(false);
                            setCountrySearch('');
                          }}
                        >
                          <span className="truncate pr-2">{country.name}</span>
                          <span className="text-white/40 flex-shrink-0">{country.dial_code}</span>
                        </button>
                      ))}
                      {filteredCountries.length === 0 && (
                        <div className="px-4 py-3 text-sm text-white/40 text-center">
                          No countries found
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <input 
              id="phone"
              type="tel" 
              placeholder="000 000 0000"
              className={`${inputClasses(!!errors.phone)} flex-1`} 
              {...register('phone')} 
            />
          </div>
          {errorLabel(errors.phone?.message)}
        </div>

        <div>
          <label htmlFor="institutionType" className={labelClasses}>Industry / Sector</label>
          <div className="relative">
            <select 
              id="institutionType"
              className={`${inputClasses(!!errors.institutionType)} appearance-none cursor-pointer`}
              {...register('institutionType')}
            >
              <option value="" disabled className="bg-[#0A0A0F]">Select...</option>
              <option value="Technology / Software" className="bg-[#0A0A0F]">Technology / Software</option>
              <option value="E-Commerce / Retail" className="bg-[#0A0A0F]">E-Commerce / Retail</option>
              <option value="Education / Institution" className="bg-[#0A0A0F]">Education / Institution</option>
              <option value="Healthcare / Wellness" className="bg-[#0A0A0F]">Healthcare / Wellness</option>
              <option value="Finance / Consulting" className="bg-[#0A0A0F]">Finance / Consulting</option>
              <option value="Other" className="bg-[#0A0A0F]">Other</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          {errorLabel(errors.institutionType?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="needs" className={labelClasses}>What do you need?</label>
          <div className="relative">
            <select 
              id="needs"
              className={`${inputClasses(!!errors.needs)} appearance-none cursor-pointer`}
              {...register('needs')}
            >
              <option value="" disabled className="bg-[#0A0A0F]">Select...</option>
              <option value="New Website" className="bg-[#0A0A0F]">New Website</option>
              <option value="Redesign Existing Website" className="bg-[#0A0A0F]">Redesign Existing Website</option>
              <option value="Ongoing Maintenance" className="bg-[#0A0A0F]">Ongoing Maintenance</option>
              <option value="Just Exploring" className="bg-[#0A0A0F]">Just Exploring</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          {errorLabel(errors.needs?.message)}
        </div>

        <div>
          <label htmlFor="budget" className={labelClasses}>Estimated Budget</label>
          <div className="relative">
            <select 
              id="budget"
              className={`${inputClasses(false)} appearance-none cursor-pointer`}
              {...register('budget')}
            >
              <option value="" disabled className="bg-[#0A0A0F]">Select...</option>
              <option value="Under ₹30,000" className="bg-[#0A0A0F]">Under ₹30,000</option>
              <option value="₹30,000–₹75,000" className="bg-[#0A0A0F]">₹30,000–₹75,000</option>
              <option value="₹75,000–₹1,50,000" className="bg-[#0A0A0F]">₹75,000–₹1,50,000</option>
              <option value="Above ₹1,50,000" className="bg-[#0A0A0F]">Above ₹1,50,000</option>
              <option value="Not sure yet" className="bg-[#0A0A0F]">Not sure yet</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="project" className={labelClasses}>Tell us about your project</label>
        <textarea 
          id="project"
          placeholder="What are you looking to build, and by when?"
          className={`${inputClasses(!!errors.project)} min-h-32 resize-none`}
          {...register('project')} 
        />
        {errorLabel(errors.project?.message)}
      </div>

      <div>
        <label htmlFor="source" className={labelClasses}>How did you hear about us?</label>
        <div className="relative">
          <select 
            id="source"
            className={`${inputClasses(false)} appearance-none cursor-pointer`}
            {...register('source')}
          >
            <option value="" disabled className="bg-[#0A0A0F]">Select...</option>
            <option value="Referral" className="bg-[#0A0A0F]">Referral</option>
            <option value="Google Search" className="bg-[#0A0A0F]">Google Search</option>
            <option value="Instagram" className="bg-[#0A0A0F]">Instagram</option>
            <option value="Other" className="bg-[#0A0A0F]">Other</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <label htmlFor="agree" className="flex items-center gap-4 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input 
              type="checkbox" 
              id="agree"
              className="peer appearance-none w-4 h-4 border border-white/40 hover:border-white focus:border-white checked:bg-white checked:border-white transition-colors cursor-pointer"
              {...register('agree')}
            />
            <svg 
              className="absolute w-3 h-3 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="font-mono text-xs uppercase tracking-wide text-white/50 group-hover:text-white/80 transition-colors">
            I agree to the <Link to="/privacy" className="underline underline-offset-2 hover:text-white transition-colors">Privacy Policy</Link>
          </span>
        </label>
        {errorLabel(errors.agree?.message)}
      </div>

      <div className="mt-8">
        <HoverBorderGradient 
          as="button"
          type="submit"
          disabled={isSubmitting}
          containerClassName="w-full md:w-auto relative"
          className="px-8 py-4 text-sm uppercase tracking-widest font-mono text-white bg-[#050505] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>INITIATING...</span>
            </span>
          ) : (
            <span>Initiate Contact</span>
          )}
        </HoverBorderGradient>
      </div>
    </form>
  );
}
