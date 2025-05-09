
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Toaster } from "react-hot-toast";
import ConditionalLayout from "@/components/ConditionalLayout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Illaram Healthcare App",
  description: "Helping people prepare for marriage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* <Navbar /> */}
        <Toaster position="top-center" />
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}