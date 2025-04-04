import Image from "next/image";
import Home from "./home/page";
import { HomeService_section } from "../components/homeService_section";

// sm: 640px (small screens)

// md: 768px (tablets, medium screens)

// lg: 1024px (laptops, larger screens)

// xl: 1280px (desktops)

// 2xl: 1536px (extra-large screens)

export default function globs() {
  return (
    <main>
      <Home />
    </main>
  );
}
// Compare this snippet from app/Home/page.tsx:
