"use client";
import React from "react";
import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

// Refined Palette for Luxury & Minimalism
// Beige Base: #F5F3EF
// Soft Sage: #C9D6CF
// Gold Accent: #D4AF37
// Charcoal Text: #1C1C1C
// Coral CTA: #FF6B6B

const testimonials = [
  {
    quote:
      "Illaram helped me manage stress and stay sharp during fundraising.",
    author: "Startup Founder",
  },
  {
    quote:
      "Best investment I made for my health as an executive.",
    author: "CXO",
  },
];

const LandingPage = () => {
  return (
    <div className={`${montserrat.variable} font-[family-name:var(--font-montserrat)] text-[#1C1C1C] bg-[#F5F3EF]`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Health Automated.<br /> Performance Elevated.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-xl text-[#5A5A5A]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Effortless maintenance for busy founders — stay young, strong, and sharp with Illaram Healthcare.
        </motion.p>
        <motion.button
          className="mt-12 px-10 py-4 bg-[#FF6B6B] text-white text-lg font-medium rounded-full shadow-md hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
        >
          Start Your Free 7-Day Trial
        </motion.button>

        {/* Minimal Organic Accents */}
        <div className="absolute top-12 left-16 w-44 h-44 bg-[#C9D6CF] rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#D4AF37] rounded-full opacity-20 blur-3xl" />
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
          Your Pit Crew for Health
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
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
              className="rounded-2xl bg-white p-10 text-center border border-[#E8E5E0] hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[#5A5A5A]">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-32 px-6 md:px-12 flex flex-col md:flex-row items-center gap-20 max-w-7xl mx-auto">
        <div className="flex-1">
          <img
            src="https://source.unsplash.com/600x400/?founder,executive,wellness"
            alt="Lifestyle"
            className="rounded-3xl shadow-md"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            Focus deeper. Recover faster. Live fully.
          </h2>
          <p className="text-lg text-[#5A5A5A] mb-8">
            Illaram is your pit crew—so you can focus on winning in business and life, while we fine-tune your health, energy, and confidence.
          </p>
          <button className="px-8 py-3 bg-[#FF6B6B] text-white font-medium rounded-full shadow-md hover:opacity-90">
            Join Today
          </button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {["Assess", "Optimize", "Elevate"].map((step, i) => (
            <div key={i} className="p-10 bg-white rounded-2xl border border-[#E8E5E0]">
              <h3 className="text-2xl font-bold mb-4">{step}</h3>
              <p className="text-[#5A5A5A]">
                {step === "Assess" && "Doctor-led diagnostics & lifestyle mapping."}
                {step === "Optimize" && "Personalized fitness, nutrition & recovery plans."}
                {step === "Elevate" && "Continuous monitoring, performance tracking & growth."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {[
            {
              tier: "Essentials",
              price: "₹3,500",
              perks: [
                "Monthly doctor consultation",
                "Personalized fitness plan",
                "Monthly nutrition plan",
                "Basic supplement guidance",
                "WhatsApp/text support",
              ],
            },
            {
              tier: "Core Health+",
              price: "₹4,000",
              perks: [
                "Bi-weekly check-ins",
                "Updated plans every 2 weeks",
                "Supplement stack",
                "1 mental wellness consult/month",
                "App resources & habit tracker",
              ],
            },
            {
              tier: "Total Wellness Pro",
              price: "₹5,500",
              perks: [
                "Weekly consults",
                "Custom supplement kit",
                "24x7 health chat support",
                "Monthly health reports",
                "Exclusive webinars & priority support",
              ],
            },
          ].map((plan, i) => (
            <div key={i} className="rounded-2xl border border-[#E8E5E0] p-10 hover:shadow-xl transition bg-[#F5F3EF]">
              <h3 className="text-2xl font-bold mb-4">{plan.tier}</h3>
              <p className="text-xl font-semibold mb-6">{plan.price}/month</p>
              <ul className="space-y-3 text-[#5A5A5A]">
                {plan.perks.map((perk, j) => (
                  <li key={j}>• {perk}</li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 bg-[#FF6B6B] text-white rounded-full font-medium hover:opacity-90">
                Choose {plan.tier}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl border border-[#E8E5E0]">
              <p className="italic text-[#5A5A5A]">“{t.quote}”</p>
              <p className="mt-4 text-sm text-[#1C1C1C]">— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#F5F3EF] text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Our Philosophy</h2>
        <p className="text-lg text-[#5A5A5A] leading-relaxed">
          We believe health should be effortless for those building the future. Like a pit crew in Formula 1, we work behind the scenes, ensuring you perform at your absolute peak—without burnout, without distractions.
        </p>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Health?</h2>
        <button className="px-10 py-4 bg-[#FF6B6B] text-white text-lg font-medium rounded-full shadow-md hover:opacity-90">
          Start Your Free 7-Day Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#E8E5E0] text-center py-16">
        <p className="text-lg font-medium text-[#1C1C1C]">Automated Wellness for High Performers</p>
        <p className="mt-3 text-[#818286]">© 2025 Illaram Healthcare</p>
      </footer>
    </div>
  );
};

export default LandingPage;
