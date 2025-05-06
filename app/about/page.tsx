import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Ilaram Healthcare</title>
        <meta
          name="description"
          content="Ilaram Healthcare is a wellness optimization platform helping adults get physically and mentally ready for marriage through our exclusive 100-Day Pre-Wedding Transformation Program."
        />
        <meta
          name="keywords"
          content="healthcare, wellness, pre-wedding transformation, Ilaram Healthcare, holistic health, adult wellness, bride fitness, groom transformation"
        />
        <meta name="author" content="Ilaram Healthcare" />
        <meta property="og:title" content="About Us | Ilaram Healthcare" />
        <meta
          property="og:description"
          content="Learn how Ilaram Healthcare helps adults prepare physically and mentally for their wedding day with a science-backed 100-Day Transformation Program."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ilaramhealthcare.com/about" />
        <meta property="og:image" content="https://www.ilaramhealthcare.com/images/about-cover.jpg" />
        <link rel="canonical" href="https://www.ilaramhealthcare.com/about" />
      </Head>

      <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed text-center">
            <strong className="text-emerald-600">Ilaram Healthcare</strong> is a modern healthcare and wellness optimization platform for adults.  
            We combine medical science with holistic healing to create measurable, lasting results.  
            Our exclusive <strong>100-Day Pre-Wedding Transformation Program</strong> is designed to help brides and grooms get 
            <strong> physically ready </strong> and <strong> mentally strong </strong> before their wedding—naturally, sustainably, and confidently.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">💍 Why We Exist</h2>
              <p className="text-gray-600 mb-4">
                Today’s adults face an overwhelming mix of stress, screens, processed food, and poor sleep.  
                For couples approaching marriage, this often shows up as weight gain, low energy, skin breakouts, hair fall, anxiety, and hormonal issues,infertility, etc.  
                Our mission is to solve this—not with shortcuts, but with science and care.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">👨‍⚕️ What Makes Us Different</h2>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li><strong>Doctor-Led:</strong> Certified medical experts—not influencers.</li>
                <li><strong>Fully Personalized:</strong> Based on labs, lifestyle, and stress levels.</li>
                <li><strong>Root-Cause Focused:</strong> We treat the cause, not just the symptoms.</li>
                <li><strong>App-Powered:</strong> Real-time tracking, coaching & support.</li>
                <li><strong>100% Money-Back Guarantee:</strong> See results—or it’s free.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🌎 Where We Work</h2>
            <p className="text-gray-600">
              We're based in Chennai, India—but serve clients globally through virtual consultations and app-based coaching.  
              Whether you're in India or abroad, your transformation can begin from the comfort of home.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🙌 Our Mission</h2>
            <p className="text-gray-600">
              To help adults, especially brides and grooms, optimize their body and mind before marriage.  
              We want you to step into the next chapter of life with confidence, clarity, and complete wellness.
            </p>
          </div>

          <div className="mt-12 text-center border-t pt-8">
            <p className="text-lg font-semibold text-gray-800">📞 Let’s Talk</p>
            <p className="text-gray-700">Call us at <strong>+91 8778919303</strong> or email <strong>illaramhealthcare@zohomail.in</strong></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
