import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { FilmGrain } from "@/components/cinematic/FilmGrain";
import { CustomCursor } from "@/components/cinematic/CustomCursor";
import { TechBackgroundVideo } from "@/components/cinematic/TechBackgroundVideo";
import { FloatingSystemPanel } from "@/components/cinematic/FloatingSystemPanel";

export const viewport: Viewport = {
  themeColor: "#F7F7F3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Kaustav Ghosh Hazra — AI/ML Engineer & Systems Builder",
  description:
    "Cinematic engineering portfolio of Kaustav Ghosh Hazra. First-principles neural architectures from scratch, computer vision systems, and robust software engineering.",
  keywords: [
    "Kaustav Ghosh Hazra",
    "AI Engineer",
    "Machine Learning",
    "CNN from Scratch",
    "Deep Learning",
    "Software Developer",
    "Python",
    "NumPy",
    "Meghnad Saha Institute of Technology",
  ],
  authors: [{ name: "Kaustav Ghosh Hazra" }],
  creator: "Kaustav Ghosh Hazra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/KAUSTAV-GH",
    title: "Kaustav Ghosh Hazra — Systems Architecture & Engineering",
    description:
      "A cinematic interactive journey through low-level neural engineering, mathematical architectures from scratch, and robust software systems.",
    siteName: "Kaustav Ghosh Hazra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaustav Ghosh Hazra — AI/ML Engineer & Systems Builder",
    description:
      "A cinematic interactive experience showcasing neural architectures from scratch, computer vision, and systems engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen relative transition-colors duration-400 bg-ivory-100 text-ink-900 dark:bg-obsidian-950 dark:text-ivory-100">
        <ThemeProvider>
          <TechBackgroundVideo />
          <FilmGrain />
          <CustomCursor />
          <FloatingSystemPanel />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
