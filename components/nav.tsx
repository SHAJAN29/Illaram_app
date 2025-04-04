"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/index";
import Image from "next/image";

export const Nav = () => {
  const [menubar, setMenubar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setMenubar(!menubar);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 text-white p-5 lg:p-4 transition-all duration-300 ${
          isScrolled ? "bg-emerald-800 shadow-lg" : "bg-transparent"
        }`}
      >
        <Link href={"/"} className="text-2xl">
          Illaram
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer pb-1.5 transition-all duration-100 hover:text-emerald-200"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="">
          <button className="hidden lg:block btn btn-blue">
            Free Consultation
          </button>
          <Image
            src={"/Toggle menu.svg"}
            width={25}
            height={25}
            alt="menu icon"
            className={`lg:hidden cursor-pointer absolute top-5 right-5 transition-all duration-100 text-white`}
            onClick={handleMenuToggle}
          />
        </div>
      </nav>

      <div
        className={`lg:hidden ${
          !menubar ? "hidden" : ""
        } fixed top-20 right-0 transition-all h-screen w-full duration-200 cursor-pointer lg:hidden flex items-center justify-between mb-3 bg-emerald-800 text-white lg:p-4 opacity-95`}
      >
        {menubar && (
          <div
            className={`menu ${
              menubar ? "open" : ""
            } flex justify-end w-full h-full bg-primary text-white p-5 lg:p-4`}
          >
            <ul className="menu-list flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li
                  className="hover:text-emerald-600 transition-all duration-100 text-right"
                  key={link.key}
                  onClick={() => setMenubar(!menubar)}
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
