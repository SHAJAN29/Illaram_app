'use client';





export default function TermsOfService() {

  return (
    <section className={`max-w-4xl mx-auto px-6 py-20 text-gray-700 font-sans`}>
      <h1 className="text-4xl font-bold text-center mb-12 text-black">
        Terms of Service
      </h1>
      <p className="text-center text-sm text-gray-500 mb-16">
        Effective Date: August 25, 2025
      </p>

      <div className="space-y-8 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Purpose</h2>
          <p>
            Illaram Healthcare is a personal healthcare partner providing
            doctor-led, protocol-based wellness systems including consultations,
            nutrition, fitness, supplements, and digital resources. We do not
            replace emergency medical services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You must be 18 years or older to subscribe.</li>
            <li>
              By using our services, you confirm that all information provided
              is accurate and truthful.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Services</h2>
          <p>
            Subscriptions provide access to consultations, plans, and health
            frameworks. Protocols are personalized but not substitutes for
            critical medical treatment. Supplements, where recommended, are
            herbal and advisory only.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Payments & Billing</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Fees are displayed clearly at checkout.</li>
            <li>Subscriptions renew automatically until cancelled.</li>
            <li>
              Except where required by law, payments are non-refundable unless
              explicitly promised.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Cancellation</h2>
          <p>
            You may cancel anytime via your dashboard or by contacting support.
            Illaram reserves the right to suspend or terminate accounts that
            violate these Terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Health Disclaimer</h2>
          <p>
            We provide preventive, wellness, and supportive healthcare services.
            We do not guarantee cures, medical outcomes, or specific results.
            Always consult a licensed physician for emergencies.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Data & Privacy</h2>
          <p>
            Your personal and health-related data is handled in accordance with
            our Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Intellectual Property</h2>
          <p>
            All content, branding, and protocols remain the property of Illaram
            Healthcare.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, with jurisdiction in
            Chennai.
          </p>
        </div>
      </div>
    </section>
  );
}
