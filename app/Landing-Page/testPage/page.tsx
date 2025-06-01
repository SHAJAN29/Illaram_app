// pages/index.js
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  BoltIcon,
  SparklesIcon,
  FaceSmileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import {
  StarIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";

export default function HomePage() {
  const testimonials = [
    {
      name: "Nisha",
      avatar: "/vertical-shot-happy-dark-skinned-female-with-curly-hair.jpg", // Replace with actual image paths
      quote:
        "Ilaram helped me lose weight, fix my skin, and feel confident again — without pressure or pills.",
      title: "The Power of Rejuvenation",
      rating: 5,
    },
    {
      name: "Asha",
      avatar: "/Gemini_Generated_Image_5oilwx5oilwx5oil.png",
      quote:
        "I started for skin, but ended up transforming my whole lifestyle.",
      rating: 4,
    },
    {
      name: "Ankit & Priya",
      avatar: "/Gemini_Generated_Image_tgsroutgsroutgsr.png",
      quote:
        "The fertility support was exactly what we needed — gentle, guided, and full of care.",
      rating: 5,
    },
    {
      name: "Rahul",
      avatar: "/Gemini_Generated_Image_9ff7et9ff7et9ff7.png",
      quote: "Weight loss that didn’t feel like punishment. Finally!",
      rating: 4,
    },
  ];
  const benefits = [
    {
      icon: <HeartIcon className="w-6 h-6 text-pink-600" />,
      text: "You’ve tried diet plans, clinics, or gym apps… and gave up",
    },
    {
      icon: <BoltIcon className="w-6 h-6 text-yellow-500" />,
      text: "You’re dealing with persistent fatigue, stress, or burnout",
    },
    {
      icon: <SparklesIcon className="w-6 h-6 text-indigo-500" />,
      text: "You're trying to conceive and want natural, holistic support",
    },
    {
      icon: <FaceSmileIcon className="w-6 h-6 text-green-500" />,
      text: "You want clearer skin, healthier hair, or to feel lighter and more energetic",
    },
    {
      icon: <AdjustmentsHorizontalIcon className="w-6 h-6 text-blue-500" />,
      text: "You’re looking for a simple, all-in-one routine that actually works",
    },
  ];

  const handleClick = () => {
    window.location.href = "/signups"; // Redirect to the home page
  };

  return (
    <div className=" text-gray-800 font-[poppins]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/Gemini_Generated_Image_18ve7z18ve7z18ve.png"
            alt="Happy, healthy individuals"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-sm">
            Your Complete Wellness Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Skin. Hair. Fitness. Fertility. Mental Well-being. One Subscription.
            Total Care.
          </p>
          <button
            onClick={handleClick}
            className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            Start Your Free Wellness Journey
          </button>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          This Is for You If…
        </h2>
        <ul className="max-w-3xl mx-auto text-left text-lg space-y-6">
          {benefits.map((item, i) => (
            <li key={i} className="flex items-start space-x-4">
              <div>{item.icon}</div>
              <p className="text-gray-700">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Ilaram */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Why Choose Ilaram?
        </h2>
        <p className="text-lg mb-16 max-w-3xl mx-auto px-4 text-gray-600">
          Ilaram is your personal doctor , therapist, trainer, and health coach
          — all in one place.{" "}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            ["💆", "Skin & Hair Rejuvenation"],
            ["🧘‍♀️", "Yoga, Zumba, and Fitness Training"],
            ["🥗", "Personalized Diet & Lifestyle Plans"],
            ["⚖️", "Weight Loss & Metabolic Health"],
            ["🤰", "Fertility & Hormonal Balance"],
            ["📲", "Daily Progress Tracking"],
          ].map(([icon, label], i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center"
              aria-label={label}
            >
              <div className="text-5xl mb-4 text-blue-500">{icon}</div>
              <h3 className="font-semibold text-xl text-gray-700">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-pink-50 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 text-left">
          {[
            "Fill out your wellness profile",
            "Get matched with your care team",
            "Begin your personalized plan",
            "Track your progress and evolve over time",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border-l-4 border-pink-500 shadow-md hover:shadow-lg transition"
            >
              <div className="text-pink-600 text-4xl font-bold mb-4">
                {i + 1}
              </div>
              <h4 className="font-semibold text-lg text-gray-700">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          All-Inclusive Wellness. One Monthly Fee.
        </h2>
        <div className="bg-white text-gray-800 p-10 mb-7 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">
            Included in Your Plan:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
            {[
              "Initial consult + customized care plan",
              "Daily live sessions (Yoga / fitness/ Zumba)",
              "Personalized skin & hair care",
              "Presonalized supplement plans",
              "Personalized fitness programs",
              "Monthly nutrition & diet plans",
              "Nutrition & Fertility guidance",
              "24/7 wellness chat support",
              "Monthly Thrapy Sessions",
              "Monthly check-ins with experts",
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"/"}
          className="mt-25 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105"
        >
          See Plans & Pricing
        </Link>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto text-center px-6 py-24">
        <div className="flex justify-center mb-6">
          <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-pink-500" />
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">
          Real Change, Real People
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map(({ name, avatar, quote, rating, title }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-left flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={avatar}
                  alt={name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-lg">{name}</p>
                  {title && <p className="text-sm text-gray-500">{title}</p>}
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }, (_, idx) => (
                      <StarIcon
                        key={idx}
                        className={`w-5 h-5 ${
                          idx < rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                &ldquo;{quote}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center px-6 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/Gemini_Generated_Image_5f105x5f105x5f10.png" // Update the path to your image
            alt="Background wellness image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content on top */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            You Deserve a Healthier, Happier You.
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Whether you're healing, growing, or transforming — we're here to
            walk the path with you. Because wellness isn’t a luxury. It’s your
            right.
          </p>

          <Link href="/signups">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
              Rejuvenate. Refresh. Reset — With Ilaram
            </button>
          </Link>

          <Link href="/signups">
            <p className="mt-6 text-sm cursor-pointer">
              📞 Book Your Free Consultation Now
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
