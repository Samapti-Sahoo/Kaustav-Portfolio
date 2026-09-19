"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handlePrint = () => {
    AudioTelemetry.playClickSound();
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-950/70 dark:bg-black/80 backdrop-blur-md print:hidden"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 15 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-4xl bg-white dark:bg-obsidian-900 border border-ivory-400 dark:border-obsidian-700 rounded-3xl shadow-editorial-lg z-10 my-auto max-h-[90vh] flex flex-col overflow-hidden print:max-h-none print:border-none print:bg-white print:text-black print:shadow-none"
          >
            {/* Modal Header Actions (Screen Only) */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-ivory-300 dark:border-obsidian-800 bg-ivory-50 dark:bg-obsidian-950 font-mono text-xs print:hidden">
              <div className="flex items-center gap-2 text-ink-900 dark:text-ivory-100 font-bold">
                <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                <span>OFFICIAL CURRICULUM VITAE // VERIFIED</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  data-cursor="PRINT"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-ink-950 text-white dark:bg-white dark:text-ink-950 hover:bg-electric dark:hover:bg-electric dark:hover:text-white font-mono text-xs font-bold transition-all shadow-editorial-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT / SAVE PDF</span>
                </button>
                <button
                  onClick={() => {
                    AudioTelemetry.playClickSound();
                    onClose();
                  }}
                  className="p-1.5 rounded-lg hover:bg-ivory-200 dark:hover:bg-obsidian-800 text-ink-500 dark:text-ivory-400 transition-colors"
                  aria-label="Close Resume"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Resume Document */}
            <div className="p-6 sm:p-10 overflow-y-auto font-sans text-ink-800 dark:text-ivory-100 print:text-black print:overflow-visible space-y-7">
              {/* Header: Personal Info */}
              <div className="border-b border-ivory-300 dark:border-obsidian-800 pb-5">
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-ink-950 dark:text-white print:text-black tracking-tight">
                  {PORTFOLIO_DATA.personal.name}
                </h1>
                <p className="font-mono text-xs sm:text-sm text-electric dark:text-blue-400 print:text-blue-700 font-bold tracking-wider mt-1 uppercase">
                  {PORTFOLIO_DATA.personal.title}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-ink-600 dark:text-ivory-300 print:text-neutral-700 font-medium">
                  <a href={PORTFOLIO_DATA.links.email} className="hover:text-electric">
                    {PORTFOLIO_DATA.links.emailRaw}
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-electric"
                  >
                    LinkedIn: /in/kaustav-ghosh-hazra-2005k
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-electric"
                  >
                    GitHub: github.com/KAUSTAV-GH
                  </a>
                  <span>•</span>
                  <a
                    href={PORTFOLIO_DATA.links.leetcodePrimary}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-electric"
                  >
                    LeetCode: Kaustav_Ghosh_Hazra
                  </a>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-mono text-xs font-bold text-ink-900 dark:text-ivory-100 print:text-blue-800 uppercase tracking-widest border-b border-ivory-300 dark:border-obsidian-800 pb-1 mb-3">
                  EDUCATION
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div>
                    <h3 className="font-bold text-base text-ink-950 dark:text-white print:text-black">
                      {PORTFOLIO_DATA.education.institution}
                    </h3>
                    <p className="text-xs text-ink-600 dark:text-ivory-300 print:text-neutral-700">
                      {PORTFOLIO_DATA.education.degree} in {PORTFOLIO_DATA.education.major}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-ink-500 dark:text-ivory-400 print:text-neutral-600 mt-1 sm:mt-0 font-bold">
                    Expected: {PORTFOLIO_DATA.education.expectedGraduation}
                  </span>
                </div>
              </div>

              {/* Technical Skills Clusters */}
              <div>
                <h2 className="font-mono text-xs font-bold text-ink-900 dark:text-ivory-100 print:text-blue-800 uppercase tracking-widest border-b border-ivory-300 dark:border-obsidian-800 pb-1 mb-3">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-mono font-bold text-electric block">INTELLIGENCE & AI/ML:</span>
                    <p className="text-ink-600 dark:text-ivory-300 print:text-neutral-800 mt-0.5 font-normal">
                      Machine Learning, Deep Learning, Neural Networks (from scratch), CNN, Computer Vision, Supervised Learning, Feature Engineering, Model Optimization.
                    </p>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-violet block">LANGUAGES & COMPUTATION:</span>
                    <p className="text-ink-600 dark:text-ivory-300 print:text-neutral-800 mt-0.5 font-normal">
                      Python, NumPy, Pandas, Scikit-learn, Java, C, C++, JavaScript (ES6+).
                    </p>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-coral block">WEB DEVELOPMENT:</span>
                    <p className="text-ink-600 dark:text-ivory-300 print:text-neutral-800 mt-0.5 font-normal">
                      HTML5, CSS3, JavaScript DOM, Fetch API, RESTful Endpoints.
                    </p>
                  </div>
                  <div>
                    <span className="font-mono font-bold text-mint block">TOOLS & ENVIRONMENTS:</span>
                    <p className="text-ink-600 dark:text-ivory-300 print:text-neutral-800 mt-0.5 font-normal">
                      Git, GitHub, Streamlit, SQLite, VS Code.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Engineered Projects */}
              <div>
                <h2 className="font-mono text-xs font-bold text-ink-900 dark:text-ivory-100 print:text-blue-800 uppercase tracking-widest border-b border-ivory-300 dark:border-obsidian-800 pb-1 mb-3">
                  KEY PROJECTS
                </h2>
                <div className="space-y-3.5">
                  {/* Project 1: CNN */}
                  <div className="p-4 rounded-2xl bg-ivory-50 dark:bg-obsidian-850 border border-ivory-300 dark:border-obsidian-800 print:border-neutral-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <h3 className="font-bold text-sm text-ink-950 dark:text-white print:text-black">
                        CNN with Sigmoid — From Scratch
                      </h3>
                      <span className="font-mono text-[11px] text-electric dark:text-blue-400 print:text-blue-700 font-bold">
                        Python, NumPy, Scikit-learn, Matplotlib
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-ink-600 dark:text-ivory-300 print:text-neutral-700 list-disc list-inside font-normal">
                      <li>
                        Implemented complete Convolutional Neural Network forward & backward passes from mathematical scratch without TensorFlow or PyTorch.
                      </li>
                      <li>
                        Engineered 3x3 convolution, Sigmoid activation, 2x2 max-pooling, dense projection, softmax normalization, and analytical cross-entropy loss gradients.
                      </li>
                      <li>
                        Achieved <strong className="text-ink-950 dark:text-white print:text-black">95.28% test accuracy</strong> and 95.69% training accuracy on Scikit-learn Digits with ~0.43ms latency per sample.
                      </li>
                    </ul>
                  </div>

                  {/* Project 2: Weather */}
                  <div className="p-4 rounded-2xl bg-ivory-50 dark:bg-obsidian-850 border border-ivory-300 dark:border-obsidian-800 print:border-neutral-300">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <h3 className="font-bold text-sm text-ink-950 dark:text-white print:text-black">
                        Sky Sense Weather
                      </h3>
                      <span className="font-mono text-[11px] text-coral print:text-orange-800 font-bold">
                        HTML5, CSS3, JavaScript, Fetch API, REST API
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-xs text-ink-600 dark:text-ivory-300 print:text-neutral-700 list-disc list-inside font-normal">
                      <li>
                        Constructed a responsive, asynchronous meteorological telemetry interface consuming live REST weather endpoints.
                      </li>
                      <li>
                        Utilized native Fetch API with robust error handling and asynchronous lifecycle management with zero heavy UI dependencies.
                      </li>
                      <li>
                        Repository available at github.com/KAUSTAV-GH/Skysence-weather.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Hackathons & Problem Solving */}
              <div>
                <h2 className="font-mono text-xs font-bold text-ink-900 dark:text-ivory-100 print:text-blue-800 uppercase tracking-widest border-b border-ivory-300 dark:border-obsidian-800 pb-1 mb-3">
                  HACKATHONS & ALGORITHMIC PRACTICE
                </h2>
                <div className="space-y-2 text-xs text-ink-600 dark:text-ivory-300 print:text-neutral-800 font-normal">
                  <div className="flex items-start gap-2">
                    <span className="text-mint font-bold font-mono">▸</span>
                    <div>
                      <strong className="text-ink-950 dark:text-white">Smart India Hackathon (SIH) — Internal Rounds:</strong> Participated twice in internal collegiate evaluation rounds, designing architectures and prototyping functional systems under high pressure.
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-mint font-bold font-mono">▸</span>
                    <div>
                      <strong className="text-ink-950 dark:text-white">LeetCode Data Structures & Algorithms:</strong> Active problem-solver focusing on arrays, two-pointers, trees, graphs, and dynamic programming.
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Workshops */}
              <div>
                <h2 className="font-mono text-xs font-bold text-ink-900 dark:text-ivory-100 print:text-blue-800 uppercase tracking-widest border-b border-ivory-300 dark:border-obsidian-800 pb-1 mb-3">
                  WORKSHOPS & CERTIFICATIONS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-600 dark:text-ivory-300 print:text-neutral-700 font-normal">
                  <div>
                    <span className="font-bold text-ink-950 dark:text-white print:text-black block">Coursera:</span>
                    C for Everyone (Fundamentals, Structured Programming), C++ for C Programmers (Parts A & B).
                  </div>
                  <div>
                    <span className="font-bold text-ink-950 dark:text-white print:text-black block">Microsoft AI Series:</span>
                    Computer Vision, NLP, Generative AI, Speech AI, Information Extraction, Azure ML.
                  </div>
                  <div>
                    <span className="font-bold text-ink-950 dark:text-white print:text-black block">AI Workshops:</span>
                    AI Agents Architecture, Generative AI, Agentic AI Workflows.
                  </div>
                  <div>
                    <span className="font-bold text-ink-950 dark:text-white print:text-black block">App Development:</span>
                    Java for Android, Firebase Database & Auth, API Integration.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
