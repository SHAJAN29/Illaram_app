import React from "react";
import Slider from "react-slick";
import {
  MdFitnessCenter,
  MdSpa,
  MdPregnantWoman,
  MdHealthAndSafety,
} from "react-icons/md";

interface RootCaroselProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const RootCarosel = ({ title, icon, description }: RootCaroselProps) => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg ">
      <div className={`text-5xl illaramAccent mb-4`}>{icon}</div>
      <h3 className={`text-2xl font-semibold text-center illaramPrimary mb-4`}>
        {title}
      </h3>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

const RootCauseCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop scrolling
    speed: 500, // Speed of the transition
    slidesToShow: 1, // Show 1 review at a time
    slidesToScroll: 1, // Scroll 1 review at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay (3 seconds)
  };

  const sections = [
    {
      title: "Fat Loss & Body Toning",
      icon: <MdFitnessCenter />,
      description:
        "Tailored plans to help you burn fat, build muscle, and improve overall body health.",
    },
    {
      title: "Skin & Hair Wellness",
      icon: <MdSpa />,
      description:
        "Glow with healthy skin and hair through nutrition, treatments, and mindfulness.",
    },
    {
      title: "Fertility & Pregnancy Preparation",
      icon: <MdPregnantWoman />,
      description:
        "Preparing your body for a healthy pregnancy and boosting reproductive health.",
    },
    {
      title: "Emotional Readiness for Marriage",
      icon: <MdHealthAndSafety />,
      description:
        "Emotional healing, stress management, and building mental resilience before marriage.",
    },
  ];

  return (
    <div className="my-16 mx-4 md:mx-0">
      <h2 className={`text-3xl text-center illaramPrimary font-[poppins] mb-8`}>
        Our <span className={`illaramAccent`}>Services</span> Include
      </h2>
      <Slider {...settings}>
        {sections.map((section, index) => (
          <RootCarosel
            key={index}
            title={section.title}
            icon={section.icon}
            description={section.description}
          />
        ))}
      </Slider>
    </div>
  );
};

export default RootCauseCarousel;
