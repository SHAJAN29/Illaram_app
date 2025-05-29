'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const concerns = [
  {
    title: "Hormonal Imbalance",
    image: "https://img.freepik.com/premium-photo/cyberpunk-image-dna-futuristic-genetic-engineering-bioengineering_950002-191731.jpg",
    description:
      "We help restore hormonal harmony naturally to improve mood, energy, and overall beauty from within.",
  },
  {
    title: "Fertility Support",
    image: "https://static.israel21c.org/www/uploads/2016/01/shutterstock_251244184.jpg",
    description:
      "Fertility-focused nutrition, hormone regulation, and stress balance for optimal reproductive health.",
  },
  {
    title: "Fat Retention",
    image: "https://th.bing.com/th/id/R.a6adcc65ebd92ba05e4b54058020a97e?rik=9vtafy1WhVfrjg&riu=http%3a%2f%2fwww.urdupalace.com%2fwp-content%2fuploads%2f2016%2f11%2fmotapey-ka-ilaj-in-urdu.jpg&ehk=fI2AT9bQzaw25A%2bcK3D57jGhkydYNL0XNkThe9%2bpvh4%3d&risl=&pid=ImgRaw&r=0",
    description:
      "Targeted support for healthy metabolism, stubborn fat loss, and sustained body transformation.",
  },
  {
    title: "Skin Conditions",
    image: "https://www.healthycellsmagazine.com/wp-content/uploads/2023/04/0917_BHC_MOHS.jpg",
    description:
      "Clear your skin from the inside out — addressing acne, pigmentation, dullness and inflammation.",
  },
];

const BeautyEnhancement = () => {
  return (
    <main className="bg-[#f4f7f0] text-[#a9aba6] font-[poppins] py-12 px-6 sm:px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mt-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl max-sm:text-4xl font-bold text-[#94c159] mb-4">
            Beauty Enhancement, From Within
          </h1>
          <p className="text-lg text-[#a9aba6] max-w-2xl mx-auto leading-relaxed">
            True beauty begins with internal health. Illaram empowers you to address root causes affecting your confidence and appearance — through science, care, and consistency.
          </p>
        </header>

        {/* Health Concerns Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {concerns.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              <div className="p-6 md:w-1/2">
                <h3 className="text-xl font-semibold text-[#94c159] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6b6c6e] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            href="/signups"
            className="inline-block bg-[#94c159] text-white font-semibold px-8 py-4 rounded-full transition hover:bg-green-600"
          >
            Start Your Wellness Journey
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#f4f7f0] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#94c159] mb-4">
            This Isn’t Just a Glow-Up — It’s a Life-Up
          </h1>
          <p className="text-lg mb-6">
            100 Days to the Best Version of You — For the Wedding, and the Life After.
          </p>
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80"
            alt="Bride glowing"
            className="rounded-lg shadow-lg w-full max-w-xl mx-auto mb-6"
          />
          <button className="bg-[#94c159] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 transition">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Emotional Pain Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#94c159] mb-4">We Know the Pressure You're Under</h2>
        <p className="text-[#6b6c6e] max-w-2xl mx-auto mb-8">
          The dress, the photos, the expectations. And somewhere in the chaos, you’re trying to hold yourself together.  
          What if this time, you didn’t have to do it alone?
        </p>
        <img
          src="https://femina.wwmindia.com/content/2021/oct/stressed-out-bridethumb1634021482.jpg"
          alt="Stressed bride"
          className="rounded-lg shadow-md w-full max-w-3xl mx-auto"
        />
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-6 bg-[#f4f7f0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#94c159] mb-6">
            Not Just a Wedding Body — A Marriage-Ready Life
          </h2>
          <p className="text-[#6b6c6e] mb-6">
            We’re here to help you feel amazing — not just for a day, but for the journey beyond it.
          </p>
          <ul className="text-left text-[#6b6c6e] list-disc list-inside space-y-2 mb-8">
            <li>Feel energized and emotionally grounded</li>
            <li>Build a beautiful, healthy body — together with your partner</li>
            <li>Reduce stress and increase intimacy</li>
            <li>Shine with real confidence in every moment and every photo</li>
          </ul>
          <img
            src="https://www.rd.com/wp-content/uploads/2017/10/00_Daily-Habits-of-Couples-in-Healthy-Relationships_292955957-Monkey-Business-Images_FT.jpg"
            alt="Healthy couple"
            className="rounded-lg shadow w-full max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#94c159] mb-4">What You Get in 100 Days</h2>
        <p className="text-[#6b6c6e] mb-8">
          We’ve built a complete, supportive system for brides ready to thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            "AI-driven fitness & nutrition plans",
            "Skincare routines & beauty coaching",
            "Stress relief, meditation, & sleep support",
            "Intimacy & relationship wellness check-ins",
            "Photoshoot prep & styling tips",
          ].map((item, idx) => (
            <div key={idx} className="bg-[#f4f7f0] p-6 rounded-lg shadow text-left">
              <p className="text-[#94c159] font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#94c159] py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Become Her?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Start your transformation now. Look stunning, feel amazing, and walk into marriage strong, confident, and connected.
        </p>
        <button className="bg-white text-[#94c159] font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Join Now — Limited Spots
        </button>
      </section>
    </main>
  );
};

export default BeautyEnhancement;
