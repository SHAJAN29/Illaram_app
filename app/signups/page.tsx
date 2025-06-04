import SignupForm from "@/components/SignupForm";
import { contactNumber } from "@/constants/index";
import React from "react";

const SignupSection = () => {
  return (
    <section className="py-10 px-4 bgSecondary font-[poppins]">
      <div className="h-auto py-10 bg-illaramPrimary flex flex-col items-center justify-center">
        <SignupForm />

        <div className="flex flex-col items-center mt-[-3rem]">
          <p className="font-bold text-gray-500">or</p>
          <a
            className="text-gray-700 font-bold"
            href={`tel:${contactNumber.phoneNumber}`}
          >
            Call: +91 {contactNumber.phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
