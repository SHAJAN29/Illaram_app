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


<Head>
  <title>Ilaram Healthcare | 100% Ayurvedic Wellness for Skin, Hair & Body</title>
  <meta name="description" content="Join Ilaram Healthcare for a complete wellness transformation. All-natural ayurvedic plans for skin, hair, weight loss & pre-wedding health—guided by experts." />
  <meta name="keywords" content="ayurvedic wellness, natural healthcare, pre-wedding plan, hair care, skin care, weight loss, Ilaram Healthcare, marriage fit certificate, holistic health India" />
  <meta name="author" content="Ilaram Healthcare" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content="Ilaram Healthcare | Ayurvedic Beauty & Fitness Plans" />
  <meta property="og:description" content="Get fit, glowing, and confident before your big day. 100% natural plans for skin, hair, and body with expert guidance." />
  <meta property="og:image" content="/img/ilaram-banner.jpg" />
  <meta property="og:url" content="https://www.ilaramhealthcare.com" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ilaram Healthcare | Complete Wellness Subscription" />
  <meta name="twitter:description" content="Transform your body, hair & skin with Ilaram's ayurvedic wellness programs. One subscription. Total care." />
  <meta name="twitter:image" content="/img/ilaram-banner.jpg" />

  <link rel="canonical" href="https://www.ilaramhealthcare.com" />
</Head>
        <title>Ilaram Healthcare | 100% Ayurvedic Wellness for Skin, Hair & Body</title>
        <meta name="description" content="Join Ilaram Healthcare for a complete wellness transformation. All-natural ayurvedic plans for skin, hair, weight loss & pre-wedding health—guided by experts." />



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
