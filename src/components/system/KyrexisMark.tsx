type Props = { className?: string };

export function KyrexisMark({ className }: Props) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Left arm — upper full weight */}
      <path d="M10 8L18.5 8L24.25 20L15.75 20Z" fill="currentColor" />
      {/* Left arm — lower faded */}
      <path d="M15.75 20L24.25 20L30 32L21.5 32Z" fill="currentColor" opacity="0.55" />
      {/* Right arm — upper */}
      <path d="M30 8L21.5 8L15.75 20L24.25 20Z" fill="currentColor" opacity="0.78" />
      {/* Right arm — lower faded */}
      <path d="M24.25 20L15.75 20L10 32L18.5 32Z" fill="currentColor" opacity="0.40" />
    </svg>
  );
}
