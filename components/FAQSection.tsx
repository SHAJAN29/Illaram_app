"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is Illaram Healthcare?",
    answer:
      "We’re a transformation hub helping individuals prepare physically and mentally for marriage through science-backed wellness programs.",
  },
  {
    question: "Who are these programs for?",
    answer:
      "Our services are for men and women looking to elevate their health, confidence, and readiness before marriage — mentally and physically.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can book a consultation directly through our web app. Just click on Free Consultation, message us on WhatsApp, or hit 'Get Started' and we’ll call you.",
  },
  {
    question: "Do I need to be getting married soon to join?",
    answer:
      "Not at all. Many join simply to feel more confident, healthy, and prepared — even if marriage is months or years away.",
  },
  {
    question: "Are the services customized?",
    answer:
      "Yes. Each client receives a tailored plan based on their goals, body type, and timelines.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f4f7f0]  py-20 px-4 font-[poppins]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#97c25f] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-lg font-medium text-gray-800 focus:outline-none"
              >
                <span className="text-primaryColor">{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform duration-300 text-[#97c25f] ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
