export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      className={className}
      aria-label="Memetik Logo"
    >
      {/* M shape - two connected angular forms */}
      <path d="M0 0 H40 V100 H25 V30 L12.5 50 L0 30 V100 H0 Z M60 0 H100 V100 H85 V30 L72.5 50 L60 30 V100 H60 Z M40 0 H60 V40 L50 55 L40 40 Z" />
    </svg>
  );
}

export function LogoMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 80" 
      fill="currentColor" 
      className={className}
      aria-label="Memetik Logo"
    >
      {/* Simplified M mark matching the reference */}
      <path d="M0 0 H30 V80 H20 V25 H10 V80 H0 Z M35 25 L50 45 L65 25 V0 H35 Z M70 0 H100 V80 H90 V25 H80 V80 H70 Z" />
    </svg>
  );
}
