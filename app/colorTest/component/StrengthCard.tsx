'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const StrengthCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-between bg-white rounded-3xl shadow-xl px-8 py-10 md:py-12 md:px-16 max-w-6xl mx-auto"
    >
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Strength & Muscle Building.
        </h2>
        <p className="text-gray-600">
          Build strength, endurance, and lean muscle with expert-designed workouts.
          Increase strength, build lean muscle, and improve endurance with structured training.
          Your coach will design progressive workouts tailored to your fitness level and goals.
        </p>

        <ul className="space-y-3">
          {[
            "Custom strength programs",
            "Progressive overload training",
            "Focus on technique & injury prevention",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <FaCheckCircle className="text-[#ff6d99] mt-1" />
              <span className="text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/images/dumbbell.png" // ✅ make sure this path is correct in your `public/` folder
          alt="Dumbbell"
          width={300}
          height={300}
          className="w-[260px] md:w-[300px] object-contain"
        />
      </div>
    </motion.div>
  )
}

export default StrengthCard;
