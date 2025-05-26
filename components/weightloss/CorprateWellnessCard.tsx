'use client';


import Head from 'next/head';

import { useRouter } from 'next/navigation';

export default function CorprateWellnessCard() {
  const customColor = {
    prim: "#97c25f",    // primary green
    sec: "gray-500",    // secondary gray
    bg: "#f4f7f0",      // soft background
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Stress Relieving Program | Illaram Healthcare</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="font-poppins text-gray-800"
        style={{ backgroundColor: customColor.bg }}
      >
        {/* Hero */}
   {/* Hero */}
<section
  className="flex flex-col justify-center items-center py-28 px-6 text-center text-white"
    style={{
    minHeight: '420px',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <h5 className="text-lg md:text-xl text-white/80 font-semibold mb-3 tracking-widest uppercase max-w-md mx-auto">
    Corporate Wellness
  </h5>

  <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight drop-shadow-lg">
    Stress Relieving Program
  </h1>

  <div className="mt-4 h-1 w-24 bg-white rounded mx-auto mb-8 opacity-70"></div>
  <p className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl font-light leading-relaxed px-2 md:px-0">
    Helping your team reduce stress, boost energy, and stay resilient with holistic wellness.
  </p>
  <button
    onClick={() => router.push('/servicees/corprateWellness')}
    className={`bg-[${customColor.prim}] text-white px-7 py-3 rounded-2xl mt-3 font-semibold text-2xl`}
  >
    CHECK
  </button>
</section>


</main>


    </>
  );
}
