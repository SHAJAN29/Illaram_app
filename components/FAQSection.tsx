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
      "You can book a consultation directly through our web app. Choose a program, pick a time slot, and confirm with Razorpay payment.",
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
    <section className="bg-gray-100 py-20 px-4 ">
      <div className="max-w-4xl mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="text-left space-y-4 ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow transition duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between w-full text-lg font-medium text-gray-800 cursor-pointer"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
