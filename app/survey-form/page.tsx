'use client';
// This file is part of a Next.js application that implements a multi-step survey form.


import { SetStateAction, useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import ProgressBar from './components/ProgressBar';

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data: SetStateAction<{}>) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleBack = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 to-sky-100 flex flex-col items-center p-5">
        <div>
        <ProgressBar step={step} />
        {step === 1 && <StepOne onNext={handleNext} />}
        {step === 2 && <StepTwo onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <StepThree onBack={handleBack} formData={formData} />}
      </div>
    </div>
  );
}
// This is the main survey form page that manages the steps and data flow.
// It uses local state to track the current step and form data, and renders the appropriate step component based on the current step.