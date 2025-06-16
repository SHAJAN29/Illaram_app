
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
  title: "Ilaram Healthcare: Ayurvedic Wellness | Body, Skin, Hair & Pre-Wedding Transformation", // More descriptive and keyword-rich
  description: "Ilaram Healthcare is your all-in-one natural Ayurvedic partner for achieving a strong body, beautiful skin, and voluminous hair. Offering personalized wellness programs, expert consultations, and exclusive plans like the 100-day pre-wedding wellness transformation, ensuring you're 100% naturally fit.", // Comprehensive and includes key services/USPs
  keywords: [
    "Ayurvedic healthcare India",
    "natural wellness programs India",
    "holistic health solutions India",
    "Best natural health care Chennai", // Adjust for specific cities if needed, or keep generic for broader reach
    "Body transformation Ayurvedic",
    "Skin and hair treatment natural",
    "Fitness and nutrition plans online",
    "Ayurvedic remedies for glowing skin",
    "Natural hair fall solution India",
    "How to get fit before wedding India",
    "Pre-wedding detox plan Ayurvedic",
    "Marriage fit certificate Chennai",
    "Ayurvedic weight loss diet plan with nutritionist support",
    "Best Ayurvedic supplements for healthy skin and hair",
    "Personalized wellness subscription for men/women",
    // Keep your existing broader keywords if they are still relevant for your overall brand
    "healthcare",
    "wellness",
    "fitness",
    "nutrition",
    "personalized care",
    "health tracking",
    "ayurvedic", // Added this from your brand
    "natural products", // Added this from your brand
    "hair care",
    "skin care",
    "weight loss",
    "pre-wedding health",
    "Ilaram Healthcare",
    "Ilaram Healthcare wellness programs",
    "Ilaram Healthcare pre-wedding transformation",
    "Ilaram Healthcare Ayurvedic plans",
    "Ilaram Healthcare body skin hair transformation",
    "Ilaram Healthcare subscription plans",
    "full body transformation",
    "ayurvedic wellness",
  ],
  // You might also want to add openGraph data for social sharing previews
  openGraph: {
    title: "Ilaram Healthcare: Ayurvedic Wellness | Body, Skin, Hair & Pre-Wedding Transformation",
    description: "Ilaram Healthcare is your all-in-one natural Ayurvedic partner for achieving a strong body, beautiful skin, and voluminous hair. Offering personalized wellness programs, expert consultations, and exclusive plans like the 100-day pre-wedding wellness transformation.",
    url: "https://www.ilaramhealthcare.com", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: "https://www.ilaramhealthcare.com/images/ilaram-healthcare-og-image.jpg", // A visually appealing image for social shares
        width: 1200,
        height: 630,
        alt: "Ilaram Healthcare Ayurvedic wellness programs and pre-wedding transformation",
      },
    ],
  },
  // Add Twitter card metadata for Twitter previews
  twitter: {
    card: "summary_large_image",
    title: "Ilaram Healthcare: Ayurvedic Wellness | Body, Skin, Hair & Pre-Wedding Transformation",
    description: "Ilaram Healthcare is your all-in-one natural Ayurvedic partner for achieving a strong body, beautiful skin, and voluminous hair.",
    images: ["https://www.ilaramhealthcare.com/images/ilaram-healthcare-twitter-image.jpg"], // Optimize image for Twitter
  },
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