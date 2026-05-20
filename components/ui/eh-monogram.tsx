type Variant = "soft" | "brand" | "inverse" | "dark" | "mist"

type Palette = { disc: string; text: string; ring: string | null }

const palettes: Record<Variant, Palette> = {
  soft:    { disc: "#E6EDDF", text: "#5A6F4C", ring: null },
  brand:   { disc: "#8FA77C", text: "#FFFFFF", ring: null },
  inverse: { disc: "#FFFFFF", text: "#5A6F4C", ring: "#E6EDDF" },
  dark:    { disc: "#232A2F", text: "#FFFFFF", ring: null },
  mist:    { disc: "#F2F2F2", text: "#5A6F4C", ring: null },
}

export function EHMonogram({
  size = 32,
  variant = "soft",
  title = "Even L. Hovda",
}: {
  size?: number
  variant?: Variant
  title?: string
}) {
  const p = palettes[variant]
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-label={title}
      role="img"
    >
      <circle
        cx="32"
        cy="32"
        r="31"
        fill={p.disc}
        stroke={p.ring ?? "transparent"}
        strokeWidth={p.ring ? 1 : 0}
      />
      <text
        x="32"
        y="32"
        textAnchor="middle"
        dominantBaseline="central"
        fill={p.text}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="26.88"
        letterSpacing="-0.04em"
      >
        EH
      </text>
    </svg>
  )
}
