import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Luxury Editorial Light Palette
        ivory: {
          50: "#FAFAF7",
          100: "#F7F7F3",
          200: "#F1F1EC",
          300: "#EAEAE4",
          400: "#D9DBD6",
          500: "#B8BCB3",
        },
        ink: {
          950: "#0B0C0E",
          900: "#111318",
          800: "#1F232B",
          700: "#363A45",
          600: "#5E626B",
          500: "#878B94",
          400: "#B0B4BC",
        },
        // Editorial Accent System
        electric: {
          DEFAULT: "#2563EB",
          light: "#3B82F6",
          dim: "rgba(37, 99, 235, 0.08)",
          border: "rgba(37, 99, 235, 0.25)",
        },
        violet: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dim: "rgba(124, 58, 237, 0.08)",
          border: "rgba(124, 58, 237, 0.25)",
        },
        coral: {
          DEFAULT: "#F97360",
          light: "#FB923C",
          dim: "rgba(249, 115, 96, 0.08)",
          border: "rgba(249, 115, 96, 0.25)",
        },
        mint: {
          DEFAULT: "#18B894",
          light: "#34D399",
          dim: "rgba(24, 184, 148, 0.08)",
          border: "rgba(24, 184, 148, 0.25)",
        },
        // Dark Mode Obsidian Tokens
        obsidian: {
          950: "#07080A",
          900: "#0D0F13",
          850: "#13161C",
          800: "#1A1E26",
          700: "#262B36",
          600: "#383E4C",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 3s infinite",
        "subtle-fade": "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "editorial-sm": "0 2px 8px -2px rgba(17, 19, 24, 0.04), 0 1px 3px -1px rgba(17, 19, 24, 0.02)",
        "editorial-md": "0 10px 30px -10px rgba(17, 19, 24, 0.06), 0 4px 12px -2px rgba(17, 19, 24, 0.03)",
        "editorial-lg": "0 20px 45px -15px rgba(17, 19, 24, 0.08), 0 8px 20px -4px rgba(17, 19, 24, 0.04)",
        "editorial-glow-blue": "0 12px 35px -8px rgba(37, 99, 235, 0.15)",
        "editorial-glow-violet": "0 12px 35px -8px rgba(124, 58, 237, 0.15)",
        "editorial-glow-mint": "0 12px 35px -8px rgba(24, 184, 148, 0.15)",
        "editorial-glow-coral": "0 12px 35px -8px rgba(249, 115, 96, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
