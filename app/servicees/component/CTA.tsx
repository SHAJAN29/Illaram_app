import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-16 bg-[#94c159] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Make the Commitment to <em>You</em></h2>
      <p className="text-lg mb-8">
        Book your free consultation and get a full intro health assessment worth Rs.3500
      </p>
      <CTAButton
        label="Book My Free Call"
        className="px-8 py-3 bg-white text-[#94c159] font-bold rounded-full hover:bg-[#94c159] hover:text-white transition"
      />
      <Link
        className="inline-block mt-4 text-white underline font-semibold hover:text-[#f4f7f0] transition"
        href={"/packageTest"}
      >
        Join Now
      </Link>
    </section>
  );
}
