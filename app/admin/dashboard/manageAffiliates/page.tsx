// app/admin/affiliates/page.tsx
'use client'; // Marks this component as client-side

import React, { useEffect, useState } from 'react';

interface Affiliate {
  id: number;
  name: string;
  email: string;
  category: string;
  description: string;
  website?: string;
  createdAt: string;
}

async function getAffiliates(): Promise<Affiliate[]> {
  const res = await fetch('/api/Affiliates', {
    cache: 'no-store', // Optional: disables caching during dev
  });

  if (!res.ok) {
    throw new Error('Failed to fetch affiliates');
  }

  return res.json();
}

export default function ManageAffiliatesPage() {
  const [affiliates, setAffiliates] = useState<Affiliate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>(''); // State to store the category filter

  useEffect(() => {
    const fetchAffiliates = async () => {
      try {
        const data = await getAffiliates();
        setAffiliates(data);
      } catch (error: any) {
        setError('Failed to fetch affiliates.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAffiliates();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredAffiliates = affiliates.filter((affiliate) => {
    return affiliate.category.toLowerCase().includes(filter.toLowerCase());
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Manage Affiliates</h1>

      {/* Search bar for filtering by category */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Filter by category..."
          value={filter}
          onChange={handleFilterChange}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredAffiliates.length === 0 ? (
        <p>No affiliates found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAffiliates.map((affiliate) => (
            <div
              key={affiliate.id}
              className="relative border border-gray-200 rounded-lg shadow-lg p-6"
            >
              {/* CreatedAt in Top-Right */}
              <div className="absolute top-2 right-2 bg-emerald-500 text-white text-sm px-3 py-1 rounded-md">
                {new Date(affiliate.createdAt).toLocaleDateString()}
              </div>

              <h3 className="text-xl font-semibold mb-2">{affiliate.name}</h3>
              <p className="text-gray-500 mb-2">Category: {affiliate.category}</p>
              <p className="text-gray-700 mb-4">{affiliate.description}</p>
              <p className="text-gray-600 mb-2">Email: {affiliate.email}</p>

              <div className="flex space-x-4 mt-4">
                <a
                  href={`mailto:${affiliate.email}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Email
                </a>
                {affiliate.website && (
                  <a
                    href={affiliate.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
