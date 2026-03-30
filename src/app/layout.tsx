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

import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "Vishal Bairwa | Product Manager & Digital Strategist",
  description: "Portfolio of Vishal Bairwa — Consulting Analyst at Deloitte & Co-founder at EduShots. Transitioning to Product roles with a proven track record of scaling platforms and driving growth.",
  metadataBase: new URL("https://vishalbairwa.vercel.app"),
  openGraph: {
    title: "Vishal Bairwa | Product Manager & Digital Strategist",
    description: "Transitioning to Product. Ex-Deloitte Analyst & Co-founder who scaled platforms to 5K+ MAU and cut latency by 95%.",
    url: "https://vishalbairwa.vercel.app",
    siteName: "Vishal Bairwa Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vishal Bairwa - Product Manager Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Bairwa | Product Manager & Digital Strategist",
    description: "Transitioning to Product. Ex-Deloitte Analyst & Co-founder who scaled platforms to 5K+ MAU and cut latency by 95%.",
    images: ["/og-image.png"],
  },
  keywords: ["Vishal Bairwa", "Product Manager", "APM", "Associate Product Manager", "Deloitte", "EduShots", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <AmbientBackground />
          <Header />
          <main className="flex flex-col min-h-screen pt-24 relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
