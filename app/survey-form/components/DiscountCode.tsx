'use client';

import { useEffect, useState } from 'react';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function DiscountCode() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('ILA10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className=" font-[Poppins] max-w-sm mx-auto text-center">
   

      <p className="text-sm text-gray-500 mb-2">Your 10% discount code:</p>

      <div className="flex items-center justify-between bg-pink-100 text-pink-600 px-4 py-2 rounded-lg shadow-sm relative z-10">
        <span className="text-lg font-semibold tracking-wide">ILARAM10</span>

        <button
          onClick={handleCopy}
          className="text-pink-600 hover:text-pink-700 transition"
          aria-label="Copy code"
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-green-600" />
          ) : (
            <ClipboardIcon className="h-5 w-5" />
          )}
        </button>
      </div>

      {copied && (
        <p className="mt-2 text-sm text-green-600 font-medium">Copied to clipboard!</p>
      )}
    </div>
  );
}
