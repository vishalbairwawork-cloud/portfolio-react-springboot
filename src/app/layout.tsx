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

export const metadata: Metadata = {
  title: "Vishal Bairwa | Product Manager & Digital Strategist",
  description: "Portfolio of Vishal Bairwa, an Associate Product Manager bridging business strategy and user experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="flex flex-col min-h-screen pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
