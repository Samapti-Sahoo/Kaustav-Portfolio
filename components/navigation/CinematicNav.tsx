"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Briefcase, FileText, Menu, X, Sun, Moon } from "lucide-react";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";
import { useTheme } from "@/components/theme/ThemeContext";

interface CinematicNavProps {
  onOpenRecruiterHUD: () => void;
  onOpenResume: () => void;
  activeScene: string;
}

export const CinematicNav: React.FC<CinematicNavProps> = ({
  onOpenRecruiterHUD,
  onOpenResume,
  activeScene,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const navItems = [
    { id: "intro", label: "01 / INTRO", href: "#intro" },
    { id: "profile", label: "02 / PROFILE", href: "#profile" },
    { id: "systems", label: "03 / SYSTEMS", href: "#systems" },
    { id: "proof", label: "04 / PROOF", href: "#proof" },
    { id: "journey", label: "05 / JOURNEY", href: "#journey" },
    { id: "contact", label: "06 / CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const clockInterval = setInterval(updateClock, 1000);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Keyboard shortcut for Recruiter HUD: 'R' or 'r'
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "r" || e.key === "R") && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        AudioTelemetry.playClickSound();
        onOpenRecruiterHUD();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(clockInterval);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onOpenRecruiterHUD]);

  const handleAudioToggle = () => {
    const active = AudioTelemetry.toggleMute();
    setIsAudioEnabled(active);
  };

  const handleThemeToggle = () => {
    AudioTelemetry.playClickSound();
    toggleTheme();
  };

  const handleLinkClick = (href: string) => {
    AudioTelemetry.playClickSound();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Editorial Hairline Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-ivory-300/40 dark:bg-obsidian-800">
        <motion.div
          className="h-full bg-gradient-to-r from-electric via-violet to-mint shadow-sm"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Minimal Navigation Bar */}
      <header className="fixed top-2 md:top-4 left-0 right-0 z-40 px-4 md:px-8 pointer-events-none">
        <nav className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto editorial-panel rounded-2xl px-4 py-2.5 md:py-3 transition-all">
          {/* Brand / System Monogram */}
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#intro");
            }}
            data-cursor="ORIGIN"
            className="flex items-center gap-2.5 group"
          >
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-ink-900 text-white dark:bg-white dark:text-ink-950 font-display font-extrabold text-xs shadow-sm group-hover:bg-electric transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs tracking-wider text-ink-900 dark:text-ivory-100 group-hover:text-electric transition-colors">
                KAUSTAV GHOSH HAZRA
              </span>
              <span className="font-mono text-[9px] text-ink-600 dark:text-ivory-400 tracking-widest hidden sm:inline font-medium">
                SYS // AI-RUNTIME
              </span>
            </div>
          </a>

          {/* Center Cinematic Scene Nav Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeScene === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.href)}
                  onMouseEnter={() => AudioTelemetry.playHoverSound()}
                  data-cursor="SCENE"
                  className={`relative font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-electric dark:text-blue-400 bg-electric/8 dark:bg-blue-500/10 font-bold"
                      : "text-ink-600 dark:text-ivory-300 hover:text-ink-900 dark:hover:text-white hover:bg-ivory-200/60 dark:hover:bg-obsidian-800"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSceneIndicator"
                      className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-electric dark:bg-blue-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Matrix: Clock + Theme + Sound + Resume + Recruiter HUD */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Live Clock / Telemetry (Desktop) */}
            <div className="hidden xl:flex items-center gap-1.5 font-mono text-[10px] text-ink-500 dark:text-ivory-400 border-r border-ivory-300 dark:border-obsidian-700 pr-3">
              <div className="w-1.5 h-1.5 rounded-full bg-mint animate-ping" />
              <span>{currentTime || "00:00:00"} UTC</span>
            </div>

            {/* LIGHT / DARK MODE TOGGLE */}
            <button
              onClick={handleThemeToggle}
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
              data-cursor="THEME"
              className="p-1.5 rounded-lg border border-ivory-400 dark:border-obsidian-700 bg-white dark:bg-obsidian-900 text-ink-700 dark:text-ivory-200 hover:border-ink-900 dark:hover:border-white transition-all shadow-editorial-sm"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-3.5 h-3.5 text-violet" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              )}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={handleAudioToggle}
              title={isAudioEnabled ? "Mute Atmospheric Audio" : "Enable Atmospheric Audio Telemetry"}
              data-cursor="AUDIO"
              className={`p-1.5 rounded-lg border transition-all ${
                isAudioEnabled
                  ? "text-electric border-electric/40 bg-electric/8 shadow-sm"
                  : "text-ink-500 dark:text-ivory-400 border-ivory-400 dark:border-obsidian-700 hover:text-ink-900 dark:hover:text-white"
              }`}
            >
              {isAudioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Resume Trigger */}
            <button
              onClick={() => {
                AudioTelemetry.playClickSound();
                onOpenResume();
              }}
              data-cursor="VIEW"
              className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] tracking-wider px-3 py-1.5 rounded-lg border border-ivory-400 dark:border-obsidian-700 bg-white dark:bg-obsidian-900 hover:border-ink-900 dark:hover:border-white text-ink-800 dark:text-ivory-200 transition-all shadow-editorial-sm font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-ink-600 dark:text-ivory-400" />
              <span>RESUME</span>
            </button>

            {/* RECRUITER HUD (Executive Action Button) */}
            <button
              onClick={() => {
                AudioTelemetry.playClickSound();
                onOpenRecruiterHUD();
              }}
              data-cursor="DOSSIER"
              className="relative flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-wider px-3.5 py-1.5 rounded-lg bg-mint/10 dark:bg-mint/15 border border-mint/40 hover:border-mint text-mint hover:shadow-editorial-glow-mint transition-all"
            >
              <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
              <span className="text-ink-900 dark:text-white">RECRUITER HUD</span>
              <kbd className="hidden md:inline-block ml-1 px-1 py-0.2 bg-white dark:bg-obsidian-950 border border-mint/30 rounded text-[9px] text-mint font-mono">
                R
              </kbd>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                AudioTelemetry.playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-1.5 rounded-lg border border-ivory-400 dark:border-obsidian-700 text-ink-800 dark:text-ivory-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-4 right-4 z-40 editorial-panel rounded-2xl p-6 border border-ivory-400 dark:border-obsidian-700 shadow-editorial-lg lg:hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-ivory-300 dark:border-obsidian-800">
                <span className="font-mono text-xs text-ink-500 dark:text-ivory-400 tracking-widest uppercase">
                  SCENE SELECTOR
                </span>
                <span className="font-mono text-[10px] text-electric font-bold">{scrollProgress.toFixed(0)}% PROGRESS</span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.href)}
                  className="flex items-center justify-between py-2 text-left font-mono text-xs tracking-wider text-ink-800 dark:text-ivory-100 hover:text-electric border-b border-ivory-200 dark:border-obsidian-850 transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-electric text-xs">→</span>
                </button>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white dark:bg-obsidian-850 border border-ivory-400 dark:border-obsidian-700 font-mono text-xs text-ink-900 dark:text-ivory-100 font-semibold shadow-editorial-sm"
                >
                  <FileText className="w-4 h-4 text-ink-600 dark:text-ivory-400" />
                  VIEW COMPLETE RESUME
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRecruiterHUD();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-mint/15 border border-mint font-mono text-xs text-ink-900 dark:text-white font-bold shadow-sm"
                >
                  <Briefcase className="w-4 h-4 text-mint" />
                  OPEN RECRUITER HUD DOSSIER
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
