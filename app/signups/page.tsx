import SignupForm from "@/components/SignupForm";
import React from "react";

const SignupSection = () => {
  return (
    <section className="py-20 px-4 bgSecondary">
      <div className="h-auto bg-illaramPrimary  flex items-center justify-center">
        <SignupForm />
      </div>
    </section>
  );
};

export default SignupSection;
