"use client";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaAngleRight,
} from "react-icons/fa";
import { NAV_LINKS } from "../constants";


const oficialLinks = [{


  href: "/Affiliates",
  label: "Become an Affiliate",
},
{
  href: "/Doctor/login",
  label: "Doctor's login",
},
{
  href: "/admin/login",
  label: "Admin login",
},


];




export const Footer = () => {
  return (
    <footer className="bgillaramPrimary text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Navigation Links */}
        <div className="flex flex-row justify-between items-start gap-10">
          <div>
          <h3 className="text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            {NAV_LINKS.map((link) => (
              <li
                key={link.href}
                className="flex items-center gap-2 hover:text-gray-100 transition"
              >
                <FaAngleRight className="text-sm" />
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
            </ul>
            </div >
            <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">Official</h3>

              {" "}
              <ul className="text-gray-100 text-sm space-y-3 text-right">
                {" "}
                {oficialLinks.map((officals) => (
                <li key={officals.href} className="text-gray-300">
                  <Link href={officals.href}>{officals.label}</Link>
                </li>
                ))}
              </ul>
            </div>
         
        </div>

        {/* Policy Links */}
       
          <div>
          <h3 className="Legal text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:text-gray-100">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="hover:text-gray-100"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/refund-policy" className="hover:text-gray-100">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
    

 {/* Contact */}
 <div>
  <h3 className="text-lg font-semibold mb-4">Contact</h3>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li>
      <span className="block font-medium text-white">Customer Support</span>
    
      <a href="tel:8778919303" className="hover:text-gray-100">+91 8778919303</a> <br /> {/* Optional number */}
      <a href="tel:7200318608" className="hover:text-gray-100">+91 7200318608</a>

    </li>
    <li>
      <span className="block font-medium text-white">Email</span>
      <a href="mailto:illaramhealthcare@zohomail.in" className="hover:text-gray-100">
        illaramhealthcare@zohomail.in
      </a>
    </li>
    <li>
      <span className="block font-medium text-white">Address</span>
      <span>Chennai, Tamil Nadu</span> {/* Optional address */}
    </li>
  </ul>
</div>

{        /* hiring */}
<div>
          <h3 className="text-lg font-semibold mb-4">Jobs</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
   
            <li>
              <Link href="/Hiring" className="hover:text-gray-100">
                <span className="text-gray-100">Hiring</span>
              </Link>
            </li>
          </ul>
        </div>
        {        /* Exclusive */}
<div>
          <h3 className="text-lg font-semibold mb-4">Exclusive</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
   
            <li>
              <Link href="/servicees/Exclusive" className="hover:text-gray-100">
                <span className="text-gray-100">Pre-marital</span>
              </Link>
            </li>
          </ul>
        </div>




        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white hover:text-[#FF5F37] text-xl transition" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white hover:text-[#FF5F37] text-xl transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white hover:text-[#FF5F37] text-xl transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white hover:text-[#FF5F37] text-xl transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Illaram Healthcare. All rights reserved.
      </div>
    </footer>
  );
};
