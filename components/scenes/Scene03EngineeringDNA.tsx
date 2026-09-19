"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Terminal, Globe, Wrench, ChevronRight, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

export const Scene03EngineeringDNA: React.FC = () => {
  const [selectedClusterIndex, setSelectedClusterIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    description: string;
    level: string;
    category: string;
  } | null>(null);

  const clusterStyles = [
    {
      icon: <Cpu className="w-4 h-4 text-electric" />,
      activeBorder: "border-electric",
      activeBg: "bg-electric/6 dark:bg-electric/15",
      tag: "text-electric",
      accentDot: "bg-electric",
    },
    {
      icon: <Terminal className="w-4 h-4 text-mint" />,
      activeBorder: "border-mint",
      activeBg: "bg-mint/6 dark:bg-mint/15",
      tag: "text-mint",
      accentDot: "bg-mint",
    },
    {
      icon: <Globe className="w-4 h-4 text-coral" />,
      activeBorder: "border-coral",
      activeBg: "bg-coral/6 dark:bg-coral/15",
      tag: "text-coral",
      accentDot: "bg-coral",
    },
    {
      icon: <Wrench className="w-4 h-4 text-violet" />,
      activeBorder: "border-violet",
      activeBg: "bg-violet/6 dark:bg-violet/15",
      tag: "text-violet",
      accentDot: "bg-violet",
    },
  ];

  const activeCluster = PORTFOLIO_DATA.skills[selectedClusterIndex];
  const activeStyle = clusterStyles[selectedClusterIndex];

  return (
    <section
      id="systems"
      className="relative min-h-screen w-full flex flex-col justify-center py-28 px-4 sm:px-6 lg:px-8 border-t border-ivory-400/80 dark:border-obsidian-800 bg-ivory-100 dark:bg-obsidian-950"
    >
      {/* Scene Header */}
      <div className="max-w-6xl mx-auto w-full mb-14">
        <div className="flex items-center gap-3 font-mono text-xs text-electric dark:text-blue-400 font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
          <span>SCENE // 03 — ENGINEERING DNA</span>
        </div>
        <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink-950 dark:text-white tracking-tight">
              TECHNICAL CLUSTERS & CAPABILITIES
            </h2>
            <p className="font-sans text-sm text-ink-600 dark:text-ivory-300 mt-1 max-w-xl font-normal">
              An architectural taxonomy of low-level algorithms, mathematical modeling, systems programming, and production toolsets.
            </p>
          </div>
          <div className="font-mono text-[10px] text-ink-600 dark:text-ivory-400 tracking-widest uppercase px-3 py-1.5 rounded-lg bg-white dark:bg-obsidian-900 border border-ivory-400 dark:border-obsidian-700 self-start md:self-auto font-bold shadow-editorial-sm">
            SYSTEM ARCHITECTURE MATRIX
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Cluster Selector (4 Columns) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {PORTFOLIO_DATA.skills.map((cluster, idx) => {
            const isSelected = selectedClusterIndex === idx;
            const style = clusterStyles[idx];
            return (
              <button
                key={cluster.category}
                onClick={() => {
                  AudioTelemetry.playClickSound();
                  setSelectedClusterIndex(idx);
                  setSelectedSkill(null);
                }}
                onMouseEnter={() => AudioTelemetry.playHoverSound()}
                data-cursor="INSPECT"
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden group ${
                  isSelected
                    ? `bg-white dark:bg-obsidian-900 ${style.activeBorder} shadow-editorial-md`
                    : "bg-white/60 dark:bg-obsidian-900/50 border-ivory-400 dark:border-obsidian-800 hover:border-ink-400 dark:hover:border-obsidian-600"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-ivory-100 dark:bg-obsidian-800 border border-ivory-300 dark:border-obsidian-700 group-hover:scale-105 transition-transform">
                      {style.icon}
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 tracking-wider block font-semibold">
                        {cluster.code}
                      </span>
                      <span className="font-display font-bold text-base sm:text-lg text-ink-950 dark:text-white group-hover:text-electric transition-colors">
                        {cluster.category}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? "text-electric translate-x-1" : "text-ink-400 dark:text-ivory-500 group-hover:text-electric"
                    }`}
                  />
                </div>
                <p className="font-sans text-xs text-ink-600 dark:text-ivory-400 mt-2 line-clamp-1 font-normal">
                  {cluster.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Interactive Cluster Grid & Detail Inspection (8 Columns) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="editorial-panel rounded-3xl p-6 sm:p-8 shadow-editorial-md relative overflow-hidden border border-ivory-400 dark:border-obsidian-700">
            {/* Active Cluster Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-ivory-300 dark:border-obsidian-800 gap-2">
              <div>
                <span className={`font-mono text-xs font-bold tracking-widest ${activeStyle.tag}`}>
                  {activeCluster.code} // CLUSTER ACTIVE
                </span>
                <h3 className="font-display font-extrabold text-2xl text-ink-950 dark:text-white tracking-tight mt-1">
                  {activeCluster.category}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-ink-600 dark:text-ivory-300 mt-1 font-normal">
                  {activeCluster.tagline}
                </p>
              </div>
              <div className="font-mono text-xs text-ink-700 dark:text-ivory-200 px-3 py-1.5 rounded-lg bg-ivory-200 dark:bg-obsidian-800 border border-ivory-300 dark:border-obsidian-700 font-bold self-start sm:self-auto">
                {activeCluster.skills.length} TECHNOLOGIES
              </div>
            </div>

            {/* Interactive Editorial Skill Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 mt-6">
              {activeCluster.skills.map((skill) => {
                const isSkillSelected = selectedSkill?.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => {
                      AudioTelemetry.playClickSound();
                      setSelectedSkill({
                        name: skill.name,
                        description: skill.description,
                        level: skill.level,
                        category: activeCluster.category,
                      });
                    }}
                    onMouseEnter={() => AudioTelemetry.playHoverSound()}
                    data-cursor="INSPECT"
                    className={`p-3.5 rounded-xl border text-left transition-all duration-150 group relative ${
                      isSkillSelected
                        ? "bg-white dark:bg-obsidian-850 border-ink-900 dark:border-white shadow-editorial-sm ring-1 ring-ink-900/10"
                        : skill.highlight
                        ? "bg-white dark:bg-obsidian-900 border-ivory-400 dark:border-obsidian-700 hover:border-ink-900 dark:hover:border-white hover:shadow-editorial-sm"
                        : "bg-ivory-50/70 dark:bg-obsidian-900/60 border-ivory-300 dark:border-obsidian-800 hover:border-ivory-400 dark:hover:border-obsidian-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-xs sm:text-sm text-ink-950 dark:text-white group-hover:text-electric transition-colors">
                        {skill.name}
                      </span>
                      {skill.highlight && (
                        <Zap className="w-3.5 h-3.5 text-electric fill-electric/20" />
                      )}
                    </div>
                    <span className="font-mono text-[9px] text-ink-500 dark:text-ivory-400 tracking-wider uppercase block mt-1 font-semibold">
                      {skill.level} Tier
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Inspection Drawer */}
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 p-5 rounded-2xl bg-white dark:bg-obsidian-900 border border-ivory-400 dark:border-obsidian-700 shadow-editorial-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 font-mono text-[10px] text-electric dark:text-blue-400 uppercase tracking-wider font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric" />
                      <span>{selectedSkill.category} // {selectedSkill.level} FOCUS</span>
                    </div>
                    <h4 className="font-display font-extrabold text-lg text-ink-950 dark:text-white mt-0.5">
                      {selectedSkill.name}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-ink-600 dark:text-ivory-300 mt-1 font-normal">
                      {selectedSkill.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="font-mono text-xs text-ink-600 dark:text-ivory-400 hover:text-ink-950 dark:hover:text-white px-3 py-1.5 rounded-lg bg-ivory-100 dark:bg-obsidian-800 border border-ivory-300 dark:border-obsidian-700 font-bold shrink-0"
                  >
                    CLOSE [×]
                  </button>
                </motion.div>
              ) : (
                <div className="mt-6 p-3.5 rounded-xl bg-ivory-50 dark:bg-obsidian-900/50 border border-ivory-300 dark:border-obsidian-800 flex items-center justify-between font-mono text-xs text-ink-500 dark:text-ivory-400">
                  <span>Selected Node: None (Click any chip above to inspect breakdown)</span>
                  <span className="text-electric font-bold">READY</span>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
