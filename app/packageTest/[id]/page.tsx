"use client";

import ProgramCard from "@/components/ProgramCard";
import { useParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // Import the icon (Heroicons v2)

const programList = [
 
    {
      title: "❤️ 100days pre wedding program",
      description: "A 100-days journey into Achieve your ideal look and feel amazing on your big day.",
      price: 94539,
      popular: true,
      mostPopular: true,
      duration:" 100 days",
      highlights: [
        " Personalized diet and fitness plan",
        " Personalized supplements and nutrition plans",
        " Skin and hair treatments",
        " Personalized Beauty and Hair care plans",
        " Guided meditations and exercises",
        " Weekly coaching sessions",
        " Emotional coaching & relationship support",
        " Personalized progress tracking", 
        " 24/7 access to wellness experts",
        " 1 year free subscribtion to our app",
        " 10000 rupees credit points in wallet",
       
      
      ]
    },

  {
    title: '✨ Beauty Enhancement Program',
    description: 'Targeted skin & hair treatments for your big day.',
    price: 89994,popular: true, duration:" 100 days",   highlights: [
      " Personalized Beauty and Hair care plans for your hair and skin type.",
      "Personalized diet and yoga plan",
      " Personalized supplements and nutrition plans",
      " Skin and hair treatments",
      " 24/7 access to wellness experts",
        " 1 year free subscribtion to our app",
        " 10000 rupees credit points in wallet",
    ]
  },
  {
    title: '💪 Physical Conditioning Program',
    description: 'Sculpt your body with personalized training + diet.',
    price: 79994,  popular: true, duration:" 100 days",  highlights: [
      " Personalized diet and fitness plan",
      " Personalized supplements and nutrition plans",
      " Strenght and Endourance training",
      "Personalized progress tracking",
      " 24/7 access to wellness experts",
      " 1 year free subscribtion to our app",
      " 10000 rupees credit points in wallet",
    ]
  },
  {
    title: '🧠 Mind-Prep Program',
    description: 'Get mentally and emotionally prepared for marriage.',
    price: 12999, popular: false,duration:" 30 days",   highlights: [
      "Live weekly coaching sessions",
      "Guided meditations and exercises",
      "Personalized progress tracking"
    ]
  },
  {
    title: 'payment test card',
    description: 'Get mentally and emotionally prepared for marriage.',
    price: 1, popular: false, highlights: [
      "Live weekly coaching sessions",
      "Guided meditations and exercises",
      "Personalized progress tracking"
    ]
  },
];

const Programs = () => {
  const params = useParams();
  console.log("Params: ", params);  // Log the params to see what it returns

  const username = params?.id;
  console.log(username)

  return (
<div className="font-poppins bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
  <div className="overflow-hidden whitespace-nowrap">
    <div className="animate-marquee whitespace-nowrap overflow-hidden">
      <div className="inline-block animate-marquee-inner">
        <p className=""> 100% Satisfaction Guarantee!&nbsp;&nbsp;&nbsp;100% money back guarantee!</p>
     
      </div>
    </div>

    <style jsx>{`
      @keyframes marquee {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
      }

      .animate-marquee {
      display: flex;
      overflow: hidden;
      position: relative;
      color: oklch(57.7% 0.245 27.325);
      }

      .animate-marquee-inner {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 10s linear infinite;
      }
    `}</style>
  </div>
<div className="max-w-6xl mx-auto px-6 sm:px-10">
  <h2 className="text-5xl font-bold text-center text-gray-800 mb-6 tracking-tight">
    Explore Our Programs
  </h2>
  <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
    You're making a great decision, <span className="text-illaramPrimary font-semibold">{username ? username : "Guest"}</span>. Each program is crafted to help you thrive and grow.
  </p>
  <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
    Experienced doctors,phycartist,nutritionist,fitness trainers and wellness coaches are here to help you achieve your goals <span className="text-illaramPrimary font-semibold">Transformation made easy</span>.
  </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {programList.map((program, i) => (
      <div
        key={i}
        className="relative  rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
      >






              <ProgramCard
              mostPopular={program.mostPopular ?? false}
              duration={program.duration || "N/A"}
              highlights={program.highlights}
                title={program.title}
                description={program.description}
                price={program.price}
                popular={program.popular}
                username={username} // Pass to ProgramCard if needed
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;





// <div className="font-poppins bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16">
// <div className="max-w-6xl mx-auto px-6 sm:px-10">
//   <h2 className="text-5xl font-bold text-center text-gray-800 mb-6 tracking-tight">
//     Explore Our Programs
//   </h2>
//   <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-14 leading-relaxed">
//     You're making a great decision, <span className="text-illaramPrimary font-semibold">{username ? username : "Guest"}</span>. Each program is crafted to help you thrive and grow.
//   </p>

//   <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//     {programList.map((program, i) => (
//       <div
//         key={i}
//         className="relative bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
//       >
//         <div className="p-8 space-y-4">
//           <h3 className="text-xl font-semibold text-gray-800 tracking-tight">{program.title}</h3>
//           <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>

//           {/* Key Highlights with Icons */}
//           <ul className="mt-4 space-y-3 text-sm text-gray-700">
//             {program.highlights?.map((point, index) => (
//               <li key={index} className="flex items-start gap-2">
//                 <CheckCircleIcon className="w-5 h-5 text-illaramPrimary flex-shrink-0" />
//                 <span>{point}</span>
//               </li>
//             ))}
//           </ul>

//           <div className="text-lg font-bold text-illaramPrimary mt-6">${program.price}</div>
//         </div>

//         {program.popular && (
//           <div className="absolute top-4 right-4 px-3 py-1 bg-illaramPrimary text-white text-xs font-medium rounded-full shadow-md">
//             Popular
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </div>
// </div>
