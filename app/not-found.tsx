'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  const imagePath = '/images/not_found.svg'; // Make sure this file exists in /public/images/

  return (
    <main className="min-h-screen p-10 flex items-center  justify-center bg-[#fff] ">
      <div className="max-w-7xl mt-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
          {/* Image for mobile */}
          <img
            src={imagePath}
            alt="Page not found illustration"
            className="block sm:hidden mx-auto max-w-xs"
          />

 <div className="text-center sm:text-left max-w-md mx-auto sm:mx-0">
  <h1 className="text-3xl sm:text-4xl font-extrabold text-[#ff8199] mb-4 sm:mb-6 leading-tight">
    Something is not right...
  </h1>
  <p className="text-[#3b3c3a] text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
    The page you are trying to open does not exist. You may have mistyped the address, or the
    page has been moved to another URL. If you think this is an error, contact support.
  </p>
<Link
  href="/"
  className="inline-block px-5 py-2 border-2 border-[#ff8199] text-[#ff8199] font-semibold rounded-md hover:bg-[#ff8199] hover:text-white transition text-sm sm:text-base"
>
  Get back to home page
</Link>

</div>


          {/* Image for desktop */}
          <img
            src={imagePath}
            alt="Page not found illustration"
            className="hidden sm:block mx-auto max-w-md"
          />
        </div>
      </div>
    </main>
  );
}
