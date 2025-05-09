
import Link from 'next/link'
import React from 'react'

const custom404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
    <div className="text-center">
      <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link href="/"className="inline-block btn btn-blue px-5 py-3 rounded-lg font-medium transition">
         
          Go back home
        
      </Link>
    </div>
  </div>
  )
}

export default custom404