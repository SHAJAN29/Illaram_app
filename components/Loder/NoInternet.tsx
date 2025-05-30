import { useEffect, useState } from 'react';

const NoInternet = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check on mount
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center bg-[#f4f7f0] text-[#3b3c3a] border-b-2 border-[#94c159] shadow-md">
      <div className="flex items-center gap-3 py-3 px-6">
        <svg
          className="w-6 h-6 text-[#94c159]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 5.636A9 9 0 003.514 20.486m3.535-3.535a5 5 0 017.07-7.071m4.95 4.95a1 1 0 001.415-1.414M15 12a3 3 0 013 3"
          />
        </svg>
        <span className="font-semibold">
          No internet connection. Trying to reconnect...
        </span>
      </div>
    </div>
  );
};

export default NoInternet;
