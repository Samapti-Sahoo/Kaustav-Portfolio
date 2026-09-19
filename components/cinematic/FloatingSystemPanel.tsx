"use client";

import React from "react";
import { Activity, Radio, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeContext";

export const FloatingSystemPanel: React.FC = () => {
  const { theme } = useTheme();

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.1 }}
      className="fixed right-4 bottom-5 z-30 hidden sm:block"
      aria-label="Floating system telemetry"
    >
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-2.5 rounded-2xl border border-ivory-400/40 dark:border-white/10 border-dashed"
        />
        <div className="floating-system-panel relative w-56 rounded-2xl px-4 py-3.5 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-ivory-400/50 dark:border-white/10 pb-2 font-mono text-[9px] tracking-[0.18em]">
            <span className="flex items-center gap-1.5 text-electric dark:text-blue-400 font-bold">
              <Radio className="h-3 w-3 animate-pulse" /> LIVE TELEMETRY
            </span>
            <span className="flex items-center gap-1 text-ink-600 dark:text-ivory-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-ping" /> 06.26
            </span>
          </div>
          <div className="flex items-end justify-between gap-3 pt-2.5">
            <div>
              <p className="font-mono text-[9px] tracking-widest text-ink-500 dark:text-ivory-500 font-semibold">
                ATMOSPHERE
              </p>
              <p className="mt-0.5 font-display text-xs font-bold text-ink-900 dark:text-ivory-100 tracking-wide">
                {theme === "light" ? "LIGHT / EDITORIAL" : "DARK / CINEMATIC"}
              </p>
            </div>
            <div className="flex items-end gap-1" aria-hidden="true">
              {[10, 16, 8, 20, 13, 24, 12].map((height, index) => (
                <motion.span
                  key={index}
                  animate={{ height: [height, Math.max(5, height - 6), height] }}
                  transition={{ duration: 1.6, delay: index * 0.09, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1 rounded-full bg-gradient-to-t from-electric to-violet"
                />
              ))}
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[9px] text-ink-600 dark:text-ivory-400 font-medium">
            <Activity className="h-3 w-3 text-mint" /> SCROLL ENGINE ACTIVE
            <Sparkles className="ml-auto h-3 w-3 text-coral" />
          </div>
        </div>
      </div>
    </motion.aside>
  );
};