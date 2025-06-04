"use client";

import { useState } from "react";

type HairTypeCheckerProps = {
  onClose: () => void;
};

export default function HairTypeChecker({ onClose }: HairTypeCheckerProps) {
  const [answers, setAnswers] = useState({
    texture: "",
    scalp: "",
    reaction: "",
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hairTypeResult = "";

    if (answers.texture === "coarse" && answers.scalp === "dry") {
      hairTypeResult = "Dry & Coarse Hair";
    } else if (answers.scalp === "oily") {
      hairTypeResult = "Oily Scalp";
    } else if (answers.reaction === "yes") {
      hairTypeResult = "Sensitive Scalp";
    } else {
      hairTypeResult = "Normal Hair";
    }

    setResult(hairTypeResult);
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg shadow-white/10 flex justify-center items-center z-50 p-4">
      <div className="backdrop-blur-md bg-white/30 border border-white/20 p-6 rounded-lg shadow-xl w-full max-w-md relative">

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 hover:text-gray-300"
        >
          ✕
        </button>

        {!result && (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Find Your Hair Type</h2>
            <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
              <div>
                <label className="block mb-1 font-medium">What is your hair texture?</label>
                <select
                  name="texture"
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border border-gray/20 text-gray-800 p-2 rounded"
                >
                  <option value="">Select</option>
                  <option value="fine">Fine</option>
                  <option value="medium">Medium</option>
                  <option value="coarse">Coarse</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">How does your scalp feel?</label>
                <select
                  name="scalp"
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border border-gray/20 text-gray-800 p-2 rounded"
                >
                  <option value="">Select</option>
                  <option value="oily">Oily</option>
                  <option value="dry">Dry</option>
                  <option value="normal">Normal</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Do you have itching/burning sensation?</label>
                <select
                  name="reaction"
                  onChange={handleChange}
                  required
                  className="w-full bg-white/20 backdrop-blur-sm border border-gray/20 text-gray-800 p-2 rounded"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md"
              >
                Show My Hair Type
              </button>
            </form>
          </>
        )}

        {/* Result Popup */}
        {result && (
          <div className="text-center text-gray-900">
            <h2 className="text-2xl font-bold mb-4">Your Hair Type Result</h2>
            <p className="mb-6 text-lg">{result}</p>
            <button
              onClick={onClose}
              className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-md"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
