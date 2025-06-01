// pages/index.js
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className=" text-gray-800 font-[poppins]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/Gemini_Generated_Image_18ve7z18ve7z18ve.png"
            alt="Happy, healthy individuals"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-sm">
            Your Complete Wellness Starts Here
          </h1>
          <p className="text-xl md:text-2xl mb-10">
            Skin. Hair. Fitness. Fertility. Mental Well-being. One Subscription. Total Care.
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-xl transition-transform hover:scale-105">
            Start Your Free Wellness Journey
          </button>
        </div>
      </section>

      {/* Who Is This For? */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">This Is for You If…</h2>
        <ul className="max-w-3xl mx-auto text-left text-lg space-y-4 mb-16 leading-relaxed">
          <li>• You’ve tried diet plans, clinics, or gym apps… and gave up</li>
          <li>• You’re dealing with <strong>persistent</strong> fatigue, stress, or burnout</li>
          <li>• You're trying to conceive and want <strong>natural, holistic</strong> support</li>
          <li>• You want <strong>clearer</strong> skin, <strong>healthier</strong> hair, or to feel lighter and more energetic</li>
          <li>• You’re looking for a simple, all-in-one routine that actually works</li>
        </ul>
      </section>

      {/* Why Choose Ilaram */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Why Choose Ilaram?</h2>
        <p className="text-lg mb-16 max-w-3xl mx-auto px-4 text-gray-600">
Ilaram is your personal doctor , therapist, trainer, and health coach  — all in one place.        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            ['💆', 'Skin & Hair Rejuvenation'],
            ['🧘‍♀️', 'Yoga, Zumba, and Fitness Training'],
            ['🥗', 'Personalized Diet & Lifestyle Plans'],
            ['⚖️', 'Weight Loss & Metabolic Health'],
            ['🤰', 'Fertility & Hormonal Balance'],
            ['📲', 'Daily Progress Tracking'],
          ].map(([icon, label], i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 text-center"
              aria-label={label}
            >
              <div className="text-5xl mb-4 text-blue-500">{icon}</div>
              <h3 className="font-semibold text-xl text-gray-700">{label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-pink-50 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 text-left">
          {[
            'Fill out your wellness profile',
            'Get matched with your care team',
            'Begin your personalized plan',
            'Track your progress and evolve over time',
          ].map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border-l-4 border-pink-500 shadow-md hover:shadow-lg transition">
              <div className="text-pink-600 text-4xl font-bold mb-4">{i + 1}</div>
              <h4 className="font-semibold text-lg text-gray-700">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">All-Inclusive Wellness. One Monthly Fee.</h2>
        <div className="bg-white text-gray-800 p-10 rounded-2xl max-w-3xl mx-auto shadow-xl">
          <h3 className="text-2xl font-semibold mb-6">Included in Your Plan:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
            {[
              'Initial consult + customized care plan',
              'Weekly sessions (yoga/fitness/therapy)',
              'Nutrition & fertility coaching',
              '24/7 chat support',
              'Monthly review & lifestyle check-ins',
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-green-500 mr-3 text-2xl">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <button className="mt-12 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
          See Plans & Pricing
        </button>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto text-center px-6 py-24">
        <h3 className="text-3xl md:text-4xl font-semibold mb-10">Real Change, Real People</h3>
        {[
          `"Ilaram helped me lose weight, fix my skin, and feel confident again — without pressure or pills." – Nisha, The Power of Rejuvenation`,
          `"I started for skin, but ended up transforming my whole lifestyle." – Asha`,
          `"The fertility support was exactly what we needed — gentle, guided, and full of care." – Ankit & Priya`,
          `"Weight loss that didn’t feel like punishment. Finally!" – Rahul`,
        ].map((quote, i) => (
          <blockquote key={i} className="italic mb-6 text-gray-700">&ldquo;{quote}&rdquo;</blockquote>
        ))}
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          You Deserve a Healthier, Happier You.
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Whether you're healing, growing, or transforming — we're here to walk the path with you.
          Because wellness isn’t a luxury. It’s your right.
        </p>
        <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
          Rejuvenate. Refresh. Reset — With Ilaram
        </button>
        <p className="mt-6 text-sm">📞 Book Your Free Consultation Now</p>
      </section>
    </div>
  );
}
