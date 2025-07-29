'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ArrowUpRight } from "lucide-react"; // or use your own SVG
import { FaCheckCircle } from 'react-icons/fa';
const plans = [
  {
    name: 'Basic',
    price: { monthly: 2899, yearly: 28990 },
    features: [
      'Monthly health maintenance',
      'Basic diagnostics',
      'Skin & hair consultations',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: { monthly: 3499, yearly: 34990 },
    features: [
      'Everything in Basic',
      '1-on-1 doctor access',
      'Tailored diet + herbal kit',
      'Bi-weekly progress reviews',
    ],
    bestSeller: true,
  },
  {
    name: 'Elite',
    price: { monthly: 5499, yearly: 54990 },
    features: [
      'Everything in Pro',
      'Weekly private coaching',
      'Fertility & lifestyle therapy',
      'Priority medical scheduling',
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="w-full py-16 bg-[#fffefe] text-[#111111] font-[manrope]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-7xl max-md:text-5xl font-extrabold font-[manrope]">
          Choose the Plan That <span className="text-[#ff6d99]"> Moves You Forward</span>
        </h1>
        <p className="mt-4 text-lg text-[#666666]">
          Smart health subscription tailored for busy working professional.
        </p>

        {/* Toggle */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <span className="text-sm text-[#666666]">Monthly</span>
          <button
            onClick={() =>
              setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')
            }
            className={`w-14 h-7 cursor-pointer ${billingCycle==='yearly'?"bg-[#ff6d99]":"bg-[#a6adbf]"} rounded-full relative transition-colors`}
          >
            <motion.div
              layout
              className="w-6 h-6 bg-white rounded-full shadow-md absolute top-0.5 left-0.5"
              animate={{ x: billingCycle === 'yearly' ? 28 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          </button>
          <span className="text-sm text-[#666666]">Yearly</span>
        </div>
        <p className="text-xs mt-2 text-[#ff6d99] font-medium">
          Save up to 20% on yearly plans!
        </p>

     {/* Pricing Cards */}
     <motion.div layout className="">
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
  {plans.map((plan, idx) => (
  <motion.div
  key={plan.name}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: idx * 0.1 }}
  className={clsx(
    'rounded-xl p-8 text-left relative cursor-pointer bg-white transition-all duration-300 shadow-md hover:shadow-[0_0_0_2px]',
    plan.bestSeller
      ? 'hover:shadow-[#ff6d99]'
      : 'hover:shadow-[#a6adbf]'
  )}
>
      {plan.bestSeller && (
        <div className="absolute top-4 right-4 bg-[#ff6d99] text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          BEST SELLER
        </div>
      )}

      <h3
        className={clsx(
          'text-xl font-semibold',
          plan.bestSeller ? 'text-[#ff6d99]' : 'text-[#a6adbf]'
        )}
      >
        {plan.name}
      </h3>

      <div className="mt-4 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={clsx(
              'text-4xl font-bold',
              plan.bestSeller ? 'text-[#ff6d99]' : 'text-[#a6adbf]'
            )}
          >
            ₹{plan.price[billingCycle].toLocaleString()}
            <span className="text-sm font-medium text-[#666666]"> {billingCycle === 'monthly' ? '/month' : '/year'}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      <ul className="space-y-2 text-[#666666] text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className={` ${plan.bestSeller ? "text-[#ff6d99]":"text-[#a6adbf]"} mt-1`}> <FaCheckCircle /></span> {feature}
          </li>
        ))}
      </ul>

   <motion.button
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className={clsx(
    `group flex items-center justify-between gap-10 mt-5 cursor-pointer
    px-6 py-3 rounded-full text-white font-semibold
    transition-all duration-300 relative overflow-hidden backdrop-blur-lg`,
    plan.bestSeller ? "bg-[#ff6d99]/90 shadow-[0_8px_30px_rgba(255,109,153,0.4)]" 
                    : "bg-[#a6adbf]/90 shadow-[0_8px_30px_rgba(166,173,191,0.3)]"
  )}
>
  <span className="text-sm md:text-base drop-shadow-md">Get Started</span>
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-black transition-all group-hover:rotate-45">
    <ArrowUpRight size={16} />
  </span>

  {/* Shine effect */}
  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</motion.button>

    </motion.div>
  ))}
</div>

</motion.div>
      </div>
    </section>
  );
}
