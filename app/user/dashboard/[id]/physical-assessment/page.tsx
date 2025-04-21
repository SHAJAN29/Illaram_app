"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody } from "@material-tailwind/react";
import { AlertCircle } from "lucide-react";
import { useParams } from "next/navigation";

// Interface for the physical assessment data
interface PhysicalData {
  weight: string;
  height: string;
  bloodPressure: string;
  heartRate: string;
  bmi: string;
  recommendation: string;
}

const PhysicalAssessmentPage = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string; // Access the dynamic 'id' from the URL
  const [data, setData] = useState<PhysicalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return; // Don't run the fetch if there is no 'id'

    const fetchAssessment = async () => {
      try {
        const res = await fetch(`/api/user/progress/physical/${userId}`);
        if (!res.ok)
          throw new Error("Failed to fetch physical assessment data");
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchAssessment();
  }, [userId]);

  if (loading) return <p>Loading assessment...</p>;
  if (error)
    return (
      <div className="text-red-600 flex items-center space-x-2">
        <AlertCircle className="w-5 h-5" />
        <span>{error}</span>
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">
        Physical Health Assessment Results
      </h1>

      <Card className="bg-white shadow-md">
        <CardBody className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Your Physical Assessment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Weight:</strong> {data?.weight} kg
            </p>
            <p>
              <strong>Height:</strong> {data?.height} cm
            </p>
            <p>
              <strong>Blood Pressure:</strong> {data?.bloodPressure}
            </p>
            <p>
              <strong>Heart Rate:</strong> {data?.heartRate} bpm
            </p>
            <p>
              <strong>BMI:</strong> {data?.bmi}
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Doctor's Recommendation</h4>
            <p className="text-gray-600">{data?.recommendation}</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default PhysicalAssessmentPage;
