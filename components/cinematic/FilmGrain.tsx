"use client";

import React from "react";
import { useTheme } from "@/components/theme/ThemeContext";

export const FilmGrain: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* Procedural 35mm Fine Film Grain Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.025] dark:opacity-[0.04] mix-blend-overlay"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Atmospheric Soft Vignette */}
      <div 
        className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 ${
          theme === "light"
            ? "bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(17,19,24,0.02)_100%)]"
            : "bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(5,6,8,0.4)_80%,rgba(5,6,8,0.85)_100%)]"
        }`}
        aria-hidden="true"
      />

      {/* Subtle Hairline Anamorphic Framing */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 z-30 h-[1px] bg-gradient-to-r from-transparent via-ivory-400 dark:via-obsidian-700 to-transparent" />
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-30 h-[1px] bg-gradient-to-r from-transparent via-ivory-400 dark:via-obsidian-700 to-transparent" />

      {/* Architectural Corner Crop Marks */}
      <div className="pointer-events-none fixed top-4 left-4 z-30 w-3 h-3 border-t border-l border-ivory-400 dark:border-obsidian-700 hidden md:block" />
      <div className="pointer-events-none fixed top-4 right-4 z-30 w-3 h-3 border-t border-r border-ivory-400 dark:border-obsidian-700 hidden md:block" />
      <div className="pointer-events-none fixed bottom-4 left-4 z-30 w-3 h-3 border-b border-l border-ivory-400 dark:border-obsidian-700 hidden md:block" />
      <div className="pointer-events-none fixed bottom-4 right-4 z-30 w-3 h-3 border-b border-r border-ivory-400 dark:border-obsidian-700 hidden md:block" />
    </>
  );
};
