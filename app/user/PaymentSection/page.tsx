import RazorpayCheckoutButton from "@/components/RazorPay/RazorpayCheckoutButton";

export default function PaymentSection() {
  return (
    <section className="min-h-screen">
      <div className="p-6 flex flex-col justify-center items-center h-screen">
        <h2 className="text-lg font-semibold mb-4">Make Payment</h2>
        <RazorpayCheckoutButton
          amount={99900} // ₹999
          name="Moses Shajan"
          email="moses@example.com"
          contact="9876543210"
        />
      </div>
    </section>
  );
}
