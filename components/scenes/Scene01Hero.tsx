"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Cpu, Terminal, ChevronRight, ShieldCheck, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

interface Scene01HeroProps {
  onOpenRecruiterHUD: () => void;
  onOpenResume: () => void;
}

export const Scene01Hero: React.FC<Scene01HeroProps> = ({
  onOpenRecruiterHUD,
  onOpenResume,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [initStep, setInitStep] = useState(0);

  // Virtual camera scroll zoom out
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const cameraScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const cameraOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.5, 0]);
  const cameraY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // System Initialization Sequence
  useEffect(() => {
    const timers = [
      setTimeout(() => setInitStep(1), 300),
      setTimeout(() => setInitStep(2), 650),
      setTimeout(() => setInitStep(3), 1000),
      setTimeout(() => setInitStep(4), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Virtual Camera Container */}
      <motion.div
        style={{ scale: cameraScale, opacity: cameraOpacity, y: cameraY }}
        className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center mt-2 sm:mt-6"
      >
        {/* Minimalist Editorial System Initialization Telemetry */}
        <div className="w-full max-w-xl mx-auto mb-8 font-mono text-[10px] sm:text-xs tracking-widest flex flex-col items-center">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white dark:bg-obsidian-900 border border-ivory-400 dark:border-obsidian-700 shadow-editorial-sm">
            <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
            <span className="text-ink-600 dark:text-ivory-300 font-semibold">SYSTEM / 001</span>
            <span className="text-ivory-400 dark:text-obsidian-700">|</span>
            <span className="text-electric dark:text-blue-400 font-bold">
              {initStep < 4 ? "INITIALIZING NEURAL RUNTIME..." : "SYS // ONLINE"}
            </span>
            <span className="text-ivory-400 dark:text-obsidian-700">|</span>
            <span className="text-violet dark:text-purple-400 font-semibold">SYS-KGH-2026</span>
          </div>

          {/* Sub-telemetry technical status tags */}
          <div className="mt-3 text-[9px] sm:text-[10px] flex items-center gap-2.5 transition-opacity duration-500 font-mono font-bold">
            <span className={`px-2.5 py-1 rounded-md transition-all ${
              initStep >= 1
                ? "bg-mint/10 text-mint border border-mint/30"
                : "opacity-25 text-ink-400"
            }`}>
              ✓ NUMPY MATH ENGINE
            </span>
            <span className={`px-2.5 py-1 rounded-md transition-all ${
              initStep >= 2
                ? "bg-electric/10 text-electric dark:text-blue-400 border border-electric/30"
                : "opacity-25 text-ink-400"
            }`}>
              ✓ CNN FROM SCRATCH
            </span>
            <span className={`px-2.5 py-1 rounded-md transition-all ${
              initStep >= 3
                ? "bg-violet/10 text-violet dark:text-purple-400 border border-violet/30"
                : "opacity-25 text-ink-400"
            }`}>
              ✓ ACTIVE RESEARCH
            </span>
          </div>
        </div>

        {/* Monumental Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative select-none"
        >
          {/* Subtle Ambient Sunlight Refraction */}
          <div className="absolute -inset-x-20 -inset-y-12 bg-gradient-to-r from-electric/10 via-violet/5 to-mint/10 blur-3xl -z-10 pointer-events-none rounded-full" />

          <h1 className="font-display font-extrabold tracking-tight uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] leading-[0.88] flex flex-col items-center">
            <span className="text-ink-950 dark:text-white">
              {PORTFOLIO_DATA.personal.firstName}
            </span>
            <span className="bg-gradient-to-r from-ink-900 via-electric to-violet dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent -mt-1 sm:-mt-3 md:-mt-5">
              {PORTFOLIO_DATA.personal.lastName}
            </span>
          </h1>
        </motion.div>

        {/* Technical Role Badges with Editorial Monospace Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm tracking-widest uppercase font-semibold"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-obsidian-900 border border-electric/30 text-electric dark:text-blue-400 shadow-editorial-sm">
            <Cpu className="w-3.5 h-3.5 text-electric" />
            <span>AI / ML ENGINEER</span>
          </div>
          <span className="text-ivory-400 dark:text-obsidian-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-obsidian-900 border border-violet/30 text-violet dark:text-purple-400 shadow-editorial-sm">
            <Terminal className="w-3.5 h-3.5 text-violet" />
            <span>SOFTWARE DEVELOPER</span>
          </div>
          <span className="text-ivory-400 dark:text-obsidian-700 hidden sm:inline">•</span>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-obsidian-900 border border-mint/30 text-mint shadow-editorial-sm">
            <Zap className="w-3.5 h-3.5 text-mint" />
            <span>SYSTEMS BUILDER</span>
          </div>
        </motion.div>

        {/* Primary Statement — Editorial Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 sm:mt-10 max-w-3xl mx-auto w-full"
        >
          <div className="editorial-panel rounded-3xl p-6 sm:p-10 text-center shadow-editorial-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-electric via-violet to-mint" />
            <p className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug text-ink-950 dark:text-white">
              “I BUILD SYSTEMS THAT TURN IDEAS INTO SOMETHING REAL.”
            </p>
            <p className="font-sans text-xs sm:text-sm text-ink-600 dark:text-ivory-300 mt-3 font-normal max-w-xl mx-auto">
              {PORTFOLIO_DATA.personal.subtagline}
            </p>
          </div>
        </motion.div>

        {/* Verified Technical Telemetry Ribbon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-mono font-medium"
        >
          <span className="px-3 py-1.5 rounded-lg bg-ivory-200/80 dark:bg-obsidian-850 border border-ivory-400 dark:border-obsidian-700 text-ink-700 dark:text-ivory-300 shadow-editorial-sm">
            🎓 3rd-Year B.Tech CSE @ MSIT (2028)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-electric/8 dark:bg-blue-500/10 border border-electric/25 text-electric dark:text-blue-300 font-semibold shadow-editorial-sm">
            ⚡ NumPy CNN from Scratch (95.28% Acc)
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-coral/8 dark:bg-orange-500/10 border border-coral/25 text-coral dark:text-orange-300 font-semibold shadow-editorial-sm">
            🏆 SIH Internal Rounds (×2)
          </span>
        </motion.div>

        {/* High-Contrast Luxury Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary Action Button: Dark Ink background + White text + Electric hover */}
          <a
            href="#systems"
            onClick={(e) => {
              e.preventDefault();
              AudioTelemetry.playClickSound();
              document.querySelector("#systems")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-cursor="EXPLORE"
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-ink-950 dark:bg-white text-white dark:text-ink-950 font-mono font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-electric dark:hover:bg-electric dark:hover:text-white hover:shadow-editorial-glow-blue hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>EXPLORE SYSTEMS & PROOF</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary Action: Recruiter HUD */}
          <button
            onClick={() => {
              AudioTelemetry.playClickSound();
              onOpenRecruiterHUD();
            }}
            data-cursor="DOSSIER"
            className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-4 rounded-xl bg-white dark:bg-obsidian-900 text-ink-900 dark:text-ivory-100 border border-ivory-400 dark:border-obsidian-700 hover:border-mint font-mono font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 hover:shadow-editorial-glow-mint hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShieldCheck className="w-4 h-4 text-mint" />
            <span>RECRUITER HUD QUICK VIEW</span>
            <kbd className="px-1.5 py-0.5 bg-ivory-200 dark:bg-obsidian-800 rounded text-[10px] text-ink-700 dark:text-ivory-300 font-mono border border-ivory-400 dark:border-obsidian-700">
              R
            </kbd>
          </button>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 sm:mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] tracking-widest text-ink-500 dark:text-ivory-400 uppercase font-bold">
            SCROLL TO COMMENCE NARRATIVE
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-electric dark:text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
