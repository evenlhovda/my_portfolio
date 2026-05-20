// LogoArtboards.jsx — six logo direction explorations for Even L. Hovda.
// Each artboard shows: large mark, mark + wordmark, small-size sample.
// All marks are drawn fresh in SVG using the design system color tokens.

// Shared layout used inside every artboard.
const Bench = ({ children, hint, swatch = "var(--sage-700)" }) => (
  <div style={{
    width: 380, height: 360,
    background: "#FFFFFF",
    border: "1px solid #E8EAEC",
    borderRadius: 18,
    padding: "28px 24px 22px",
    display: "flex", flexDirection: "column",
    boxShadow: "0 1px 2px rgba(47,61,40,0.05)",
    color: swatch,
    fontFamily: "Inter, system-ui, sans-serif",
  }}>
    {children}
    {hint && (
      <p style={{
        margin: "auto 0 0", padding: "10px 0 0",
        borderTop: "1px dashed #E8EAEC",
        fontSize: 10.5, color: "#828A91",
        lineHeight: 1.45, fontStyle: "italic",
      }}>{hint}</p>
    )}
  </div>
);

const Row = ({ children, gap = 16, align = "center", style = {} }) => (
  <div style={{ display: "flex", alignItems: align, gap, ...style }}>{children}</div>
);

const Word = ({ size = 18, weight = 700, children, color, tracking = -0.02 }) => (
  <span style={{
    fontFamily: "Inter, system-ui, sans-serif",
    fontWeight: weight, fontSize: size,
    color: color || "#232A2F",
    letterSpacing: `${tracking}em`,
    lineHeight: 1,
  }}>{children}</span>
);

const Caption = ({ children }) => (
  <p style={{
    margin: "0 0 4px",
    fontSize: 10, fontWeight: 600,
    letterSpacing: "0.08em", textTransform: "uppercase",
    color: "#828A91",
  }}>{children}</p>
);

// ───────────────────────────────────────────────────────────────
// 1) FJORD — angled E reading as a mountain/fjord silhouette
// ───────────────────────────────────────────────────────────────
const MarkFjord = ({ s = 96, c = "#5A6F4C", accent = "#6BAFD8" }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
    {/* the E rendered as three angled mountain peaks */}
    <path d="M8 50 L20 22 L32 44 L44 18 L56 50" stroke={c} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
    {/* tiny lake/dot under the middle peak — the "midpoint" of the E and the sage node */}
    <circle cx="32" cy="52" r="2.4" fill={accent}/>
  </svg>
);

const Fjord = () => (
  <Bench hint='"Fjord". An angled E that doubles as a Norwegian mountain silhouette. The middle node is a sky-blue dot — calm, problem-finding eye.'>
    <Caption>01 · Fjord</Caption>
    <Row gap={20} style={{ marginTop: 6 }}>
      <MarkFjord s={96} />
      <Word size={26} weight={700}>Even L<span style={{color:"#8FA77C"}}>.</span> Hovda</Word>
    </Row>
    <div style={{ flex: 1 }} />
    <Row gap={14} style={{ borderTop: "1px solid #F6F7F8", paddingTop: 18 }}>
      <MarkFjord s={28} />
      <Word size={14} weight={600}>Even L<span style={{color:"#8FA77C"}}>.</span> Hovda</Word>
      <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: 4, background: "#5A6F4C" }} />
      <div style={{ width: 16, height: 16, borderRadius: 4, background: "#6BAFD8" }} />
    </Row>
  </Bench>
);

// ───────────────────────────────────────────────────────────────
// 2) KNUTE — knot/node, a problem looped into a solution
// ───────────────────────────────────────────────────────────────
const MarkKnute = ({ s = 96, c = "#5A6F4C", accent = "#6BAFD8" }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
    {/* lemniscate-ish single continuous loop — knot tied through the centre */}
    <path
      d="M 16 32 C 16 18, 30 18, 32 32 C 34 46, 48 46, 48 32 C 48 18, 34 18, 32 32 C 30 46, 16 46, 16 32 Z"
      stroke={c} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"
    />
    <circle cx="32" cy="32" r="3.2" fill={accent}/>
  </svg>
);

const Knute = () => (
  <Bench hint='"Knute". A single continuous loop tied through itself — a problem becoming a solution. Reads as ∞ but Norwegian/handmade.'>
    <Caption>02 · Knute</Caption>
    <Row gap={20} style={{ marginTop: 6 }}>
      <MarkKnute s={96} />
      <Word size={26} weight={700}>evenhovda</Word>
    </Row>
    <div style={{ flex: 1 }} />
    <Row gap={14} style={{ borderTop: "1px solid #F6F7F8", paddingTop: 18 }}>
      <MarkKnute s={28} />
      <Word size={14} weight={600}>evenhovda</Word>
      <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: 4, background: "#5A6F4C" }} />
      <div style={{ width: 16, height: 16, borderRadius: 4, background: "#6BAFD8" }} />
    </Row>
  </Bench>
);

// ───────────────────────────────────────────────────────────────
// 3) DRAGE — kite, a nod to Bryne Kitefestival
// ───────────────────────────────────────────────────────────────
const MarkDrage = ({ s = 96, c = "#5A6F4C", fill = "#DEF2D5", accent = "#6BAFD8" }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
    {/* kite diamond, top-heavy */}
    <path d="M32 8 L52 30 L32 48 L12 30 Z" fill={fill} stroke={c} strokeWidth="3" strokeLinejoin="round"/>
    {/* central spine */}
    <line x1="32" y1="8" x2="32" y2="48" stroke={c} strokeWidth="2"/>
    <line x1="12" y1="30" x2="52" y2="30" stroke={c} strokeWidth="2"/>
    {/* tail — sky dot, then sage dot */}
    <line x1="32" y1="48" x2="32" y2="58" stroke={c} strokeWidth="1.5" strokeDasharray="2 2"/>
    <circle cx="32" cy="58" r="2.4" fill={accent}/>
  </svg>
);

const Drage = () => (
  <Bench hint='"Drage" — kite. Honest reference to Bryne Kitefestival. The downward dotted tail with one sky-blue node nods at the AI graph language.'>
    <Caption>03 · Drage</Caption>
    <Row gap={20} style={{ marginTop: 6 }}>
      <MarkDrage s={96} />
      <Word size={26} weight={700}>Hovda</Word>
    </Row>
    <div style={{ flex: 1 }} />
    <Row gap={14} style={{ borderTop: "1px solid #F6F7F8", paddingTop: 18 }}>
      <MarkDrage s={28} />
      <Word size={14} weight={600}>Hovda · konsulent</Word>
      <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: 4, background: "#5A6F4C" }} />
      <div style={{ width: 16, height: 16, borderRadius: 4, background: "#DEF2D5" }} />
    </Row>
  </Bench>
);

// ───────────────────────────────────────────────────────────────
// 4) KONSTELLASJON — graph of dots spelling EH
// ───────────────────────────────────────────────────────────────
const MarkKonstellasjon = ({ s = 96, c = "#5A6F4C", accent = "#6BAFD8" }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
    {/* E shape on the left, three horizontal bars */}
    <line x1="14" y1="14" x2="14" y2="50" stroke={c} strokeWidth="2.5"/>
    <line x1="14" y1="14" x2="28" y2="14" stroke={c} strokeWidth="2.5"/>
    <line x1="14" y1="32" x2="24" y2="32" stroke={c} strokeWidth="2.5"/>
    <line x1="14" y1="50" x2="28" y2="50" stroke={c} strokeWidth="2.5"/>
    {/* nodes at every vertex */}
    {[[14,14],[28,14],[14,32],[24,32],[14,50],[28,50]].map(([x,y],i)=>
      <circle key={i} cx={x} cy={y} r="2.4" fill={c}/>
    )}
    {/* H shape on the right, connected by a single edge to E's mid-node */}
    <line x1="40" y1="14" x2="40" y2="50" stroke={c} strokeWidth="2.5"/>
    <line x1="52" y1="14" x2="52" y2="50" stroke={c} strokeWidth="2.5"/>
    <line x1="40" y1="32" x2="52" y2="32" stroke={c} strokeWidth="2.5"/>
    <line x1="24" y1="32" x2="40" y2="32" stroke={accent} strokeWidth="2" strokeDasharray="2 2"/>
    {[[40,14],[52,14],[40,32],[52,32],[40,50],[52,50]].map(([x,y],i)=>
      <circle key={i} cx={x} cy={y} r="2.4" fill={c}/>
    )}
    {/* highlight the central bridge node in sky */}
    <circle cx="40" cy="32" r="3.2" fill={accent}/>
  </svg>
);

const Konstellasjon = () => (
  <Bench hint='"Konstellasjon". E and H drawn as graph constellations bridged by one sky-blue edge — the literal product of an AI consultant: connecting things.'>
    <Caption>04 · Konstellasjon</Caption>
    <Row gap={20} style={{ marginTop: 6 }}>
      <MarkKonstellasjon s={96} />
      <Word size={26} weight={700}>Even <span style={{color:"#8FA77C"}}>·</span> Hovda</Word>
    </Row>
    <div style={{ flex: 1 }} />
    <Row gap={14} style={{ borderTop: "1px solid #F6F7F8", paddingTop: 18 }}>
      <MarkKonstellasjon s={28} />
      <Word size={14} weight={600}>Even · Hovda</Word>
      <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: 4, background: "#5A6F4C" }} />
      <div style={{ width: 16, height: 16, borderRadius: 4, background: "#6BAFD8" }} />
    </Row>
  </Bench>
);

// ───────────────────────────────────────────────────────────────
// 5) LINJE — single confident line monogram
// ───────────────────────────────────────────────────────────────
const MarkLinje = ({ s = 96, c = "#5A6F4C" }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
    {/* one continuous stroke — E that flows into a soft halo */}
    <path
      d="M 44 14 L 16 14 L 16 32 L 36 32 M 16 32 L 16 50 L 44 50"
      stroke={c} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const Linje = () => (
  <Bench hint='"Linje". A single confident line. The quietest option — works at favicon size, scales infinitely, never goes out of style.'>
    <Caption>05 · Linje</Caption>
    <Row gap={20} style={{ marginTop: 6 }}>
      <MarkLinje s={96} />
      <Word size={26} weight={700}>Even L<span style={{color:"#8FA77C"}}>.</span> Hovda</Word>
    </Row>
    <div style={{ flex: 1 }} />
    <Row gap={14} style={{ borderTop: "1px solid #F6F7F8", paddingTop: 18 }}>
      <MarkLinje s={28} />
      <Word size={14} weight={600}>Even L<span style={{color:"#8FA77C"}}>.</span> Hovda</Word>
      <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: 4, background: "#5A6F4C" }} />
      <div style={{ width: 16, height: 16, borderRadius: 4, background: "#FFFFFF", border: "1px solid #E8EAEC" }} />
    </Row>
  </Bench>
);

// ───────────────────────────────────────────────────────────────
// 6) BLOM — soft organic 'e' lowercase blossom
// ───────────────────────────────────────────────────────────────
const MarkBlom = ({ s = 96, c = "#5A6F4C", fill = "#E6EDDF", accent = "#6BAFD8" }) => (
  <svg width={s} height={s} viewBox="0 0 64 64" fill="none">
    {/* rounded lowercase 'e' on a sage-tinted disc */}
    <circle cx="32" cy="32" r="24" fill={fill}/>
    <path
      d="M 22 33 A 10 10 0 1 1 40 38"
      stroke={c} strokeWidth="3.4" strokeLinecap="round" fill="none"
    />
    <line x1="22" y1="33" x2="38" y2="33" stroke={c} strokeWidth="3.4" strokeLinecap="round"/>
    <circle cx="44" cy="22" r="3" fill={accent}/>
  </svg>
);

const Blom = () => (
  <Bench hint='"Blom" — bloom. Soft lowercase e on a sage-tinted disc with a sky bud at the corner. Friendliest, most product-feel — good for app/avatar use.'>
    <Caption>06 · Blom</Caption>
    <Row gap={20} style={{ marginTop: 6 }}>
      <MarkBlom s={96} />
      <Word size={26} weight={700} tracking={-0.025}>even.hovda</Word>
    </Row>
    <div style={{ flex: 1 }} />
    <Row gap={14} style={{ borderTop: "1px solid #F6F7F8", paddingTop: 18 }}>
      <MarkBlom s={28} />
      <Word size={14} weight={600}>even.hovda</Word>
      <div style={{ marginLeft: "auto", width: 16, height: 16, borderRadius: 4, background: "#5A6F4C" }} />
      <div style={{ width: 16, height: 16, borderRadius: 4, background: "#E6EDDF" }} />
    </Row>
  </Bench>
);

window.LogoFjord = Fjord;
window.LogoKnute = Knute;
window.LogoDrage = Drage;
window.LogoKonstellasjon = Konstellasjon;
window.LogoLinje = Linje;
window.LogoBlom = Blom;
