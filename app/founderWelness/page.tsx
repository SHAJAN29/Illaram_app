'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-[#F5F7FA] text-[#0B1F33] font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative bg-gradient-to-b from-[#0B1F33] to-[#111111] text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Health Automated. Performance Elevated.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl mb-8 text-gray-200"
        >
          Effortless maintenance for busy founders—stay young, strong, and sharp.
        </motion.p>
        <Button className="bg-[#FF6B6B] hover:bg-[#e35b5b] text-white text-lg px-6 py-3 rounded-2xl shadow-lg">
          Start Your Free 7‑Day Trial
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            "Doctor‑Led Monitoring",
            "Personalized Fitness",
            "Nutrition That Fuels Growth",
            "Skin, Hair & Energy Optimization",
          ].map((feature, idx) => (
            <Card key={idx} className="rounded-2xl shadow-sm border border-[#D4AF37]/30">
              <CardContent className="p-6 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-[#A8E6CF] mb-4" />
                <h3 className="font-semibold text-lg text-[#0B1F33] mb-2">{feature}</h3>
                <p className="text-sm text-[#5A6978]">
                  Tailored to your lifestyle and long‑term health goals.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 px-6 bg-[#F5F7FA]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-8 text-[#0B1F33]"
          >
            Focus deeper. Recover faster. Live fully.
          </motion.h2>
          <p className="text-lg text-[#5A6978] max-w-2xl mx-auto">
            Imagine a life where your health is managed seamlessly in the background, giving you the freedom to scale your business, nurture relationships, and enjoy vitality every single day.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B1F33] mb-4">💳 Subscription Pricing Tiers</h2>
          <p className="text-lg text-[#5A6978]">Choose the plan that best fits your lifestyle and goals.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Essentials */}
          <Card className="rounded-2xl border border-[#D4AF37]/40 shadow-sm">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">🔹 Essentials</h3>
              <p className="text-xl font-semibold text-[#D4AF37] mb-4">₹3,500 / month</p>
              <ul className="text-sm text-[#5A6978] space-y-2 mb-6 text-left">
                <li>Monthly doctor consultation</li>
                <li>Personalized fitness plan</li>
                <li>Monthly nutrition plan</li>
                <li>Basic supplement guidance</li>
                <li>WhatsApp/text support</li>
              </ul>
              <p className="text-sm italic">Ideal for professionals beginning their wellness journey.</p>
            </CardContent>
          </Card>

          {/* Core Health+ */}
          <Card className="rounded-2xl border border-[#D4AF37]/40 shadow-sm">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">🔷 Core Health+</h3>
              <p className="text-xl font-semibold text-[#D4AF37] mb-4">₹4,000 / month</p>
              <ul className="text-sm text-[#5A6978] space-y-2 mb-6 text-left">
                <li>Everything in Essentials, plus:</li>
                <li>Bi-weekly check-ins (video/audio)</li>
                <li>Updated meal + fitness plan every 2 weeks</li>
                <li>Supplement stack (shipped or prescribed)</li>
                <li>1 mental wellness consult/month</li>
                <li>App access to resources & habit tracker</li>
              </ul>
              <p className="text-sm italic">Ideal for busy professionals optimizing lifestyle with expert support.</p>
            </CardContent>
          </Card>

          {/* Total Wellness Pro */}
          <Card className="rounded-2xl border border-[#D4AF37]/40 shadow-sm">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold mb-2">🟣 Total Wellness Pro</h3>
              <p className="text-xl font-semibold text-[#D4AF37] mb-4">₹5,500 / month</p>
              <ul className="text-sm text-[#5A6978] space-y-2 mb-6 text-left">
                <li>Everything in Core Health+, plus:</li>
                <li>Weekly consults (doctor/coach/therapist)</li>
                <li>Custom supplement kit delivered monthly</li>
                <li>24x7 health chat support</li>
                <li>Monthly deep-dive health reports</li>
                <li>Expert-led webinars & live Q&As</li>
                <li>Priority support</li>
              </ul>
              <p className="text-sm italic">Ideal for executives, high-performers, and chronic condition management.</p>
            </CardContent>
          </Card>
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">🔁 Add-ons (Optional)</h3>
          <ul className="text-[#5A6978] text-sm space-y-2">
            <li>Full blood panel test: ₹1,200 (partner labs)</li>
            <li>Continuous Glucose Monitoring (CGM): ₹2,500/month</li>
            <li>1:1 video therapy session: ₹800/session</li>
            <li>Wearable sync: ₹500/month</li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((t) => (
            <Card key={t} className="border border-[#D4AF37]/40 rounded-2xl">
              <CardContent className="p-6">
                <p className="italic text-[#0B1F33] mb-4">
                  “Illaram made my health maintenance effortless. I feel sharper at work and stronger in life.”
                </p>
                <span className="font-semibold text-[#D4AF37]">— Founder, Chennai</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[#0B1F33] text-white text-center">
        <p className="mb-4 text-[#D4AF37] font-semibold">
          Automated Wellness for High Performers
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
          <a href="#" className="hover:text-[#D4AF37]">LinkedIn</a>
          <a href="#" className="hover:text-[#D4AF37]">Contact</a>
        </div>
      </footer>
    </div>
  );
}
