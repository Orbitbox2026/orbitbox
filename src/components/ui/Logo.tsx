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
      aria-label="GramLabs home"
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
          <linearGradient id="gram-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {/* Hexagon */}
        <path
          d="M20 2L36 11V29L20 38L4 29V11L20 2Z"
          fill="url(#gram-logo-grad)"
        />
        {/* Inner ring */}
        <path
          d="M20 6L33 13.5V26.5L20 34L7 26.5V13.5L20 6Z"
          fill="none"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="0.75"
        />
        {/* G letter */}
        <text
          x="20"
          y="26"
          textAnchor="middle"
          fontSize="19"
          fontWeight="700"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5"
        >
          G
        </text>
      </svg>
      {showWordmark && (
        <span
          className="font-bold text-[1.125rem] leading-none tracking-tight text-gram-text group-hover:text-gram-purple-light transition-colors duration-200"
          aria-hidden="true"
        >
          GramLabs
        </span>
      )}
    </Link>
  );
}
