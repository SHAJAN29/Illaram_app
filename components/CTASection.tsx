"use client";
import React from "react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-gray-100 py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
          What if your marriage could start from a place of strength—{" "}
          <span className="illaramAccent">not struggle?</span>
        </h2>
        <p className="text-lg illaramText mb-8 max-w-3xl mx-auto">
          Too many people walk into marriage with silent fears:
          <span className="block font-semibold text-red-600 mt-2">
            “I don’t feel attractive enough.”
            <br />
            “What if we can’t have kids?”
            <br />
            “What if we fight all the time?”
            <br />
            “What if I’m not enough?”
          </span>
        </p>
        <p className="text-lg illaramText mb-10">
          Illaram Healthcare helps you face these fears head-on—with expert
          guidance in health, mindset, and emotional growth. Marriage doesn’t
          have to be scary—it can start with strength, self-love, and peace.
        </p>

        <Link
          href="/contact"
          className="inline-block btn btn-blue text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Start Your Transformation Today
        </Link>

        <p className="mt-4 text-sm text-gray-500">
          Your future deserves the best version of you. Let’s build that,
          together.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
// Compare this snippet from app/home/page.tsx:
