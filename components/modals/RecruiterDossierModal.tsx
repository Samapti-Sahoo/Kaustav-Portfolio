"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Zap,
  Linkedin,
  Github,
  Code,
  FileText,
  Copy,
  Check,
  Mail,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

interface RecruiterDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const RecruiterDossierModal: React.FC<RecruiterDossierModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    AudioTelemetry.playClickSound();
    navigator.clipboard.writeText(PORTFOLIO_DATA.links.emailRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-950/70 dark:bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white dark:bg-obsidian-900 border border-ivory-400 dark:border-obsidian-700 rounded-3xl p-6 sm:p-8 shadow-editorial-lg z-10 overflow-hidden"
          >
            {/* Top Status Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-ivory-300 dark:border-obsidian-800 font-mono text-xs font-bold">
              <div className="flex items-center gap-2 text-ink-900 dark:text-ivory-100">
                <ShieldCheck className="w-4 h-4 text-mint" />
                <span>EXECUTIVE RECRUITER DOSSIER</span>
                <span className="px-2 py-0.5 rounded bg-mint/10 text-mint text-[10px] font-bold">
                  30s SUMMARY
                </span>
              </div>
              <button
                onClick={() => {
                  AudioTelemetry.playClickSound();
                  onClose();
                }}
                className="p-1.5 rounded-lg hover:bg-ivory-100 dark:hover:bg-obsidian-800 text-ink-500 dark:text-ivory-400 transition-colors"
                aria-label="Close Recruiter Dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Dossier Grid */}
            <div className="mt-5 space-y-3.5">
              {/* WHO & WHAT */}
              <div className="p-4 rounded-2xl bg-ivory-50 dark:bg-obsidian-850 border border-ivory-300 dark:border-obsidian-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest block font-bold">
                      WHO
                    </span>
                    <h3 className="font-display font-extrabold text-xl text-ink-950 dark:text-white mt-0.5">
                      {PORTFOLIO_DATA.personal.name}
                    </h3>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest block font-bold">
                      WHAT
                    </span>
                    <p className="font-mono text-xs text-electric dark:text-blue-400 font-bold mt-0.5">
                      {PORTFOLIO_DATA.personal.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* STRONGEST AREA & CURRENTLY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-2xl bg-white dark:bg-obsidian-850 border border-electric/30">
                  <span className="font-mono text-[10px] text-electric dark:text-blue-400 uppercase tracking-widest font-bold block">
                    STRONGEST AREA
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink-900 dark:text-ivory-100 font-semibold mt-1">
                    AI / ML + Neural Networks from Scratch + Python / NumPy
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-obsidian-850 border border-mint/30">
                  <span className="font-mono text-[10px] text-mint uppercase tracking-widest font-bold block">
                    CURRENT STATUS
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink-900 dark:text-ivory-100 font-semibold mt-1">
                    Third-Year B.Tech CSE @ MSIT (Class of 2028)
                  </p>
                </div>
              </div>

              {/* BUILDING EXPERIENCE */}
              <div className="p-4 rounded-2xl bg-ivory-50 dark:bg-obsidian-850 border border-ivory-300 dark:border-obsidian-800">
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest block mb-2 font-bold">
                  PROVEN BUILDING EXPERIENCE
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-ink-700 dark:text-ivory-200 font-medium">
                  <li className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-electric shrink-0" />
                    <span>CNN from scratch with Sigmoid (95.28% Acc)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-coral shrink-0" />
                    <span>Asynchronous REST API Weather App</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-violet shrink-0" />
                    <span>Smart India Hackathon Internal Rounds (×2)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-mint shrink-0" />
                    <span>Active LeetCode DSA Problem Solver</span>
                  </li>
                </ul>
              </div>

              {/* FAST ACTION LINKS */}
              <div className="pt-1">
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest block mb-2.5 font-bold">
                  DIRECT ACTION CHANNELS:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={PORTFOLIO_DATA.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => AudioTelemetry.playClickSound()}
                    className="p-3 rounded-xl bg-white dark:bg-obsidian-850 hover:border-violet border border-ivory-300 dark:border-obsidian-800 font-mono text-xs text-ink-900 dark:text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-editorial-sm"
                  >
                    <Linkedin className="w-4 h-4 text-violet" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => AudioTelemetry.playClickSound()}
                    className="p-3 rounded-xl bg-white dark:bg-obsidian-850 hover:border-ink-950 dark:hover:border-white border border-ivory-300 dark:border-obsidian-800 font-mono text-xs text-ink-900 dark:text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-editorial-sm"
                  >
                    <Github className="w-4 h-4 text-ink-900 dark:text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.links.leetcodePrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => AudioTelemetry.playClickSound()}
                    className="p-3 rounded-xl bg-white dark:bg-obsidian-850 hover:border-coral border border-ivory-300 dark:border-obsidian-800 font-mono text-xs text-ink-900 dark:text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-editorial-sm"
                  >
                    <Code className="w-4 h-4 text-coral" />
                    <span>LeetCode</span>
                  </a>

                  <button
                    onClick={copyEmail}
                    className="p-3 rounded-xl bg-white dark:bg-obsidian-850 hover:border-mint border border-ivory-300 dark:border-obsidian-800 font-mono text-xs text-ink-900 dark:text-white font-bold flex items-center justify-center gap-1.5 transition-all shadow-editorial-sm"
                  >
                    {copied ? <Check className="w-4 h-4 text-mint" /> : <Copy className="w-4 h-4 text-electric" />}
                    <span>{copied ? "Copied" : "Copy Email"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-ivory-300 dark:border-obsidian-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={PORTFOLIO_DATA.links.email}
                onClick={() => AudioTelemetry.playClickSound()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-ink-950 dark:bg-white text-white dark:text-ink-950 font-mono text-xs font-bold tracking-wider hover:bg-electric transition-all shadow-editorial-sm"
              >
                <Mail className="w-4 h-4" />
                <span>START RECRUITING CONVERSATION</span>
              </a>

              <button
                onClick={() => {
                  AudioTelemetry.playClickSound();
                  onClose();
                  onOpenResume();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-obsidian-850 hover:border-ink-900 border border-ivory-400 dark:border-obsidian-700 font-mono text-xs text-ink-800 dark:text-ivory-200 font-bold transition-all shadow-editorial-sm"
              >
                <FileText className="w-4 h-4 text-violet" />
                <span>VIEW FULL RESUME</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
