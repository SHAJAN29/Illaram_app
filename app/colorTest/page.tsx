"use client";
import Head from "next/head";
import PricingSection from "./testPricing/PricingSection";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  FaBriefcase,
  FaCheckCircle,
  FaRupeeSign,
  FaSmileBeam,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import StrengthCard from "./component/StrengthCard";
import StatsSection from "./component/StatsSection";

import { FaChevronDown } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import {
  MdOutlineHealthAndSafety,
  MdOutlineQuiz,
  MdSubscriptions,
} from "react-icons/md";
import { easeInOut } from "framer-motion";



const problems = [
  {
    label: "Professionals skip self-care",
    icon: <FaBriefcase className="text-[#ff6d99] text-2xl" />,
  },
  {
    label: "Caregivers silently burn out",
    icon: <FaSmileBeam className="text-[#ff6d99] text-2xl" />,
  },
  {
    label: "No time for consistency",
    icon: <MdOutlineHealthAndSafety className="text-[#ff6d99] text-2xl" />,
  },
  {
    label: "Healthcare costs are rising",
    icon: <FaRupeeSign className="text-[#ff6d99] text-2xl" />,
  },
];

const journeySteps = [
  {
    title: "Step 1: Personalized Assessment",
    desc: "Take 5-min health check on one and one counsltation.",
  },
  {
    title: "Step 2: Get Assigned to Experts",
    desc: "Get personalized monthly plan,Based on your data, we build a tailored program including diet, fitness, and detox plans.",
  },
  {
    title: "Step 3: Track Your Progress",
    desc: "Enjoy effortless care — we handle the rest ,You’re assigned a personal care doctor to monitor your progress and adjust protocols.",
  },
];
const testimonials = [
  {
    name: "Priya V.",
    date: "May 3, 2024",
    source: "Illaram Client",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=867&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "From Stress to Strength!",
    text: `Before Illaram, I felt lost juggling work, home, and my health. Their personalized approach didn’t just change my routine—it changed my life. I finally feel seen, supported, and strong.`,
  },
  {
    name: "Arjun R.",
    date: "May 22, 2024",
    source: "Illaram Client",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "A System That Thinks For Me!",
    text: `Illaram’s health automation feels like magic. I don’t have to remember when to take care of myself — it reminds me, guides me, and makes it effortless. Game-changer for any busy professional.`,
  },
  {
    name: "Meena K.",
    date: "June 1, 2024",
    source: "Illaram Client",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "My Wedding Glow Was Real!",
    text: `I joined Illaram’s bridal transformation plan 100 days before my wedding. It wasn’t just about looking good — I felt confident, calm, and healthy from the inside out. Guests noticed. I smiled brighter.`,
  },
  {
    name: "Dr. Shalini R.",
    date: "June 18, 2024",
    source: "Healthcare Partner",
    stars: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "Finally, Proactive Healthcare That Works!",
    text: `As a doctor, I’ve seen too many patients ignore their health. Illaram bridges the gap — offering sustainable wellness, not just quick fixes. It’s personal, practical, and powerful.`,
  },
  {
    name: "Naveen M.",
    date: "July 9, 2024",
    source: "Illaram Client",
    stars: 4,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
    title: "The Only Subscription I Actually Use!",
    text: `I subscribed thinking I’d quit in a month. Three months in, I’ve lost fat, gained energy, and finally feel in control of my health. Worth every rupee.`,
  },
];

const programs = [
  {
    title: "Full Body Maintenance",
    description:
      "Monthly health routines designed for working professionals to stay fit, sharp, and active with zero burnout.",
    features: [
      "Automated assessments",
      "Personalized wellness plans",
      "24/7 care team support",
    ],
  },
  {
    title: "Wedding Wellness Plan",
    description:
      "A 100-day journey to become the most confident, glowing version of yourself before your big day.",
    features: [
      "Skin, hair & fertility care",
      "Body transformation",
      "Doctor-led programs",
    ],
  },
];
const faqs = [
  {
    question: "What is Illaram?",
    answer:
      "Illaram is India’s first personalized health automation system — a subscription-based platform that manages your body like a machine through consistent care, expert insights, and holistic wellness protocols.",
  },
  {
    question: "Who is Illaram for?",
    answer:
      "Illaram is built for busy professionals, founders, and caregivers who often neglect their own health. We ensure they stay fit, sharp, and strong — physically, mentally, and emotionally.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "You subscribe to a monthly or annual plan. Based on your health assessment, we assign a personal wellness guide who curates and automates your care plan including nutrition, yoga, diagnostics, and more.",
  },
  {
    question: "Is any equipment required?",
    answer:
      "No. Our protocols are personalized. Whether you're at home, in office, or traveling — Illaram adapts to your environment and delivers health in your hands, hassle-free.",
  },
  {
    question: "Is this for people with no health issues?",
    answer:
      "Yes. Illaram is *preventive-first*. Even if you have no existing illness, we help you maintain peak performance and appearance through structured care — just like you service your car before it breaks down.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut, // ✅ Valid easing function, // This replaces "ease: 'easeOut'"
    },
  },
};

const AutomatedWellness = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Illaram Healthcare</title>
        <meta
          name="description"
          content="India’s first health automation platform for working professionals"
        />
      </Head>

      <main className="bg-[#fffefe] text-[#111111] font-[manrope]">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center text-white"
          style={{
            backgroundImage:
              'url("/images/Gemini_Generated_Image_totmadtotmadtotm.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative z-10 text-center px-4 md:px-8"
          >
            <h1 className="text-9xl max-md:text-5xl max-lg:text-6xl font-black leading-tight drop-shadow-md">
              Wellness, Automated. <br />
              <span className="text-[#ff6d99]">Without the Hassle.</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-semibold text-white/90">
              Personalized care. Automated wellness. One subscription.
            </p>
            <p className="mt-2 text-sm md:text-base text-white/80 max-w-xl mx-auto">
              Take back your health without losing time—our complete wellness
              subscription empowers you with zero friction.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-6 py-3 rounded-xl bg-[#ff6d99] text-white hover:bg-pink-500 transition shadow-lg backdrop-blur-sm bg-opacity-70"
            >
              Start Your Journey
            </motion.button>
            <a href="tel:8778919303">
              <p className="mt-4 text-sm text-[#ff6d99] hover:underline cursor-pointer">
                Free consultation
              </p>
            </a>
          </motion.div>
        </section>
        {/* Why Illaram */}
        <section className="bg-[#fffefe] py-24 gap-10 px-6 text-center">
          <p className="text-[#a6adbf]">Why Ilaram</p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-6"
          >
            Struggling <span className="text-[#ff6d99]">Professionals</span>, We
            Got You.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#666666] mb-14 max-w-2xl mx-auto"
          >
            You handle careers, deadlines, caregiving. But when did you last
            check in on yourself? Illaram gives back your power — no guilt, no
            guesswork.
          </motion.p>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {problems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
              >
                <div className="mb-4">{item.icon}</div>
                <p className="text-sm font-semibold text-[#111111]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

   

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button
              className="bg-[#ff6d99] text-white text-sm md:text-base px-6 py-3 rounded-full hover:bg-[#e85c87] transition"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onClick={()=> {
                window.location.href = "tel:8778919303"; // Replace with your booking link

              }   }
            >
              I Want to Know More
            </Button>
          </motion.div>
        </section>
        {/* solution or Services Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-[#fff3f6] text-center">
          <p className="text-[#a6adbf]">Our Offering</p>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="text-5xl max-md:text-5xl font-extrabold mb-16 text-[#111]"
          >
            Personalized <span className="text-[#ff6d99]">Healthcare</span>
          </motion.h2>
          <motion.p className="text-lg text-[#666666] max-w-2xl mx-auto mb-6">
            A complete subscription to keep your body, mind, and appearance in
            peak condition — while you stay focused on your goals.
          </motion.p>
        <motion.div
  initial="hidden"
  whileInView="visible"
  variants={fadeUp}
  viewport={{ once: true }}
  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
>
  {[
    {
      icon: "💪",
      title: "Physical Fitness",
      info: "Customized fitness plan as per your liking — strength training, yoga, Zumba, and more.",
    },
    {
      icon: "🥗",
      title: "Nutrition + Herbal Support",
      info: "Personalized and adaptive nutrition plan with herbal supplements for inner balance.",
    },
    {
      icon: "🧖",
      title: "Skin & Hair Detox",
      info: "Natural detox routines and treatments to enhance skin glow and hair health.",
    },
    {
      icon: "🧘‍♀️",
      title: "Stress Management & Meditation",
      info: "Mindfulness sessions to reset your nervous system and reduce cortisol naturally.",
    },
    {
      icon: "👨‍⚕️",
      title: "Direct Medical Oversight",
      info: "One-on-one check-ins with our certified wellness doctors — no guesswork.",
    },
    {
      icon: "📊",
      title: "Monthly Progress Check‑ins",
      info: "Visual reports, habit tracking, and routine upgrades every 30 days.",
    },
  ].map((svc, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="bg-[#fffefe]/30 border border-[#ff6d99]/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="text-3xl mb-4">{svc.icon}</div>
      <h3 className="text-xl font-bold text-[#111111] mb-2 leading-tight">
        {svc.title}
      </h3>
      <p className="text-sm text-[#666666] leading-relaxed">
        {svc.info || "Comprehensive care designed for your lifestyle."}
      </p>
    </motion.div>
  ))}
</motion.div>

        </section>

        {/* fitness journey */}
        <section className="py-24 px-6 bg-[#fffefe] text-gray-900">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#a6adbf]">How it works</p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-5xl font-bold mb-4"
            >
              Your Fitness <span className="text-[#ff6d99]">Journey </span>
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-lg text-[#666666] mb-12 max-w-2xl mx-auto"
            >
              A complete transformation experience — designed by experts, driven
              by data, and built for your lifestyle.
            </motion.p>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center items-stretch">
              {journeySteps.map((step, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={fadeUp}
                  className="flex-1 min-w-[260px] max-w-sm bg-white shadow-md border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* countup */}
        <section>
          <StatsSection />
        </section>

        {/* Final CTA */}
   <section
      className="relative py-32 px-6 text-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/Gemini_Generated_Image_oh7a2goh7a2goh7a.png')", // Replace with actual URL
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10 " />

      {/* CTA Content */}
      <div className="relative z-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-4xl font-bold text-[#ffff] mb-6"
        >
          Your comeback starts here.
        </motion.h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            window.location.href = "tel:8778919303"; // Replace with your booking link
            }    }
          className="bg-[#ff6d99] text-white px-8 py-4 rounded-full hover:bg-[#ff4f84] transition duration-300"
        >
          Reserve Your Slot
        </motion.button>
      </div>
    </section>

        {/* testimonial */}

       
          <section className="bg-[#fdfdff] overflow-hidden py-20 px-6 text-center relative">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#111] mb-5"
            >
              What Our <span className="text-[#ff6d99]">Subscribers</span> Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-[#666] mb-5 max-w-2xl mx-auto"
            >
               Our team of experts handles everything so
 subscribers can focus on living their best life building
 careers and caring for families. Join the community of empowered professionals. 
            </motion.p>

            <div className="relative py-10 overflow-hidden">
              <div className="flex w-max animate-marquee gap-6">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl shadow-md text-left p-6 w-[280px] sm:w-[320px] min-w-[280px] flex-shrink-0"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-sm text-gray-500">
                          {t.date} on{" "}
                          <span className="text-[#ff6d99]">{t.source}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-yellow-400 mb-2">
                      {"★★★★★".slice(0, t.stars)}
                    </div>
                    <h3 className="font-semibold text-lg mb-1 leading-tight">
                      {t.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-snug line-clamp-4">
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-emerald-500">
                ★{" "}
                <span className="text-gray-700 uppercase text-[15px]">
                  Trust score
                </span>
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                Excellent <strong>4.9</strong> out of 5
              </p>
            </div>
          </section>
      
        {/* YOUR FITNESS JOURNEY */}
        {/* Pricing */}
        <PricingSection />

        {/* FNQ */}

        <section className="py-20 bg-[#f9f9fc] px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-[#ff6d99] to-[#ffb2c5] rounded-3xl"
              />
              <Image
                src="/images/Gemini_Generated_Image_i9mucni9mucni9mu.png"
                alt="Wellness Image"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-lg object-cover"   />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#111] mb-2">
                Questions?
              </h2>
              <h3 className="text-3xl font-bold text-pink-500 mb-6">
                We've got answers.
              </h3>
              <p className="text-gray-600 mb-8">
                Find answers to the most common questions about Ilaram,
                including features, pricing, and how to get started.
              </p>

              <div className="space-y-4 ">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border cursor-pointer border-gray-300 rounded-xl"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="flex items-center cursor-pointer justify-between w-full p-4 text-left"
                    >
                      <span className="font-medium text-lg">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {activeIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="px-4 pb-4 text-gray-700"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


{/* final cta */}

<section
  className="relative bg-fixed bg-center bg-cover text-center px-6 py-20 text-white"
  style={{
    backgroundImage: "url('images/view-man-practicing-mindfulness-yoga-fantasy-setting (2).jpg')", // Replace with actual image path or external link
  }}
>
  <div className="absolute inset-0 bg-[#ff6d99]/80 backdrop-brightness-90 z-0"></div>

  <div className="relative z-10">
    <motion.h2
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-bold"
    >
      Simple. Accessible. Affordable.
    </motion.h2>
    <p className="mt-4 text-lg max-w-xl mx-auto">
      Automate your health. Focus on your dreams.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        window.location.href = "tel:8778919303"; // Replace with your booking link
      }}
      className="mt-8 px-6 py-3 capitalize bg-white text-[#111111] font-semibold rounded-2xl shadow-xl"
    >
      write your story
    </motion.button>
  </div>
</section>
      </main>
    </>
  );
};

export default AutomatedWellness;c:

// {/* <section>

// <section className="relative py-20 px-6 sm:px-10 md:px-20 bg-[#fffefe] overflow-hidden">
//       {/* Marquee background text */}
//       <motion.div
//         className="absolute top-10 left-0 w-[200%] flex whitespace-nowrap z-0 opacity-10 select-none"
//         animate={{ x: ['0%', '-50%'] }}
//         transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//       >
//         <h2 className="text-[120px] md:text-[160px] font-bold text-[#ff6d99] uppercase tracking-wider">
//           YOUR FITNESS JOURNEY — YOUR FITNESS JOURNEY —
//         </h2>
//       </motion.div>

//       {/* Foreground content */}
//       <div className="relative z-30 max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111] mb-4">
//           More Than Workouts — <br />
//           <span className="text-[#ff6d99]">A Lifestyle Transformation.</span>
//         </h2>
//         <p className="text-[#666] mt-6 text-lg sm:text-xl leading-relaxed">
//           Fitness isn’t just about pushing through workouts or following strict meal plans —
//           it’s about creating a healthier, stronger version of yourself that lasts a lifetime.
//           At FitFlow, we take a holistic approach to fitness, combining expert guidance,
//           personalized training, and real-world strategies to help you build habits that stick.
//         </p>
//         <p className="text-[#666] mt-4 text-lg sm:text-xl leading-relaxed">
//           Our coaching isn’t just about lifting weights or hitting a number on the scale.
//           It’s about confidence, energy, and becoming the best version of yourself —
//           mentally and physically. Whether you’re starting fresh or pushing past a plateau,
//           we provide the structure, accountability, and motivation to make progress feel natural.
//         </p>
//       </div>
//     </section>

// </section>
// {/* Simple. Effective. */}
// {/* <section className="py-20 px-6 bg-white text-left">
//   <div className="max-w-4xl mx-auto">
//     <h2 className="text-4xl sm:text-5xl font-bold text-[#111] leading-tight">
//       Simple. Effective. <span className="text-pink-500">Life-Changing.</span>
//     </h2>
//     <p className="text-gray-600 mt-6 text-lg">
//       Forget cookie-cutter programs and complicated fitness advice — at FitFlow, we simplify success.
//       Our method is built on three pillars that maximize results while fitting into your life:
//     </p>

//     <div className="mt-8 space-y-6">
//       <p>
//         <strong>Personalized Training.</strong> No two bodies are the same, so why follow a
//         one-size-fits-all plan? Your training program is built around your goals, schedule, and fitness
//         level, ensuring progress that feels natural and sustainable.
//       </p>
//       <p>
//         <strong>Smart Nutrition.</strong> Forget extreme diets or counting every calorie. We teach flexible,
//         balanced nutrition that fits into your lifestyle, so you can enjoy food while making real progress.
//       </p>
//       <p>
//         <strong>Continuous Support.</strong> The difference between success and burnout? Guidance and
//         accountability. Our coaches and community are here to support you every step of the way, keeping
//         you motivated and on track.
//       </p>
//     </div>
//   </div>
// </section>
//  */} */}

{
  /* <section className="py-24 px-6 bg-[#fffefe]">
<StrengthCard />
</section>
        {/* Programs */
}
//    <section className="py-24 px-6 bg-gradient-to-b from-[#fffefe] to-[#fef9fb]">
//   <motion.h2
//     initial="hidden"
//     whileInView="visible"
//     variants={fadeUp}
//     viewport={{ once: true }}
//     className="text-4xl md:text-5xl text-center font-bold mb-16 text-[#111]"
//   >
//     Programs <span className="text-[#ff6d99]">& Benefits</span>
//   </motion.h2>

//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     variants={fadeStagger}
//     viewport={{ once: true }}
//     className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
//   >
//     {programs.map((prog, idx) => (
//       <motion.div
//         key={prog.title}
//         className="bg-white/70 backdrop-blur-md border-0 border-[#ff6d99] rounded-3xl p-8 shadow-xl transition transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:border-[#ff4f84]"
//         variants={fadeUp}
//       >
//         <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-[#111111]">
//           {prog.title}
//         </h3>
//         <p className="text-[#666666] mb-6 leading-relaxed">{prog.description}</p>
//         <ul className="space-y-4">
//           {prog.features.map((feat, i) => (
//             <li
//               key={i}
//               className="flex items-start gap-3 text-[#333] text-base md:text-lg"
//             >
//               <FaCheckCircle className="text-[#ff6d99] mt-1 shrink-0" /> {feat}
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     ))}
//   </motion.div>
// </section> */}

// {/* What's Inside */}
// <section className="bg-[#111] text-white py-20 px-6">
//   <h2 className="text-3xl font-bold text-center mb-12">Your All-In-One Body Maintenance Plan</h2>
//   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
//     <div className="flex items-start gap-4"><FaCheckCircle className="text-[#ff6d99]" /> Fitness & lifestyle coaching by certified experts</div>
//     <div className="flex items-start gap-4"><FaCheckCircle className="text-[#ff6d99]" /> Herbal supplements crafted for your needs</div>
//     <div className="flex items-start gap-4"><FaCheckCircle className="text-[#ff6d99]" /> Doctor-backed skin & hair care routines</div>
//     <div className="flex items-start gap-4"><FaCheckCircle className="text-[#ff6d99]" /> Monthly consultations & progress tracking</div>
//     <div className="flex items-start gap-4"><FaCheckCircle className="text-[#ff6d99]" /> Mental + hormonal + nutritional support</div>
//   </div>
// </section>

// {/* How It Works */}
// <section className="bg-[#fffefe] py-20 px-6 text-center">
//   <h2 className="text-3xl font-bold mb-8">Simple. Accessible. Affordable.</h2>
//   <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
//     <div className="flex flex-col items-center gap-2"><MdOutlineQuiz size={40} /><p>Take 5-min health quiz</p></div>
//     <div className="flex flex-col items-center gap-2"><MdSubscriptions size={40} /><p>Get personalized monthly plan</p></div>
//     <div className="flex flex-col items-center gap-2"><FaSmileBeam size={40} /><p>Enjoy effortless care — we handle the rest</p></div>
//   </div>
//   <div className="mt-10">
//     <Button variant="default">Start My Assessment Now</Button>
//   </div>
// </section>

// {/* About Us Section */}
// <section className="py-20 px-6 bg-[#fffefe]">
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeUp}
//     className="max-w-6xl mx-auto text-center"
//   >
//     <p className="uppercase text-sm tracking-wide text-[#666666] mb-3">About Us</p>
//     <h2 className="text-4xl md:text-5xl font-bold mb-4">
//       Your Fitness, <span className="text-[#ff6d99]">Your Flow.</span>
//     </h2>
//     <p className="text-[#666666] text-lg">
//       At Illaram, wellness isn’t a task—it’s a mindset. A smooth, personalized journey made to fit you, not the other way around.
//     </p>
//   </motion.div>
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeUp}
//     className="mt-16 mx-auto max-w-md bg-white p-6 rounded-3xl shadow-xl text-center"
//   >
//     <Image
//       src="https://cdn.pixabay.com/photo/2024/06/12/11/11/sketch-8825072_960_720.jpg"
//       alt="Expert"
//       width={350}
//       height={350}
//       className="rounded-2xl object-cover w-full h-[350px] mx-auto"
//     />
//     <p className="mt-4 text-xl font-semibold">Mark Thompson</p>
//   </motion.div>
// </section>
