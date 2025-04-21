import Link from "next/link";
import React from "react";

// `Illaram Healthcare is about preparing adults for marriage, and you're aiming to attract young customers with a modern vibe, your brand should feel:

// Warm and welcoming (to build trust and comfort)

// Fresh and clean (modern, not too traditional or clinical)

// A touch of elegance (to reflect the importance of relationships and marriage)

// Playful and fun (to engage young adults)`

export const Join_our_community = () => {
  return (
    <div>
      {/* <div className="bg-[#F3F4F6] p-6">
        <h1 className="text-[#E879F9] text-3xl font-bold">
          Welcome to Illaram
        </h1>
        <p className="text-gray-700">
          Empowering young adults for meaningful marriages.
        </p>
        <button className="mt-4 bg-[#FACC15] text-white font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition-colors duration-300">
          Get Started
        </button>
      </div> */}

      <section className="bg-[#F3F4F6] py-16 px-6 text-center">
        <h1 className="text-4xl font-[poppins] md:text-5xl font-extrabold illaramPrimary mb-4">
          Preparing You for a Meaningful Marriage
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Guidance, wellness & wisdom for modern relationships.
        </p>
        <p className="mb-5 flex-wrap lg:text-2xl text-lg max-sm:text-[15px] font-bold text-illaramPrimary capitalize">
          1000+ life changed
        </p>
        <Link
          href={"/signups"}
          className="btn btn-blue lg:mt-10 text-lg  rounded-2xl  hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
        >
          Start Your Journey
        </Link>
      </section>
    </div>
  );
};
