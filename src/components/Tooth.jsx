export default function Tooth() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id="toothGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#bfeee8" />
        </linearGradient>
      </defs>
      <path
        d="M60 14C44 2 16 10 16 42c0 24 10 30 15 54 3 14 10 14 13 0 3-14 7-19 16-19s13 5 16 19c3 14 10 14 13 0 5-24 15-30 15-54C104 10 76 2 60 14z"
        fill="url(#toothGrad)" stroke="#0f9d8f" strokeWidth="3"
      />
      <path d="M36 30c4-6 12-8 18-5" stroke="#0f9d8f" strokeWidth="3" strokeLinecap="round" fill="none" opacity=".5" />
    </svg>
  );
}
