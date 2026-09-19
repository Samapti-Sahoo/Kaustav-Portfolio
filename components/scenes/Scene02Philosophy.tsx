"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Brain, Code2, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Scene02Philosophy: React.FC = () => {
  return (
    <section
      id="profile"
      className="relative min-h-screen w-full flex flex-col justify-center py-28 px-4 sm:px-6 lg:px-8 border-t border-ivory-400/80 dark:border-obsidian-800 overflow-hidden bg-ivory-50/50 dark:bg-obsidian-900/30"
    >
      {/* Cinematic Scene Header Marker */}
      <div className="max-w-6xl mx-auto w-full mb-14 flex items-center justify-between">
        <div className="flex items-center gap-3 font-mono text-xs text-violet dark:text-purple-400 font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-violet animate-ping" />
          <span>SCENE // 02 — THE CURIOSITY & PHILOSOPHY</span>
        </div>
        <div className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 tracking-widest hidden sm:block font-semibold">
          NARRATIVE / 02
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Dramatic Editorial Typography Sequence */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Opening Question Lead */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-violet dark:text-purple-400 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold"
          >
            <Compass className="w-4 h-4 text-violet" />
            <span>{PORTFOLIO_DATA.philosophy.questionTitle}</span>
          </motion.div>

          {/* Primary Oversized Statement Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-2"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink-400 dark:text-ivory-500 tracking-tight leading-tight">
              “I DON&apos;T JUST WANT CODE TO RUN.”
            </h2>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink-950 dark:text-white tracking-tight leading-tight">
              “I WANT TO UNDERSTAND WHY IT WORKS.”
            </h2>
          </motion.div>

          {/* Narrative Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-ink-600 dark:text-ivory-200 font-normal leading-relaxed max-w-2xl mt-3"
          >
            {PORTFOLIO_DATA.philosophy.narrative}
          </motion.p>

          {/* Editorial Core Conviction Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
          >
            <div className="editorial-surface p-6 rounded-2xl border border-ivory-400 dark:border-obsidian-700 shadow-editorial-sm hover:border-electric transition-all">
              <div className="flex items-center gap-2.5 text-electric font-mono text-xs font-bold uppercase">
                <Brain className="w-4 h-4 text-electric" />
                <span>FIRST-PRINCIPLES TENSORS</span>
              </div>
              <p className="text-xs text-ink-600 dark:text-ivory-300 mt-2.5 leading-relaxed font-normal">
                Deriving gradients and matrix dimensions manually in NumPy before trusting abstractions.
              </p>
            </div>

            <div className="editorial-surface p-6 rounded-2xl border border-ivory-400 dark:border-obsidian-700 shadow-editorial-sm hover:border-mint transition-all">
              <div className="flex items-center gap-2.5 text-mint font-mono text-xs font-bold uppercase">
                <Code2 className="w-4 h-4 text-mint" />
                <span>DETERMINISTIC SYSTEMS</span>
              </div>
              <p className="text-xs text-ink-600 dark:text-ivory-300 mt-2.5 leading-relaxed font-normal">
                Writing clean, zero-fluff software with predictable latencies and transparent memory layouts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Architectural Identity & Academic Dossier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="editorial-panel rounded-3xl p-7 sm:p-9 shadow-editorial-md relative overflow-hidden border border-ivory-400 dark:border-obsidian-700">
            {/* Dossier Header */}
            <div className="flex items-center justify-between pb-4 border-b border-ivory-300 dark:border-obsidian-800 font-mono text-xs font-bold">
              <span className="text-ink-900 dark:text-ivory-100 tracking-wider">ENGINEER PROFILE</span>
              <span className="px-2 py-0.5 rounded bg-violet/10 text-violet dark:text-purple-300 text-[10px] font-bold">
                SYS-VERIFIED
              </span>
            </div>

            {/* Identity Snapshot */}
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest font-semibold">
                  FULL NAME
                </span>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-ink-950 dark:text-white tracking-tight mt-0.5">
                  {PORTFOLIO_DATA.personal.name}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest font-semibold">
                    ACADEMIC STATUS
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink-900 dark:text-ivory-100 font-semibold mt-0.5">
                    Third-Year B.Tech
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest font-semibold">
                    DISCIPLINE
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-ink-900 dark:text-ivory-100 font-semibold mt-0.5">
                    Computer Science & Eng.
                  </p>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest font-semibold">
                  INSTITUTION
                </span>
                <div className="flex items-center gap-2 mt-1 text-ink-900 dark:text-ivory-100 font-semibold text-xs sm:text-sm">
                  <GraduationCap className="w-4 h-4 text-violet shrink-0" />
                  <span>Meghnad Saha Institute of Technology</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest font-semibold">
                  CORE SPECIALIZATION
                </span>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {[
                    { name: "AI / Machine Learning", color: "border-electric/30 bg-electric/8 text-electric dark:text-blue-300" },
                    { name: "Neural Networks from Scratch", color: "border-violet/30 bg-violet/8 text-violet dark:text-purple-300" },
                    { name: "Computer Vision", color: "border-coral/30 bg-coral/8 text-coral dark:text-orange-300" },
                    { name: "Software Engineering", color: "border-mint/30 bg-mint/8 text-mint dark:text-emerald-300" },
                  ].map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-2.5 py-1 rounded-md border font-mono text-[10px] font-bold ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-ivory-300 dark:border-obsidian-800 flex items-center justify-between font-mono text-xs font-semibold">
                <span className="text-ink-500 dark:text-ivory-400">EXPECTED GRADUATION</span>
                <span className="text-mint font-bold text-sm">2028</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
