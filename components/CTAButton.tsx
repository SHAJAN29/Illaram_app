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
    className = 'btn btn-blue',
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
            className={`px-6 py-3 btn btn-blue rounded-full font-semibold hover:bg-pink-700 transition ${className}`}
        >
            {label}
        </button>
    );
}
  