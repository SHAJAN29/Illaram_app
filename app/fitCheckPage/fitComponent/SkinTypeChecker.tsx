"use client";

import { useState } from "react";
type SkinTypeCheckerProps = {
  onClose: () => void;
};

export default function SkinTypeChecker({ onClose }: SkinTypeCheckerProps) {
  const [answers, setAnswers] = useState({
    afterWash: "",
    oiliness: "",
    sensitivity: "",
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  let res = "";

  // Prioritize sensitive skin
  if (answers.sensitivity === "yes") {
    res = "Sensitive Skin";
  } else if (answers.afterWash === "tight" && answers.oiliness === "low") {
    res = "Dry Skin";
  } else if (answers.oiliness === "high") {
    res = "Oily Skin";
  } else {
    res = "Normal or Combination Skin";
  }

  setResult(res);
};
  // Close the result popup
  const closeResult = () => {
    setResult(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg shadow-white/10 flex justify-center items-center z-50 p-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/20 p-6 rounded-lg shadow-xl w-full max-w-md relative">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Find Your Skin Type
        </h2>
        {!result ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
            <div>
              <label htmlFor="afterWash" className="block mb-1 font-medium">
                How does your skin feel after washing?
              </label>
              <select
                id="afterWash"
                name="afterWash"
                onChange={handleChange}
                required
                className="w-full bg-white/20 backdrop-blur-sm border border-gray/20 text-gray-600 p-2 rounded"
              >
                <option value="">Select</option>
                <option value="tight">Tight/Dry</option>
                <option value="normal">Soft/Comfortable</option>
                <option value="greasy">Greasy or oily</option>
              </select>
            </div>

            <div>
              <label htmlFor="oiliness" className="block mb-1 font-medium">
                How oily is your skin by mid-day?
              </label>
              <select
                id="oiliness"
                name="oiliness"
                onChange={handleChange}
                required
                className="w-full bg-white/20 backdrop-blur-sm border border-gray/20 text-gray-600 p-2 rounded"
              >
                <option value="">Select</option>
                <option value="high">Very Oily</option>
                <option value="moderate">Slightly Oily</option>
                <option value="low">Not Oily</option>
              </select>
            </div>

            <div>
              <label htmlFor="sensitivity" className="block mb-1 font-medium">
                Do you experience redness or burning?
              </label>
              <select
                id="sensitivity"
                name="sensitivity"
                onChange={handleChange}
                required
                className="w-full bg-white/20 backdrop-blur-sm border border-gray/20 text-gray-600 p-2 rounded"
              >
                <option value="">Select</option>
                <option value="yes">Yes, often</option>
                <option value="no">No</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md"
            >
              Show My Skin Type
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Your Skin Type</h3>
            <p className="mb-6 text-gray-800">{result}</p>
            <button
              onClick={onClose}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
