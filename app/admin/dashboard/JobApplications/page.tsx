'use client'; // Marks this component as client-side

import BlueSpinLoder from "@/components/Loder/blueSpinLoder";
import React, { useEffect, useState } from "react";

const AdminJobApplications = () => {
  const [jobs, setJobs] = useState<any[]>([]); // Store job applications
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [searchTerm, setSearchTerm] = useState<string>(""); // State for search filter by name

  // Fetch job applications from the API
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

  // Filter job applications based on search term (name)
  const filteredJobs = jobs.filter((job) => {
    return job.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Job Applications</h2>

      {/* Search filter input for filtering by name */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Show loading indicator if data is being fetched */}
      {loading ? (
        <BlueSpinLoder />
      ) : filteredJobs.length === 0 ? (
        <p className="text-center text-gray-500">No job applications available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job: any) => (
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
