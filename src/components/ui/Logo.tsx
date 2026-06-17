import Link from 'next/link';

interface LogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export function Logo({ size = 32, showWordmark = true, className = '' }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group focus-visible:outline-none ${className}`}
      aria-label="CropVerse home"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crop-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
        {/* Rounded tile */}
        <rect x="2" y="2" width="36" height="36" rx="11" fill="url(#crop-logo-grad)" />
        {/* Sprout: stem + two leaves */}
        <path
          d="M20 30V19"
          stroke="#0a120c"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M20 21C20 21 16 21 13.5 18.5C11 16 11 12 11 12C11 12 15 12 17.5 14.5C20 17 20 21 20 21Z"
          fill="#0a120c"
        />
        <path
          d="M20 19C20 19 24 19 26.5 16.5C29 14 29 10 29 10C29 10 25 10 22.5 12.5C20 15 20 19 20 19Z"
          fill="#0a120c"
          fillOpacity="0.82"
        />
      </svg>
      {showWordmark && (
        <span
          className="font-bold text-[1.125rem] leading-none tracking-tight text-farm-text group-hover:text-farm-green-light transition-colors duration-200"
          aria-hidden="true"
        >
          CropVerse
        </span>
      )}
    </Link>
  );
}
