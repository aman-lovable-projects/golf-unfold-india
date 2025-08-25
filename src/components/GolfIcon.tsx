interface GolfIconProps {
  className?: string;
  size?: number;
}

export const GolfIcon = ({ className = "", size = 20 }: GolfIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Golf stick/club */}
      <path
        d="M3 21L7.5 4L8.5 4L13 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Golf club head */}
      <path
        d="M6 19.5L10 19.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Golf ball */}
      <circle
        cx="18"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      
      {/* Golf ball dimples */}
      <circle cx="17" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="19" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="18" cy="9" r="0.5" fill="currentColor" />
      
      {/* Ball trajectory line */}
      <path
        d="M14 12C15 11 16 10 17 9"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 2"
        opacity="0.6"
      />
    </svg>
  );
};