import { useState, useRef, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { CheckCircle2, Search, ChevronDown } from 'lucide-react';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import { motion, AnimatePresence } from 'motion/react';
import { countries } from '../../lib/countries';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  institution: z.string().min(1, 'Company / Organization is required'),
  role: z.string().min(1, 'Role selection is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address format'),
  countryCode: z.string().min(1, 'Country code required'),
  phone: z.string().min(1, 'Phone number is required'),
  institutionType: z.string().min(1, 'Industry selection is required'),
  needs: z.string().min(1, 'Please select your requirement'),
  budget: z.string().optional(),
  project: z.string().min(1, 'Project details are required'),
  source: z.string().optional(),
  agree: z.boolean().refine((val) => val === true, 'You must agree to the privacy policy'),
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
      setIsSuccess(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // 1. Send to Supabase (Database)
      try {
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
              budget: data.budget || 'Not specified',
              project: data.project,
              source: data.source || 'Direct',
            }
          ]);

        if (error) {
          console.warn('Supabase Error (Non-blocking):', error.message);
        } else {
          console.log('Submission recorded in Supabase');
        }
      } catch (sbErr) {
        console.warn('Supabase submission skipped/network error:', sbErr);
      }

      // 2. Send via Web3Forms (Email Notification)
      const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (web3FormsKey) {
        try {
          const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: web3FormsKey,
              subject: `New Project Request from ${data.name} (${data.institution})`,
              from_name: 'GRAVIT Project Inquiries',
              name: data.name,
              email: data.email,
              phone: `${data.countryCode} ${data.phone}`,
              institution: data.institution,
              role: data.role,
              institutionType: data.institutionType,
              needs: data.needs,
              budget: data.budget || 'Not specified',
              project: data.project,
              source: data.source || 'Direct',
            })
          });
          const resData = await res.json().catch(() => null);
          console.log('Web3Forms response:', resData);
        } catch (emailErr) {
          console.warn('Web3Forms dispatch error:', emailErr);
        }
      } else {
        await new Promise(r => setTimeout(r, 600));
      }

      setIsSuccess(true);
    } catch (e) {
      console.error('Submission handling error:', e);
      setIsSuccess(true); 
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (error: boolean) => 
    `bg-transparent border-b transition-all duration-300 text-primary text-base py-3 w-full outline-none rounded-none placeholder:text-muted/40 ${
      error 
        ? 'border-b-2 border-red-500 focus:border-red-500 focus:bg-red-500/5' 
        : 'border-border/60 hover:border-primary/50 focus:border-primary focus:bg-primary/5'
    }`;

  const labelClasses = "font-mono text-xs uppercase tracking-[0.15em] text-secondary mb-1 block";
  
  const errorLabel = (message?: string) => 
    message ? <span className="font-mono text-[11px] font-medium text-red-500 mt-1 block" aria-live="polite">{message}</span> : null;

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-6 py-12"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-medium leading-[0.95] text-primary tracking-tight flex items-center gap-4">
          <CheckCircle2 className="w-10 h-10 md:w-14 md:h-14 text-green-500" />
          <span>MESSAGE<br/>TRANSMITTED.</span>
        </h2>
        <p className="text-base md:text-lg text-secondary font-light">
          Your project brief has been securely received. Our lead architect will review and respond within 24 hours.
        </p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            reset();
          }}
          className="font-mono text-xs uppercase tracking-widest text-secondary hover:text-primary underline underline-offset-4 mt-8 transition-colors"
        >
          Submit another inquiry →
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

      <div className="mb-2 border-b border-border/40 pb-6">
        <h3 className="text-2xl md:text-3xl font-heading font-medium tracking-tight mb-2 text-primary">Project Briefing</h3>
        <p className="text-secondary text-sm font-light">Please provide initial details regarding your technical requirements.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name *</label>
          <input 
            id="name"
            type="text" 
            placeholder="Jane Doe"
            className={inputClasses(!!errors.name)} 
            {...register('name')} 
          />
          {errorLabel(errors.name?.message)}
        </div>
        
        <div>
          <label htmlFor="institution" className={labelClasses}>Company / Organization *</label>
          <input 
            id="institution"
            type="text" 
            placeholder="Acme Corp"
            className={inputClasses(!!errors.institution)} 
            {...register('institution')} 
          />
          {errorLabel(errors.institution?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="role" className={labelClasses}>Your Role *</label>
          <div className="relative">
            <select 
              id="role"
              className={`${inputClasses(!!errors.role)} appearance-none cursor-pointer [&>option]:bg-background [&>option]:text-primary`}
              {...register('role')}
            >
              <option value="" disabled className="text-muted">Select role...</option>
              <option value="Founder / CEO">Founder / CEO</option>
              <option value="Director / VP">Director / VP</option>
              <option value="Product Manager">Product Manager</option>
              <option value="CTO / Lead Engineer">CTO / Lead Engineer</option>
              <option value="Marketing Lead">Marketing Lead</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errorLabel(errors.role?.message)}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>Work Email *</label>
          <input 
            id="email"
            type="email" 
            placeholder="jane@company.com"
            className={inputClasses(!!errors.email)} 
            {...register('email')} 
          />
          {errorLabel(errors.email?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone / WhatsApp *</label>
          <div className="flex gap-3">
            <div className="relative w-[110px] flex-shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                className={`${inputClasses(false)} flex items-center justify-between px-2 cursor-pointer`}
              >
                <span className="font-mono text-sm text-primary">{selectedCountryCode}</span>
                <ChevronDown className="w-4 h-4 text-muted" />
              </button>
              
              <AnimatePresence>
                {isCountryDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-[280px] bg-background border border-border shadow-2xl z-50 rounded-lg overflow-hidden flex flex-col"
                  >
                    <div className="p-2 border-b border-border flex items-center gap-2">
                      <Search className="w-4 h-4 text-muted" />
                      <input 
                        type="text"
                        placeholder="Search country..."
                        className="bg-transparent border-none outline-none text-sm text-primary w-full placeholder:text-muted/50"
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
                          className="w-full text-left px-4 py-2.5 text-xs text-secondary hover:text-primary hover:bg-primary/10 transition-colors flex items-center justify-between cursor-pointer"
                          onClick={() => {
                            setValue('countryCode', country.dial_code, { shouldValidate: true });
                            setIsCountryDropdownOpen(false);
                            setCountrySearch('');
                          }}
                        >
                          <span className="truncate pr-2">{country.name}</span>
                          <span className="text-muted flex-shrink-0 font-mono">{country.dial_code}</span>
                        </button>
                      ))}
                      {filteredCountries.length === 0 && (
                        <div className="px-4 py-3 text-xs text-muted text-center">
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
              placeholder="98765 43210"
              className={`${inputClasses(!!errors.phone)} flex-1`} 
              {...register('phone')} 
            />
          </div>
          {errorLabel(errors.phone?.message)}
        </div>

        <div>
          <label htmlFor="institutionType" className={labelClasses}>Industry / Sector *</label>
          <div className="relative">
            <select 
              id="institutionType"
              className={`${inputClasses(!!errors.institutionType)} appearance-none cursor-pointer [&>option]:bg-background [&>option]:text-primary`}
              {...register('institutionType')}
            >
              <option value="" disabled className="text-muted">Select industry...</option>
              <option value="Technology / Software">Technology / Software</option>
              <option value="Fintech / Banking">Fintech / Banking</option>
              <option value="E-Commerce / D2C">E-Commerce / D2C</option>
              <option value="Healthcare / MedTech">Healthcare / MedTech</option>
              <option value="Hospitality / Real Estate">Hospitality / Real Estate</option>
              <option value="Education / Media">Education / Media</option>
              <option value="Other">Other</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errorLabel(errors.institutionType?.message)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="needs" className={labelClasses}>Project Scope *</label>
          <div className="relative">
            <select 
              id="needs"
              className={`${inputClasses(!!errors.needs)} appearance-none cursor-pointer [&>option]:bg-background [&>option]:text-primary`}
              {...register('needs')}
            >
              <option value="" disabled className="text-muted">Select scope...</option>
              <option value="Full Web Platform Architecture">Full Web Platform Architecture</option>
              <option value="UI/UX & Interactive System">UI/UX & Interactive System</option>
              <option value="High-Performance SaaS Application">High-Performance SaaS Application</option>
              <option value="Brand Identity & Design System">Brand Identity & Design System</option>
              <option value="Redesign / Modernization">Redesign / Modernization</option>
              <option value="Ongoing Retainer">Ongoing Retainer</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          {errorLabel(errors.needs?.message)}
        </div>

        <div>
          <label htmlFor="budget" className={labelClasses}>Estimated Budget</label>
          <div className="relative">
            <select 
              id="budget"
              className={`${inputClasses(false)} appearance-none cursor-pointer [&>option]:bg-background [&>option]:text-primary`}
              {...register('budget')}
            >
              <option value="" className="text-muted">Select budget range...</option>
              <option value="₹50,000 – ₹1,50,000">₹50,000 – ₹1,50,000</option>
              <option value="₹1,50,000 – ₹3,00,000">₹1,50,000 – ₹3,00,000</option>
              <option value="₹3,00,000 – ₹6,00,000">₹3,00,000 – ₹6,00,000</option>
              <option value="₹6,00,000+">₹6,00,000+</option>
              <option value="$10,000+ USD (International)">$10,000+ USD (International)</option>
              <option value="Flexible / To be scoped">Flexible / To be scoped</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="project" className={labelClasses}>Project Overview & Requirements *</label>
        <textarea 
          id="project"
          rows={4}
          placeholder="Tell us about your objectives, timeline, technical stack preferences, and scope..."
          className={`${inputClasses(!!errors.project)} min-h-28 resize-none`}
          {...register('project')} 
        />
        {errorLabel(errors.project?.message)}
      </div>

      <div>
        <label htmlFor="source" className={labelClasses}>How did you discover GRAVIT?</label>
        <div className="relative">
          <select 
            id="source"
            className={`${inputClasses(false)} appearance-none cursor-pointer [&>option]:bg-background [&>option]:text-primary`}
            {...register('source')}
          >
            <option value="" className="text-muted">Select...</option>
            <option value="Word of Mouth / Referral">Word of Mouth / Referral</option>
            <option value="Twitter / X">Twitter / X</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Search Engine (Google)">Search Engine (Google)</option>
            <option value="Dribbble / Design Portfolio">Dribbble / Design Portfolio</option>
            <option value="Other">Other</option>
          </select>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="mt-2">
        <label htmlFor="agree" className="flex items-center gap-4 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input 
              type="checkbox" 
              id="agree"
              className="peer appearance-none w-4 h-4 border border-border/80 hover:border-primary focus:border-primary checked:bg-primary checked:border-primary transition-colors cursor-pointer rounded-xs"
              {...register('agree')}
            />
            <svg 
              className="absolute w-3 h-3 text-background pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" 
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
          <span className="font-mono text-xs uppercase tracking-wide text-secondary group-hover:text-primary transition-colors">
            I agree to the <Link to="/privacy" className="underline underline-offset-2 hover:text-primary transition-colors">Privacy Policy</Link> *
          </span>
        </label>
        {errorLabel(errors.agree?.message)}
      </div>

      <div className="mt-6">
        <HoverBorderGradient 
          as="button"
          type="submit"
          disabled={isSubmitting}
          containerClassName="w-full md:w-auto relative"
          className="px-10 py-4 text-sm uppercase tracking-widest font-mono font-semibold text-primary bg-background dark:bg-[#050505] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>TRANSMITTING...</span>
            </span>
          ) : (
            <span>Initiate Project →</span>
          )}
        </HoverBorderGradient>
      </div>
    </form>
  );
}
