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

const oficialLinks = [
  { href: "/Affiliates", label: "Become an Wellness Partner" },
  { href: "/Doctor/login", label: "Doctor's Login" },
  { href: "/admin/login", label: "Admin Login" },
];

export const Footer = () => {
  return (





<>

 <footer className="bg-white text-black border-t border-gray-200 py-16 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 text-sm">
    
    {/* Contact */}
    <div>
      <h3 className="font-semibold mb-4">Contact</h3>
      <ul className="space-y-2 text-gray-500">
        <li>
          <a href="mailto:illaramhealthcare@gmail.com" className="hover:text-black transition">
            Mail
          </a>
        </li>
        <li>
          <a href="/press" className="hover:text-black transition">
            Press
          </a>
        </li>
        <li>
          <a href="/partnerships" className="hover:text-black transition">
            Partnerships
          </a>
        </li>
      </ul>
    </div>

    {/* Legal */}
    <div>
      <h3 className="font-semibold mb-4">Legal</h3>
      <ul className="space-y-2 text-gray-500">
        <li>
          <a href="/PrivacyPolicy" className="hover:text-black transition">Privacy Policy</a>
        </li>
        <li>
          <a href="/Terms" className="hover:text-black transition">Terms of Service</a>
        </li>
        <li>
          <a href="/cookies" className="hover:text-black transition">Cookies</a>
        </li>
      </ul>
    </div>

    {/* Wellness
    <div>
      <h3 className="font-semibold mb-4">Wellness</h3>
      <ul className="space-y-2 text-gray-500">
        <li><a href="/features" className="hover:text-black transition">Features</a></li>
        <li><a href="/lifestyle" className="hover:text-black transition">Lifestyle</a></li>
        <li><a href="/pricing" className="hover:text-black transition">Pricing</a></li>
      </ul>
    </div> */}

    {/* Company */}
    <div>
      <h3 className="font-semibold mb-4">Company</h3>
      <ul className="space-y-2 text-gray-500">
        <li><a href="/about" className="hover:text-black transition">About</a></li>
        <li><a href="/Hiring" className="hover:text-black transition">Careers</a></li>
        <li><a href="/philosophy" className="hover:text-black transition">Philosophy</a></li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <h3 className="font-semibold mb-4">Social</h3>
      <ul className="space-y-2 text-gray-500">
        <li>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/ilaram-healthcare-pvt-ltd" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  </div>

  <p className="text-center text-xs text-gray-400 mt-12">
    “You chase the crown, we’ll handle the body that carries you.”
  </p>
</footer>

          </>




 
  );
};


   // <footer className="bg-footer text-white py-14 px-6 font-[poppins]">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
    //     {/* Column 1: Explore & Official */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
    //       <ul className="space-y-3 text-gray-300 text-sm">
    //         {NAV_LINKS.map((link) => (
    //           <li key={link.href} className="flex items-center gap-2 hover:text-white transition">
    //             <FaAngleRight className="text-white text-xs" />
    //             <Link href={link.href}>{link.label}</Link>
    //           </li>
    //         ))}
    //       </ul>
    //       <h3 className="text-lg font-semibold mt-6 mb-4 text-white">Official</h3>
    //       <ul className="space-y-2 text-gray-300 text-sm">
    //         {oficialLinks.map((item) => (
    //           <li key={item.href}>
    //             <Link href={item.href} className="hover:text-white transition">
    //               {item.label}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Column 2: Legal & Exclusive */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
    //       <ul className="space-y-2 text-gray-300 text-sm">
    //         <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
    //         <li><Link href="/terms-and-conditions" className="hover:text-white">Terms & Conditions</Link></li>
    //         <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
    //       </ul>
    //       <h3 className="text-lg font-semibold mt-6 mb-4 text-white">Exclusive</h3>
    //       <ul className="text-sm text-gray-300">
    //         <li>
    //           <Link href="/servicees/Exclusive" className="hover:text-white">Pre-marital</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Column 3: Contact */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4 text-[#97c25f]">Contact</h3>
    //       <ul className="space-y-3 text-gray-300 text-sm">
    //         <li>
    //           <span className="block text-white font-medium">Customer Support</span>
    //           <a href="tel:8778919303" className="hover:text-white block">+91 8778919303</a>
    //           <a href="tel:7200318608" className="hover:text-white block">+91 7200318608</a>
    //         </li>
    //         <li>
    //           <span className="block text-white font-medium">Email</span>
    //           <a href="mailto:illaramhealthcare@zohomail.in" className="hover:text-white">
    //             admin@ilaramhealthcare.com
    //           </a>
    //         </li>
    //         <li>
    //           <span className="block text-white font-medium">Address</span>
    //           Chennai, Tamil Nadu
    //         </li>
    //       </ul>
    //     </div>

    //     {/* Column 4: Social + Jobs */}
    //     <div>
    //       <h3 className="text-lg font-semibold mb-4 text-[#97c25f]">Connect with Us</h3>
    //       <div className="flex gap-4 mb-6">
    //         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    //           <FaInstagram className="text-white hover:text-[#97c25f] text-xl transition" />
    //         </a>
    //         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    //           <FaFacebookF className="text-white hover:text-[#97c25f] text-xl transition" />
    //         </a>
    //         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    //           <FaLinkedinIn className="text-white hover:text-[#97c25f] text-xl transition" />
    //         </a>
    //         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    //           <FaTwitter className="text-white hover:text-[#97c25f] text-xl transition" />
    //         </a>
    //       </div>
    //       <h3 className="text-lg font-semibold mb-3 text-[#97c25f]">Jobs</h3>
    //       <ul className="text-sm text-gray-300">
    //         <li>
    //           <Link href="/Hiring" className="hover:text-white">Hiring</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Bottom Bar */}
    //   <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-700 pt-4">
    //     © {new Date().getFullYear()} Illaram Healthcare. All rights reserved.
    //   </div>
    // </footer>