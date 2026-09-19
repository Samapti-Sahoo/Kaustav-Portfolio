"use client";

import React, { useState, useEffect } from "react";
import { CinematicNav } from "@/components/navigation/CinematicNav";
import { Scene01Hero } from "@/components/scenes/Scene01Hero";
import { Scene02Philosophy } from "@/components/scenes/Scene02Philosophy";
import { Scene03EngineeringDNA } from "@/components/scenes/Scene03EngineeringDNA";
import { Scene04CnnHeroProject } from "@/components/scenes/Scene04CnnHeroProject";
import { Scene05SkySenseWeather } from "@/components/scenes/Scene05SkySenseWeather";
import { Scene06JourneyAndProof } from "@/components/scenes/Scene06JourneyAndProof";
import { Scene07ClosingCredits } from "@/components/scenes/Scene07ClosingCredits";
import { RecruiterDossierModal } from "@/components/modals/RecruiterDossierModal";
import { ResumeModal } from "@/components/modals/ResumeModal";

export default function Home() {
  const [isRecruiterHUDOpen, setIsRecruiterHUDOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeScene, setActiveScene] = useState("intro");

  // Track active scene via IntersectionObserver
  useEffect(() => {
    const sceneIds = ["intro", "profile", "systems", "proof", "journey", "contact"];
    const observers: IntersectionObserver[] = [];

    sceneIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveScene(id);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-transparent text-ink-900 dark:text-ivory-100 selection:bg-ink-950 selection:text-white dark:selection:bg-electric overflow-x-hidden">
      {/* Top Cinematic Navigation */}
      <CinematicNav
        activeScene={activeScene}
        onOpenRecruiterHUD={() => setIsRecruiterHUDOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Cinematic Film Sequence */}
      <Scene01Hero
        onOpenRecruiterHUD={() => setIsRecruiterHUDOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <Scene02Philosophy />

      <Scene03EngineeringDNA />

      <Scene04CnnHeroProject />

      <Scene05SkySenseWeather />

      <Scene06JourneyAndProof />

      <Scene07ClosingCredits
        onOpenRecruiterHUD={() => setIsRecruiterHUDOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Recruiter HUD Dossier Modal */}
      <RecruiterDossierModal
        isOpen={isRecruiterHUDOpen}
        onClose={() => setIsRecruiterHUDOpen(false)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Full Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </main>
  );
}
