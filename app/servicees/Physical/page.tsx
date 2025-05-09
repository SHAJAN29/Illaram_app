'use client';

// pages/programs/physical-conditioning.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PhysicalConditioning() {

  return (
    <div className="mt-10 font-[poppins]">
      <Head>
        <title>Physical Conditioning | Ilaram Healthcare</title>
      </Head>

      <main className="min-h-screen bg-white px-6 py-16 font-bold text-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6 tracking-tight">
            Physical Conditioning Program
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            A curated 100-day physical conditioning journey that blends modern science with holistic fitness to help you build strength, energy, and confidence—naturally.
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            <ul className="space-y-4 text-md text-gray-700">
              <li>✅ Custom fitness & mobility plans</li>
              <li>✅ Weekly progress tracking</li>
              <li>✅ Evidence-backed nutrition coaching</li>
              <li>✅ Low-impact recovery & injury prevention</li>
            </ul>

           
              
               
                  <Link
                    href={"/signups"}
                    className="w-full text-center btn btn-blue py-3 rounded-md font-semibold "
                  >
                    Join Now
                  </Link>
                
           
          </div>
        </div>
      </main>
    </div>
  );
}
