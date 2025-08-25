"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});
// Refined Palette for Luxury & Minimalism
const images = [ 

  "/images/Gemini_Generated_Image_hr2l3yhr2l3yhr2l.png",
  "/images/Gemini_Generated_Image_b71hjob71hjob71h.png",
  "/images/Gemini_Generated_Image_i4lb44i4lb44i4lb.png",
  "/images/Gemini_Generated_Image_v52sqkv52sqkv52s.png",
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-[#0B1F33] bg-white ${montserrat.variable} font-[family-name:var(--font-montserrat)]`}>  
      {/* Hero Section with slideshow */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {images.map((img, i) => (
<motion.img
    key={i}
    src={img}
    alt={`Hero Slide ${i + 1}`}
    className="absolute inset-0 w-full h-full object-cover"
    style={{ zIndex: i === current ? 1 : 0 }} // bring active slide on top
    initial={{ opacity: 0 }}
    animate={{ opacity: i === current ? 1 : 0 }}
    transition={{ duration: 1.2 }}
  />
        ))}
        <div className="relative mt-50 z-10  p-8 rounded-2xl">
          <motion.h1
            className="sm:text-4xl lg:text-8xl md:text-7xl font-light text-white leading-tight tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Health Automated.<br /> Life Elevated.
          </motion.h1>
          <motion.p
            className="mt-6 text-center text-lg md:text-xl max-w-2xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The throne is yours — if your health can keep up.
          </motion.p>
          <motion.button   onClick={() => window.open("https://wa.me/918778919303", "_blank")}
            className="cursor-pointer mt-8 max-sm:px-5 sm:py-2 px-10 py-4 bg-white text-black max-sm:text-sm text-lg font-semibold rounded-full hover:bg-gray-200 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Begin Your Protocol
          </motion.button>
        </div>
      </section>

    {/* Problem Section */}
<section className="py-32 px-6 md:px-12 bg-gray-50 text-center mb-20">
  <blockquote className="text-2xl md:text-3xl italic font-light text-black mb-8 max-w-3xl mx-auto">
    “All the wealth in the world means nothing without health.”  
    <span className="block mt-4 text-base font-normal text-gray-500">– Steve Jobs</span>
  </blockquote>
    <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mb-8 rounded-full"></div>

  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
    Too many visionaries conquer markets, build legacies, and earn the crown—only to lose the strength to wear it. 
    Health shouldn’t be the price of ambition. 
    The time to protect it is <span className="text-black font-medium">before it’s too late.</span>
  </p>
</section>


      {/* Features Section */}
      <section className="py-28 px-6 md:px-12">
        <h2 className="text-4xl font-semibold mb-4 text-center  text-black">
          Your Pit Crew for Health
        </h2>
        <p className="text-gray-500 mb-20 text-center">“Doctors, trainers, and guides working silently in the background — so you can stay in the front.”</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-6xl mx-auto">
          {[
            {
              title: "Doctor-led Monitoring",
              text: "Certified medical professionals—not influencers or fads.",
            },
            {
              title: "Personalized Fitness",
              text: "Custom plans that adapt to your lifestyle & schedule.",
            },
            {
              title: "Nutrition That Fuels",
              text: "Balanced, practical meals designed for energy & focus.",
            },
            {
              title: "Skin, Hair & Energy",
              text: "Root-cause optimization for long-term vitality.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-gray-200 p-10 text-left hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-black mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-32 px-6 md:px-12 flex flex-col md:flex-row items-center gap-20 max-w-6xl mx-auto">
        <div className="flex-1">
          <img
            src="/images/Gemini_Generated_Image_bwitdvbwitdvbwit.png"
            alt="Lifestyle"
            className="rounded-3xl shadow-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-black mb-8">
            Focus deeper. Recover faster. Live fully.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Illaram is your pit crew—so you can focus on winning in business and life, while we fine-tune your body, energy, and confidence every day.
          </p>
          <button   onClick={() => window.open("https://wa.me/918778919303", "_blank")} className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900">
            Discover Your Care Team
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-4 text-black">
         The Executive Protocol
        </h2>
        <p className="text-lg text-center text-gray-600 mb-20">A private system engineered to extend your edge.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Step 1: Assess",
              text: "We begin with diagnostics and a complete lifestyle evaluation.",
            },
            {
              title: "Step 2: Optimize",
              text: "Custom conditioning, nutrition, and supplement strategies deployed.",
            },
            {
              title: "Step 3: Elevate",
              text: "Ongoing monitoring, fine-tuning, and performance upgrades.",
            },
          ].map((step, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

    {/* Pricing Section */}
<section className="py-32 px-6 md:px-12 text-center">
  <h2 className="text-4xl font-semibold mb-6 text-black">
    Private Protocols
  </h2>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-20">
    Discreet systems. Precision frameworks. Engineered for leaders who cannot afford breakdowns.
  </p>

 <a 
  href="tel:7904118829" 
  className="inline-block px-8 py-3 mb-16 font-medium rounded-2xl shadow-md 
             text-white bg-gradient-to-r from-[#c9ab02] via-[#D4AF37] to-[#B8860B] 
             hover:opacity-90 transition mx-auto"
>
  Talk to Us
</a>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
    {[
      {
        name: "Essentials",
        price: "₹3,500",
        features: [
          "Monthly doctor consultation",
          "Personalized fitness plan",
          "Monthly nutrition protocol",
          "Foundational supplement guidance",
          "WhatsApp/text support"
        ],
        ideal:
          "For professionals initiating their wellness journey—structured, steady, minimal friction."
      },
      {
        name: "Core Health+",
        price: "₹4,000",
        features: [
          "Everything in Essentials",
          "Bi-weekly consults (video/audio)",
          "Adaptive meal + fitness recalibration every 2 weeks",
          "Supplement stack (delivered or prescribed)",
          "1 mental wellness consult/month",
          "Access to digital resources & habit tracker"
        ],
        ideal:
          "For busy professionals committed to optimizing performance with expert oversight."
      },
      {
        name: "Total Wellness Pro",
        price: "₹5,500",
        features: [
          "Everything in Core Health+",
          "Weekly consults (doctor/coach/therapist)",
          "Bespoke supplement kit delivered monthly",
          "24x7 direct health chat support",
          "Monthly precision health reports",
          "Access to expert-led masterclasses & Q&As",
          "Priority client privileges"
        ],
        ideal:
          "For executives, high-performers, and those requiring deep, continuous optimization."
      }
    ].map((plan, i) => (
      <div
        key={i}
        className="border border-gray-200 rounded-2xl p-10 bg-white shadow-sm hover:shadow-xl transition"
      >
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-xl text-gray-700 mb-6">{plan.price} <span className="text-sm">/ month</span></p>
        <ul className="text-left mb-6 space-y-2 text-gray-600">
          {plan.features.map((f, idx) => (
            <li key={idx}>• {f}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mb-6">{plan.ideal}</p>
        <button className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition">
          Experience the System
        </button>
      </div>
    ))}
  </div>
</section>


      {/* Testimonials Section */}
      <section className="py-32 px-6 md:px-12 bg-gray-50">
        <h2 className="text-4xl font-semibold mb-3 text-center  text-black">
          Trusted by High Performers
        </h2>
        <p className="text-gray-600 text-center text-lg leading-relaxed mb-20">Stories that aren’t shouted, but felt.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[ 
            { quote: "Illaram changed my life—my energy and focus skyrocketed.", name: "Ravi S.", role: "Tech Founder" },
            { quote: "The pit crew approach gave me back control of my health.", name: "Anita K.", role: "CXO, Finance" },
            { quote: "Seamless, professional, and truly personalized.", name: "Vikram P.", role: "Startup CEO" }
          ].map((t, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm">
              <p className="text-lg text-gray-700 mb-6">“{t.quote}”</p>
              <p className="font-semibold text-black">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

{/* Philosophy Section */}
<section className="py-32 px-6 md:px-12 flex flex-col justify-center h-screen">
  <h2 className="text-4xl font-extralight text-center mb-10 text-black">
    Founder’s Word
  </h2>
  <div className="max-w-4xl mx-auto text-center text-gray-600 text-lg leading-relaxed">
    <p>
      Every crown is heavy. Behind every leader, there must be a pit crew. 
      We built Illaram not to treat symptoms, but to protect thrones. 
      Health is the engine of longevity — our role is to keep it silent, 
      seamless, and unstoppable. 
    </p>
  </div>
</section>

{/* FAQ Section */}
<section className="py-32 px-6 md:px-12 bg-gray-50 text-[#111]">
 <div className="max-w-4xl mx-auto text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
    Behind the System
  </h2>
  <p className="text-lg text-gray-600">
    Essential clarity on how our protocols work — precise, timeless, and transparent.
  </p>
</div>


<div className="max-w-3xl mx-auto space-y-6">
  {[
    {
      q: "What defines the Illaram system?",
      a: "Illaram operates as a discreet, doctor-led engine for sustained vitality. Every protocol is designed to preserve strength, cognition, and resilience—executed seamlessly in the background, without demanding attention.",
    },
    {
      q: "Who benefits from these protocols?",
      a: "Tailored for founders, high-performing professionals, and those leading critical ventures. The system safeguards peak performance for those who cannot afford disruption.",
    },
    {
      q: "How are the protocols delivered?",
      a: "Upon enrollment, your plan is calibrated, and the system orchestrates your regimen month-to-month or annually. Every detail, from lifestyle guidance to supplementation, is automated—transparent and uncompromising.",
    },
    {
      q: "Can the plan be adjusted?",
      a: "Absolutely. You retain command. Pause, upgrade, or discontinue the protocol at any moment, maintaining full autonomy over your regimen.",
    },
    {
      q: "Are in-person visits required?",
      a: "None. Consultations, assessments, and regimen adjustments occur remotely, ensuring your health is optimized wherever you reside.",
    },
    {
      q: "What distinguishes Illaram supplements?",
      a: "Crafted monthly in precise, small batches, each formula fuses ancient wisdom with contemporary science. Designed for longevity, purity, and performance—never shortcuts or temporary fixes.",
    },
  ].map((item, i) => (
    <details
      key={i}
      className="border-b border-gray-200 pb-6 group"
    >
      <summary className="flex justify-between items-center cursor-pointer text-lg font-medium text-black">
        {item.q}
        <span className="text-gray-400 group-open:rotate-45 transition-transform">
          +
        </span>
      </summary>
      <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
    </details>
  ))}
</div>

</section>


      {/* CTA Section */}
      <section className="py-32 mb-20 text-center ">
        <h2 className="text-3xl font-extrabold mb-2 text-black">Automate Your Wellness?</h2>
        <p className="text-sm text-gray-400 mb-5">Begin your protocol. Discover your care team. Experience the system.</p>
        <button
  onClick={() => window.open("https://wa.me/918778919303", "_blank")}
  className="px-7 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition"
>
  Step Inside.
</button>

      </section>

   
    </div>
  );
};

export default LandingPage;
