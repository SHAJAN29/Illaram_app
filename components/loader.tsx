// components/Loader.tsx
const Loader = () => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#008585] text-white">
        <div className="space-y-4 text-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mx-auto"></div>
          <p className="text-lg font-semibold tracking-wide">Loading Ilaram Healthcare...</p>
        </div>
  
        <style jsx>{`
          .loader {
            border-top-color: #63b546;
            animation: spin 1s linear infinite;
          }
  
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default Loader;
  