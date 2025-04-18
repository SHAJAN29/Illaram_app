"use client";

import { usePathname } from "next/navigation";

import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("📩 Form data submitted:", formData);

    const now = new Date();
    const appointmentDate = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      hour12: true,
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    try {
      // Replace this URL with your API route for storing in MongoDB
      const res = await fetch("/api/appointment/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        console.log("Form submitted successfully!");
      }
    } catch (err) {
      console.error("Error submitting form", err);
      console.log(formData);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 mt-30 mb-20 px-4 bg-illaram-cream h-screen">
      <div className="max-w-2xl mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-6  text-gray-800">
          {submitted ? "Booked" : "Book"} Your Free Consultation
        </h2>
        <p className="text-gray-600 mb-10">
          Start your transformation journey with Illaram Healthcare. We’ll guide
          you every step.
        </p>

        {submitted ? (
          <div className="text-green-600 text-lg font-medium">
            ✅ Thank you! We’ll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            <input
              name="name"
              type="text"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl"
            />
            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl"
            >
              <option value="">Select a Service</option>
              <option value="Physical Conditioning">
                Physical Conditioning
              </option>
              <option value="100-Day Transformation">
                100-Day Pre-Wedding Transformation
              </option>
              <option value="Personality Enhancement">
                Personality Enhancement
              </option>
            </select>
            <textarea
              name="message"
              placeholder="Anything you'd like us to know?"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-blue py-3 px-6 rounded-full text-lg font-semibold "
            >
              {loading ? "Booking..." : "Book Appointment"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// 64DK7G7PWCNMG6HJLZ4KK5TA

// greatly-coat
