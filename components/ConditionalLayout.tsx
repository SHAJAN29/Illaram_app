"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import FloatingCTA from "./FloatingCTA";
import { Navbar } from "./nav";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isDashboard = pathname?.startsWith("/user/dashboard") || pathname?.startsWith('/admin');

  return (
    <>
      {children}
      {!isDashboard && (
        <>
        <Navbar />
          <FloatingCTA />
          <Footer />
        </>
      )}
    </>
  );
}
