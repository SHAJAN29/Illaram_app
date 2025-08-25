import Head from 'next/head';


const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Ilaram Healthcare</title>
        <meta
          name="description"
          content="Ilaram Healthcare is India’s first health automation system — proactive, subscription-based, and designed to keep high performers young, strong, and unstoppable."
        />
        <meta
          name="keywords"
          content="health automation, lifestyle subscription, proactive wellness, high performers, longevity, Ilaram Healthcare"
        />
        <meta name="author" content="Ilaram Healthcare" />
        <meta property="og:title" content="About Us | Ilaram Healthcare" />
        <meta
          property="og:description"
          content="We help founders, leaders, and professionals protect their most valuable asset — health — with personalized, automated care systems."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ilaramhealthcare.com/about"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
        />
        <link rel="canonical" href="https://www.ilaramhealthcare.com/about" />
      </Head>

{/* About Section */}
<section 
  className="relative h-screen flex items-center justify-center text-[#111] bg-cover bg-center" 
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/10"></div>

  <div className="relative max-w-4xl mx-auto text-center px-6">
    <h1 className="text-5xl md:text-6xl font-light text-white mb-10 tracking-tight">
      About Ilaram
    </h1>
    <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto">
      Everyone’s chasing something. We exist so health never slows you down.
      Our system runs quietly in the background — keeping you young, strong,
      and ready for life’s biggest stages.
    </p>
  </div>
</section>



      {/* Philosophy Section */}
      <section className="bg-gray-50 py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <blockquote className="text-2xl md:text-3xl italic font-light text-center text-gray-700 mb-16 leading-relaxed">
            “All the wealth in the world means nothing without health.”
          </blockquote>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-black">
                Our Philosophy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Health shouldn’t be managed like a crisis. It should flow —
                quietly and intelligently. An invisible system that keeps your
                body sharp and your mind clear.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Ilaram, we bring together doctors, coaches, and automation to
                remove friction. You focus on the race. We take care of the
                machine.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
                alt="Minimal luxury wellness"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div>
            <h2 className="text-3xl font-light text-black mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To make proactive healthcare simple, personal, and frictionless —
              so high performers can stay youthful, strong, and unstoppable.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-light text-black mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              A world where healthcare runs like an operating system — invisible,
              automated, and always on.
            </p>
          </div>
        </div>
      </section>

{/* Contact */}
<section className="bg-gray-50 h-screen flex items-center justify-center px-6 md:px-12">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-light text-black mb-6">
      Some things can wait. Your health isn’t one of them.
    </h2>
    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
  The truth is, neglect always collects its debt.  
  Not today, maybe not tomorrow — but in the years you wanted to feel most alive.  
  You can build the empire, win the game,happy family, reach the crown…  
  yet without health, the victory slips away before it’s enjoyed.  
  We exist so you never trade your tomorrow for today.  
</p>

    <a
      href="/contact"
      className="inline-block mt-4 px-8 py-3 bg-black text-white text-lg tracking-wide rounded-full hover:bg-gray-800 transition"
    >
      Claim Your Edge
    </a>
  </div>
</section>

    </>
  );
};









// gold version



// const About = () => {
//   return (
//     <>
//       <Head>
//         <title>About Us | Ilaram Healthcare</title>
//         <meta
//           name="description"
//           content="Ilaram Healthcare is India’s first health automation system — proactive, subscription-based, and designed to keep high performers young, strong, and unstoppable."
//         />
//         <meta
//           name="keywords"
//           content="health automation, lifestyle subscription, proactive wellness, high performers, longevity, Ilaram Healthcare"
//         />
//         <meta name="author" content="Ilaram Healthcare" />
//         <meta property="og:title" content="About Us | Ilaram Healthcare" />
//         <meta
//           property="og:description"
//           content="We help founders, leaders, and professionals protect their most valuable asset — health — with personalized, automated care systems."
//         />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:url"
//           content="https://www.ilaramhealthcare.com/about"
//         />
//         <meta
//           property="og:image"
//           content="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb"
//         />
//         <link rel="canonical" href="https://www.ilaramhealthcare.com/about" />
//       </Head>

//       {/* About Section */}
//       <section className="bg-white py-32 px-6 md:px-12 text-[#333]">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-5xl md:text-6xl font-light text-[#C5A572] mb-10 tracking-tight">
//             About Ilaram
//           </h1>
//           <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//             Everyone’s chasing something. We exist so health never slows you down.
//             Our system runs quietly in the background — keeping you young, strong,
//             and ready for life’s biggest stages.
//           </p>
//         </div>
//       </section>

//       {/* Philosophy Section */}
//       <section className="bg-[#f9f9f7] py-28 px-6 md:px-12">
//         <div className="max-w-5xl mx-auto">
//           <blockquote className="text-2xl md:text-3xl italic font-light text-center text-gray-700 mb-16 leading-relaxed">
//             “All the wealth in the world means nothing without health.”
//           </blockquote>

//           <div className="grid md:grid-cols-2 gap-20 items-center">
//             <div className="space-y-6">
//               <h2 className="text-3xl font-light text-[#C5A572]">
//                 Our Philosophy
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Health shouldn’t be managed like a crisis. It should flow,
//                 quietly and intelligently — an invisible system that keeps your
//                 body sharp and your mind clear.  
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 At Ilaram, we bring together doctors, coaches, and automation to
//                 remove friction. You focus on the race. We take care of the
//                 machine.
//               </p>
//             </div>

//             <div>
//               <img
//                 src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
//                 alt="Minimal luxury wellness"
//                 className="rounded-2xl shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission + Vision */}
//       <section className="bg-white py-32 px-6 md:px-12">
//         <div className="max-w-4xl mx-auto text-center space-y-12">
//           <div>
//             <h2 className="text-3xl font-light text-[#C5A572] mb-6">Our Mission</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               To make proactive healthcare simple, personal, and frictionless —
//               so high performers can stay youthful, strong, and unstoppable.
//             </p>
//           </div>
//           <div>
//             <h2 className="text-3xl font-light text-[#C5A572] mb-6">Our Vision</h2>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               A world where healthcare runs like an operating system — invisible,
//               automated, and always on.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact */}
//       <section className="bg-[#f9f9f7] py-20 px-6 md:px-12">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="text-2xl font-medium text-[#C5A572] mb-6">
//             Let’s Talk
//           </h2>
//           <p className="text-lg text-gray-600 mb-2">
//             Call us at <strong>+91 8778919303</strong>
//           </p>
//           <p className="text-lg text-gray-600">
//             Email us at{" "}
//             <strong>illaramhealthcare@zohomail.in</strong>
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

export default About;
