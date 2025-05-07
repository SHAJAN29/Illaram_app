'use client'
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
    <main className="bg-gradient-to-b from-white to-[#f9fbff] text-gray-800 font-[poppins] py-12 px-6 sm:px-5 md:px-10 lg:px-20">
      <div className="max-w-7xl mt-10">
        <header className="text-center mb-16">
          <h1 className="text-6xl max-sm:text-4xl font-bold text-illaramPrimary mb-4">
            Beauty Enhancement, From Within
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            True beauty begins with internal health. Illaram empowers you to address root causes affecting your confidence and appearance — through science, care, and consistency.
          </p>
        </header>

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
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <div className="text-center mt-16">
          <Link
            href="/signups"
            className="inline-block btn btn-blue font-semibold px-8 py-4 rounded-full transition"
          >
            Start Your Wellness Journey
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BeautyEnhancement;
