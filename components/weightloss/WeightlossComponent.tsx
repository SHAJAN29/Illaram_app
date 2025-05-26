
"use client";

import React from "react";

const servicesData = [
  {
    category: "Weight Loss Services",
    image:
      "https://th.bing.com/th/id/OIP.yP1zbf9ExuU6RUIclqXBigHaEX?cb=iwc2&rs=1&pid=ImgDetMain",
    services: [
      "100% Natural Weight Loss",
      "No Surgery",
"No Pain",
      "Inch Loss",
      "Figure Correction",
      "Body Therapy",
      "Body Toning",
      
      
    ],
  },
  {
    category: "Skin Care Services",
    image:
      "https://th.bing.com/th/id/OIP.tPp801vZnACxblrRLT9Y-AHaFj?cb=iwc2&rs=1&pid=ImgDetMain",
    services: [
      "Fairness Treatment",
      "Anti-Aging Treatment",
      "Deep Scar Removal",
      "Skin Polishing",
      "Under Eye Dark Circles",
      "Wrinkle Treatment",
    ],
  },
  {
    category: "Hair Care Services",
    image:
      "https://www.liveabout.com/thmb/EQAuOJSm6ZDTBh2HQgh3dJutEAw=/5050x3354/filters:fill(auto,1)/young-woman-getting-hair-shampooed-at-salon-126168172-57e83e033df78c690f381151.jpg",
    services: [
      "Hair Spa",
      "Hair Strengthening",
      "Hair Re-growth",
      "Anti Dandruff",
      "Anti Hair Fall Treatment",
    ],
  },
];

const WeightlossComponent: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-[#f4f7f0] font-[poppins]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#97c25f] mb-3">
          Best Weight Loss, Skin & Hair Care Services
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover Ilaram's holistic wellness solutions tailored to your beauty
          and health needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {servicesData.map((category, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={category.image}
                alt={category.category}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-[#97c25f] text-xl font-semibold mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside text-sm">
                {category.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeightlossComponent;
