// EHMonogram.jsx — the simple "EH" mark from Even's live site,
// retuned to the spring 2 palette. A circle + two Inter-bold letters.
// Default: sage-700 letters on sage-50 disc. Variants flip the relationship.

const EHMonogram = ({ size = 32, variant = "soft", title = "Even L. Hovda" }) => {
  // variants:
  //   "soft"   → sage-50 disc, sage-700 letters (default, default surface)
  //   "brand"  → sage-500 disc, white letters    (use on white when you want presence)
  //   "inverse"→ white disc, sage-700 letters    (use on sage / dark backgrounds)
  //   "dark"   → slate-800 disc, white letters   (use on hero/dark surfaces)
  //   "mist"   → mist disc, sage-700 letters     (subtle on tinted bg)
  const palettes = {
    soft:    { disc: "#E6EDDF", text: "#5A6F4C", ring: null },
    brand:   { disc: "#8FA77C", text: "#FFFFFF", ring: null },
    inverse: { disc: "#FFFFFF", text: "#5A6F4C", ring: "#E6EDDF" },
    dark:    { disc: "#232A2F", text: "#FFFFFF", ring: null },
    mist:    { disc: "#F2F2F2", text: "#5A6F4C", ring: null },
  };
  const p = palettes[variant] || palettes.soft;
  const fs = size * 0.42;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-label={title}
      role="img"
    >
      <circle cx="32" cy="32" r="31" fill={p.disc} stroke={p.ring || "transparent"} strokeWidth={p.ring ? 1 : 0} />
      <text
        x="32" y="32"
        textAnchor="middle"
        dominantBaseline="central"
        fill={p.text}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize={fs / size * 64}
        letterSpacing="-0.04em"
      >EH</text>
    </svg>
  );
};

window.EHMonogram = EHMonogram;
