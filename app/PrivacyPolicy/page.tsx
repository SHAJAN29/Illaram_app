export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 font-sans text-gray-700">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">
        Privacy Policy
      </h1>
      <p className="text-center text-sm text-gray-500 mb-16">
        Effective Date: August 25, 2025
      </p>

      <div className="space-y-8 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal Data: Name, email, phone number, billing details.</li>
            <li>
              Health Data: Information you share during assessments and
              consultations.
            </li>
            <li>Usage Data: Device, browser, IP address, and site interactions.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Data</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To deliver personalized health protocols.</li>
            <li>To communicate regarding plans, consultations, and billing.</li>
            <li>To improve services and conduct analytics (anonymized).</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">3. Sharing of Data</h2>
          <p>
            We do not sell your data. Information may be shared only with:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Certified healthcare providers in your plan.</li>
            <li>Service providers (e.g., payment gateways, hosting).</li>
            <li>Legal authorities if required by law.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">4. Security</h2>
          <p>
            Data is encrypted in transit and at rest. Access is restricted to
            authorized personnel. However, no system is 100% secure; users share
            data at their own risk.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">5. Cookies & Tracking</h2>
          <p>
            We may use cookies and tracking tools to enhance user experience and
            analytics.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Request access to your personal data.</li>
            <li>Request correction or deletion of data (subject to law).</li>
            <li>Opt out of marketing communications.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">7. Retention</h2>
          <p>
            We retain personal and health data only as long as necessary to
            deliver services and comply with legal requirements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>
            For privacy concerns, contact us at: <br />
            📧 <a href="mailto:illaramhealthcare@gmail.com" className="underline">
              admin@ilaramhealthcare.com
            </a>
            <br />
            📞 <a href="tel:+917904118829" className="underline">
              +91 79041 18829
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
