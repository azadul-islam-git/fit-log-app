import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";
import FitlogContextProvider from "./contexts/FitlogContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Log",
  description: "Fitness tracking application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="luxury"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <FitlogContextProvider>
          <Navbar />
          <Toaster position="top-right" />
          <main className="flex-1">{children}</main>
          <Footer />
        </FitlogContextProvider>
      </body>
    </html>
  );
}
