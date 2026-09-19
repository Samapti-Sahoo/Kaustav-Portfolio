"use client";

import React, { useState } from "react";
import {
  Flame,
  BookOpen,
  GraduationCap,
  GitBranch,
  ExternalLink,
  Code,
  Brain,
  Cpu,
  Smartphone,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

export const Scene06JourneyAndProof: React.FC = () => {
  const [activeLoopIndex, setActiveLoopIndex] = useState(0);

  const loopStyles = [
    { border: "border-electric", text: "text-electric", bg: "bg-electric/6" },
    { border: "border-blue-500", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/6" },
    { border: "border-violet", text: "text-violet", bg: "bg-violet/6" },
    { border: "border-coral", text: "text-coral", bg: "bg-coral/6" },
    { border: "border-amber-500", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-500/6" },
    { border: "border-mint", text: "text-mint", bg: "bg-mint/6" },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Algorithms & Languages":
        return <Code className="w-4 h-4 text-electric" />;
      case "AI & Machine Learning":
        return <Brain className="w-4 h-4 text-violet" />;
      case "Applied Systems":
        return <Smartphone className="w-4 h-4 text-coral" />;
      default:
        return <Cpu className="w-4 h-4 text-mint" />;
    }
  };

  return (
    <section
      id="journey"
      className="relative min-h-screen w-full flex flex-col justify-center py-28 px-4 sm:px-6 lg:px-8 border-t border-ivory-400/80 dark:border-obsidian-800 bg-ivory-50/50 dark:bg-obsidian-900/30"
    >
      {/* Scene Header */}
      <div className="max-w-6xl mx-auto w-full mb-14">
        <div className="flex items-center gap-3 font-mono text-xs text-mint font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-mint animate-ping" />
          <span>SCENE // 06 — THE ENGINEERING ENGINE & PROOF</span>
        </div>
        <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink-950 dark:text-white tracking-tight">
              METHODOLOGY, DISCIPLINE & CONTINUOUS RESEARCH
            </h2>
            <p className="font-sans text-sm text-ink-600 dark:text-ivory-300 mt-1 max-w-xl font-normal">
              How ideas progress from computational formulation to pressure-tested execution and deep foundational knowledge.
            </p>
          </div>
          <div className="font-mono text-[10px] text-ink-600 dark:text-ivory-400 tracking-widest uppercase px-3 py-1.5 rounded-lg bg-white dark:bg-obsidian-900 border border-ivory-400 dark:border-obsidian-700 self-start md:self-auto font-bold shadow-editorial-sm">
            SYSTEM TELEMETRY ARCHIVE
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-14">
        {/* 1. HOW I BUILD (Continuous Engineering Loop) */}
        <div>
          <div className="flex items-center justify-between mb-5 pb-2 border-b border-ivory-300 dark:border-obsidian-800">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink-900 dark:text-ivory-100 flex items-center gap-2">
              <Zap className="w-4 h-4 text-electric" />
              <span>01 // THE SYSTEM LIFECYCLE (HOW I BUILD)</span>
            </h3>
            <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 font-bold">CONTINUOUS FEEDBACK LOOP</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PORTFOLIO_DATA.engineeringLoop.map((item, idx) => {
              const isActive = activeLoopIndex === idx;
              const style = loopStyles[idx];
              return (
                <button
                  key={item.step}
                  onClick={() => {
                    AudioTelemetry.playClickSound();
                    setActiveLoopIndex(idx);
                  }}
                  onMouseEnter={() => AudioTelemetry.playHoverSound()}
                  data-cursor="INSPECT"
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden group ${
                    isActive
                      ? `bg-white dark:bg-obsidian-900 ${style.border} shadow-editorial-md`
                      : "bg-white/60 dark:bg-obsidian-900/50 border-ivory-400 dark:border-obsidian-800 hover:border-ink-400"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className={isActive ? `${style.text} font-bold` : "text-ink-400 dark:text-ivory-500 font-bold"}>
                      {item.step}
                    </span>
                    {idx < 5 && <span className="text-ink-300 dark:text-ivory-600 text-xs font-bold hidden lg:inline">→</span>}
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-ink-950 dark:text-white group-hover:text-electric transition-colors">
                    {item.name}
                  </h4>
                  <p className="font-sans text-[11px] text-ink-600 dark:text-ivory-400 mt-1 line-clamp-2 font-normal">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Dual Column: HACKATHONS & DSA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Hackathons Under Pressure (6 cols) */}
          <div className="lg:col-span-6 editorial-panel rounded-3xl p-6 sm:p-8 shadow-editorial-md relative border border-ivory-400 dark:border-obsidian-700">
            <div className="flex items-center justify-between pb-4 border-b border-ivory-300 dark:border-obsidian-800 font-mono text-xs font-bold">
              <div className="flex items-center gap-2 text-ink-900 dark:text-ivory-100">
                <Flame className="w-4 h-4 text-coral" />
                <span>UNDER PRESSURE, I BUILD</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-coral/10 text-coral text-[10px] font-bold">
                SIH // INTERNAL ×2
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-wider block font-bold">
                  EVENT SERIES
                </span>
                <h4 className="font-display font-extrabold text-2xl text-ink-950 dark:text-white mt-0.5">
                  {PORTFOLIO_DATA.hackathon.event}
                </h4>
                <div className="inline-block mt-2 px-3 py-1 rounded-md bg-ivory-200 dark:bg-obsidian-800 border border-ivory-300 dark:border-obsidian-700 font-mono text-xs text-ink-800 dark:text-ivory-200 font-semibold">
                  {PORTFOLIO_DATA.hackathon.participation}
                </div>
              </div>

              <p className="font-sans text-xs sm:text-sm text-ink-600 dark:text-ivory-300 leading-relaxed font-normal">
                {PORTFOLIO_DATA.hackathon.description}
              </p>

              <div className="p-4 rounded-2xl bg-ivory-100 dark:bg-obsidian-850 border border-ivory-300 dark:border-obsidian-800 font-sans text-xs text-ink-600 dark:text-ivory-300 shadow-editorial-sm">
                <span className="font-mono text-[10px] text-coral uppercase font-bold block mb-1">
                  CORE TAKEAWAY:
                </span>
                {PORTFOLIO_DATA.hackathon.takeaway}
              </div>
            </div>
          </div>

          {/* DSA & Problem Solving (6 cols) */}
          <div className="lg:col-span-6 editorial-panel rounded-3xl p-6 sm:p-8 shadow-editorial-md relative border border-ivory-400 dark:border-obsidian-700">
            <div className="flex items-center justify-between pb-4 border-b border-ivory-300 dark:border-obsidian-800 font-mono text-xs font-bold">
              <div className="flex items-center gap-2 text-ink-900 dark:text-ivory-100">
                <Terminal className="w-4 h-4 text-electric" />
                <span>TRAINING THE ENGINE</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-electric/10 text-electric dark:text-blue-400 text-[10px] font-bold">
                ALGORITHMIC RIGOR
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-wider block font-bold">
                  FOUNDATIONAL PRACTICE
                </span>
                <h4 className="font-display font-extrabold text-2xl text-ink-950 dark:text-white mt-0.5">
                  Data Structures & Algorithms
                </h4>
              </div>

              <p className="font-sans text-xs sm:text-sm text-ink-600 dark:text-ivory-300 leading-relaxed font-normal">
                {PORTFOLIO_DATA.dsa.description}
              </p>

              <div className="flex flex-col gap-2.5 mt-2">
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest font-bold">
                  VERIFIED LEETCODE PROFILES:
                </span>
                {PORTFOLIO_DATA.dsa.platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => AudioTelemetry.playClickSound()}
                    data-cursor="LEETCODE"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-obsidian-850 hover:border-ink-900 border border-ivory-300 dark:border-obsidian-800 transition-all font-mono text-xs group shadow-editorial-sm"
                  >
                    <span className="text-ink-900 dark:text-white font-bold group-hover:text-electric transition-colors">
                      {platform.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-ink-500 dark:text-ivory-400 group-hover:text-electric">
                      <span className="text-[11px] font-bold">@{platform.handle}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. LEARNING LOG & RESEARCH ARCHIVE */}
        <div>
          <div className="flex items-center justify-between mb-5 pb-2 border-b border-ivory-300 dark:border-obsidian-800">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink-900 dark:text-ivory-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet" />
              <span>03 // RESEARCH ARCHIVE & FORMAL CURRICULUM</span>
            </h3>
            <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 font-bold">VERIFIED STUDY TRACKS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.learningArchive.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl editorial-panel border border-ivory-400 dark:border-obsidian-700 shadow-editorial-sm hover:border-violet transition-all"
              >
                <div className="flex items-center justify-between pb-3 border-b border-ivory-300 dark:border-obsidian-800">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <span className="font-mono text-xs text-ink-950 dark:text-white font-extrabold">
                      {item.issuer}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-ivory-200 dark:bg-obsidian-800 text-ink-700 dark:text-ivory-300 font-bold uppercase">
                    {item.category}
                  </span>
                </div>

                <h4 className="font-display font-extrabold text-base sm:text-lg text-ink-950 dark:text-white mt-3">
                  {item.title}
                </h4>

                <ul className="mt-3 space-y-1.5">
                  {item.modules.map((m) => (
                    <li key={m} className="flex items-center gap-2 font-mono text-xs text-ink-600 dark:text-ivory-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-mint shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 4. THE WORKBENCH (GitHub Repositories) */}
        <div>
          <div className="flex items-center justify-between mb-5 pb-2 border-b border-ivory-300 dark:border-obsidian-800">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-ink-900 dark:text-ivory-100 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-ink-900 dark:text-white" />
              <span>04 // THE WORKBENCH (OPEN SOURCE REPOSITORIES)</span>
            </h3>
            <a
              href={PORTFOLIO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="font-mono text-xs text-electric dark:text-blue-400 hover:underline flex items-center gap-1 font-bold"
            >
              <span>VIEW GITHUB PROFILE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.workbench.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => AudioTelemetry.playClickSound()}
                data-cursor="CODE"
                className="p-6 rounded-3xl editorial-panel border border-ivory-400 dark:border-obsidian-700 hover:border-ink-900 dark:hover:border-white transition-all flex flex-col justify-between group shadow-editorial-sm"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] mb-2">
                    <span className="text-electric font-bold">{repo.type}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:text-electric transition-colors" />
                  </div>
                  <h4 className="font-mono font-bold text-base text-ink-950 dark:text-white group-hover:text-electric transition-colors">
                    {repo.name}
                  </h4>
                  <p className="font-sans text-xs text-ink-600 dark:text-ivory-300 mt-2 line-clamp-3 font-normal">
                    {repo.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-ivory-300 dark:border-obsidian-800 font-mono text-[10px] text-ink-500 dark:text-ivory-400 font-bold">
                  STACK: {repo.tech}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* 5. FORMAL EDUCATION */}
        <div className="p-6 sm:p-8 rounded-3xl editorial-panel border border-ivory-400 dark:border-obsidian-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-editorial-sm">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-white dark:bg-obsidian-800 border border-ivory-400 dark:border-obsidian-700 text-ink-900 dark:text-white shadow-editorial-sm">
              <GraduationCap className="w-6 h-6 text-electric" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest block font-bold">
                FORMAL ACADEMIC CREDENTIAL
              </span>
              <h4 className="font-display font-extrabold text-lg sm:text-xl text-ink-950 dark:text-white">
                {PORTFOLIO_DATA.education.institution}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-ink-600 dark:text-ivory-300 font-normal">
                {PORTFOLIO_DATA.education.degree} in {PORTFOLIO_DATA.education.major} • {PORTFOLIO_DATA.education.status}
              </p>
            </div>
          </div>
          <div className="font-mono text-xs text-right self-start sm:self-auto">
            <span className="text-ink-500 dark:text-ivory-400 block font-bold">EXPECTED GRADUATION</span>
            <span className="text-mint font-extrabold text-lg">
              {PORTFOLIO_DATA.education.expectedGraduation}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
