import React from "react";

interface JourneyStep {
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
      time: "Takes 5-10 minutes",
      image: "/files/assessment_image.png",
    },
    {
      step: 2,
      title: "Customized Wellness Plan",
      description:
        "In live session health assessment, our experts will recommend a customized wellness plan tailored to your specific needs and goals.",
      time: "Takes 10-15 minutes to review",
      image: "/files/wellness_plan_image.png",
    },
    {
      step: 3,
      title: "Here you go",
      description:
        "Once you begin the plan, Illaram Healthcare take-care of all the other things,We will be with you every step of the way.",
      time: "Ongoing support over the next 3-6 months",
      image: "/files/support_image.png",
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
    <div className="border border-gray-300 flex flex-col md:flex-row items-center bg-white dark:bg-transparent  rounded-lg p-6">
      <div className="flex-shrink-0"></div>
      <div className="ml-5 text-left">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-400  max-sm:text-[17px]">
          {step.title}
        </h3>
        <p className="text-gray-500 max-sm:text-[13px]">{step.description}</p>
        <p className="text-gray-400 max-sm:text-[13px]">{step.time}</p>
      </div>
    </div>
  );
};

export default TraJourney;
