'use client';

import { useEffect, useState } from "react";
import { contactNumber } from "../constants";
import { PhoneIcon } from '@heroicons/react/24/solid'; // optional: use your own SVG if not using Heroicons

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href = `tel:${contactNumber.phoneNumber}`;
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <button
        onClick={handleClick}
        className="w-14 h-14 bgillaramPrimary hover:bg-pink-700 text-white rounded-full flex items-center justify-center shadow-lg transition"
        aria-label="Call Now"
      >
        <PhoneIcon className="w-6 h-6" />
      </button>
    </div>
  );
}

