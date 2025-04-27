export default function PainPoints() {
    const painPoints = [
      "Losing hair and confidence?",
      "Gaining weight instead of losing stress?",
      "Feeling “off” emotionally or physically?",
      "Wondering why intimacy or energy isn’t the same anymore?",
    ];
  
    return (
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">😥 Are You Afraid?</h2>
          <p className="text-gray-700 text-lg mb-8">
            You’re not alone—and you don’t have to walk into marriage feeling less than your best.
          </p>
          <ul className="text-left text-lg space-y-4 max-w-xl mx-auto text-gray-800">
            {painPoints.map((point, i) => (
              <li key={i} className="flex items-start">
                <span className="illaramAccent mr-2">➤</span> {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  