export default function Testimonials() {
    return (
      <section className="bg-gray-100 px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Real People. Real Results.</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">“I felt like myself again—for the first time in years. My wedding day pictures? I looked & felt like a goddess.”</p>
            <footer className="mt-4 text-right text-pink-600 font-semibold">— Aisha K.</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic">“Lost 9kg, got my energy back, and my fiancée noticed every bit.”</p>
            <footer className="mt-4 text-right text-pink-600 font-semibold">— Daniel T.</footer>
          </blockquote>
        </div>
      </section>
    );
  }
  