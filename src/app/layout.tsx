import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ChatWidget } from "@/components/ui/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashik Tomy - Portfolio | AI/ML & Cyber Security",
  description: "A visually stunning AI & 3D Interactive Portfolio of Ashik Tomy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground relative selection:bg-neon-purple/30 selection:text-neon-cyan">
        <div className="bg-grain z-50"></div>
        <SmoothScroll>
          {children}
          <ChatWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
