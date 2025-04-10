// Removed invalid import as it is not used in the code
"use client";

import React, { useEffect, useState } from "react";

const colorTest = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check if dark mode preference is saved in localStorage
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    // Toggle dark class and save preference in localStorage
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <section className="max-w-6xl h-screen mx-auto px-6 py-20">
      {/* Dark Mode Toggle Button */}
      <div className="flex justify-end mb-8">
        <button
          onClick={handleToggle}
          className="text-teal-500 dark:text-teal-400"
          aria-label="Toggle Dark Mode"
        >
          <span className="sr-only">Toggle Dark Mode</span>
          {/* Sun Icon for Light Mode */}
          {!darkMode && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2v2m0 0c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3zm0 0v4m-5 0c-1.657 0-3 1.343-3 3s1.343 3 3 3h6c1.657 0 3-1.343 3-3s-1.343-3-3-3h-6z"
              ></path>
            </svg>
          )}
          {/* Moon Icon for Dark Mode */}
          {darkMode && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 0c1.657 0 3 1.343 3 3s-1.343 3-3 3c-1.657 0-3-1.343-3-3s1.343-3 3-3zm0 0v4m-5 0c-1.657 0-3 1.343-3 3s1.343 3 3 3h6c1.657 0 3-1.343 3-3s-1.343-3-3-3h-6z"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-teal-500 dark:text-teal-400 text-4xl font-extrabold mb-4">
          Welcome to Illaram
        </h1>
        <p className="mb-6">
          Helping you prepare for marriage in a modern, mindful way.
        </p>
        <p className="text-sm text-gray-500 mb-6 italic">
          Trusted by 1,000+ individuals across India preparing for meaningful
          marriages
        </p>
        <button className="bg-orange-500 dark:bg-orange-400 text-white px-6 py-3 rounded-full">
          Get Started
        </button>
      </section>
    </section>
  );
};

export default colorTest;
