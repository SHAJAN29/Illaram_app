import { contactNumber } from "../constants";

type CTAButtonProps = {
    label?: string;
    phoneNumber?: number;
    onClick?: () => void;
    className?: string;
  };
  
export default function CTAButton({
    label = 'Book Free Consultation',
    phoneNumber = contactNumber.phoneNumber,
    onClick,
    className = 'bg-[#7bcc11] ',
}: CTAButtonProps) {
    const handleClick = () => {
        if (onClick) {
            onClick(); // Optional analytics/event
        }
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <button
            onClick={handleClick}
            className={`px-6 py-3  rounded-full font-semibold hover:bg-pink-700 transition ${className}`}
        >
            {label}
        </button>
    );
}
  