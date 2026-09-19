"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeContext";

export const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 380, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest("[data-cursor]") as HTMLElement | null;
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor");
        setCursorText(text);
        setIsHovered(true);
      } else if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setCursorText(null);
        setIsHovered(true);
      } else {
        setCursorText(null);
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const isLight = theme === "light";

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Magnetic Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center transition-all duration-150 ease-out"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorText ? 84 : isHovered ? 44 : 26,
          height: cursorText ? 84 : isHovered ? 44 : 26,
          borderColor: isHovered
            ? isLight ? "rgba(37, 99, 235, 0.45)" : "rgba(59, 130, 246, 0.6)"
            : isLight ? "rgba(17, 19, 24, 0.2)" : "rgba(255, 255, 255, 0.2)",
          borderWidth: 1,
          borderStyle: "solid",
          backgroundColor: cursorText
            ? isLight ? "rgba(255, 255, 255, 0.9)" : "rgba(14, 16, 21, 0.85)"
            : isHovered
            ? isLight ? "rgba(37, 99, 235, 0.05)" : "rgba(59, 130, 246, 0.1)"
            : "transparent",
          boxShadow: isHovered
            ? isLight ? "0 4px 16px rgba(17, 19, 24, 0.06)" : "0 4px 20px rgba(0, 0, 0, 0.4)"
            : "none",
          backdropFilter: cursorText ? "blur(8px)" : "none",
        }}
      >
        {cursorText && (
          <span className={`font-mono text-[9px] tracking-widest uppercase font-bold px-1 select-none ${
            isLight ? "text-electric" : "text-blue-400"
          }`}>
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Reticle Point */}
      <motion.div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full transition-transform duration-75 ${
          isLight ? "bg-ink-900" : "bg-white"
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 0.6 : 1,
        }}
      />
    </div>
  );
};
