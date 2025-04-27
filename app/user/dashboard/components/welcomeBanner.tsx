"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Lock } from "lucide-react";
import { Button, Card, CardBody } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProgressTrackingProps {
  userId: string;
}

const fetchUserProgress = async (userId: string) => {
  const res = await fetch(`/api/user/progress/physical/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch progress");
  const data = await res.json();
  return data.step;
};

const ProgressTracking: React.FC<ProgressTrackingProps> = ({ userId }) => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const userProgress = await fetchUserProgress(userId);
        setStep(userProgress);
      } catch (err) {
        console.error("Error fetching progress:", err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) loadProgress();
  }, [userId]);

  if (loading) return <p>Loading progress...</p>;

  return (
    <div className="p-2 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Your Progress Tracker</h1>

      {/* Step 1 - Physical Health Assessment */}
      <Card
        className="bg-white shadow-md"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          className="p-6 flex flex-col lg:flex-row items-center justify-between gap-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div>
            <h2 className="text-xl font-semibold">
              1. Physical Health Assessment
            </h2>
            <p className="text-sm text-gray-500">
              Start with your physical checkup by our certified doctor.
            </p>
          </div>
          {step >= 1 ? (
            <>
              <CheckCircle className="text-green-500 w-6 h-6" />
              <Link href={`/user/dashboard/${userId}/physical-assessment`}>
                <Button
                  className="bg-blue-500 text-white"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  View Result
                </Button>
              </Link>
            </>
          ) : (
            <Button
              className="bg-blue-500 text-white"
              onClick={() =>
                router.push(`/user/dashboard/${userId}/physical-assessment`)
              }
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Start
            </Button>
          )}
        </CardBody>
      </Card>

      {/* Step 2 - Mental Health Assessment */}
      <Card
        className="bg-white shadow-md"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          className="p-6 flex flex-col lg:flex-row items-center justify-between gap-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div>
            <h2 className="text-xl font-semibold">
              2. Mental Health Assessment
            </h2>
            <p className="text-sm text-gray-500">
              Evaluate your emotional and psychological readiness.
            </p>
          </div>
          {step >= 2 ? (
            <>
              <CheckCircle className="text-green-500 w-6 h-6" />
              <Link href={`/user/${userId}/mental-result`}>
                <Button
                  className="bg-blue-500 text-white"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  View Result
                </Button>
              </Link>
            </>
          ) : step === 1 ? (
            <Button
              className="bg-blue-500 text-white"
              onClick={() => router.push(`/user/${userId}/mental-assessment`)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Continue
            </Button>
          ) : (
            <Lock className="text-gray-400 w-6 h-6" />
          )}
        </CardBody>
      </Card>

      {/* Step 3 - Personalized Plan */}
      <Card
        className="bg-white shadow-md"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <CardBody
          className="p-6 flex flex-col lg:flex-row items-center justify-between gap-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div>
            <h2 className="text-xl font-semibold">3. Personalized Plan</h2>
            <p className="text-sm text-gray-500">
              Access your yoga sessions, treatment plan, and diet chart.
            </p>
          </div>
          {step === 2 ? (
            <Link href={`/user/${userId}/treatment-plan`}>
              <Button
                className="bg-blue-500 text-white"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                View Plan
              </Button>
            </Link>
          ) : (
            <Lock className="text-gray-400 w-6 h-6" />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default ProgressTracking;
