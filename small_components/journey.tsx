import React, { ReactNode } from "react";

import {
  MdCall,            // Call icon
  MdAssignment,      // Plan/assessment icon
  MdFavorite,        // Ongoing support/care icon
} from 'react-icons/md';



interface JourneyStep {
  icon: ReactNode;
  step: number;
  title: string;
  description: string;
  time: string;
  image: string;
}

const TraJourney = () => {
  const illaramJourney = [
    {
      step: 1,
      title: "Call for Consultation",
      description:
        "Start by calling us for a free consultation. Our experts will help clarify all your doubts and guide you through the process.",
      time: "Takes 5–10 minutes",
      image: "/files/assessment_image.png",
      icon: <MdCall className="text-3xl text-blue-500" />
    },
    {
      step: 2,
      title: "Customized Wellness Plan",
      description:
        "In a live session health assessment, our experts will recommend a customized wellness plan tailored to your specific needs and goals.",
      time: "Takes 10–15 minutes to review",
      image: "/files/wellness_plan_image.png",
      icon: <MdAssignment className="text-3xl text-green-600" />
    },
    {
      step: 3,
      title: "Here You Go",
      description:
        "Once you begin the plan, Ilaram Healthcare takes care of everything else. We'll be with you every step of the way.",
      time: "Ongoing support over 3–6 months",
      image: "/files/support_image.png",
      icon: <MdFavorite className="text-3xl text-rose-500" />
    },
  ];

  // export default TraJourney

  return (
    <div className="p-6 rounded-lg max-w-4xl mx-auto">
      <div className="space-y-8 lg:flex-row">
        {illaramJourney.map((step) => (
          <div key={step.step}>{journeyCard(step)}</div>
        ))}
      </div>
    </div>
  );
};

const journeyCard = (step: JourneyStep) => {
  return (






    <div className="border border-gray-300 flex md:flex-row items-start bg-white dark:bg-transparent rounded-lg p-5 shadow-sm">
    <div className="mb-4 md:mb-0 text-center mr-3 md:mr-5">
        {step.icon}
      </div>
    <div className="text-left">
      <h3 className="text-xl font-semibold text-gray-900 max-sm:text-[17px]">
        {step.title}
      </h3>
      <p className="text-gray-500 max-sm:text-[13px]">{step.description}</p>
      <p className="text-gray-400 max-sm:text-[13px]">{step.time}</p>
    </div>
  </div>














    // <div className="border border-gray-300 flex flex-col md:flex-row items-center bg-white dark:bg-transparent  rounded-lg p-6">
    //   <div className="flex-shrink-0"></div>
    //   <div className="ml-5 text-left">
    //     <h3 className="text-xl font-semibold text-gray-900  max-sm:text-[17px]">
    //       {step.title}
    //     </h3>
    //     <p className="text-gray-500 max-sm:text-[13px]">{step.description}</p>
    //     <p className="text-gray-400 max-sm:text-[13px]">{step.time}</p>
    //   </div>
    // </div>
  );
};

export default TraJourney;
