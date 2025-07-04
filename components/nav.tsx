"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { contactNumber, NAV_LINKS } from "../constants/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [menubar, setMenubar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);
  const router = useRouter();

  const handleMenuToggle = () => {
    setMenubar(!menubar);
  };

  const handleLogin = () => {
    router.push("/user/login");
    setMenubar(!menubar);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWhatsapp = () => {
    const { whatsAppNumber } = contactNumber;
    navigator.clipboard
      .writeText("Hello, I am interested in your services.")
      .then(() => {
        window.open(`https://wa.me/${whatsAppNumber}`, "_blank");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    < div >
      <nav
        className={`flex items-center justify-between w-full fixed top-0 left-0 right-0 z-50 text-white lg:p-4 transition-all duration-300 ${
          isScrolled ? "bg-transparent" : "bg-transparent"
        }`}
      >
        <Link href={"/"} className=" h-25 w-20" >
        <img src="/illaram logo.png" alt="logo"  />
          
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer font-semibold pb-1.5 transition-all duration-100 hover:text-emerald-200"
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
            src={"/icons8-whatsapp-32.png"}
            width={25}
            height={25}
            alt="menu icon"
            className={`lg:hidden cursor-pointer absolute top-5 right-15 transition-all duration-100 text-white `}
            onClick={handleWhatsapp}
          />
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
        } fixed top-20 right-0 z-40 transition-all ease-in-out h-screen w-full duration-200 cursor-pointer lg:hidden flex items-center justify-between bg-emerald-800 text-white  opacity-95`}
      >
        {menubar && (
          <div
            className={`menu ${
              menubar ? "open" : ""
            } flex justify-end w-full h-full bg-primary  text-primaryColor p-5 lg:p-4`}
          >
            <ul className="menu-list flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li
                  className="hover:text-[#0F766E] transition-all duration-100 text-right"
                  key={link.key}
                  onClick={() => setMenubar(!menubar)}
                >
                  <Link className="font-semibold" href={link.href}>{link.label}</Link>
                </li>
              ))}
              <button className="btn btn-blue" onClick={handleLogin}>
                login
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
