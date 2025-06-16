import React from "react";
import Slide from "./slides/slide";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Slide
        title="Ilaram Healthcare"
        content={
          <>
            <p className="mb-2">One Subscription. Total Wellness.</p>
            <p>Good in shape | Radiant Skin | Voluminous Hair | Strong Body</p>
          </>
        }
      />
      <Slide
        title="The Problem"
        content={
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>
              Fragmented care – separate platforms for fitness, skin, health
            </li>
            <li>Busy lifestyles require flexible, expert-driven care</li>
            <li>Lack of integration between traditional and modern medicine</li>
          </ul>
        }
      />
      <Slide
        title="Our Solution"
        content={
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>One platform with MBBS, BSMS, Ayurvedic doctors</li>
            <li>Nutritionists, fitness trainers, and personalized care</li>
            <li>Supplements, skin & hair products, delivered to your home</li>
          </ul>
        }
      />
      <Slide
        title="Product Features"
        content={
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>Live fitness & dance sessions (Zumba, aerobics, strength)</li>
            <li>Personalized care plans and tracking</li>
            <li>Flexible scheduling and teleconsultations</li>
          </ul>
        }
      />
      <Slide
        title="Business Model"
        content={
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>Subscriptions</li>
            <li>Revenue from wellness products and add-on services</li>
          </ul>
        }
      />
      <Slide
        title="Traction & Roadmap"
        content={
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>MVP ready, team formed, specialists onboarded</li>
            <li>Q3 2025: MVP Launch</li>
            <li>Q1 2026: Tier 2 city expansion</li>
            <li>Q4 2026: Mobile app + 25K+ users</li>
          </ul>
        }
      />
      <Slide
        title="Funding Ask"
        content={
          <ul className="list-disc text-left pl-6 space-y-2">
            <li>Seeking ₹25 Lakhs</li>
            <li>40% Product Dev, 25% Marketing, 20% Team, 15% Inventory</li>
          </ul>
        }
      />
      <Slide
        title="Vision"
        content={
          <p>
            To become world’s most trusted personal wellness partner –
            empowering 1M+ users a holistic life from the comfort of their
            homes..
          </p>
        }
      />
      <Slide
        title="Contact"
        content={
          <p>
            📧 hello@ilaramhealthcare.com <br />
            📞 +91 8778991303 <br />
            🌐 www.ilaramhealthcare.com
          </p>
        }
      />
      <Slide
        title=""
        content={
          <p className="mt-4 font-semibold text-blue-700">
            Let’s build the future of personal wellness together.
          </p>
        }
      />
    </main>
  );
}
