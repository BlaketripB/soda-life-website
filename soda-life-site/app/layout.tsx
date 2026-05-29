import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BubbleBackground from "@/components/BubbleBackground";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soda Life — Payson's Fizziest Spot",
  description:
    "Dirty sodas, warm cookies, and bold fizz in Payson, Utah. Live the Soda Life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-cream font-body text-gray-900 antialiased min-h-screen flex flex-col">
        <BubbleBackground />
        <AnnouncementBanner />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <div className="relative z-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}
