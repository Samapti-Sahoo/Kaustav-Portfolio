"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeContext";

export const TechBackgroundVideo: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generative architectural computational geometry & caustic light network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Architectural geometric nodes & floating tensor planes
    interface GeometryNode {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseAlpha: number;
      color: string;
      phase: number;
    }

    const lightPalette = [
      "#2563EB", // Electric Blue
      "#7C3AED", // Violet
      "#18B894", // Mint
      "#5E626B", // Slate Ink
      "#3B82F6", // Sky Blue
    ];

    const darkPalette = [
      "#3B82F6",
      "#8B5CF6",
      "#34D399",
      "#94A3B8",
      "#60A5FA",
    ];

    const nodeCount = Math.min(Math.floor((width * height) / 28000), 38);
    const nodes: GeometryNode[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const palette = theme === "light" ? lightPalette : darkPalette;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22, // Slow, luxurious drift
        vy: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.35 + 0.15,
        color: palette[Math.floor(Math.random() * palette.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const isLight = theme === "light";

      // Draw subtle architectural tensor grid lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * (isLight ? 0.12 : 0.18);
            ctx.strokeStyle = isLight ? "#D9DBD6" : "#262B35";
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Intermittent subtle accent connectors
            if ((i + j) % 5 === 0 && dist < 120) {
              ctx.strokeStyle = nodes[i].color;
              ctx.globalAlpha = alpha * 0.6;
              ctx.lineWidth = 1;
              ctx.stroke();
            }

            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw floating geometric data points
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const pulse = Math.sin(frame * 0.015 + node.phase) * 0.2 + 0.8;
        const currentAlpha = node.baseAlpha * pulse * (isLight ? 0.7 : 0.85);

        ctx.fillStyle = node.color;
        ctx.globalAlpha = currentAlpha;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();

        // Subtle outer coordinate ring on select nodes
        if (node.size > 2.2) {
          ctx.strokeStyle = node.color;
          ctx.globalAlpha = currentAlpha * 0.4;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size + 4, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Daylight Volumetric Caustics / Architectural Ambient Light Fields */}
      <div
        className={`absolute -top-24 left-1/4 w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-colors duration-1000 ${
          theme === "light" ? "bg-electric/5" : "bg-electric/10"
        }`}
      />
      <div
        className={`absolute top-1/3 right-4 w-[650px] h-[650px] rounded-full blur-[170px] pointer-events-none transition-colors duration-1000 ${
          theme === "light" ? "bg-violet/4" : "bg-violet/8"
        }`}
      />
      <div
        className={`absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none transition-colors duration-1000 ${
          theme === "light" ? "bg-mint/4" : "bg-mint/8"
        }`}
      />
      <div
        className={`absolute top-2/3 right-1/4 w-[550px] h-[550px] rounded-full blur-[160px] pointer-events-none transition-colors duration-1000 ${
          theme === "light" ? "bg-coral/3" : "bg-coral/6"
        }`}
      />

      {/* Floating Canvas Computational Geometry */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Subtle Architectural Horizon Glow */}
      <div
        className={`absolute inset-x-0 top-0 h-40 pointer-events-none transition-opacity duration-700 ${
          theme === "light"
            ? "bg-gradient-to-b from-white/70 to-transparent opacity-80"
            : "bg-gradient-to-b from-obsidian-950/70 to-transparent opacity-60"
        }`}
      />
    </div>
  );
};
