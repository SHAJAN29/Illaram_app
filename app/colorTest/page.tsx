// Removed invalid import as it is not used in the code
"use client";

import { Service_card_details } from "@/constants/index";
import { CardDefault } from "@/small_components/service_card";
import ServiceSlider from "app/servicees/component/HeroSlider";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Import the icon (Heroicons v2)
import PriceCard from "app/servicees/component/priceCard";
const colorTest = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode preference is saved in localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);



  const programList = [
    {
      title: "❤️ 100days pre wedding program",
      description: "A 4-week journey into self-awareness and focus.",
      price: 199,
      popular: true,
      highlights: [
        "Live weekly coaching sessions",
        "Guided meditations and exercises",
        "Personalized progress tracking"
      ]
    },
    {
      title: '✨ Beauty Enhancement Program',
      description: 'Targeted skin & hair treatments for your big day.',
      price: 2999,
    },
    {
      title: '💪 Physical Conditioning Program',
      description: 'Sculpt your body with personalized training + diet.',
      price: 3499,
    },
    {
      title: '🧠 Mind-Prep Program',
      description: 'Get mentally and emotionally prepared for marriage.',
      price: 1999,
    },
  ];



  const params = useParams();
  console.log("Params: ", params);  // Log the params to see what it returns

  const username = params?.id;

  return (


        <div className="bg-gray-100">

    
          {/* Hero Section */}
          <section className="bg-cover bg-center bg-no-repeat text-white text-center py-28" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/photo-fitness-man-woman-workout-gym_763111-22826.jpg?w=996)' }}>
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">Transform Your Health, Transform Your Life</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Subscription-based healthcare and wellness optimization, for a radiant you.</p>
          <a href="#program" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold transition-transform transform hover:scale-105 hover:bg-yellow-500">Get Started Now</a>
        </div>
      </section>
    
          {/* 100-Day Pre-Wedding Transformation Program */}
          <section id="program" className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">💍 100-Day Pre-Wedding Transformation Program</h2>
        <p className="max-w-2xl mx-auto text-lg mb-12">Step into marriage as the most confident, radiant version of *you.* This program is designed to address common pre-wedding worries like weight gain, skin issues, and emotional stress.</p>

        <div className="bg-white p-8 rounded-3xl max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Getting Married Soon? Let's Be Real...</h3>
          <ul className="text-left space-y-4 text-lg text-gray-700">
            <li>🦲 Hair thinning or falling out?</li>
            <li>😩 Gained weight & low energy?</li>
            <li>🧕 Skin breaking out under stress?</li>
            <li>😣 Fertility worries?</li>
            <li>🫰 Tension in your relationship?</li>
          </ul>
          <p className="mt-6 text-lg italic text-gray-600">You’re not alone—and you don’t have to “just deal with it.”</p>
        </div>

        {/* Program Timeline */}
        <div className="mt-16 p-3">
          <h3 className="text-3xl font-semibold mb-12 text-gray-800">Your 100-Day Glow-Up Starts Here</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl  border border-gray-200  transition-all">
              <h4 className="font-semibold text-xl text-indigo-600 mb-4">Phase 1: Restore</h4>
              <ul className="text-left text-sm">
                <li>Full-body health check</li>
                <li>Gut reset, hormonal balance, & detox</li>
                <li>Personalized diet & supplement plan</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl  border border-gray-200  transition-all">
              <h4 className="font-semibold text-xl text-indigo-600 mb-4">Phase 2: Strengthen</h4>
              <ul className="text-left text-sm">
                <li>Custom fitness training</li>
                <li>Weight loss & sculpting plans</li>
                <li>Clean, organic supplements</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl  border border-gray-200   transition-all">
              <h4 className="font-semibold text-xl text-indigo-600 mb-4">Phase 3: Enhance</h4>
              <ul className="text-left text-sm">
                <li>Skin & hair revival treatments</li>
                <li>Anti-aging & glow-boosting routines</li>
                <li>Tailored beauty plans for both men & women</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 transition-all">
              <h4 className="font-semibold text-xl text-indigo-600 mb-4">Phase 4: Empower</h4>
              <ul className="text-left text-sm">
                <li>Emotional strength coaching</li>
                <li>Relationship prep & communication support</li>
                <li>Stress management & mental clarity techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    
          {/* Why Choose Ilaram Section */}
          <section id="services" className=" text-gray-600 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Why People Choose Ilaram</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <p>💯 **Guaranteed Results** – If you don’t see results, you get your **money back**.</p>
          <p>👨‍⚕️ **Expert Team** – Doctors, dietitians, fitness pros & wellness coaches on one mission: *your glow-up.*</p>
          <p>📱 **Tech-Powered Convenience** – Track your progress, chat with your coach & access everything in one simple app.</p>
        </div>
      </section>
    
          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">What Our Clients Are Saying</h2>
            <div className="max-w-2xl mx-auto">
              <p className="italic text-lg mb-4">"I felt like myself again—for the first time in years. My wedding day pictures? I looked & felt like a goddess."  
                — Aisha K., Bride
              </p>
              <p className="italic text-lg mb-4">"The confidence boost was wild strong body. Lost 9kg, got my energy back, sex drive, and my fiancée noticed every bit."  
                — Daniel T., Groom
              </p>
            </div>
          </section>
    
          {/* Contact Section */}
          <PriceCard/>
        </div>
      )
    }
    






















  //   <main className="">
  //   <div className="bg-[#fefbec] flex items-center justify-center min-h-screen p-10 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <div className="heroSection_Image text-left items-center justify-center gap-4 max-sm:mt-15 ">
  //       {" "}
  //       <h1 className="text-primary text-[#cc9c26] font-[poppins] mt-10">
  //         Are you Ready for {""}
  //         <span className="text-[#fa5151] font-extrabold">
  //           Marriage ?
  //         </span>{" "}
  //       </h1>
  //       <p className="text-gray-600 font-semibold capitalize pt-10 flex-wrap max-sm:text-[15px] lg:text-2xl max-sm:pt-5 ">
  //         present you'r most beautiful version with confidence infront of your
  //         partner😊...
  //       </p>
  //       <p className="text-sm max-sm:text-[13px] text-gray-500 mb-5 mt-5 italic">
  //         Trusted by 1,000+ individuals across India preparing for meaningful
  //         marriages...
  //       </p>
  //       <div className=" gap-5 mt-10 max-sm:mt-5">
  //         <Link
  //           href={"/signups"}
  //           className="btn btn-blue lg:mt-10 text-lg px-8 py-4 rounded-2xl  hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
  //         >
  //           Get Started
  //         </Link>
  //       </div>
  //     </div>
  //   </div>

  //   {/* <ScrollToTopButton /> */}
  // </main>




export default colorTest;
