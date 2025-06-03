import { contactNumber } from "../constants";

type CTAButtonProps = {
  label?: string;
  phoneNumber?: number; // should be a string for `tel:` links
  onClick?: () => void;
  className?: string;
};

export default function CTAButton({
  label = "Book Free Consultation",
  phoneNumber = contactNumber.phoneNumber,
  onClick,
  className = "bg-[#94c159]",
}: CTAButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Optional analytics/event hook
    }
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-full font-semibold text-[#94c159] hover:bg-white hover:text-[#94c159] transition ${className}`}
    >
      {label}
    </button>
  );
}
