import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import AIBackground from "@/components/AIBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pratham Bhat | AI & ML Engineer",
  description:
    "Portfolio of Pratham Bhat — AI engineer building production systems in NLP, computer vision, and MLOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface text-slate-100 antialiased`}
      >
        <AIBackground />
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_25%),linear-gradient(180deg,#050814_0%,#070b18_100%)]" />
        {children}
      </body>
    </html>
  );
}
