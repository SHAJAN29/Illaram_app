const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f4f7f0] text-[#3b3c3a]">
      <div className="space-y-6 text-center">
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#94c159] animate-spin"></div>
          <div className="absolute inset-3 rounded-full bg-[#f4f7f0]"></div>
        </div>
        <p className="text-lg font-semibold tracking-wide text-[#3b3c3a]">
          Loading Ilaram Healthcare...
        </p>
      </div>
    </div>
  );
};

export default Loader;
