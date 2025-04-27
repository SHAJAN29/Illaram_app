import CTAButton from "@/components/CTAButton";
import Link from "next/link";

export default function CTA() {
    return (
      <section className="px-6 py-16 bg-[#ff5f37] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Make the Commitment to *You*</h2>
        <p className="text-lg mb-8">Book your free consultation and get a full intro health assessment worth Rs.3500</p>
        <CTAButton label="Book My Free Call" className="px-8 py-3 bg-white text-[#ff5f37] font-bold rounded-full hover:bg-gray-100 transition"/>
        <Link  className="btn btn-blue" href={"/packageTest"}  >
        
        Buy Now
        </Link>
  
        
        
      </section>
    );
  }
  