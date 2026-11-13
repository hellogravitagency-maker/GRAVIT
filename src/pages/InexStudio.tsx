import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Play, Volume2, VolumeX, X, ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';

interface FilmWork {
  id: string;
  title: string;
  client: string;
  tag: string;
  director: string;
  desc: string;
  specs: string[];
  video: string;
  spanClass: string;
}

const FILMS_DATA: FilmWork[] = [
  {
    id: 'film-1',
    title: 'APEX 992 — The Physics of Apex Velocity',
    client: 'Porsche Motorsport',
    tag: 'Automotive Pursuit Film',
    director: 'Dir. Alex Vance · 2.39:1 Scope',
    desc: 'High-speed camera pursuit on Circuit Paul Ricard. Shot with Russian Arm gyro-stabilised gimbal at 160 km/h with custom anamorphic flare filtration.',
    specs: ['ARRI Alexa 35', 'Cooke Anamorphic /i', '120 FPS High-Speed', 'Russian Arm Pursuit Rig'],
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_092455_089c54f8-3b03-4966-9df1-e9746063d0ef.mp4',
    spanClass: 'col-span-12',
  },
  {
    id: 'film-2',
    title: 'MONOLITH SS26 — Sculptural Cybernetics',
    client: 'Balenciaga Paris',
    tag: 'Haute Couture Lookbook',
    director: 'Dir. Sofia Kova · 65mm Sensor',
    desc: 'Subversive architectural fashion cinema. Shot in an abandoned brutalist quarry in northern Spain with industrial tungsten lighting.',
    specs: ['65mm Large Format', 'Kowa Prominar Anamorphic', 'Infrared Monochromatic Grade'],
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4',
    spanClass: 'col-span-12 lg:col-span-7',
  },
  {
    id: 'film-3',
    title: 'NEO-CHRONO — Tourbillon Micro-Verse',
    client: 'Audemars Piguet',
    tag: 'Macro Horology',
    director: 'Dir. Marcus Thorne',
    desc: 'Ultra-macro probe optics tracking mechanical escapement springs at 1,000 frames per second using high-speed Phantom Flex4K.',
    specs: ['Phantom Flex4K (1000 FPS)', 'Laowa 24mm Probe Lens', 'Bolt X Precision MoCo'],
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_083515_290e5a10-0b95-41af-a5e2-32b6389baa4d.mp4',
    spanClass: 'col-span-12 lg:col-span-5',
  },
  {
    id: 'film-4',
    title: 'CYBERNETIC DUSK — PlayStation 6 Concept',
    client: 'Sony Interactive',
    tag: 'Sci-Fi Brand Anthem',
    director: 'Dir. Kenji Sato',
    desc: 'Hybrid live-action and Unreal Engine 5 LED volume virtual production capturing photorealistic nocturnal Tokyo environments.',
    specs: ['Sony Venice 2 8.6K', 'LED Volume In-Camera VFX', 'Dolby Atmos Mastering'],
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4',
    spanClass: 'col-span-12 lg:col-span-6',
  },
  {
    id: 'film-5',
    title: 'HORIZON ZERO — 2000HP Silent Storm',
    client: 'Rimac Automobili',
    tag: 'Hypercar World Premiere',
    director: 'Dir. Erik Lind',
    desc: 'Coastal Norwegian mountain pass pursuit film tracking the Nevera hypercar at dawn. Raw tactile engine sound design in Dolby 7.1.4.',
    specs: ['RED V-Raptor XL 8K', 'Atlas Orion Anamorphic', 'Heavy-Lift Cine-Drone'],
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4',
    spanClass: 'col-span-12 lg:col-span-6',
  },
];

const CAPABILITIES = [
  {
    num: '01 / COMMERCIAL',
    title: 'Narrative & Commercial Films',
    desc: 'High-concept commercial direction and brand campaigns engineered with emotional gravitas, razor-sharp editorial pacing, and bespoke musical scores.',
    items: ['Global Brand Campaigns', 'Automotive Commercials', 'Haute Couture Lookbooks', 'Founder & Tech Anthems'],
  },
  {
    num: '02 / OPTICS',
    title: 'Anamorphic & Specialty Glass',
    desc: 'Uncompromising optical character. We shoot exclusively on Cooke, Atlas, and vintage Kowa anamorphic lenses delivering organic horizontal flares and oval bokeh.',
    items: ['Cooke /i Anamorphic T2.3', 'Atlas Orion 2x Full Frame', 'Laowa 24mm Periscope Macro', 'Schneider True-Streak Filtration'],
  },
  {
    num: '03 / PRECISION',
    title: 'Bolt X Motion Control (MoCo)',
    desc: 'Sub-millimeter camera robotics operating at up to 9.6 meters per second for impossible macro product fly-throughs, speed ramps, and seamless CGI integration.',
    items: ['MRMC Bolt X High-Speed Rig', 'Phantom Flex4K (1,000 FPS)', 'Russian Arm Pursuit Vehicles', 'Freefly MōVI Carbon 5-Axis'],
  },
  {
    num: '04 / POST & AUDIO',
    title: 'ACES Color & Dolby Atmos',
    desc: 'In-house Baselight and DaVinci Resolve color grading suites equipped with Barco 4K DCI laser projection and certified Dolby Atmos 7.1.4 spatial audio mastering.',
    items: ['ACES Cinema Color Pipeline', '4K DCI Laser Master Suite', 'Dolby Atmos Spatial Audio', 'Lossless AVIF / HDR Web Delivery'],
  },
];

const FLEET_DATA = [
  {
    name: 'ARRI ALEXA 35',
    sub: 'A-Camera Flagship',
    sensor: 'Super 35 4.6K ALEV IV / ARRIRAW',
    fps: '120 FPS Native',
    optics: 'Cooke Anamorphic /i Full Frame Plus',
  },
  {
    name: 'SONY VENICE 2',
    sub: 'Large Format Low-Light',
    sensor: '8.6K 3:2 Full Frame / X-OCN XT',
    fps: '90 FPS @ 8.2K',
    optics: 'ARRI Master Primes T1.3',
  },
  {
    name: 'VISION RESEARCH PHANTOM FLEX4K',
    sub: 'High-Speed Fluid Stills',
    sensor: 'Super 35 4K CMOS / Cine RAW',
    fps: '1,000 FPS @ 4K',
    optics: 'Laowa Cine Probe 24mm T14 Macro',
  },
  {
    name: 'RED V-RAPTOR XL [X]',
    sub: 'Global Shutter Cinema',
    sensor: '8K VV Global Shutter / REDCODE RAW',
    fps: '120 FPS @ 8K',
    optics: 'Atlas Orion Silver Edition Anamorphic',
  },
  {
    name: 'MRMC BOLT X CINEBOT',
    sub: 'High-Speed Robotic Arm',
    sensor: 'Flair Precision Tracking / Track Mount',
    fps: '9.6 m/s Arm Speed',
    optics: 'Target Tracking Optical Control',
  },
];

const MARQUEE_ITEMS = [
  'PORSCHE MOTORSPORT',
  'BALENCIAGA COUTURE',
  'CANNES LIONS GOLD 2025',
  'AUDEMARS PIGUET',
  'D&AD YELLOW PENCIL',
  'SONY INTERACTIVE',
  'CICLOPE GRAND PRIX CINEMATOGRAPHY',
  'RIMAC AUTOMOBILI',
];

export default function InexStudio() {
  const [timecode, setTimecode] = useState('00:00:24:18');
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [activeModalVideo, setActiveModalVideo] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // 1. SMPTE Timecode Counter (24fps precision)
  useEffect(() => {
    let f = 18;
    let s = 24;
    let m = 0;
    let h = 0;

    const interval = setInterval(() => {
      f++;
      if (f >= 24) {
        f = 0;
        s++;
        if (s >= 60) {
          s = 0;
          m++;
          if (m >= 60) {
            m = 0;
            h++;
          }
        }
      }
      const pad = (n: number) => String(n).padStart(2, '0');
      setTimecode(`${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  // 2. Audio toggle handler
  const handleToggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioActive) {
      audioRef.current.pause();
      setIsAudioActive(false);
    } else {
      audioRef.current.play().then(() => {
        setIsAudioActive(true);
      }).catch(() => {
        setIsAudioActive(false);
      });
    }
  };

  // 3. Modal close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 4. Viewport IntersectionObserver to pause off-screen card videos
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.15 });

    videoRefs.current.forEach((vid) => {
      if (vid) observer.observe(vid);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#030305] text-[#F8FAFC] font-sans selection:bg-[#FF2A2A] selection:text-black">
      <SEO
        title="INEX Studio — Commercial Videography & Cinema Motion Atelier"
        description="Official creative photography, commercial campaigns, and cinematic reels studio. Red, Silver & Black aesthetic powered by tactile studio visuals."
        path="/inex"
      />

      {/* Ambient Audio Element */}
      <audio ref={audioRef} loop preload="none">
        <source src="https://assets.mixkit.co/active_storage/sfx/2874/2874-preview.mp3" type="audio/mpeg" />
      </audio>

      {/* Hardware-accelerated Film Grain Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.02]"
        style={{
          transform: 'translateZ(0)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
        aria-hidden="true"
      />

      {/* ========================================================================
          01. CINEMA HUD NAVIGATION
          ======================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 sm:px-8 py-4 bg-gradient-to-b from-[#030305]/95 via-[#030305]/80 to-transparent backdrop-blur-md border-b border-white/[0.06]">
        <div className="flex items-center gap-4">
          <Link to="/inex" className="inline-flex items-center gap-1.5 font-black text-lg tracking-tight uppercase text-[#F8FAFC]">
            INEX<span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-pulse" />CINEMA
          </Link>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-[0.18em] text-[#94A3B8] uppercase pl-3 border-l border-white/15">
            Commercial Motion Atelier
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] tracking-[0.12em] text-[#94A3B8] uppercase">
          <button onClick={() => scrollToSection('films')} className="hover:text-white transition-colors cursor-pointer">
            Selected Films
          </button>
          <button onClick={() => scrollToSection('capabilities')} className="hover:text-white transition-colors cursor-pointer">
            Production
          </button>
          <button onClick={() => scrollToSection('fleet')} className="hover:text-white transition-colors cursor-pointer">
            Camera & Optics
          </button>
          <button onClick={() => scrollToSection('booking')} className="hover:text-white transition-colors cursor-pointer">
            Inquire
          </button>
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Running SMPTE Timecode */}
          <div className="inline-flex items-center gap-2 bg-black/70 border border-[#FF2A2A]/40 rounded-full px-3 py-1 font-mono text-[11px] text-[#F8FAFC] tabular-nums tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#FF2A2A] shadow-[0_0_8px_#FF2A2A] animate-pulse" />
            <span>{timecode}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleAudio}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider transition-colors border cursor-pointer ${
              isAudioActive
                ? 'bg-[#FF2A2A] border-[#FF2A2A] text-white'
                : 'bg-white/5 border-white/15 text-[#F8FAFC] hover:bg-white/10 hover:border-white/30'
            }`}
            aria-label="Toggle cinematic audio"
          >
            {isAudioActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isAudioActive ? 'Audio On' : 'Sound Off'}</span>
          </button>

          {/* Return to GRAVIT */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[11px] tracking-wide bg-white/8 border border-white/15 text-[#F8FAFC] hover:bg-white hover:text-black transition-colors"
            title="Return to GRAVIT main site"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>GRAVIT</span>
          </Link>
        </div>
      </header>

      {/* ========================================================================
          02. HERO SECTION — DIRECTING THE UNSEEN
          ======================================================================== */}
      <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-end p-8 sm:p-12 pb-16 bg-[#030305]">
        {/* Viewfinder Crosshairs framing the viewport */}
        <div className="absolute top-20 left-8 sm:left-12 w-6 h-6 border-t-2 border-l-2 border-[#FF2A2A] opacity-80 pointer-events-none z-20" />
        <div className="absolute top-20 right-8 sm:right-12 w-6 h-6 border-t-2 border-r-2 border-[#FF2A2A] opacity-80 pointer-events-none z-20" />
        <div className="absolute bottom-8 left-8 sm:left-12 w-6 h-6 border-b-2 border-l-2 border-[#FF2A2A] opacity-80 pointer-events-none z-20" />
        <div className="absolute bottom-8 right-8 sm:right-12 w-6 h-6 border-b-2 border-r-2 border-[#FF2A2A] opacity-80 pointer-events-none z-20" />

        {/* Fullscreen Looping Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
            className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.75] saturate-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(3,3,5,0.7)_70%,rgba(3,3,5,0.95)_100%)] pointer-events-none" />
        </div>

        {/* Hero Bottom Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col gap-6">
          {/* Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#94A3B8] tracking-[0.14em] uppercase border-b border-white/10 pb-3.5">
            <div><span className="text-[#FF2A2A] font-bold">FPS:</span> 24.000 HIGH-SPEED</div>
            <div><span className="text-[#FF2A2A] font-bold">OPTICS:</span> COOKE ANAMORPHIC /I FULL FRAME PLUS</div>
            <div><span className="text-[#FF2A2A] font-bold">COLOR:</span> ACEScc CINEMA HDR</div>
            <div><span className="text-[#FF2A2A] font-bold">STAGE:</span> PARIS / NYC / BERLIN</div>
          </div>

          {/* Grand Headline */}
          <h1 className="font-display font-black text-[clamp(2.8rem,9vw,8rem)] leading-[0.88] uppercase tracking-[-0.03em] text-[#F8FAFC]">
            <span className="bg-gradient-to-b from-white to-[#A0A5B5] bg-clip-text text-transparent">DIRECTING</span><br />
            THE <span className="font-serif italic font-normal text-[#FF2A2A] lowercase tracking-normal">unseen.</span>
          </h1>

          {/* Narrative & Actions */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <p className="max-w-[540px] text-[clamp(14px,1.3vw,17px)] leading-relaxed text-[#94A3B8] font-light">
              <strong className="text-white font-semibold">INEX STUDIO</strong> is an independent commercial videography and motion picture atelier. We direct high-octane automotive commercials, haute-couture fashion films, and flagship brand cinema engineered with precision anamorphic optics and sub-second digital delivery.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => setActiveModalVideo('https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4')}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF2A2A] hover:bg-[#FF4D4D] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_24px_rgba(255,42,42,0.35)] hover:shadow-[0_0_36px_rgba(255,42,42,0.55)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play Showreel</span>
              </button>

              <button
                onClick={() => scrollToSection('films')}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/12 border border-white/15 hover:border-white/40 text-white font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>View Commercials</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================
          03. CLIENTS & AWARDS MARQUEE
          ======================================================================== */}
      <div className="w-full bg-[#07070B] border-y border-white/[0.06] py-4.5 overflow-hidden whitespace-nowrap relative">
        <div className="inline-flex items-center gap-12 animate-[marquee_36s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={idx} className="font-display font-extrabold text-sm tracking-[0.2em] uppercase text-[#94A3B8] inline-flex items-center gap-3">
              {item} <span className="w-1.5 h-1.5 rounded-full bg-[#FF2A2A]" />
            </span>
          ))}
        </div>
      </div>

      {/* ========================================================================
          04. SELECTED COMMERCIAL FILMS
          ======================================================================== */}
      <section id="films" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#030305]">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#FF2A2A] mb-3">
            01 / REELS & ARCHIVE
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight uppercase leading-none text-white mb-4">
            Selected Commercial Works
          </h2>
          <p className="text-[#94A3B8] text-[clamp(15px,1.2vw,18px)] max-w-[620px] font-light mb-14">
            Cinematic commercials, automotive pursuit films, and high-fashion visual narratives directed for global cultural leaders.
          </p>

          <div className="grid grid-cols-12 gap-8">
            {FILMS_DATA.map((film, idx) => (
              <div
                key={film.id}
                onClick={() => setActiveModalVideo(film.video)}
                className={`${film.spanClass} group relative bg-[#13141F] border border-white/10 hover:border-[#FF2A2A]/50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.6),0_0_25px_rgba(255,42,42,0.12)]`}
              >
                {/* Media Container */}
                <div className="relative w-full aspect-video bg-black overflow-hidden">
                  <video
                    ref={(el) => { videoRefs.current[idx] = el; }}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    src={film.video}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F17]/90 via-[#0E0F17]/20 to-transparent pointer-events-none" />
                  
                  {/* Badge & Play Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="bg-black/70 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full font-mono text-[10px] tracking-wider text-white uppercase">
                      {film.tag}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-black/70 group-hover:bg-[#FF2A2A] border border-white/20 group-hover:border-[#FF2A2A] backdrop-blur-md flex items-center justify-center text-white transition-all transform group-hover:scale-105">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 sm:p-7 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[11px] text-[#94A3B8] tracking-wider uppercase mb-1.5">
                      <span className="text-[#FF2A2A] font-bold">{film.client}</span>
                      <span>{film.director}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-white mb-2">
                      {film.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                      {film.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {film.specs.map((spec, sIdx) => (
                      <span key={sIdx} className="font-mono text-[10px] tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#94A3B8]">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          05. PRODUCTION CAPABILITIES & OPTICS ATELIER
          ======================================================================== */}
      <section id="capabilities" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#07070B] border-y border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#FF2A2A] mb-3">
            02 / PRODUCTION DISCIPLINES
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight uppercase leading-none text-white mb-4">
            Full-Spectrum Cinema Engineering
          </h2>
          <p className="text-[#94A3B8] text-[clamp(15px,1.2vw,18px)] max-w-[620px] font-light mb-14">
            From treatment and storyboard through high-speed pursuit filming, virtual production stages, and in-house ACES color science.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#13141F] border border-white/10 hover:border-[#FF2A2A]/40 rounded-2xl p-7 flex flex-col justify-between gap-8 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF2A2A] tracking-widest">{cap.num}</span>
                  <h3 className="font-display font-extrabold text-xl uppercase tracking-tight text-white my-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed font-light">
                    {cap.desc}
                  </p>
                </div>

                <ul className="list-none font-mono text-[11px] text-[#94A3B8] border-t border-white/10 pt-4 flex flex-col gap-2">
                  {cap.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2">
                      <span className="text-[#FF2A2A] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          06. CAMERA & OPTICS FLEET
          ======================================================================== */}
      <section id="fleet" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#030305]">
        <div className="max-w-[1400px] mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#FF2A2A] mb-3">
            03 / STUDIO FLEET
          </div>
          <h2 className="font-display font-extrabold text-[clamp(2.2rem,5vw,4.2rem)] tracking-tight uppercase leading-none text-white mb-4">
            Studio Arsenal & Hardware Specs
          </h2>
          <p className="text-[#94A3B8] text-[clamp(15px,1.2vw,18px)] max-w-[620px] font-light mb-12">
            Owned cinema inventory maintained to Hollywood production standards in our Paris and Berlin ateliers.
          </p>

          <div className="bg-[#13141F] border border-white/10 rounded-2xl overflow-hidden">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-4 px-7 py-4 bg-white/[0.03] border-b border-white/10 font-mono text-[11px] uppercase tracking-wider text-[#94A3B8]">
              <span>Cinema Camera System</span>
              <span>Sensor / Recording</span>
              <span>Max Frame Rate</span>
              <span>Primary Optical Pairing</span>
            </div>

            {/* Rows */}
            {FLEET_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 p-6 md:px-7 md:py-5 border-b border-white/[0.06] last:border-b-0 font-mono text-xs hover:bg-white/[0.02] transition-colors items-center"
              >
                <div>
                  <div className="font-display font-bold text-base text-white">{row.name}</div>
                  <div className="text-[11px] text-[#94A3B8]">{row.sub}</div>
                </div>
                <div className="text-[#E2E8F0]">{row.sensor}</div>
                <div className="text-[#FF2A2A] font-bold">{row.fps}</div>
                <div className="text-[#94A3B8]">{row.optics}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================
          07. BOOKING DESK & CONTACT FOOTER
          ======================================================================== */}
      <section id="booking" className="py-24 sm:py-32 px-6 sm:px-8 bg-[#07070B] border-t border-white/10">
        <div className="max-w-[1000px] mx-auto bg-gradient-to-b from-[#10111A] to-[#08090D] border border-[#FF2A2A]/30 rounded-3xl p-10 sm:p-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(255,42,42,0.15)] relative overflow-hidden">
          <div className="inline-flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#FF2A2A] mb-4">
            CALL SHEET & COMMERCIAL ENQUIRIES
          </div>
          <h2 className="font-display font-black text-[clamp(2rem,4.5vw,3.6rem)] tracking-tight uppercase text-white leading-tight mb-4">
            Commission a Cinema Project
          </h2>
          <p className="text-[#94A3B8] text-[clamp(14px,1.2vw,17px)] max-w-[580px] mx-auto font-light leading-relaxed mb-8">
            Currently booking commercial directing slots, automotive commercials, and brand films for Q3/Q4. Our executive producers respond within 12 hours with treatment availability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:cinema@inex-studio.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF2A2A] hover:bg-[#FF4D4D] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_24px_rgba(255,42,42,0.35)] hover:shadow-[0_0_36px_rgba(255,42,42,0.55)] transition-all transform hover:-translate-y-0.5"
            >
              <span>Direct Commercial Desk</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/12 border border-white/15 hover:border-white/40 text-white font-semibold text-xs uppercase tracking-widest transition-all"
            >
              <span>Return to GRAVIT</span>
            </Link>
          </div>
        </div>

        <footer className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#94A3B8]">
          <div>
            &copy; {new Date().getFullYear()} INEX STUDIO CINEMA S.A.S. Paris · NYC · Berlin. All rights reserved.
          </div>
          <div>
            Official Motion Picture & Commercial Production Atelier for{' '}
            <Link to="/" className="text-white underline hover:text-[#FF4D4D] transition-colors">
              GRAVIT
            </Link>
            .
          </div>
        </footer>
      </section>

      {/* ========================================================================
          08. FULLSCREEN MODAL SHOWREEL PLAYER
          ======================================================================== */}
      {activeModalVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Commercial Showreel"
        >
          <div
            className="relative w-full max-w-[1200px] aspect-video bg-black border border-white/20 rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_50px_rgba(255,42,42,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-[#FF2A2A] border border-white/20 hover:border-[#FF2A2A] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Showreel"
            >
              <X className="w-5 h-5" />
            </button>

            <video
              autoPlay
              controls
              playsInline
              src={activeModalVideo}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:px-6 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between font-mono text-[11px] text-white pointer-events-none">
              <span>INEX SHOWREEL 2026 · 4K MASTER</span>
              <span className="hidden sm:inline">ACEScc · ARRI 35 · COOKE ANAMORPHIC</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
