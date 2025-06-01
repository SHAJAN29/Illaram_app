import Head from 'next/head';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-pink-50 font-sans text-gray-800">
      <Head>
        <title>Ilaram Healthcare – Rejuvenate. Refresh. Reset.</title>
        <meta name="description" content="Your complete wellness starts here with Ilaram's all-in-one subscription." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative bg-gradient-to-br from-blue-500 to-pink-400 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/Gemini_Generated_Image_tq42gotq42gotq42.png"
              alt="Happy, healthy people"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Wellness, Reimagined.</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              One subscription for <strong>skin, hair, fitness, fertility,</strong> and more — guided by real experts.
            </p>
            <button className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition transform hover:scale-105">
              💡 Get Your Free Wellness Assessment
            </button>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">What’s Included</h2>
            <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
              Ilaram is your personal health coach, therapist, trainer, and doctor — all in one place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                ['💆', 'Glowing Skin & Hair Rejuvenation'],
                ['🧘‍♀️', 'Fitness & Stress-Relief Workouts'],
                ['🥗', 'Custom Nutrition & Diet Plans'],
                ['🤰', 'Fertility & Hormonal '],

                ['👩‍⚕️', 'Expert Consultations & Support'],
                ['📊', 'Personalized Health Tracking'],
                ['📱', 'App-Based Daily Progress & Support']
              ].map(([icon, label], i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition">
                  <div className="text-4xl mb-4 text-blue-500">{icon}</div>
                  <h3 className="font-semibold text-xl">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- How It Works --- */}
        <section className="py-20 bg-pink-50 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
              {[
                'Fill out your wellness profile',
                'Get matched with your expert team',
                'Start your personalized care plan',
                'Track results, evolve, and thrive'
              ].map((step, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border-l-4 border-pink-500 shadow">
                  <div className="text-pink-600 text-3xl font-bold mb-4">{i + 1}</div>
                  <h4 className="font-semibold text-lg">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Pricing Section --- */}
        <section className="py-20 bg-gray-900 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Simple Pricing. Total Wellness.</h2>
            <div className="bg-white text-gray-800 p-8 rounded-xl max-w-3xl mx-auto shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Included in Your Plan:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-lg">
                {[
                  "Custom care plan + consultation",
                  "Daily live sessions (Yoga / fitness)",
                  "personalized skin & hair care",
                  "presonalized supplement plans",
                  "Monthly nutrition & diet plans",
                  "Nutrition & Fertility guidance",
                  "Personalized fitness programs",
                  "24/7 wellness chat support",
                  "Monthly check-ins with experts"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-3 text-2xl">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-10 bg-purple-600 text-white hover:bg-purple-700 font-bold py-3 px-8 rounded-full shadow-md transition hover:scale-105">
              💳 View Plans & Pricing
            </button>
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Rejuvenate. Refresh. Reset.</h2>
            <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto">
              We’ll walk this journey with you — toward a life that’s lighter, healthier, and truly yours.
            </p>
            <div className="space-y-4 md:flex md:justify-center md:space-x-6 md:space-y-0">
              <button className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition hover:scale-105">
                🌱 Start My Plan
              </button>
              <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition hover:scale-105">
                📞 Book a Free Consultation
              </button>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
};

export default LandingPage;
// Note: This code is a complete landing page for Ilaram Healthcare, designed with Tailwind CSS and Next.js.
