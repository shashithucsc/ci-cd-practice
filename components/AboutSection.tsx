'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { HiBriefcase, HiCheckCircle, HiClock, HiTerminal, HiArrowNarrowRight, HiSparkles } from 'react-icons/hi';
import Link from 'next/link';

// --- Configuration ---
const ASE_START_DATE = '2026-05-01T09:00:00'; // Current Role Start Date

const experiencePoints = [
  "Worked on real-world client projects across frontend and backend development, while supporting UI/UX implementation, manual testing, feature validation, and overall quality assurance.",
  "Built web interfaces using <span class='text-indigo-400 font-semibold'>Next.js</span> and implemented interactive 3D features with <span class='text-pink-400 font-semibold'>Three.js</span>.",
  "Developed workflow automations using <span class='text-amber-400 font-semibold'>n8n</span> to support internal processes.",
  "Assisted with backend integrations using <span class='text-red-400 font-semibold'>Laravel</span> and Filament.",
  "Contributed to an AI influencer creator project using <span class='text-indigo-400 font-semibold'>Flux.2</span>  and <span class='text-indigo-400 font-semibold'>Kling 3.0</span> in ComfyUI Cloud by creating datasets from image references, training a <span class='text-pink-400 font-semibold'>LoRA</span> for identity consistency, and integrating it into ComfyUI through <span class='text-amber-400 font-semibold'>Hugging Face</span>."
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Timer Logic (Tracking active Associate Software Engineer tenure)
  useEffect(() => {
    const timer = setInterval(() => {
      const start = new Date(ASE_START_DATE).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeElapsed({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" ref={ref} className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-gray-950" onMouseMove={handleMouseMove}>
      
      {/* --- Ambient Background Effects --- */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        backgroundSize: '100px 100px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="relative px-4 sm:px-6 py-2 rounded-full border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm text-xs sm:text-sm font-semibold text-indigo-400 inline-block">
              Get To Know Me
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
        </motion.div>

        {/* --- Bio Section --- */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm"
          >
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                Hello! I&apos;m <span className="text-indigo-400 font-bold">Shashith Rashmika</span>
              </p>
              <p>
                I&apos;m a passionate <span className="text-white font-semibold">BSc. Information Systems undergraduate at UCSC</span> with a strong focus on full-stack development. I thrive on building innovative web applications that solve real-world problems.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Educational Notes Section --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
            <Link href="/notes" className="group block relative cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative rounded-2xl border border-white/10 bg-[#050505] p-1 overflow-hidden">
                    <div className="relative rounded-xl bg-grid-white/[0.02] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1 flex items-start gap-4">
                            <div className="shrink-0 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300">
                                <HiTerminal className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                   My Educational Notes
                                    <HiSparkles className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                   I have shared a collection of my educational notes here. <span className="text-white">Anyone who finds them helpful is welcome to refer to them.</span>
                                </p>
                            </div>
                        </div>
                        <div className="shrink-0 w-full md:w-auto">
                            <div className="flex items-center justify-between md:justify-center gap-3 px-5 py-3 rounded-lg bg-white/5 border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30 transition-all duration-300">
                                <code className="font-mono text-sm text-gray-300">
                                    <span className="text-pink-500 mr-2">$</span>
                                    cd /notes && open
                                </code>
                                <HiArrowNarrowRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent bg-[length:100%_4px] bg-repeat-y opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
            </Link>
        </motion.div>

        {/* --- Professional Experience Timeline --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
            <div className="flex items-center justify-center gap-3 mb-8">
                <HiBriefcase className="w-6 h-6 text-indigo-400" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Professional Experience</h3>
            </div>

            <div className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-10 group-hover:opacity-30 blur transition-opacity duration-500" />
                <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 md:p-10 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-10 md:gap-12">
                        
                        {/* Left Column: Company & Timeline */}
                        <div className="md:w-[42%] flex flex-col shrink-0">
                            
                            {/* Company Header */}
                            <div className="mb-8">
                                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-1">
                                    White Star Web Solutions
                                </h4>
                                <p className="text-sm text-gray-500 font-medium">(ArtsLab Creatives)</p>
                            </div>

                            {/* Role Timeline Stepper */}
                            <div className="relative border-l border-white/10 ml-3 pl-6 space-y-10">
                                
                                {/* Current Role (Top) */}
                                <div className="relative">
                                    {/* Active Glowing Node */}
                                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] border-2 border-[#0A0A0A]" />
                                    
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                                        Current Role
                                    </div>
                                    <h5 className="text-lg font-bold text-white mb-1">Associate Software Engineer</h5>
                                    <p className="text-sm text-gray-400 mb-3">Since May 1, 2026</p>
                                    
                                    {/* Active Live Timer */}
                                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/5 backdrop-blur-md">
                                        <div className="flex items-center gap-2 mb-2.5 text-gray-400 text-[10px] uppercase tracking-widest font-semibold">
                                            <HiClock className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                                            Active Tenure
                                        </div>
                                        <div className="grid grid-cols-4 gap-2 text-center">
                                            {[
                                                { val: timeElapsed.days, label: 'Days' },
                                                { val: timeElapsed.hours, label: 'Hrs' },
                                                { val: timeElapsed.minutes, label: 'Mins' },
                                                { val: timeElapsed.seconds, label: 'Sec' }
                                            ].map((t, i) => (
                                                <div key={i} className="flex flex-col">
                                                    <span className="text-base font-bold text-white font-mono">{t.val.toString().padStart(2, '0')}</span>
                                                    <span className="text-[9px] text-gray-500 tracking-wider">{t.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Completed Achievement Role (Bottom) */}
                                <div className="relative group/internship">
                                    {/* Completed Achievement Node */}
                                    <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-indigo-500 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                                    </div>
                                    
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest mb-2">
                                        <HiSparkles className="w-3 h-3 text-indigo-400" />
                                        Completed
                                    </div>
                                    <h5 className="text-base font-bold text-gray-200 mb-1">Full Stack Developer Intern</h5>
                                    <p className="text-sm text-gray-500 mb-3">Oct 20, 2025 – Apr 30, 2026</p>
                                    
                                    {/* Achievement Progress Card */}
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/[0.05] to-purple-500/[0.02] border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
                                        <div className="flex justify-between items-center mb-2.5">
                                            <div className="flex items-center gap-2 text-indigo-300 text-[10px] uppercase tracking-widest font-bold">
                                                <HiCheckCircle className="w-3.5 h-3.5" />
                                                6-Month Program
                                            </div>
                                            <span className="text-indigo-400 font-mono text-[10px] font-bold">100%</span>
                                        </div>
                                        
                                        {/* Filled Progress Bar */}
                                        <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mb-3">
                                            <div className="w-full h-full bg-purple-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                                        </div>
                                        
                                       
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Column: Experience Points */}
                        <div className="md:w-[58%] md:pt-4">
                            <ul className="space-y-4">
                                {experiencePoints.map((point, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                        className="flex gap-4 group/item"
                                    >
                                        <div className="mt-1 shrink-0">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover/item:bg-indigo-500/20 transition-colors border border-indigo-500/10">
                                                <HiCheckCircle className="w-4 h-4 text-indigo-400" />
                                            </div>
                                        </div>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}