"use client";

import { useState } from "react";
import SkinTypeChecker from "./fitComponent/SkinTypeChecker";
import HairTypeChecker from "./fitComponent/HairTypeChecker";
import Head from "next/head";

type FitCheckForm = {
  name: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
  activity: string;
  skinIssues: string[];
  skinType: string;
  water: string;
  hairIssues: string[];
  hairType: string;
  hairTreatment: string;
};

export default function FitCheck() {
  const [step, setStep] = useState(1);
  const [showSkinChecker, setShowSkinChecker] = useState(false);
  const [showHairChecker, setShowHairChecker] = useState(false);

  const [formData, setFormData] = useState<FitCheckForm>({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "Low",
    skinIssues: [],
    skinType: "",
    water: "",
    hairIssues: [],
    hairType: "",
    hairTreatment: "",
  });

  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (height: string, weight: string) => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    return (w / (h * h)).toFixed(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateBMI(formData.height, formData.weight);
    setBmi(Number(result));
    setStep(2);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    if (type === "checkbox") {
      const updatedValues = formData[name as keyof typeof formData] as string[];

      if (checked) {
        setFormData({
          ...formData,
          [name]: [...updatedValues.filter((v) => v !== "None"), value],
        });
      } else {
        setFormData({
          ...formData,
          [name]: updatedValues.filter((v) => v !== value),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (

<>
<Head>
  <title>FitCheck - Personalized Body, Skin & Hair Health Insights</title>
  <meta name="description" content="Get personalized health insights with FitCheck. Discover your BMI, skin type, hair health, and more based on your lifestyle and habits." />
  <meta name="keywords" content="FitCheck, health check, BMI calculator, skin type checker, hair health, beauty assessment, wellness, personal health insights" />
  <meta name="author" content="FitCheck Team" />
  
  {/* Open Graph Meta Tags */}
  <meta property="og:title" content="FitCheck - Personalized Body, Skin & Hair Health Insights" />
  <meta property="og:description" content="A smart wellness tool for tracking your skin, hair, and body health. Get your results instantly and improve your lifestyle choices." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/fitcheck" />
  <meta property="og:image" content="https://yourdomain.com/images/fitcheck-preview.png" />
  
  {/* Twitter Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="FitCheck - Body, Skin & Hair Wellness Insights" />
  <meta name="twitter:description" content="Use FitCheck to evaluate your physical wellness, discover your BMI, and get beauty advice based on real data." />
  <meta name="twitter:image" content="https://yourdomain.com/images/fitcheck-preview.png" />
</Head>

    <div className="min-h-screen font-[Poppins] bg-gradient-to-tr from-rose-100 to-sky-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg mt-10 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 uppercase text-pink-500">
          Fit-Check
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Get personalized insights into your body, skin, and hair health.
          <br />
          Fill out the form below to receive your FitCheck summary.
        </p>
        {step === 1 && (
          <form onSubmit={handleSubmit} className="space-y-6 flex flex-col justify-center">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full input input-bordered"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              className="w-full input input-bordered"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              className="w-full input input-bordered"
              value={formData.gender}
              onChange={handleChange}
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              className="w-full input input-bordered"
              value={formData.height}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              className="w-full input input-bordered"
              value={formData.weight}
              onChange={handleChange}
              required
            />

            <div>
              <label className="font-medium">Activity Level</label>
              <select
                name="activity"
                className="w-full input input-bordered"
                onChange={handleChange}
                value={formData.activity}
              >
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>

            {/* Skin Issues Section */}
            <div className="relative">
              <label className="font-medium block mb-1">Skin Issues:</label>
              <button
                type="button"
                onClick={() => setShowSkinChecker(true)}
                className="absolute top-0 right-0 text-emerald-500 px-4 py-2 text-xs font-semibold"
              >
                Check skin type
              </button>

              <div className="mt-4">
                {formData.skinType && (
                  <p className="text-sm text-emerald-600 mt-5 font-semibold">
                    Skin Type: {formData.skinType}
                  </p>
                )}
                {["Acne", "Dryness", "Dark spots", "Oily skin", "Sensitivity", "None"].map((issue) => (
                  <label key={issue} className="inline-flex items-center mr-4 mt-2">
                    <input
                      type="checkbox"
                      name="skinIssues"
                      value={issue}
                      onChange={handleChange}
                      checked={formData.skinIssues.includes(issue)}
                    />
                    <span className="ml-2">{issue}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Hair Issues Section */}
            <div className="relative">
              <label className="font-medium block mb-1">Hair Issues:</label>
              {formData.hairType ? (
                <p className="text-sm text-emerald-600 mt-5 font-semibold">
                  Hair Type: {formData.hairType}
                </p>
              ) : (
                "helo Hair"
              )}
              <button
                type="button"
                onClick={() => setShowHairChecker(true)}
                className="absolute top-0 right-0 text-emerald-500 px-4 py-2 text-xs font-semibold"
              >
                Check Hair Type
              </button>

              <div className="mt-4">
                {["Hair fall", "Dandruff", "Frizz", "None"].map((issue) => (
                  <label key={issue} className="inline-flex items-center mr-4 mt-2">
                    <input
                      type="checkbox"
                      name="hairIssues"
                      value={issue}
                      onChange={handleChange}
                      checked={formData.hairIssues.includes(issue)}
                    />
                    <span className="ml-2">{issue}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md"
            >
              Show My Results
            </button>
          </form>
        )}

        {/* Skin Checker Modal OUTSIDE FORM */}
        {showSkinChecker && (
          <SkinTypeChecker onClose={() => setShowSkinChecker(false)}  />
        )}

        {/* Hair Checker Modal OUTSIDE FORM */}
        {showHairChecker && (
          <HairTypeChecker onClose={() => setShowHairChecker(false)}
           
          />
        )}

        {/* Results Step 2 */}
        {step === 2 && (
  <div className="space-y-6 text-gray-800">
    <h2 className="text-2xl font-semibold text-green-600">👋 Hello {formData.name}, here’s your FitCheck summary</h2>

    {/* Body Health – BMI Section */}
 <div
  className={`p-4 rounded-md shadow ${
    bmi === null
      ? "bg-gray-50"
      : bmi < 18.5
      ? "bg-blue-100"      // Underweight: blue-ish background
      : bmi < 25
      ? "bg-green-100"     // Healthy: green background
      : bmi < 30
      ? "bg-yellow-100"    // Overweight: yellow background
      : "bg-red-100"       // Obese: red background
  }`}
>
  <h3 className="text-lg font-bold mb-2">🧍‍♀️ Body Check – BMI</h3>
  <p>
    <strong
      className={`${
        bmi === null
          ? "text-gray-700"
          : bmi < 18.5
          ? "text-blue-600"
          : bmi < 25
          ? "text-green-700"
          : bmi < 30
          ? "text-yellow-700"
          : "text-red-700"
      }`}
    >
      BMI: {bmi ?? "--"}
    </strong>
  </p>
  <p className="mt-2 text-sm font-[poppins]">
    {bmi !== null && (
      <>
        {bmi < 18.5 && (
          <span >
            Your BMI indicates that you may be underweight. This could be due to a fast metabolism, nutritional gaps, or stress-related factors. We recommend increasing your intake of healthy fats, proteins, and doing gentle resistance training to build strength.
          </span>
        )}
        {bmi >= 18.5 && bmi < 25 && (
          <span >
            You're within the healthy BMI range. Continue balancing your diet, staying hydrated, and managing stress levels to maintain it.
          </span>
        )}
        {bmi >= 25 && bmi < 30 && (
          <span >
            Your BMI is slightly elevated. It may suggest stored inflammation, water retention, or low physical activity. Focus on reducing sugar intake, increasing water consumption, and moving your body daily to support long-term health.
          </span>
        )}
        {bmi >= 30 && (
          <span >
            Your BMI is in the obese range. This may increase your risk for health complications. We strongly recommend consulting a healthcare professional and adopting a tailored nutrition and exercise plan.
          </span>
        )}
      </>
    )}
  </p>
</div>


    {/* Skin Health Section */}
    <div className="bg-pink-50 p-4 rounded-md shadow">
      <h3 className="text-lg font-bold mb-2">💆‍♀️ Skin Health</h3>
      {formData.skinIssues.length === 0 ? (
        <p>Your skin seems well-balanced. Continue hydrating, using sunscreen, and following a simple skincare routine.</p>
      ) : (
        <ul className="list-disc ml-6 space-y-2">
          {formData.skinIssues.includes("Dryness") && (
            <li>
              **Dry skin** can be due to low water intake, vitamin E or omega-3 deficiency, or exposure to harsh climates. Moisturizing and increasing healthy fats may help.
            </li>
            
          )}
          {formData.skinIssues.includes("Acne") && (
            <li>
              **Acne** is often linked to hormonal imbalance, high sugar intake, or pore-clogging products. Gentle skincare and diet adjustments are key.
            </li>
          )}
          {formData.skinIssues.includes("Dark spots") && (
            <li>
              **Dark spots** (hyperpigmentation) can result from acne scars or sun damage. Gentle exfoliation and sun protection are critical.
            </li>
          )}
          {formData.skinIssues.includes("Oily skin") && (
            <li>
              **Oily skin** is caused by excess sebum. It's often reactive, so using lightweight hydration and avoiding over-cleansing helps.
            </li>
          )}
          {formData.skinIssues.includes("Sensitivity") && (
            <li>
              **Sensitive skin** may indicate a weakened skin barrier. This can be managed with minimal,Use fragrance-free products.
            </li>
          )}
        </ul>
      )}
    </div>

    {/* Hair Health Section */}
    <div className="bg-yellow-50 p-4 rounded-md shadow">
      <h3 className="text-lg font-bold mb-2">💇‍♀️ Hair Health</h3>
      {formData.hairIssues.length === 0 ? (
        <p>Your hair seems to be in good condition! Keep up a regular scalp care routine, minimize heat styling, and nourish with protein-rich foods.</p>
      ) : (
        <ul className="list-disc ml-6 space-y-2">
          {formData.hairIssues.includes("Hair fall") && (
            <li>
              **Hair fall** can result from vitamin B12, iron, or zinc deficiencies. Hormonal stress and thyroid issues may also play a role. A blood check and a supportive diet can help.
            </li>
          )}
          {formData.hairIssues.includes("Frizz") && (
            <li>
              **Frizz** usually signals dryness or damaged cuticles. Deep conditioning and avoiding harsh shampoos may reduce it.
            </li>
          )}
          {formData.hairIssues.includes("Dandruff") && (
            <li>
              **Dandruff** often stems from a dry scalp or yeast overgrowth. Antifungal shampoos and scalp massage can help restore balance.
            </li>
          )}
        </ul>
      )}
    </div>

    {/* Free Consultation CTA */}
    <div className="mt-6 text-center">
      <p className="text-lg font-semibold text-gray-700 mb-2">
        Want expert guidance based on your results?
      </p>
      <a
        href="/signups"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md"
      >
        🎗 Book Your Free Consultation
      </a>
    </div>
  </div>
)}

      </div>
    </div>
    </>
  );
}
