import type { Config } from "tailwindcss";

/**
 * Even L. Hovda — Design System
 * Spring 2 palette × Dialect structure. Light theme.
 * Source of truth: .claude/skills/even-hovda-design/colors_and_type.css
 */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Spring 2 brand palette + derived scales ──
        sage: {
          50:  "#F4F7F1",
          100: "#E6EDDF",
          200: "#D2DEC5",
          300: "#BCCFA9",
          400: "#AABF9B", // --c-sage
          500: "#8FA77C",
          600: "#738B61",
          700: "#5A6F4C",
          800: "#44563A",
          900: "#2F3D28",
        },
        sky: {
          50:  "#F0F7FC",
          100: "#DDEDF7",
          200: "#BDDEF2", // --c-sky
          300: "#94C8E7",
          400: "#6BAFD8",
          500: "#4892BF",
          600: "#366F94",
          700: "#29516C",
        },
        slate: {
          50:  "#F6F7F8",
          100: "#E8EAEC",
          200: "#CFD3D7",
          300: "#ACB3B9",
          400: "#828A91",
          500: "#5F6B73", // --c-slate
          600: "#4A555C",
          700: "#364046",
          800: "#232A2F",
          900: "#131719",
        },
        spring: "#DEF2D5", // --c-spring
        mist:   "#F2F2F2", // --c-mist

        // ── Semantic surfaces ──
        page:     "#FAFBF8",
        surface:  "#FFFFFF",
        elevated: "#FFFFFF",
        subtle:   "#F2F2F2",
        "tint-sage":   "#F4F7F1",
        "tint-sky":    "#F0F7FC",
        "tint-spring": "#DEF2D5",

        // ── Foreground / text ──
        fg: {
          1:   "#232A2F", // primary
          2:   "#4A555C", // secondary
          3:   "#828A91", // muted / caption
          inv: "#FFFFFF",
        },

        // ── Lines / borders ──
        line: {
          1: "#E8EAEC",       // hairlines
          2: "#CFD3D7",       // card borders
          strong: "#ACB3B9",
        },

        // ── Brand / accent roles ──
        brand: {
          DEFAULT: "#8FA77C", // sage-500
          hover:   "#738B61", // sage-600
          soft:    "#E6EDDF", // sage-100
        },
        "accent-sky": {
          DEFAULT: "#6BAFD8", // sky-400
          soft:    "#DDEDF7", // sky-100
        },
        highlight: {
          DEFAULT: "#DEF2D5", // spring
          strong:  "#8FA77C", // sage-500
        },

        // ── Status ──
        success:    { DEFAULT: "#5F9C5F", bg: "#E6F1E1" },
        warning:    { DEFAULT: "#C99A4C", bg: "#FBF1DE" },
        danger:     { DEFAULT: "#C5675B", bg: "#F7E1DD" },
        info:       { DEFAULT: "#4892BF", bg: "#DDEDF7" },

        // ── Shadcn-friendly aliases (map to new tokens) ──
        background: "#FAFBF8",            // page
        foreground: "#232A2F",            // fg-1
        border:     "#CFD3D7",            // line-2
        input:      "#CFD3D7",            // line-2
        ring:       "#8FA77C",            // brand
        primary: {
          DEFAULT:    "#8FA77C",          // brand
          hover:      "#738B61",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT:    "#DDEDF7",          // sky-100
          foreground: "#364046",          // slate-700
        },
        accent: {
          DEFAULT:    "#6BAFD8",          // sky-400
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT:    "#F2F2F2",          // mist
          foreground: "#828A91",          // fg-3
        },
        card: {
          DEFAULT:    "#FFFFFF",
          foreground: "#232A2F",
        },
        popover: {
          DEFAULT:    "#FFFFFF",
          foreground: "#232A2F",
        },
        destructive: {
          DEFAULT:    "#C5675B",
          foreground: "#FFFFFF",
        },
      },

      fontFamily: {
        sans:    ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "Helvetica Neue", "sans-serif"],
        display: ["var(--font-inter)", "var(--font-geist-sans)", "Inter", "sans-serif"],
        serif:   ["Source Sans 3", "Georgia", "serif"],
        mono:    ["var(--font-geist-mono)", "Geist Mono", "JetBrains Mono", "SF Mono", "Menlo", "Consolas", "monospace"],
        // legacy alias — still referenced in globals.css
        inter:   ["var(--font-inter)", "Inter", "sans-serif"],
      },

      fontSize: {
        caption:      ["0.75rem",  { lineHeight: "1.5" }],
        "body-sm":    ["0.875rem", { lineHeight: "1.5" }],
        body:         ["1rem",     { lineHeight: "1.65" }],
        "body-lg":    ["1.125rem", { lineHeight: "1.65" }],
        h4:           ["1.25rem",  { lineHeight: "1.2" }],
        h3:           ["1.5rem",   { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        h2:           ["2rem",     { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
        h1:           ["2.75rem",  { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display:      ["3.375rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["4.5rem",   { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-xl": ["6rem",     { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },

      letterSpacing: {
        tight: "-0.02em",
        snug:  "-0.01em",
        wide:  "0.04em",
      },

      lineHeight: {
        tight:   "1.05",
        snug:    "1.2",
        relaxed: "1.65",
      },

      // 8pt scale — Tailwind defaults already cover most; named aliases for clarity.
      spacing: {
        "ds-1":  "4px",
        "ds-2":  "8px",
        "ds-3":  "12px",
        "ds-4":  "16px",
        "ds-5":  "24px",
        "ds-6":  "32px",
        "ds-7":  "48px",
        "ds-8":  "64px",
        "ds-9":  "96px",
        "ds-10": "128px",
      },

      borderRadius: {
        xs:   "4px",
        sm:   "6px",
        md:   "10px",
        lg:   "16px",
        xl:   "24px",
        pill: "999px",
      },

      boxShadow: {
        xs:    "0 1px 2px rgba(47, 61, 40, 0.04)",
        sm:    "0 1px 2px rgba(47, 61, 40, 0.05), 0 1px 3px rgba(47, 61, 40, 0.04)",
        md:    "0 4px 12px rgba(47, 61, 40, 0.06), 0 1px 3px rgba(47, 61, 40, 0.04)",
        lg:    "0 12px 32px rgba(47, 61, 40, 0.08), 0 2px 6px rgba(47, 61, 40, 0.04)",
        xl:    "0 24px 56px rgba(47, 61, 40, 0.10), 0 4px 12px rgba(47, 61, 40, 0.05)",
        inner: "inset 0 1px 2px rgba(47, 61, 40, 0.05)",
        focus: "0 0 0 3px rgba(170, 191, 155, 0.35)",
      },

      transitionDuration: {
        fast: "120ms",
        base: "200ms",
        slow: "360ms",
      },

      transitionTimingFunction: {
        "out-soft":    "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
