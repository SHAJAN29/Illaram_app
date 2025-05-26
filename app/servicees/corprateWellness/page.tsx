'use client';


import Head from 'next/head';

export default function StressRelief() {
  const customColor = {
    prim: "#97c25f",    // primary green
    sec: "gray-500",    // secondary gray
    bg: "#f4f7f0",      // soft background
  };

  return (
    <>
      <Head>
        <title>Stress Relieving Program | Illaram Healthcare</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
        className="font-poppins text-gray-800"
        style={{ backgroundColor: customColor.bg }}
      >
        {/* Hero */}
   {/* Hero */}
<section
  className="flex flex-col justify-center items-center py-28 px-6 text-center text-white"
    style={{
    minHeight: '420px',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <h5 className="text-lg md:text-xl text-white/80 font-semibold mb-3 tracking-widest uppercase max-w-md mx-auto">
    Corporate Wellness
  </h5>

  <h1 className="text-5xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-tight drop-shadow-lg">
    Stress Relieving Program
  </h1>

  <div className="mt-4 h-1 w-24 bg-white rounded mx-auto mb-8 opacity-70"></div>

  <p className="max-w-3xl mx-auto text-white/90 text-lg md:text-xl font-light leading-relaxed px-2 md:px-0">
    Helping your team reduce stress, boost energy, and stay resilient with holistic wellness.
  </p>
</section>


        {/* Why Stress Management */}
        <section className="max-w-4xl mx-auto py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Stress Management Matters</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            In today’s high-pressure environments, chronic stress leads to burnout, absenteeism, and reduced focus. Our expert-led program empowers employees with actionable tools for calm, clarity, and well-being.
          </p>
        </section>

        {/* One-Day Wellness Retreat */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2
              className="text-4xl font-bold mb-10"
              style={{ color: customColor.prim }}
            >
              One-Day Wellness Retreat
            </h2>
            <p className="text-gray-700 text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
              Escape the noise and reconnect with calm. Our one-day resort retreat blends wellness, fun, and relaxation — perfect for individuals or teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '🌿 Spa & Therapies',
                  image:
                    'https://img.freepik.com/premium-photo/spa-therapies-wooden-surface-with-blue-backdrop_884296-46450.jpg',
                  desc: 'Relaxing massages, aromatherapy, and stress-relief therapies by professionals.',
                },
                {
                  title: '🎯 Mindful Activities',
                  image:
                    'https://img.freepik.com/premium-photo/friends-playing-beach-volleyball_79405-5190.jpg',
                  desc: 'Meditation, yoga, breathing workshops, nature walks, and fun group games.',
                },
                {
                  title: '🍱 Food & Travel',
                  image:
                    'https://media.istockphoto.com/id/1139761423/photo/beach-dining-in-barbados.jpg?b=1&s=170667a&w=0&k=20&c=SFW4HTN1xU-br0Li8WPD7lpWvGsoXvV_sTrWQmTRgb8=',
                  desc: 'Nutritious meals and round-trip transport—just show up and relax.',
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="rounded-xl shadow-lg overflow-hidden bg-[#f9fef9] hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-lg font-medium text-gray-800">
                📅 Custom packages for corporate teams available.
              </p>
              <p className="text-md text-gray-600">
                Contact us to book your next stress-free day out.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-5xl mx-auto py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">Program Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-700">
            {[
              'Reduced Burnout',
              'Boosted Productivity',
              'Improved Team Morale',
              'Happier, Healthier Employees',
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-md hover:scale-105 transform transition duration-300 cursor-default"
              >
                <p className="text-lg font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section
          className="py-20 px-6 text-white"
          style={{ backgroundColor: customColor.prim }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
            <p className="mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We deliver flexible wellness solutions tailored to your team’s unique schedule and stress challenges.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto text-left text-white font-light text-lg">
              <li>📍 On-site or virtual sessions</li>
              <li>🕒 30–60 minute formats</li>
              <li>📆 Weekly, bi-weekly or monthly options</li>
              <li>👥 Group workshops or individual coaching</li>
            </ul>
          </div>
        </section>

        {/* About Illaram */}
        <section className="max-w-4xl mx-auto py-20 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-6">About Illaram Healthcare</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            We’re a healthcare platform offering subscription-based programs for weight loss, skin care, and hair restoration. Our corporate wellness offerings bring these benefits to your workplace, supporting long-term health from the inside out.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-footer text-white py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Let’s Talk Wellness</h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed">
            Book a free consultation and start transforming workplace wellness.
          </p>
          <div className="mt-8 space-y-2 text-lg font-light">
            <p>📧 <a href="mailto:illaramhealthcare@zohomail.in" className="underline hover:text-prim transition">{`illaramhealthcare@zohomail.in`}</a></p>
           <p>
  📞 <a href="tel:+918778919303" className="text-prim hover:underline">+91-8778919303</a>
</p>

          </div>
        </section>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </>
  );
}
