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
      <section className="bg-gradient-to-b from-white to-gray-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          ✅ Why Choose <span className="text-pink-600">Ilaram</span>
        </h2>
        <p className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto">
          We don’t just promise transformation—we guarantee it, with expert care and cutting-edge tools.
        </p>

        <div className="space-y-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex justify-between items-center gap-6"
            >
              <div className="text-5xl">{item.emoji}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  }
  