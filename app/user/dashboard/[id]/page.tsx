"use client";

import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter, useParams } from "next/navigation";
import ProgressTracking from "../components/welcomeBanner";

interface PageProps {
  params: {
    id: string;
  };
}

export default function UserDashboardPage() {
  const router = useRouter();
  const params = useParams(); // Grabs route param
  const id = params?.id as string;

  const [userData, setUserData] = useState<any>(null);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/user/login");
      return;
    }

    const decoded: any = jwt.decode(token);
    if (!decoded || decoded.role !== "user") {
      localStorage.removeItem("token");
      router.push("/access-denied");
      return;
    }

    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/user/dashboard/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem("token");
            router.push("/user/login");
            return;
          }
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data);
        setUsername(data.username);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Unable to load user data.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserData();
  }, [id, router]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!userData) return <div>User data not found.</div>;

  if (!id) return <div>Invalid user.</div>;
  return (
    <div className="space-y-15 font-[Poppins]">
      <h1 className="text-3xl font-bold capitalize">Welcome, {username}</h1>
      <p className="text-gray-700">Here’s your progress and resources 👇</p>
      <ProgressTracking userId={id} />
    </div>
  );
}
