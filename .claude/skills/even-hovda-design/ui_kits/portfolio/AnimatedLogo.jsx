// AnimatedLogo.jsx — Even's signature network-graph mark.
// Adapted from portfolio_page/components/ui/animated-logo.tsx.
// Original used currentColor (slate-100) + .fill-contrast (orange).
// We tint to sage with sky-blue accent dots for the new palette.

const AnimatedLogo = ({ size = 40, accent = "#6BAFD8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    width={size}
    height={size}
    aria-hidden="true"
  >
    <line x1="200" y1="350" x2="200" y2="300" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
    <g>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        values="-1 200 200; 1 200 200; -1 200 200"
        dur="4s"
        repeatCount="indefinite"
      />
      <line x1="200" y1="300" x2="200" y2="200" stroke="currentColor" strokeWidth="12" strokeLinecap="round" />
      <line x1="200" y1="250" x2="140" y2="220" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <line x1="200" y1="250" x2="260" y2="220" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        values="1 200 200; -1.5 200 200; 1 200 200"
        dur="3.5s"
        repeatCount="indefinite"
      />
      <line x1="200" y1="200" x2="100" y2="150" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <line x1="200" y1="200" x2="300" y2="150" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <line x1="200" y1="200" x2="60"  y2="100" stroke="currentColor" strokeWidth="8"  strokeLinecap="round" />
      <line x1="200" y1="200" x2="340" y2="100" stroke="currentColor" strokeWidth="8"  strokeLinecap="round" />
    </g>
    <g>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        values="0.5 200 200; -0.5 200 200; 0.5 200 200"
        dur="3s"
        repeatCount="indefinite"
      />
      <g opacity="0.35">
        <circle cx="140" cy="220" r="16" fill="currentColor" />
        <circle cx="260" cy="220" r="16" fill="currentColor" />
        <circle cx="100" cy="150" r="16" fill="currentColor" />
        <circle cx="300" cy="150" r="16" fill="currentColor" />
        <circle cx="60"  cy="100" r="14" fill="currentColor" />
        <circle cx="340" cy="100" r="14" fill="currentColor" />
      </g>
      <g fill={accent}>
        <circle cx="140" cy="220" r="6" />
        <circle cx="260" cy="220" r="6" />
        <circle cx="100" cy="150" r="6" />
        <circle cx="300" cy="150" r="6" />
        <circle cx="60"  cy="100" r="5" />
        <circle cx="340" cy="100" r="5" />
      </g>
    </g>
    <g>
      <circle cx="200" cy="200" r="20" fill="currentColor" opacity="0.25" />
      <circle cx="200" cy="200" r="8" fill={accent}>
        <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

window.AnimatedLogo = AnimatedLogo;
