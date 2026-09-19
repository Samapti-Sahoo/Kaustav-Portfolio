"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Code, Copy, Check, FileText, ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

interface Scene07ClosingCreditsProps {
  onOpenResume: () => void;
  onOpenRecruiterHUD: () => void;
}

export const Scene07ClosingCredits: React.FC<Scene07ClosingCreditsProps> = ({
  onOpenResume,
  onOpenRecruiterHUD,
}) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    AudioTelemetry.playClickSound();
    navigator.clipboard.writeText(PORTFOLIO_DATA.links.emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    AudioTelemetry.playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full flex flex-col justify-between py-28 px-4 sm:px-6 lg:px-8 border-t border-ivory-400/80 dark:border-obsidian-800 bg-ivory-100 dark:bg-obsidian-950 overflow-hidden"
    >
      {/* Scene Header */}
      <div className="max-w-6xl mx-auto w-full mb-12">
        <div className="flex items-center gap-3 font-mono text-xs text-electric dark:text-blue-400 font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
          <span>SCENE // 07 — THE CLOSING CREDITS & TRANSMISSION</span>
        </div>
      </div>

      {/* Main Closing Transmission Canvas */}
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-obsidian-900 border border-mint/40 font-mono text-xs text-mint font-bold tracking-wider uppercase mb-6 shadow-editorial-sm"
        >
          <span className="w-2 h-2 rounded-full bg-mint animate-ping" />
          <span className="text-ink-900 dark:text-ivory-100">OPEN TO HIGH-IMPACT OPPORTUNITIES & RESEARCH</span>
        </motion.div>

        {/* Primary Closing Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink-950 dark:text-white tracking-tight leading-tight uppercase"
        >
          “THE NEXT SYSTEM COULD BE OURS.”
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-sans text-sm sm:text-base text-ink-600 dark:text-ivory-300 mt-4 max-w-xl font-normal"
        >
          Whether you are building next-generation AI architectures, mathematical models, or mission-critical software systems, let&apos;s engineer something extraordinary.
        </motion.p>

        {/* Transmission Hub / Contact Channels */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full"
        >
          {/* Email Direct */}
          <a
            href={PORTFOLIO_DATA.links.email}
            onClick={() => AudioTelemetry.playClickSound()}
            data-cursor="TRANSMIT"
            className="p-5 rounded-2xl editorial-panel border border-ivory-400 dark:border-obsidian-700 hover:border-electric transition-all flex flex-col items-center gap-2 group shadow-editorial-sm"
          >
            <div className="p-3 rounded-xl bg-ivory-100 dark:bg-obsidian-800 group-hover:scale-105 transition-transform">
              <Mail className="w-5 h-5 text-electric" />
            </div>
            <span className="font-mono text-xs font-bold text-ink-950 dark:text-white group-hover:text-electric transition-colors">
              DIRECT EMAIL
            </span>
            <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 truncate max-w-[180px] font-medium">
              {PORTFOLIO_DATA.links.emailRaw}
            </span>
          </a>

          {/* LinkedIn Profile */}
          <a
            href={PORTFOLIO_DATA.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => AudioTelemetry.playClickSound()}
            data-cursor="CONNECT"
            className="p-5 rounded-2xl editorial-panel border border-ivory-400 dark:border-obsidian-700 hover:border-violet transition-all flex flex-col items-center gap-2 group shadow-editorial-sm"
          >
            <div className="p-3 rounded-xl bg-ivory-100 dark:bg-obsidian-800 group-hover:scale-105 transition-transform">
              <Linkedin className="w-5 h-5 text-violet" />
            </div>
            <span className="font-mono text-xs font-bold text-ink-950 dark:text-white group-hover:text-violet transition-colors">
              LINKEDIN
            </span>
            <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 font-medium">
              /in/kaustav-ghosh-hazra
            </span>
          </a>

          {/* GitHub Workbench */}
          <a
            href={PORTFOLIO_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => AudioTelemetry.playClickSound()}
            data-cursor="CODE"
            className="p-5 rounded-2xl editorial-panel border border-ivory-400 dark:border-obsidian-700 hover:border-ink-950 dark:hover:border-white transition-all flex flex-col items-center gap-2 group shadow-editorial-sm"
          >
            <div className="p-3 rounded-xl bg-ivory-100 dark:bg-obsidian-800 group-hover:scale-105 transition-transform">
              <Github className="w-5 h-5 text-ink-900 dark:text-white" />
            </div>
            <span className="font-mono text-xs font-bold text-ink-950 dark:text-white group-hover:text-electric transition-colors">
              GITHUB
            </span>
            <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 font-medium">
              github.com/KAUSTAV-GH
            </span>
          </a>

          {/* LeetCode DSA */}
          <a
            href={PORTFOLIO_DATA.links.leetcodePrimary}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => AudioTelemetry.playClickSound()}
            data-cursor="LEETCODE"
            className="p-5 rounded-2xl editorial-panel border border-ivory-400 dark:border-obsidian-700 hover:border-coral transition-all flex flex-col items-center gap-2 group shadow-editorial-sm"
          >
            <div className="p-3 rounded-xl bg-ivory-100 dark:bg-obsidian-800 group-hover:scale-105 transition-transform">
              <Code className="w-5 h-5 text-coral" />
            </div>
            <span className="font-mono text-xs font-bold text-ink-950 dark:text-white group-hover:text-coral transition-colors">
              LEETCODE
            </span>
            <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 font-medium">
              Kaustav_Ghosh_Hazra
            </span>
          </a>
        </motion.div>

        {/* Secondary Action Toolbar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono text-xs font-bold"
        >
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-obsidian-850 hover:border-ink-900 border border-ivory-400 dark:border-obsidian-700 text-ink-900 dark:text-ivory-100 transition-all shadow-editorial-sm"
          >
            {copied ? <Check className="w-4 h-4 text-mint" /> : <Copy className="w-4 h-4 text-electric" />}
            <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
          </button>

          <button
            onClick={() => {
              AudioTelemetry.playClickSound();
              onOpenResume();
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-obsidian-850 hover:border-ink-900 border border-ivory-400 dark:border-obsidian-700 text-ink-900 dark:text-ivory-100 transition-all shadow-editorial-sm"
          >
            <FileText className="w-4 h-4 text-violet" />
            <span>OPEN RESUME DOSSIER</span>
          </button>

          <button
            onClick={() => {
              AudioTelemetry.playClickSound();
              onOpenRecruiterHUD();
            }}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-mint/10 hover:bg-mint/20 border border-mint/40 text-mint transition-all shadow-editorial-sm"
          >
            <span className="text-ink-900 dark:text-white">RECRUITER HUD [R]</span>
          </button>
        </motion.div>
      </div>

      {/* Cinematic End Credits Ribbon & System Terminus */}
      <div className="max-w-6xl mx-auto w-full pt-16 mt-16 border-t border-ivory-300 dark:border-obsidian-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-display font-extrabold text-xl text-ink-950 dark:text-white tracking-wider">
            {PORTFOLIO_DATA.personal.name}
          </h3>
          <p className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 tracking-widest uppercase mt-0.5 font-bold">
            {PORTFOLIO_DATA.personal.title}
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-ink-600 dark:text-ivory-300 font-bold">
          <span className="text-electric">SYSTEM / END</span>
          <span>•</span>
          <span>2026</span>
          <span>•</span>
          <button
            onClick={scrollToTop}
            data-cursor="ORIGIN"
            className="flex items-center gap-1.5 text-ink-900 dark:text-white hover:text-electric transition-colors"
          >
            <span>RETURN TO ORIGIN</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
