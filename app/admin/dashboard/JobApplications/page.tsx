"use client";
import React, { useEffect, useState } from "react";

const AdminJobApplications = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/employers/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching job applications", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Job Applications</h2>

      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      ) : jobs.length === 0 ? (
        <p className="text-center text-gray-500">No job applications available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job: any) => (
            <div
              key={job._id}
              className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-medium mb-2">{job.name}</h3>
              <p className="text-gray-600">
                <strong>Email:</strong> {job.email}
              </p>
              <a href={`tel:${job.phone}`} className="text-gray-600">
  <strong>Phone:</strong> {job.phone}
</a>
              <p className="text-gray-600">
                <strong>Message:</strong> {job.message.slice(0, 100)}...
              </p>
              <div className="mt-4">
                <strong>Resume:</strong>{" "}
                <a
                  href={job.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  View Resume
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminJobApplications;
