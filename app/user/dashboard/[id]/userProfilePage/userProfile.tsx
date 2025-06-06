"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";

// Extend the session user type to include 'id'
declare module "next-auth" {
  interface User {
    id?: string;
  }
}

type Gender = "Male" | "Female" | "Other" | "";

type WellnessGoal =
  | "Weight Loss"
  | "Hair Care"
  | "Skin Glow"
  | "Immunity"
  | "Stress Relief"
  | "Others";

interface FormData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  gender: Gender;

  height: string;
  weight: string;
  activityLevel: string;
  sleepHours: string;
  medications: string;
  allergies: string;

  goals: WellnessGoal[];
  diet: string;
  dailyTime: string;

  challenge: string;
  pastAttempts: string;
  commitment: number | "";
}

const wellnessGoalsList: WellnessGoal[] = [
  "Weight Loss",
  "Hair Care",
  "Skin Glow",
  "Immunity",
  "Stress Relief",
  "Others",
];

// Yup validation schemas per step
const stepSchemas = [
  null,
  // Step 1
  Yup.object({
    name: Yup.string().required("Please enter your full name."),
    email: Yup.string().email("Invalid email").required("We need your email to stay connected."),
    phone: Yup.string().required("Please share your phone number."),
    dob: Yup.string().required("Your date of birth helps personalize plans."),
    gender: Yup.string().oneOf(["Male", "Female", "Other"]).required("Please select your gender."),
  }),
  // Step 2
  Yup.object({
    height: Yup.string().required("Please share your height."),
    weight: Yup.string().required("Please share your weight."),
    activityLevel: Yup.string().required("How active are you daily?"),
    sleepHours: Yup.number()
      .typeError("Sleep hours must be a number")
      .min(0, "Sleep hours cannot be negative")
      .max(24, "Sleep hours cannot exceed 24")
      .required("Sleep hours matter!"),
    medications: Yup.string(),
    allergies: Yup.string(),
  }),
  // Step 3
  Yup.object({
    goals: Yup.array()
      .of(Yup.string().oneOf(wellnessGoalsList))
      .min(1, "Choose at least one wellness goal."),
    diet: Yup.string().required("Tell us your diet preference."),
    dailyTime: Yup.string().required("How much time can you dedicate daily?"),
  }),
  // Step 4
  Yup.object({
    challenge: Yup.string().required("What's your biggest wellness challenge?"),
    pastAttempts: Yup.string().required("Have you tried anything before?"),
    commitment: Yup.number()
      .min(1, "Commitment must be at least 1")
      .max(5, "Commitment can't be more than 5")
      .required("Rate your commitment (1-5)."),
  }),
];

interface ProfileWizardProps {
  userId: string;
}


const ProfileWizard: React.FC<ProfileWizardProps> = ({ userId }) => {
  const [step, setStep] = useState(1);
  // const params = useParams(); // Grabs route param
//   const userId = params?.id as string;
// console.log(userId)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",

    height: "",
    weight: "",
    activityLevel: "",
    sleepHours: "",
    medications: "",
    allergies: "",

    goals: [],
    diet: "",
    dailyTime: "",

    challenge: "",
    pastAttempts: "",
    commitment: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = async () => {
    if (!stepSchemas[step]) return true; // no validation schema for this step

    try {
      await stepSchemas[step].validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const errs: Record<string, string> = {};
      if (err.inner) {
        err.inner.forEach((validationError: any) => {
          if (validationError.path) errs[validationError.path] = validationError.message;
        });
      }
      setErrors(errs);
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (isValid) setStep(step + 1);
  };
  const handleBack = () => setStep(step - 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (name === "goals") {
      const checked = (e.target as HTMLInputElement).checked;
      let newGoals = [...formData.goals];
      if (checked) {
        newGoals.push(value as WellnessGoal);
      } else {
        newGoals = newGoals.filter((goal) => goal !== value);
      }
      setFormData({ ...formData, goals: newGoals });
    } else if (name === "commitment") {
      setFormData({ ...formData, commitment: Number(value) });
    } else if (type === "number") {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const isValid = await validateStep();

  if (!isValid) return;

  try {
      const response = await fetch(`/api/user/dashboard/${userId}/route`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("🎉 Thanks for submitting your profile! We'll tailor your wellness journey accordingly.");
      
      // Optionally reset
      setStep(1);
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",

        height: "",
        weight: "",
        activityLevel: "",
        sleepHours: "",
        medications: "",
        allergies: "",

        goals: [],
        diet: "",
        dailyTime: "",

        challenge: "",
        pastAttempts: "",
        commitment: "",
      });
      setErrors({});
    } else {
      const errorData = await response.json();
      alert(`❌ Submission failed: ${errorData.message || "Server error"}`);
    }
  } catch (err) {
    console.error("Error submitting profile:", err);
    alert("🚫 An unexpected error occurred. Please try again later.");
  }
};


  // JSX same as before — I won't paste it all here again but you get the idea: use errors object for showing validation errors
  // You can copy the JSX from the previous message and just add error display using `errors`

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg font-poppins">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Welcome to Your Wellness Profile <span className="text-pink-300 capitalize">{userId} </span></h1>
      <p className="mb-6 text-gray-600">
        Let's get to know you better! This helps us craft your personalized wellness plan.  
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </p>

      <form onSubmit={handleSubmit}>
        {/* Step Indicators */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer select-none
                ${step === s ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"}
              `}
              onClick={() => setStep(s)}
            >
              {s}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-800">Basic Information</h2>
            <p className="mb-6 text-green-600">Hi there! Just some quick info to get started.</p>

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md mb-2 ${
                errors.name ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 ${
                errors.name ? "focus:ring-red-400" : "focus:ring-green-400"
              }`}
            />
            {errors.name && <p className="text-red-600 mb-2">{errors.name}</p>}

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md mb-2 ${
                errors.email ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-400" : "focus:ring-green-400"
              }`}
            />
            {errors.email && <p className="text-red-600 mb-2">{errors.email}</p>}

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md mb-2 ${
                errors.phone ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 ${
                errors.phone ? "focus:ring-red-400" : "focus:ring-green-400"
              }`}
            />
            {errors.phone && <p className="text-red-600 mb-2">{errors.phone}</p>}

            <label className="block mb-2 font-medium">Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md mb-2 ${
                errors.dob ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 ${
                errors.dob ? "focus:ring-red-400" : "focus:ring-green-400"
              }`}
            />
            {errors.dob && <p className="text-red-600 mb-2">{errors.dob}</p>}

            <label className="block mb-1 font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md mb-2 ${
                errors.gender ? "border-red-600" : "border-gray-300"
              } focus:outline-none focus:ring-2 ${
                errors.gender ? "focus:ring-red-400" : "focus:ring-green-400"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-600 mb-2">{errors.gender}</p>}
          </div>
        )}

        {/* Repeat this error handling pattern for steps 2,3,4 and 5 (same JSX as before with errors from Yup) */}
   {/* Step 2 */}
        {step === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-800">Health & Lifestyle</h2>
            <p className="mb-6 text-green-600">Tell us a bit about your daily health habits.</p>

            <input
              name="height"
              type="text"
              placeholder="Height (e.g. 170 cm)"
              value={formData.height}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.height && <p className="text-red-600 mb-2">{errors.height}</p>}

            <input
              name="weight"
              type="text"
              placeholder="Weight (e.g. 65 kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.weight && <p className="text-red-600 mb-2">{errors.weight}</p>}

            <label className="block mb-1 font-medium">Activity Level</label>
            <select
              name="activityLevel"
              value={formData.activityLevel}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select activity level</option>
              <option value="Sedentary">Sedentary</option>
              <option value="Active">Active</option>
              <option value="Very Active">Very Active</option>
            </select>
            {errors.activityLevel && (
              <p className="text-red-600 mb-2">{errors.activityLevel}</p>
            )}

            <input
              name="sleepHours"
              type="number"
              min={0}
              max={24}
              placeholder="Sleep Hours (per night)"
              value={formData.sleepHours}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.sleepHours && <p className="text-red-600 mb-2">{errors.sleepHours}</p>}

            <textarea
              name="medications"
              placeholder="Current Medications (optional)"
              value={formData.medications}
              onChange={handleChange}
              rows={2}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              name="allergies"
              placeholder="Allergies or Intolerances (optional)"
              value={formData.allergies}
              onChange={handleChange}
              rows={2}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-800">Goals & Preferences</h2>
            <p className="mb-6 text-green-600">What wellness goals do you have? Pick as many as you like.</p>

            <div className="mb-4">
              {wellnessGoalsList.map((goal) => (
                <label
                  key={goal}
                  className="inline-flex items-center mr-4 mb-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="goals"
                    value={goal}
                    checked={formData.goals.includes(goal)}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                  <span className="ml-2">{goal}</span>
                </label>
              ))}
            </div>
            {errors.goals && <p className="text-red-600 mb-2">{errors.goals}</p>}

            <label className="block mb-1 font-medium">Diet Preference</label>
            <select
              name="diet"
              value={formData.diet}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select your diet</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Jain">Jain</option>
              <option value="Eggetarian">Eggetarian</option>
            </select>
            {errors.diet && <p className="text-red-600 mb-2">{errors.diet}</p>}

            <label className="block mb-1 font-medium">Daily Time for Wellness</label>
            <select
              name="dailyTime"
              value={formData.dailyTime}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Select time available</option>
              <option value="5 minutes">5 minutes</option>
              <option value="15 minutes">15 minutes</option>
              <option value="30+ minutes">30+ minutes</option>
            </select>
            {errors.dailyTime && <p className="text-red-600 mb-2">{errors.dailyTime}</p>}
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-800">Personal Insights</h2>
            <p className="mb-6 text-green-600">
              Let’s get a little deeper to understand your wellness journey.
            </p>

            <textarea
              name="challenge"
              placeholder="Biggest challenge to your wellness?"
              value={formData.challenge}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.challenge && <p className="text-red-600 mb-2">{errors.challenge}</p>}

            <textarea
              name="pastAttempts"
              placeholder="What have you tried before?"
              value={formData.pastAttempts}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.pastAttempts && <p className="text-red-600 mb-2">{errors.pastAttempts}</p>}

            <label className="block mb-1 font-medium">How committed are you to long-term change? (1 - Not at all, 5 - Very)</label>
            <input
              type="number"
              name="commitment"
              min={1}
              max={5}
              value={formData.commitment}
              onChange={handleChange}
              className="w-full p-3 border rounded-md mb-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {errors.commitment && <p className="text-red-600 mb-2">{errors.commitment}</p>}
          </div>
        )}

        {/* Step 5 - Review */}
        {step === 5 && (
          <div>
            <h2 className="text-xl font-semibold mb-4 text-green-800">Review Your Profile</h2>
            <p className="mb-6 text-green-600">Looks great! Ready to start your wellness journey? </p>

            <div className="space-y-3 text-gray-800">
              <div><strong>Name:</strong> {formData.name}</div>
              <div><strong>Email:</strong> {formData.email}</div>
              <div><strong>Phone:</strong> {formData.phone}</div>
              <div><strong>Date of Birth:</strong> {formData.dob}</div>
              <div><strong>Gender:</strong> {formData.gender}</div>

              <div><strong>Height:</strong> {formData.height}</div>
              <div><strong>Weight:</strong> {formData.weight}</div>
              <div><strong>Activity Level:</strong> {formData.activityLevel}</div>
              <div><strong>Sleep Hours:</strong> {formData.sleepHours}</div>
              <div><strong>Medications:</strong> {formData.medications || "None"}</div>
              <div><strong>Allergies:</strong> {formData.allergies || "None"}</div>

              <div><strong>Goals:</strong> {formData.goals.join(", ")}</div>
              <div><strong>Diet Preference:</strong> {formData.diet}</div>
              <div><strong>Daily Wellness Time:</strong> {formData.dailyTime}</div>

              <div><strong>Biggest Challenge:</strong> {formData.challenge}</div>
              <div><strong>Past Attempts:</strong> {formData.pastAttempts}</div>
              <div><strong>Commitment Level:</strong> {formData.commitment}</div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-gray-700"
            >
              Back
            </button>
          )}
          {step < 5 && (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-green-600 rounded-md hover:bg-green-700 text-white"
            >
              Next
            </button>
          )}
          {step === 5 && (
            <button
              type="submit"
              className="ml-auto px-6 py-2 bg-green-700 rounded-md hover:bg-green-800 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
 
export default ProfileWizard;