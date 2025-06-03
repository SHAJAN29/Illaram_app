export default function PainPoints() {
  const painPoints = [
    "Losing hair and confidence?",
    "Gaining weight instead of losing stress?",
    "Feeling “off” emotionally or physically?",
    "Wondering why intimacy or energy isn’t the same anymore?",
  ];

  return (
    <section className="bg-[#f4f7f0] px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#94c159] mb-4">😥 Are You Afraid?</h2>
        <p className="text-[#a9aba6] text-lg mb-8">
          You’re not alone—and you don’t have to walk into marriage feeling less than your best.
        </p>
        <ul className="text-left text-lg space-y-4 max-w-xl mx-auto text-[#333]">
          {painPoints.map((point, i) => (
            <li key={i} className="flex items-start">
              <span className="text-[#94c159] mr-2">➤</span> {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
