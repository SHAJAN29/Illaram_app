'use client'
import Home from "./home/page";
import Head from "next/head";
import Loader from '../components/loader';
import { useEffect, useState } from "react";
import NoInternet from "@/components/Loder/NoInternet";


// sm: 640px (small screens)

// md: 768px (tablets, medium screens)

// lg: 1024px (laptops, larger screens)

// xl: 1280px (desktops)

// 2xl: 1536px (extra-large screens)


  
  export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time or wait for all resources if needed
      const timer = setTimeout(() => setLoading(false), 2000); // 2s simulated load
      return () => clearTimeout(timer);
    }, []);




  return (loading ? <Loader /> :
    <main>
      <div>
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
      <NoInternet />
      <Home />
      </div>
    </main>
  );
}
// Compare this snippet from app/Home/page.tsx:
