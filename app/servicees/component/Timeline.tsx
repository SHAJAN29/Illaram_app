const phases = [
    {
      icon: "🌿",
      title: "Phase 1: Restore",
      points: [
        "Full-body health check by licensed experts",
        "Gut reset, hormonal balance & detox",
        "Personalized diet & supplement plan",
      ],
    },
    {
      icon: "💪",
      title: "Phase 2: Strengthen",
      points: [
        "Custom fitness training (in-person or remote)",
        "Weight loss or sculpting plans",
        "Clean, organic supplements",
      ],
    },
    {
      icon: "✨",
      title: "Phase 3: Enhance",
      points: [
        "Skin & hair revival treatments",
        "Anti-aging & glow-boosting routines",
        "Tailored beauty plans for both men & women",
      ],
    },
    {
      icon: "🧠",
      title: "Phase 4: Empower",
      points: [
        "Emotional strength coaching",
        "Relationship prep & communication support",
        "Stress management & mental clarity techniques",
      ],
    },
  ];
  
  export default function Timeline() {
    return (
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">🔄 The Transformation Timeline</h2>
          <div className="relative border-l border-gray-300 pl-6">
            {phases.map((phase, idx) => (
              <div key={idx} className="mb-12 relative">
                <div className="absolute -left-4 top-1 w-8 h-8 rounded-full text-white flex items-center justify-center text-xl">
                  {phase.icon}
                </div>
                <h3 className="text-xl font-semibold pl-4 text-gray-900 mb-2">{phase.title}</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {phase.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  