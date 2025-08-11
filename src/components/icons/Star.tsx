export default function Star({ filled = true, className = "" }: { filled?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 17.27l5.18 3.14-1.64-5.81L20 9.75l-6-.2L12 4 10 9.55l-6 .2 4.46 4.85-1.64 5.81L12 17.27z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
