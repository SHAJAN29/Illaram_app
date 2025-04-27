// Removed invalid import as it is not used in the code
"use client";

import { Service_card_details } from "@/constants/index";
import { CardDefault } from "@/small_components/service_card";
import ServiceSlider from "app/servicees/component/HeroSlider";
import Link from "next/link";
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
    <>
<ServiceSlider/>
</>





  );
};

export default colorTest;
