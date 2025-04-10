// components/ReviewCarousel.js

import feedbackData from "@/constants";
import React from "react";
import Slider from "react-slick";

const ReviewCarousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop scrolling
    speed: 500, // Speed of the transition
    slidesToShow: 1, // Show 1 review at a time
    slidesToScroll: 1, // Scroll 1 review at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Speed of autoplay (3 seconds)
  };

  return (
    <div className=" w-xs lg:w-[800px] md:w-[600px] text-center p-3">
      <h2>
        What Our <span className="illaramPrimary"> Clients</span> Say
      </h2>
      <Slider {...settings}>
        {feedbackData.map((review) => (
          <div
            key={review.id}
            className="bg-[#fffcfc] dark:bg-[#fcf8f8] shadow-sm rounded-lg p-8 mt-2 mb-2  "
          >
            <p className="text-[16px] lg:text-3xl text-gray-600 ">
              "{review.feedback}"
            </p>
            <h3 className="reviewer-name">- {review.name}</h3>
            <div className="review-rating">
              {/* Render the rating */}
              {Array.from({ length: review.rating }).map((_, index) => (
                <span key={index} className="star">
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
