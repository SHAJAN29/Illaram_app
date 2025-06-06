"use client";

import { useEffect, useState } from "react";
import ConfettiExplosion from 'react-confetti-explosion';
import DiscountCode from "./DiscountCode";
import { contactNumber } from "@/constants/index";

export default function PageThree({ onBack, formData }) {
  const [submitted, setSubmitted] = useState(false);
  const [localData, setLocalData] = useState({
    rating: "",
    moreOf: "",
    recommend: "",
    contactMethod: "",
    feedback: "",
  });

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (submitted) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (field, value) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
    formData[field] = value; // Attach to final payload
  };

const popSound = new Audio("/sounds/pop.mp3");

// Optional: preload and handle error
popSound.preload = "auto";
popSound.onerror = () => {
  console.warn("Pop sound failed to load.");
};

const handleStartConfetti = () => {
  popSound.play().catch((err) => {
    console.warn("Failed to play sound:", err);
  });
  setShowConfetti(true);
  setTimeout(() => setShowConfetti(false), 4000);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("/api/Survey", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...formData, ...localData }),
  });

  const data = await res.json();

  if (data.success) {
    handleStartConfetti();
    setSubmitted(true);
  } else {
    alert("Oops! Submission failed.");
  }
};
if (submitted) {
  return (
    <div className="min-h-screen font-[Poppins] bg-gradient-to-tr from-rose-100 to-sky-100 flex items-center justify-center relative overflow-hidden">
      {showConfetti && (
        <ConfettiExplosion
          particleCount={200}
          particleSize={10}
          duration={5000}
          colors={["#ff577f", "#ff884b", "#ffd384", "#fff9b0"]}
          force={0.6}
          height={1200}
          width={1600}
        />
      )}
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center space-y-6 z-10">
        <h2 className="text-2xl font-bold text-green-700">
          Thank You for Your Feedback! 🎉
        </h2>
        {/* New Stylish Paragraph */}
        <p className="text-[10px] text-gray-500">
          Our subscription plans start at just <span className="text-emerald-500">₹2,899/month</span>  — crafted for your wellness and lifestyle.
        </p>

        <p className="text-md text-gray-600">
          Here’s your 10% code for future purchases:
        </p>

        <DiscountCode />


        <div className="flex flex-col space-y-3 pt-4">
                  <a 
  href='/fitCheckPage' 
  className="bg-emerald-400 hover:bg-emerald-200 text-white py-2 rounded-md transition"
>
  Fit check
</a>
          <a
            href="https://illaram-healthcare.netlify.app/home"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition"
          >
            Visit Ilaram Website
          </a>
          
        <a 
  href={`tel:${contactNumber.phoneNumber}`} // Replace with your actual number
  className="bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md transition"
>
  Call Us
</a>

        </div>
      </div>
    </div>
  );
}


  // Form view before submit
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl font-[Poppins] bg-white shadow-2xl rounded-xl p-8 space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Feedback & Offer 🎁
          </h2>
          <p className="text-sm text-gray-500">
            Almost done! Let us know how we can improve and serve you better.
          </p>
        </div>

        {/* Rating */}
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            How would you rate our concept?
          </label>
          <select
            id="rating"
            onChange={(e) => handleChange("rating", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={localData.rating}
          >
            <option value="">⭐️ 1 to 5</option>
            <option>⭐️</option>
            <option>⭐️⭐️</option>
            <option>⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️</option>
            <option>⭐️⭐️⭐️⭐️⭐️</option>
          </select>
        </div>

        {/* More of */}
        <div>
          <label
            htmlFor="moreOf"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            What would you like to see more of?
          </label>
          <input
            type="text"
            id="moreOf"
            onChange={(e) => handleChange("moreOf", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            placeholder="E.g., Quick workouts, skincare, child health"
            value={localData.moreOf}
          />
        </div>

        {/* Recommend */}
        <div>
          <label
            htmlFor="recommend"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Would you recommend Ilaram?
          </label>
          <select
            id="recommend"
            onChange={(e) => handleChange("recommend", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={localData.recommend}
          >
            <option value="">Choose one</option>
            <option>Yes</option>
            <option>Maybe</option>
            <option>Not yet</option>
            <option>No</option>
          </select>
        </div>

        {/* Contact Method */}
        <div>
          <label
            htmlFor="contactMethod"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Where would you like to hear more from us?
          </label>
          <select
            id="contactMethod"
            onChange={(e) => handleChange("contactMethod", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={localData.contactMethod}
          >
            <option value="">Select channel</option>
            <option>WhatsApp</option>
            <option>Email</option>
            <option>Instagram</option>
            <option>In-person events</option>
            <option>Parent/women communities</option>
          </select>
        </div>

        {/* Feedback */}
        <div>
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Final thoughts, doubts, or suggestions?
          </label>
          <textarea
            id="feedback"
            rows="3"
            onChange={(e) => handleChange("feedback", e.target.value)}
            placeholder="We’d love your thoughts!"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            value={localData.feedback}
          />
        </div>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
