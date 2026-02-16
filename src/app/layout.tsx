import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"; // Added Playfair_Display
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silver Yards | Real Estate Experts",
  description: "Silver Yards - Experts in Residential, Commercial, and Industrial Real Estate. Sale and Purchase of Houses, Flats, Plots.",
};

import BookingModal from "@/components/BookingModal";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BookingProvider } from "@/context/BookingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <BookingProvider>
          <Navbar />
          {children}
          <BookingModal />
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
