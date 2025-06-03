const reasons = [
  {
    emoji: "👨‍⚕️",
    title: "Expert Team",
    desc: "Doctors, dietitians, fitness pros & wellness coaches on one mission: your glow-up.",
  },
  {
    emoji: "📱",
    title: "Tech-Powered Convenience",
    desc: "Track your progress, chat with your coach & access everything in one simple app.",
  },
  {
    emoji: "💯",
    title: "Guaranteed Results",
    desc: "If you don’t see results, you get your money back.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f4f7f0] px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#94c159] mb-6">
          ✅ Why Choose <span className="text-[#a9aba6]">Ilaram</span>
        </h2>
        <p className="text-[#666] text-lg text-center mb-16 max-w-2xl mx-auto">
          We don’t just promise transformation—we guarantee it, with expert care and cutting-edge tools.
        </p>

        <div className="space-y-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e0e0e0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex justify-between items-center gap-6"
            >
              <div className="text-5xl">{item.emoji}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#94c159] mb-2">{item.title}</h3>
                <p className="text-[#555]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
