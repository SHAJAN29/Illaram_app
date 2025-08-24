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
  "/images/Gemini_Generated_Image_w33ve8w33ve8w33v.png",
  "/images/Gemini_Generated_Image_e9otpne9otpne9ot.png",
  "/images/Gemini_Generated_Image_b71hjob71hjob71h.png",
  "/images/Gemini_Generated_Image_6p8pjk6p8pjk6p8p.png",
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
            alt="Hero Slide"
            className="absolute inset-0 w-full h-full object-cover"
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
          <motion.button
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
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900">
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
      <section className="py-32 px-6 md:px-12">
       <h2 className="text-4xl font-semibold text-center mb-6 text-black">
  Private Systems
</h2>
<p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-20">
  Unseen frameworks. Protocols. Built for leaders who can’t afford to break.
</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[ 
            {
              name: "Essentials",
              price: "₹3,500",
              features: [
                "Monthly doctor consultation",
                "Personalized fitness plan",
                "Monthly nutrition plan",
                "Basic supplement guidance",
                "WhatsApp/text support"
              ],
              ideal: "Professionals beginning their wellness journey, needing structure but not intensive hand-holding"
            },
            {
              name: "Core Health+",
              price: "₹4,000",
              features: [
                "Everything in Essentials",
                "Bi-weekly check-ins (video/audio)",
                "Updated meal + fitness plan every 2 weeks",
                "Supplement stack (shipped or prescribed)",
                "1 mental wellness consult/month",
                "App access to resources & habit tracker"
              ],
              ideal: "Busy professionals serious about optimizing their lifestyle with expert support"
            },
            {
              name: "Total Wellness Pro",
              price: "₹5,500",
              features: [
                "Everything in Core Health+",
                "Weekly consults (doctor/coach/therapist)",
                "Custom supplement kit delivered monthly",
                "24x7 health chat support",
                "Monthly deep-dive health reports",
                "Access to expert-led webinars & Q&As",
                "Priority support"
              ],
              ideal: "Executives, high-performers, and those managing chronic conditions or aggressive fitness goals"
            }
          ].map((plan, i) => (
            <div key={i} className="border border-gray-200 rounded-2xl p-10 bg-white shadow-sm transition">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-xl text-gray-700 mb-6">{plan.price} / month</p>
              <ul className="text-left mb-6 space-y-2 text-gray-600">
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mb-6">{plan.ideal}</p>
              <button className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900">
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


      {/* CTA Section */}
      <section className="py-32 mb-20 text-center ">
        <h2 className="text-3xl font-extrabold mb-2 text-black">Automate Your Wellness?</h2>
        <p className="text-sm text-gray-400 mb-5">Begin your protocol. Discover your care team. Experience the system.</p>
        <button className="px-7 py-2 bg-black text-white font-semibold rounded-full hover:bg-gray-900">
          Step Inside.
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black border-t border-gray-200 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 text-sm">
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-500">
              <li>support@luxewell.com</li>
              <li>Press</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Wellness</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Features</li>
              <li>Lifestyle</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Philosophy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-gray-500">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-12">
          “You chase the crown, we’ll handle the body that carries you.”
        </p>
        
      </footer>
    </div>
  );
};

export default LandingPage;
