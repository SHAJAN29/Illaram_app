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
        "Start by calling us for a free consultation. Our experts will help clarify all your doubts, answer any questions you have, and guide you through the next steps.",
      time: "Takes 5-10 minutes",
      image: "/files/assessment_image.png",
    },
    {
      step: 2,
      title: "Customized Wellness Plan",
      description:
        "In live one and one session health assessment, our experts will recommend a customized wellness plan that includes physical exercises, mental wellness practices, and nutrition advice.",
      time: "Takes 10-15 minutes to review",
      image: "/files/wellness_plan_image.png",
    },
    {
      step: 3,
      title: "Here you go",
      description:
        "Once you begin the plan, Illaram Healthcare take-care of all the other things through weekly body check ups coaching sessions and regular check-ins to ensure you stay on track towards your goal.",
      time: "Ongoing support over the next 3-6 months",
      image: "/files/support_image.png",
    },
  ];

  // export default TraJourney

  return (
    <div className=" p-6 rounded-lg max-w-4xl mx-auto ">
      <div className="space-y-8 lg:flex-row">
        {/* Step 1 */}
        {illaramJourney.map((step) => journeyCard(step))}
      </div>
    </div>
  );
};

const journeyCard = (step: JourneyStep) => {
  return (
    <div className="border border-gray-300 flex flex-col md:flex-row items-center bg-white  rounded-lg p-6">
      <div className="flex-shrink-0"></div>
      <div className="ml-5 text-left">
        <h3 className="text-xl font-semibold text-gray-700">{step.title}</h3>
        <p className="text-gray-500 text-[15px]">{step.description}</p>
        <p className="text-gray-400">{step.time}</p>
      </div>
    </div>
  );
};

export default TraJourney;
