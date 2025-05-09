"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import "swiper/css";

const causes = [
  {
    title: "Metabolism",
    description: "A slow or irregular metabolism affects energy, weight, and healing.",
    icon: "https://cdn-icons-png.flaticon.com/512/11833/11833168.png",
  },
  {
    title: "Stress",
    description: "Chronic stress alters your hormones and weakens immunity.",
    icon: "https://intentionalfamilylife.com/wp-content/uploads/2022/02/stress-brain-1024x1024.png",
  },
  {
    title: "Emotional",
    description: "Mind-body therapies that restore emotional balance.",
    icon: "https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-3d-brain-illustration-png-image_11614156.png",
  },
  {
    title: "Environment",
    description: "External pollutants and lifestyle habits can disrupt your internal balance.",
    icon: "https://th.bing.com/th/id/OIP.-SLDScriFOsl6bIaBMOBtAHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain",
  },
  {
    title: "Hormonal Imbalance",
    description: "Disruptions in hormone levels impact fertility, mood, and overall health.",
    icon: "https://cdn-icons-png.flaticon.com/512/1763/1763638.png",
  },
  {
    title: "Gut Health",
    description: "Gut microbiome imbalances can lead to digestive issues and inflammation.",
    icon: "https://erikajacobsonnutrition.com/wp-content/uploads/2022/02/EJ_Icons-03.png",
  },
  {
    title: "Genetics",
    description: "Inherited traits can predispose you to certain health conditions.",
    icon: "https://th.bing.com/th/id/OIP.NDrFn9e9D6ybo2vsK54ALwHaKG?cb=iwc1&rs=1&pid=ImgDetMain",
  },
  {
    title: "Nutrition",
    description: "Nutrient deficiencies can lead to various health issues.",
    icon: "https://cdn-icons-png.flaticon.com/512/4311/4311368.png",
  },
  {
    title: "Sleep",
    description: "Poor sleep quality affects mental and physical health.",
    icon: "https://th.bing.com/th/id/OIP.McMPbZE7fpGdAqSvEa2EgwHaHa?cb=iwc1&pid=ImgDet&w=474&h=474&rs=1",
  },
  {
    title: "Toxins",
    description: "Environmental toxins can disrupt hormonal and metabolic functions.",
    ic: "https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-liver-cells-attacked-by-toxins-lobule-png-image_10219274.png",
    icon:"https://cdn-icons-png.flaticon.com/512/12294/12294705.png"
  },
];

export default function RootCauseSection() {
  return (
    <section className="bg-[#f9fafb] py-20 font-poppins">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0F766E] mb-4">
          We Address the <span className="illaramAccent">Root Cause</span>
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-16">
          At Illaram, we don’t just treat symptoms. We go deeper to identify and solve the actual root cause.
        </p>

        {/* Dual Marquees on all screen sizes */}
        <div className="space-y-6">
          <Marquee pauseOnHover speed={40}>
            {causes.slice(0, 5).map((cause, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-200 mx-3 min-w-[180px] sm:min-w-[220px] text-center"
              >
                <img src={cause.icon} alt={cause.title} className="w-10 h-10 mx-auto mb-2" />
                <h3 className="text-sm sm:text-base font-semibold text-[#0F766E]">{cause.title}</h3>
              </div>
            ))}
          </Marquee>

          <Marquee pauseOnHover speed={40} direction="right">
            {causes.slice(5).map((cause, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-4 border border-gray-200  mx-3 min-w-[180px] sm:min-w-[220px] text-center"
              >
                <img src={cause.icon} alt={cause.title} className="w-10 h-10 mx-auto mb-2" />
                <h3 className="text-sm sm:text-base font-semibold text-[#0F766E]">{cause.title}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
