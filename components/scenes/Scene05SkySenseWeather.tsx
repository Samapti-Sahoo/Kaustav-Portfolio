"use client";

import React, { useState } from "react";
import { Sun, Wind, Droplets, ExternalLink, Globe2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { AudioTelemetry } from "@/components/cinematic/AudioTelemetry";

export const Scene05SkySenseWeather: React.FC = () => {
  const project = PORTFOLIO_DATA.projects[1];
  const [selectedCity, setSelectedCity] = useState<"Tokyo" | "London" | "San Francisco" | "Kolkata">("Kolkata");

  const weatherScenarios = {
    Kolkata: {
      temp: "29°C",
      condition: "Atmospheric Haze",
      humidity: "78%",
      wind: "12 km/h",
      skyGrad: "from-amber-500/10 via-orange-500/5 to-white dark:from-amber-500/15 dark:to-obsidian-900",
      accent: "text-coral",
    },
    Tokyo: {
      temp: "18°C",
      condition: "Clear Horizon",
      humidity: "54%",
      wind: "18 km/h",
      skyGrad: "from-electric/10 via-blue-400/5 to-white dark:from-electric/15 dark:to-obsidian-900",
      accent: "text-electric",
    },
    London: {
      temp: "14°C",
      condition: "Light Precipitation",
      humidity: "86%",
      wind: "24 km/h",
      skyGrad: "from-violet/10 via-purple-400/5 to-white dark:from-violet/15 dark:to-obsidian-900",
      accent: "text-violet",
    },
    "San Francisco": {
      temp: "16°C",
      condition: "Pacific Coastal Mist",
      humidity: "72%",
      wind: "21 km/h",
      skyGrad: "from-mint/10 via-teal-400/5 to-white dark:from-mint/15 dark:to-obsidian-900",
      accent: "text-mint",
    },
  };

  const activeWeather = weatherScenarios[selectedCity];

  return (
    <section
      id="weather-system"
      className="relative min-h-screen w-full flex flex-col justify-center py-28 px-4 sm:px-6 lg:px-8 border-t border-ivory-400/80 dark:border-obsidian-800 bg-ivory-100 dark:bg-obsidian-950 overflow-hidden"
    >
      {/* Scene Header */}
      <div className="max-w-6xl mx-auto w-full mb-14 relative z-10">
        <div className="flex items-center gap-3 font-mono text-xs text-coral dark:text-orange-400 font-bold tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
          <span>SCENE // 05 — ATMOSPHERIC TELEMETRY</span>
        </div>
        <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink-950 dark:text-white tracking-tight">
              SKY SENSE WEATHER
            </h2>
            <p className="font-sans text-sm text-ink-600 dark:text-ivory-300 mt-1 max-w-xl font-normal">
              {project.description}
            </p>
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => AudioTelemetry.playClickSound()}
            data-cursor="CODE"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-obsidian-900 hover:border-ink-900 dark:hover:border-white border border-ivory-400 dark:border-obsidian-700 font-mono text-xs text-ink-900 dark:text-ivory-100 font-bold transition-all self-start md:self-auto shadow-editorial-sm"
          >
            <span>GITHUB REPOSITORY</span>
            <ExternalLink className="w-3.5 h-3.5 text-coral" />
          </a>
        </div>
      </div>

      {/* Main Grid: Atmospheric Visual & Telemetry */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Left Column (7 cols): Dynamic Weather Simulation & Pipeline */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="editorial-panel rounded-3xl p-6 sm:p-8 shadow-editorial-md relative overflow-hidden border border-ivory-400 dark:border-obsidian-700">
            {/* HUD Status */}
            <div className="flex items-center justify-between pb-4 border-b border-ivory-300 dark:border-obsidian-800 font-mono text-xs font-bold">
              <div className="flex items-center gap-2 text-ink-900 dark:text-ivory-100">
                <Globe2 className="w-4 h-4 text-coral" />
                <span>RESTFUL METEOROLOGICAL TELEMETRY</span>
              </div>
              <span className="text-ink-500 dark:text-ivory-400 font-semibold">ASYNC FETCH API</span>
            </div>

            {/* City Selector */}
            <div className="mt-5 flex flex-col gap-2">
              <span className="font-mono text-[10px] text-ink-600 dark:text-ivory-400 tracking-wider font-bold">
                SELECT SIMULATED GEOGRAPHIC TARGET:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(["Kolkata", "Tokyo", "London", "San Francisco"] as const).map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      AudioTelemetry.playClickSound();
                      setSelectedCity(city);
                    }}
                    data-cursor="SELECT"
                    className={`py-2.5 px-3 rounded-xl font-mono text-xs font-bold transition-all text-center ${
                      selectedCity === city
                        ? "bg-ink-950 dark:bg-white text-white dark:text-ink-950 shadow-editorial-sm"
                        : "bg-white dark:bg-obsidian-900 text-ink-700 dark:text-ivory-300 hover:border-ink-900 border border-ivory-400 dark:border-obsidian-700"
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Weather Interface Card with Atmospheric Gradient */}
            <div className={`mt-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${activeWeather.skyGrad} border border-ivory-300 dark:border-obsidian-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-editorial-sm`}>
              <div>
                <span className="font-mono text-xs text-ink-600 dark:text-ivory-400 uppercase font-bold">
                  {selectedCity} // AMBIENT CONDITIONS
                </span>
                <div className="font-display font-extrabold text-5xl sm:text-6xl text-ink-950 dark:text-white mt-1">
                  {activeWeather.temp}
                </div>
                <div className={`flex items-center gap-2 font-mono text-sm font-bold mt-1 ${activeWeather.accent}`}>
                  <Sun className="w-4 h-4" />
                  <span>{activeWeather.condition}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5 font-mono text-xs w-full sm:w-auto">
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-obsidian-950/80 border border-ivory-300 dark:border-obsidian-800 shadow-editorial-sm">
                  <span className="text-ink-500 dark:text-ivory-400 text-[10px] block font-bold">HUMIDITY</span>
                  <div className="flex items-center gap-1.5 text-electric font-bold mt-0.5">
                    <Droplets className="w-3.5 h-3.5" />
                    <span>{activeWeather.humidity}</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/90 dark:bg-obsidian-950/80 border border-ivory-300 dark:border-obsidian-800 shadow-editorial-sm">
                  <span className="text-ink-500 dark:text-ivory-400 text-[10px] block font-bold">WIND SPEED</span>
                  <div className="flex items-center gap-1.5 text-coral font-bold mt-0.5">
                    <Wind className="w-3.5 h-3.5" />
                    <span>{activeWeather.wind}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Transition Pipeline Flow */}
            <div className="mt-6 pt-4 border-t border-ivory-300 dark:border-obsidian-800">
              <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase tracking-widest block mb-2 font-bold">
                DATA TELEMETRY PIPELINE:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {project.pipeline.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white dark:bg-obsidian-900 border border-ivory-300 dark:border-obsidian-700 text-ink-800 dark:text-ivory-200 font-semibold shadow-editorial-sm">
                      {step}
                    </span>
                    {idx < project.pipeline.length - 1 && (
                      <span className="text-ink-400 text-xs font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Storytelling & Architecture Breakdown */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="editorial-panel rounded-3xl p-6 sm:p-8 shadow-editorial-md border border-ivory-400 dark:border-obsidian-700">
            <h4 className="font-mono text-xs text-ink-900 dark:text-ivory-100 font-bold uppercase tracking-wider mb-4">
              ARCHITECTURAL OBJECTIVES
            </h4>

            <div className="space-y-4 font-sans text-xs text-ink-600 dark:text-ivory-300 font-normal">
              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase block font-bold">PROBLEM STATEMENT:</span>
                <p className="mt-0.5">{project.qa.problem}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase block font-bold">IMPLEMENTATION:</span>
                <p className="mt-0.5">{project.qa.howItWorks}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-ink-500 dark:text-ivory-400 uppercase block font-bold">KEY TAKEAWAY:</span>
                <p className="mt-0.5">{project.qa.learned}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-ivory-300 dark:border-obsidian-800 flex items-center justify-between font-mono text-[11px] font-semibold">
              <span className="text-ink-500 dark:text-ivory-400">STACK: VANILLA JS + FETCH</span>
              <span className="text-mint font-bold">100% LIGHTWEIGHT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
