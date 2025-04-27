"use client";

import { usePathname } from "next/navigation";

export default function ClientComponent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname ? pathname.startsWith("/dashboard") : false;

  return (
    <div>
      {isDashboardRoute ? children : <p>Global Layout Content</p>}
    </div>
  );
}