"use client";

import { appointmentSchema } from "@/library/validationSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

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
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const router = useRouter();

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
    setMessage(null);
    setError(null);
    try {
      await appointmentSchema.validate(formData, { abortEarly: false });
      setErrors({});

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

      const res = await axios.post("/api/appointment/notify", {
        ...formData,
        appointmentDate,
      });

      if (res.status === 200) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        setMessage("✅ Appointment confirmed! Check your email.");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      if (err.name === "ValidationError") {
        const fieldErrors: Record<string, string> = {};
        err.inner.forEach((e: any) => {
          if (e.path) fieldErrors[e.path] = e.message;
        });
        setErrors(fieldErrors);
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-[#f4f7f0] font-[poppins]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#94c159]">
          {submitted ? "Booked" : "Book"} Your Free Consultation
        </h2>
        <p className="text-[#a9aba6] mb-10">
          Start your transformation journey with Illaram Healthcare. We’ll guide you every step.
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
              className="w-full p-3 border border-[#a9aba6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#94c159]"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#a9aba6] rounded-xl"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

            <input
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border border-[#a9aba6] rounded-xl"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-[#a9aba6] rounded-xl"
            >
              <option value="">Select a Service</option>
              <option value="Hair care">Hair care</option>
              <option value="Skin care">Skin care</option>
              <option value="Weightloss">Weightloss</option>
              <option value="Others">Others</option>
            </select>
            {errors.service && <p className="text-red-600 text-sm">{errors.service}</p>}

            {formData.service === "Others" && (
              <>
                <textarea
                  name="message"
                  placeholder="Please specify your service"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#a9aba6] rounded-xl capitalize"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm">{errors.message}</p>
                )}
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-[#a9aba6] text-white"
                  : "bg-[#94c159] hover:bg-[#7ca74c] text-white"
              } py-3 px-6 rounded-full text-lg font-semibold transition`}
            >
              {loading ? "Sending Confirmation..." : "Book Appointment"}
            </button>

            {loading && (
              <div className="flex justify-center mt-4">
                <div className="w-6 h-6 border-4 border-[#94c159] border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {message && (
              <div className="mt-4 text-green-600 font-medium text-center">
                {message}
              </div>
            )}
            {error && (
              <div className="mt-4 text-red-600 font-medium text-center">{error}</div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
