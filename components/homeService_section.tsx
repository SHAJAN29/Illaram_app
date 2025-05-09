"use client";

import { Service_card_details } from "../constants";
import { CardDefault } from "../small_components/service_card";
import React from "react";


//  At Illaram Healthcare, we recognize that marriage is a significant life journey, and we are here to help make it a reality with complete, holistic preparation. Our all-encompassing approach ensures you are physically, mentally, and emotionally ready to step into this new chapter of life. We offer tailored solutions that focus on strengthening your health, boosting confidence, and fostering emotional well-being, so you can embark on a joyful, balanced, and fulfilling marital journey with ease and grace.


const choser =[{title:"Science-Backed",description:"Our methods are rooted in medical science and guided by clinical research."},
{title:"Holistic Approach",description:"We treat the whole person—mind, body, and spirit—using integrative techniques."},{title:"Lasting Results",description:"No quick fixes—just real, sustainable transformation you can see and feel."}]



const HomeService_section = () => {
  return (





    <div className="flex flex-wrap gap-4 font-[poppins] mt-20 p-5 items-center justify-center">
      <div className="flex flex-col text-center  capitalize font-bold text-3xl">
        <h1 className={`pb-3 illaramAccent`}>Exclusive wellness plans:</h1>
        <p className={` text-gray-400 max-sm:text-[15px] font-normal pb-3`}>
          At Illaram, we believe that every individual is unique,so Our
          specialized packages are designed to cater to the unique needs of
          adults preparing for marriage, focusing on holistic well-being —
          <span className="illaramPrimary">inside and out. 100% natural</span>
        </p>
      </div>
      {Service_card_details.map(
        ({ title, description, image, pageLink }, index) => (
          <CardDefault
            key={index}
            title={title}
            image={image}
            pageLink={pageLink}
            description={description}
          />
        )
      )}
    </div>



 
  );
};
// Compare this snippet from app/page.tsx:

export default HomeService_section;


// second option



//     <div>
//   {/* Benefits Section */}
//   <section className="px-6 py-16 max-w-5xl font-[poppins] mx-auto">
//   <h2 className="text-3xl font-semibold text-center mb-10">Why <span className="illaramPrimary">Ilaram?</span> </h2>
//   <div className="grid md:grid-cols-3 gap-8 text-center">
//      {choser.map((e)=> <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
//         <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
//         <p className="text-gray-600">{e.description}</p>
//       </div>)}
     
//       </div>







      
// </section>
// </div>
