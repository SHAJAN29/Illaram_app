import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Illaram Healthcare</title>
        <meta name="description" content="Illaram Healthcare is a wellness optimization platform helping couples get physically and mentally ready for marriage with our 100-Day Transformation Program." />
        <meta name="keywords" content="wedding wellness, pre-wedding transformation, Illaram Healthcare, holistic health, bride fitness, groom wellness" />
        <meta name="author" content="Illaram Healthcare" />
        <meta property="og:title" content="About Us | Illaram Healthcare" />
        <meta property="og:description" content="Helping adults prepare physically and mentally for married life through our science-backed 100-day plan." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.illaramhealthcare.com/about" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb" />
        <link rel="canonical" href="https://www.illaramhealthcare.com/about" />
      </Head>

      <section className="bg-[#f4f7f0] py-16 px-6 md:px-12 text-[#a9aba6] font-[poppins]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#94c159] mb-8 text-center">About Us</h1>

          <p className="text-lg md:text-xl mb-6 leading-relaxed text-center">
            <strong className="text-[#94c159]">Illaram Healthcare</strong> is a modern wellness platform combining medical science with holistic care.
            Our <strong>100-Day Pre-Wedding Transformation Program</strong> prepares brides and grooms to feel amazing—
            physically, mentally, and emotionally—as they step into marriage.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-[#94c159] mb-4">💍 Why We Exist</h2>
              <p className="mb-4">
                Most adults today enter marriage already dealing with stress, weight gain, dull skin, low energy, hormonal imbalance, and more. 
                We created Illaram to solve this at the root—before these issues affect your relationship, fertility, or confidence.
              </p>
              <img
                src="https://www.rd.com/wp-content/uploads/2017/10/00_Daily-Habits-of-Couples-in-Healthy-Relationships_292955957-Monkey-Business-Images_FT.jpg"
                alt="Healthy couple"
                className="rounded-lg shadow-md mt-4"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#94c159] mb-4">👨‍⚕️ What Makes Us Different</h2>
              <ul className="space-y-3 list-disc list-inside">
                <li><strong>Doctor-Led:</strong> Certified medical professionals—not influencers or trends.</li>
                <li><strong>Fully Personalized:</strong> Custom plans based on labs, lifestyle & hormones.</li>
                <li><strong>Root-Cause Healing:</strong> We fix problems from the inside out.</li>
                <li><strong>App + Real Coaches:</strong> Progress tracking, accountability & guidance daily.</li>
                <li><strong>Guaranteed Results:</strong> 100% money-back if you see no results.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#94c159] mb-4">🌍 Where We Work</h2>
            <p>
              Based in Chennai, India — serving clients globally through online consults, video check-ins, and our mobile wellness app. 
              You can join our program from anywhere, anytime.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#94c159] mb-4">🎯 Our Mission</h2>
            <p>
              To make wedding wellness a new norm. We want every bride and groom to feel strong, radiant, fertile, and fully ready for marriage. 
              Not just for one day — but for the years that follow.
            </p>
          </div>

          <div className="mt-12 text-center border-t pt-8">
            <p className="text-lg font-semibold text-[#94c159]">📞 Let’s Talk</p>
            <p>
              Call us at <strong>+91 8778919303</strong> or email <strong>illaramhealthcare@zohomail.in</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
