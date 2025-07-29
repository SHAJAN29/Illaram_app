"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { object, string } from "yup";

// ✅ Validation schema for username & password only
const loginSchema = object({
  username: string().required("Username is required"),
  password: string().required("Password is required"),
});

export default function PartnerLoginForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      await loginSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const res = await axios.post("/api/WellnessPartner/login", formData);

      if (res.status === 200) {
        localStorage.setItem("wellness_token", res.data.token);
        router.push("/partner/dashboard");
      } else {
        setErrorMsg("Login failed. Try again.");
      }
    } catch (err: any) {
      if (err.name === "ValidationError") {
        const fieldErrors: Record<string, string> = {};
        err.inner.forEach((e: any) => {
          if (e.path) fieldErrors[e.path] = e.message;
        });
        setErrors(fieldErrors);
      } else {
        setErrorMsg("Invalid username or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-[#f4f7f0] font-[poppins]">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#94c159]">Partner Login</h2>
        <p className="text-[#a9aba6] mb-8">Welcome back to Illaram Healthcare.</p>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-[#a9aba6] rounded-xl"
            />
            {errors.username && <p className="text-red-600 text-sm">{errors.username}</p>}
          </div>

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
              className="absolute top-1/2 right-4 -translate-y-1/2 text-[#94c159] text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
          </div>

          {errorMsg && <p className="text-red-600 text-center">{errorMsg}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading
                ? "bg-[#a9aba6] text-white"
                : "bg-[#94c159] hover:bg-[#7ca74c] text-white"
            } py-3 px-6 rounded-full text-lg font-semibold transition`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
