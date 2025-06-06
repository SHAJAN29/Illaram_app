'use client';

import { useState } from 'react';

export default function PageOne({ onNext }) {
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
        className="w-full max-w-xl font-[Poppins]  bg-white shadow-2xl rounded-xl p-8 space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-800"> Welcome!🌿 </h2>
          <p className="text-sm text-gray-500 mt-1">We're building wellness that fits your real life. Answer a few quick questions — and enjoy 10% off your Ilaram subscription.</p>
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">
            Which best describes you?
          </label>
          <select
            id="role"
            onChange={(e) => handleChange('role', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="" >Select your role</option>
            <option>Busy professional</option>
            <option>New mom or mom</option>
            <option>Parent focused on child wellness</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-semibold text-gray-700 mb-1">
            What’s your biggest wellness priority?
          </label>
          <select
            id="priority"
            onChange={(e) => handleChange('priority', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Choose your goal</option>
            <option>Get back in shape</option>
            <option>Healthier skin/hair</option>
            <option>Boost energy & immunity</option>
            <option>Manage stress & sleep</option>
            <option>Child’s growth & health</option>
          </select>
        </div>

        <div>
          <label htmlFor="challenge" className="block text-sm font-semibold text-gray-700 mb-1">
            What’s been your biggest challenge?
          </label>
          <select
            id="challenge"
            onChange={(e) => handleChange('challenge', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Select a challenge</option>
            <option>Not enough time</option>
            <option>Low energy</option>
            <option>Don’t know what works</option>
            <option>Tried things, didn’t see results</option>
            <option>Managing both self and family health</option>
          </select>
        </div>
<div>
  <label htmlFor="activity" className="block text-sm font-semibold text-gray-700 mb-1">
    Which physical activity do you like?
  </label>
  <select
    id="activity"
    name="activity"
    onChange={(e) => handleChange('activity', e.target.value)}
    className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
    aria-label="Select physical activity"
    defaultValue=""
  >
    <option value="" disabled hidden>
      Select your liking
    </option>
    <option value="strength_training">Strength Training</option>
    <option value="cardio">Cardio</option>
    <option value="yoga">Yoga</option>
    <option value="zumba">Zumba</option>
    <option value="dance">Dance</option>
  </select>
</div>

        <div>
          <label htmlFor="routine" className="block text-sm font-semibold text-gray-700 mb-1">
            Do you currently follow a routine?
          </label>
          <select
            id="routine"
            onChange={(e) => handleChange('routine', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Choose one</option>
            <option>Yes, regularly</option>
            <option>Yes, inconsistently</option>
            <option>No, but I want to</option>
            <option>No — I feel lost</option>
          </select>
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-1">
            What’s your age group?
          </label>
          <select
            id="age"
            onChange={(e) => handleChange('age', e.target.value)}
            className="w-full border text-gray-500 border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="">Select age range</option>
            <option>Under 18</option>
            <option>18–24</option>
            <option>25–34</option>
            <option>35–44</option>
            <option>45+</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Next
        </button>
      </form>
  );
}
// This component collects initial user information and preferences