import Image from "next/image";
import Home from "./home/page";
import Head from "next/head";

// sm: 640px (small screens)

// md: 768px (tablets, medium screens)

// lg: 1024px (laptops, larger screens)

// xl: 1280px (desktops)

// 2xl: 1536px (extra-large screens)

export default function globs() {
  return (
    <main>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=menu"
        />
      </Head>
      <Home />
    </main>
  );
}
// Compare this snippet from app/Home/page.tsx:
