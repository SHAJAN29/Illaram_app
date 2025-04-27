"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [paymentpop, setPaymentpop] = useState(false);
  const [showCreateBtn, setShowCreateBtn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // ⏳ New loading state

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setPaymentpop(false);
    setIsLoading(true); // Start loading

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, role: "user" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setShowCreateBtn(true);
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      console.log("✅ Login successful", data.token);

      const checkRes = await fetch(`/api/user/dashboard/payment-status?username=${data.username}`);
      const checkData = await checkRes.json();

      if (checkData.hasPaid) {
        router.push(`/user/dashboard/${data.username}`);
      } else {
        setPaymentpop(true);
        setTimeout(() => {
          router.push(`/packageTest/${data.username}`);
        }, 2000);
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-teal-50 font-[Poppins]">
      <div className="w-full h-full p-8 flex flex-col justify-center items-center">
        <h1 className="illaramPrimary text-center font-bold max-sm:text-3xl text-5xl capitalize">
          Welcome to <br />
          <span className="illaramAccent">illaram healthcare.</span>
        </h1>
        <p className="illaramText text-[14px] capitalize">
          The place where transformation happens
        </p>
      </div>

      <div>
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow w-80"
        >
          <h2 className="text-xl font-bold mb-4 text-center">User Login</h2>

          {error && <p className="text-red-500 mb-3 text-center">{error}</p>}
          {paymentpop && (
            <p className="text-orange-500 mb-3 text-sm text-center">
              🛑 Please complete your payment to access the dashboard.
            </p>
          )}

          <label className="block font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full mb-3 p-2 border border-gray-300 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isLoading}
          />

          <label className="block font-medium">Password</label>
          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded pr-10"
              placeholder="********"
              required
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-2 text-gray-600"
              disabled={isLoading}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full btn font-semibold py-2 rounded transition ${
              isLoading ? "bg-teal-300 cursor-not-allowed" : "btn-blue hover:illaramAccent"
            }`}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          {showCreateBtn ? (
            <button
              type="button"
              onClick={() => router.push("/user/create-account")}
              className="text-sm cursor-pointer w-full text-green-600 hover:underline mt-2"
              disabled={isLoading}
            >
              Create account
            </button>
          ) : (
            <button
              type="button"
              onClick={() => router.push("/forgot-password")}
              className="text-sm w-full text-blue-600 hover:underline mt-2"
              disabled={isLoading}
            >
              Forgot password?
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
