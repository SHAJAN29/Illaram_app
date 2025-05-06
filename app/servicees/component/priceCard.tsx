export default function PriceCard() {
    return (
      <div className="max-w-sm mx-auto p-6">
        <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-center">100-Day Pre-Wedding Program</h3>
          <p className="text-lg text-center mb-6">Achieve your ideal look and feel amazing on your big day.</p>
          
          <div className="flex justify-center items-center mb-6">
            <span className="text-4xl font-bold">₹</span>
            <span className="text-6xl font-extrabold">49,999</span>
            <span className="text-lg font-medium ml-2">for 100 days</span>
          </div>
  
          <ul className="space-y-4 text-lg">
            <li>✔️ Personalized diet and fitness plan</li>
            <li>✔️ Skin and hair treatments</li>
            <li>✔️ Emotional coaching & relationship support</li>
            <li>✔️ 24/7 access to wellness experts</li>
          </ul>
  
          <div className="mt-8">
            <a
              href="#contact"
              className="w-full bg-yellow-400 text-black py-3 rounded-full text-lg font-semibold text-center transform transition-transform hover:scale-105 hover:bg-yellow-500"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    )
  }
  