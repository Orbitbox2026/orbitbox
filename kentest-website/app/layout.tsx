import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KenTest — AI-Powered Browser Testing for Coding Agents",
  description:
    "KenTest runs real browser tests against your live app and returns agent-optimized failure bundles with root causes, screenshots, and suggested fixes. Ship verified code, every time.",
  keywords: "AI testing, browser testing, CLI, coding agents, automated testing, test automation",
  openGraph: {
    title: "KenTest — AI-Powered Browser Testing",
    description: "Ship verified code with every commit. KenTest gives coding agents a feedback loop they can actually act on.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      style={{ background: "#07080f" }}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
