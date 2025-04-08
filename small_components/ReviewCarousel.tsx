// components/ReviewCarousel.js
import React from "react";
import Slider from "react-slick";

const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    review:
      "Willaram Healthcare has completely transformed my approach to marriage preparation. The physical and mental wellness programs helped me build confidence and clarity.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    review:
      "I’m so grateful for the guidance I received at Willaram. Their holistic approach to marriage readiness really helped me address both mental and physical challenges.",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Wilson",
    review:
      "A great program that helped me feel more prepared for marriage. The focus on both the mental and physical aspects was so valuable. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Priya",
    review:
      "I was skeptical at first, but the team at Willaram really knows what they’re doing. Their personalized approach made all the difference for me.",
    rating: 4,
  },
  // Add more reviews as needed
];

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
      <h2>What Our Clients Say</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-[#fffcfc] dark:bg-[#cecece] shadow-sm rounded-lg p-8 mt-2 mb-2  "
          >
            <p className="text-[16px] lg:text-3xl text-gray-600 ">
              "{review.review}"
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
