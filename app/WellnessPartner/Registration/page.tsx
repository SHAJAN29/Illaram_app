"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { object, string } from "yup";
import { EyeIcon, EyeOffIcon } from "lucide-react";

// ✅ Validation schema
const partnerSchema = object({
  username: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  phone: string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  password: string().min(6, "Min 6 characters").required("Password is required"),
  location: string().required("Location is required"),
  serviceType: string().required("Select a service"),
});

export default function PartnerRegistrationForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    location: "",
    serviceType: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👁

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      await partnerSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const res = await axios.post("/api/WellnessPartner/register", formData);

      if (res.status === 201) {
        setSubmitted(true);
        setMessage("✅ Registered successfully!");
        setTimeout(() => router.push("/WellnessPartner/Login"), 2000);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch (err: any) {
      if (err.name === "ValidationError") {
        const fieldErrors: Record<string, string> = {};
        err.inner.forEach((e: any) => {
          if (e.path) fieldErrors[e.path] = e.message;
        });
        setErrors(fieldErrors);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-[#f4f7f0] font-[poppins]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#94c159]">
          Become a Wellness Partner
        </h2>
        <p className="text-[#a9aba6] mb-10">
          Join Illaram Healthcare and empower lives with your expertise.
        </p>

        {submitted ? (
          <div className="text-green-600 text-lg font-medium">
            🎉 Thank you! Redirecting to login...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left">
            {/* Username, Email, Phone */}
            {["username", "email", "phone", "location"].map((field) => (
              <div key={field}>
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={field === "username" ? "Username" : field.charAt(0).toUpperCase() + field.slice(1)}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#a9aba6] rounded-xl"
                />
                {errors[field] && (
                  <p className="text-red-600 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}

            {/* Password with visibility toggle */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-[#a9aba6] rounded-xl pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-[#94c159] text-sm font-medium"
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Service Type */}
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full p-3 border border-[#a9aba6] rounded-xl"
              required
            >
              <option value="">Select Service</option>
              <option value="Yoga">Yoga</option>
              <option value="Therapist">Therapist</option>
              <option value="Nutritionist">Nutritionist</option>
            </select>
            {errors.serviceType && (
              <p className="text-red-600 text-sm">{errors.serviceType}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-[#a9aba6] text-white"
                  : "bg-[#94c159] hover:bg-[#7ca74c] text-white"
              } py-3 px-6 rounded-full text-lg font-semibold transition`}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            {/* Feedback */}
            {message && (
              <div className="mt-4 text-green-600 font-medium text-center">
                {message}
              </div>
            )}
            {error && (
              <div className="mt-4 text-red-600 font-medium text-center">
                {error}
              </div>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
