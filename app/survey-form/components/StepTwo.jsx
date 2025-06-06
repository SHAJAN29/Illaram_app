'use client';

import { useState } from 'react';

export default function PageTwo({ onNext, onBack }) {
  const [data, setData] = useState({});

  const handleChange = (field, value) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(data);
  };

  return (
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl font-[Poppins] bg-white shadow-2xl rounded-xl p-8 space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Your Thoughts on Ilaram Services</h2>
<p className="text-sm text-gray-500">
  <strong>We offer an all-in-one wellness subscription:</strong><br />
  ⭐️Stay in shape, ⭐️Enjoy glowing skin, ⭐️Voluminous hair, and a ⭐️Stronger body — all in one place.
</p>
        </div>

        <div>
          <label htmlFor="subscription" className="block text-sm font-semibold text-gray-700 mb-1">
            What do you think of our all-in-one subscription?
          </label>
          <select
            id="subscription"
            onChange={(e) => handleChange('subscription', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Choose one</option>
            <option>This is exactly what I need</option>
            <option>Sounds useful — I’d love to try</option>
            <option>I’d prefer a focused plan</option>
            <option>Tell me more</option>
            <option>Not interested</option>
          </select>
        </div>

        <div>
          <label htmlFor="guidance" className="block text-sm font-semibold text-gray-700 mb-1">
            How important is expert guidance?
          </label>
          <select
            id="guidance"
            onChange={(e) => handleChange('guidance', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Select</option>
            <option>Very — I want to stop guessing</option>
            <option>Somewhat — I need support</option>
            <option>Not much — I prefer my own way</option>
          </select>
        </div>

        <div>
          <label htmlFor="childSupport" className="block text-sm font-semibold text-gray-700 mb-1">
            Thoughts on our child wellness support?
          </label>
          <select
            id="childSupport"
            onChange={(e) => handleChange('childSupport', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Choose one</option>
            <option>Really need it</option>
            <option>Looks promising</option>
            <option>I manage that myself</option>
            <option>Not relevant</option>
          </select>
        </div>

        <div>
          <label htmlFor="barrier" className="block text-sm font-semibold text-gray-700 mb-1">
            What’s holding you back from investing in wellness?
          </label>
          <select
            id="barrier"
            onChange={(e) => handleChange('barrier', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Choose one</option>
            <option>Time</option>
            <option>Budget</option>
            <option>Skeptical</option>
            <option>Too many options</option>
            <option>Nothing — I’m ready</option>
          </select>
        </div>

        <div>
          <label htmlFor="convincer" className="block text-sm font-semibold text-gray-700 mb-1">
            What would help you say YES to wellness?
          </label>
          <input
            type="text"
            id="convincer"
            placeholder="I want simple wheighloss solution..."
            onChange={(e) => handleChange('convincer', e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
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
            className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition"
          >
            Next
          </button>
        </div>
      </form>
    
  );
}
