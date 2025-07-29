'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const stats = [
  { value: 420, suffix: '+', label: 'Active Members', color: 'text-pink-500' },
  { value: 3.2, suffix: 'K+', label: 'Sessions Completed', color: 'text-pink-400' },
  { value: 27, suffix: 'M+', label: 'Calories Burnt', color: 'text-purple-500' },
]

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className={`text-5xl font-bold ${stat.color}`}>
              {inView && (
                <CountUp
                  end={stat.value}
                  duration={2}
                  decimals={stat.suffix.includes('.') ? 1 : 0}
                  suffix={stat.suffix}
                />
              )}
            </h3>
            <p className="text-sm font-semibold text-gray-500 mt-2 uppercase tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
