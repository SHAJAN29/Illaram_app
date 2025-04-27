const features = [
    {
      emoji: "🧬",
      title: "Scientific Health Plans",
      desc: "Full assessments by doctors, nutritionists & fitness experts.",
    },
    {
      emoji: "💪",
      title: "Body-Sculpting Workouts",
      desc: "Custom fitness routines & organic supplements for real results.",
    },
    {
      emoji: "✨",
      title: "Beauty Enhancements",
      desc: "Skin & hair treatments using natural, proven methods.",
    },
    {
      emoji: "🧠",
      title: "Mental + Emotional Strength",
      desc: "Coaching for confidence, stress relief & relationship clarity.",
    },
  ];
  
  export default function Features() {
    return (
      <section className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Why We’re Different</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <div className="text-4xl mb-4">{f.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  