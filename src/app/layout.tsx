import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Water Monitoring System | IoT & ML for Aquaculture | UEM Kolkata",
  description: "Innovative IoT and Machine Learning-based smart water monitoring system for sustainable aquaculture. Features real-time monitoring, automated control, and 90%+ prediction accuracy. Developed by UEM Kolkata.",
  keywords: [
    "Smart water monitoring",
    "IoT aquaculture",
    "Machine learning fish farming",
    "Water quality sensors",
    "Sustainable aquaculture technology",
    "Real-time water management",
    "Automated feeding system",
    "Solar-powered IoT",
    "UEM Kolkata",
    "Aquatic environment monitoring"
  ],
  authors: [
    { name: "Anup Dutta" },
    { name: "Debanjan Karmakar" },
    { name: "Kiran Das" },
    { name: "Muskan Parvin" },
    { name: "Poulami Sinha" },
    { name: "Pranati Mondal" },
    { name: "Sarmistha Pal" },
    { name: "Soumyojit Sen Gupta" },
    { name: "Subhajit Santra" },
    { name: "Suman Mishra" }
  ],
  openGraph: {
    title: "Smart Water Monitoring System for Aquatic Environments",
    description: "IoT and Machine Learning-Driven Solution for Sustainable Aquaculture - UEM Kolkata B.Tech Project",
    type: "website",
    locale: "en_US",
    siteName: "AquaSmart Research Project"
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Water Monitoring System | IoT & ML for Aquaculture",
    description: "Revolutionary aquaculture monitoring system with 90%+ ML accuracy, developed by UEM Kolkata students"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
