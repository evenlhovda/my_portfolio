'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const coreAreas = [
  {
    title: 'Produktutvikling',
    body: 'Erfaring med å ta digitale produkter fra idé til marked. Fokus på brukeropplevelse, teknisk gjennomførbarhet og forretningsverdi.',
  },
  {
    title: 'AI & automatisering',
    body: 'Utvikler løsninger som tar i bruk kunstig intelligens i automatiserte arbeidsflyter.',
  },
  {
    title: 'Forretningsutvikling',
    body: 'Bred erfaring med å utvikle og implementere forretningsstrategier, med fokus på digitalisering og innovasjon.',
  },
]

export default function MopePage() {
  const rootRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const h1BehindRef = useRef<HTMLDivElement>(null)
  const heroCardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const cleanups: Array<() => void> = []

    /* ─── Custom cursor ───────────────────────────── */
    const dot = document.createElement('div')
    const ring = document.createElement('div')
    dot.className = 'mope-cursor-dot'
    ring.className = 'mope-cursor-ring'
    root.appendChild(dot)
    root.appendChild(ring)

    let mx = -999, my = -999, rx = -999, ry = -999
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
    }
    window.addEventListener('mousemove', onMove)
    let ringRAF = 0
    const animRing = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      ringRAF = requestAnimationFrame(animRing)
    }
    ringRAF = requestAnimationFrame(animRing)

    /* ─── Particle canvas ─────────────────────────── */
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    type P = {
      x: number; y: number; vx: number; vy: number; life: number
      decay: number; size: number; color: string
      shock: boolean; radius: number; maxRadius: number
    }
    const particles: P[] = []
    const mkColor = () => (Math.random() > 0.5 ? '#00f5e4' : '#ff2070')

    const burst = (x: number, y: number, count = 50) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 2.5 + Math.random() * 9
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (2 + Math.random() * 3),
          life: 1, decay: 0.018 + Math.random() * 0.025,
          size: 1.5 + Math.random() * 4, color: mkColor(),
          shock: false, radius: 0, maxRadius: 0,
        })
      }
      for (let r = 0; r < 2; r++) {
        particles.push({
          x, y, vx: 0, vy: 0, life: 1, decay: 0.035,
          size: 0, color: mkColor(), shock: true,
          radius: 4, maxRadius: 80 + Math.random() * 60,
        })
      }
    }

    let partRAF = 0
    const animParts = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        if (p.shock) {
          p.radius += (p.maxRadius - p.radius) * 0.12
          p.life -= 0.035
        } else {
          p.x += p.vx; p.y += p.vy
          p.vy += 0.18; p.vx *= 0.98
          p.life -= p.decay; p.size *= 0.975
        }
        ctx.save()
        ctx.globalAlpha = Math.max(0, p.life)
        ctx.shadowBlur = p.shock ? 12 : 8
        ctx.shadowColor = p.color
        if (p.shock) {
          ctx.strokeStyle = p.color
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
          ctx.stroke()
        } else {
          ctx.fillStyle = p.color
          ctx.beginPath()
          ctx.arc(p.x, p.y, Math.max(0, p.size), 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
        if (p.life <= 0) particles.splice(i, 1)
      }
      partRAF = requestAnimationFrame(animParts)
    }
    partRAF = requestAnimationFrame(animParts)

    /* ─── Crack system on hero card ───────────────── */
    const card = heroCardRef.current!
    const svgNS = 'http://www.w3.org/2000/svg'
    const crackSvg = document.createElementNS(svgNS, 'svg')
    crackSvg.setAttribute('class', 'mope-crack-svg')
    card.appendChild(crackSvg)

    const addCrack = () => {
      const w = card.offsetWidth, h = card.offsetHeight
      const ox = w * (0.2 + Math.random() * 0.6)
      const oy = h * (0.2 + Math.random() * 0.6)
      const arms = 2 + Math.floor(Math.random() * 3)
      const dur = (0.3 + Math.random() * 0.3).toFixed(2)
      let svg = ''
      for (let b = 0; b < arms; b++) {
        let x = ox, y = oy
        let angle = (b / arms) * Math.PI * 2 + Math.random() * 0.8
        let d = `M ${x.toFixed(1)} ${y.toFixed(1)}`
        const steps = 3 + Math.floor(Math.random() * 5)
        for (let s = 0; s < steps; s++) {
          angle += (Math.random() - 0.5) * 1.0
          const dist = 18 + Math.random() * 38
          x += Math.cos(angle) * dist
          y += Math.sin(angle) * dist
          d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`
          if (Math.random() > 0.55 && s > 0) {
            const ba = angle + (Math.random() > 0.5 ? 0.6 : -0.6) * (0.5 + Math.random() * 0.8)
            const bd = 10 + Math.random() * 22
            d += ` L ${(x + Math.cos(ba) * bd).toFixed(1)} ${(y + Math.sin(ba) * bd).toFixed(1)} M ${x.toFixed(1)} ${y.toFixed(1)}`
          }
        }
        const len = 300
        const color = Math.random() > 0.5 ? 'rgba(0,245,228,0.55)' : 'rgba(255,32,112,0.45)'
        svg += `<path d="${d}" stroke="${color}" stroke-width="1.2" fill="none" stroke-dasharray="${len}" stroke-dashoffset="${len}" opacity="0.8"><animate attributeName="stroke-dashoffset" from="${len}" to="0" dur="${dur}s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1"/></path>`
      }
      crackSvg.insertAdjacentHTML('beforeend', svg)
    }

    /* ─── 3D tilt on hero card ────────────────────── */
    const TILT = 7
    const onTilt = (e: MouseEvent) => {
      const r = card.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / (window.innerWidth / 2)
      const dy = (e.clientY - cy) / (window.innerHeight / 2)
      card.style.setProperty('--rx', (-dy * TILT * 0.6).toFixed(2) + 'deg')
      card.style.setProperty('--ry', (dx * TILT).toFixed(2) + 'deg')
    }
    window.addEventListener('mousemove', onTilt)

    /* ─── Woven H1 / card effect ──────────────────── */
    const h1 = h1Ref.current!
    const h1Behind = h1BehindRef.current!
    const wovenLayout = () => {
      const h1R = h1.getBoundingClientRect()
      const cardR = card.getBoundingClientRect()
      const splitPct = Math.max(0, Math.min(100,
        ((cardR.top - h1R.top) / h1R.height) * 100))
      h1.style.clipPath = `inset(0 0 ${(100 - splitPct).toFixed(1)}% 0)`
      const fs = getComputedStyle(h1)
      const parentR = (h1.offsetParent as HTMLElement).getBoundingClientRect()
      Object.assign(h1Behind.style, {
        top: (h1R.top - parentR.top).toFixed(1) + 'px',
        left: (h1R.left - parentR.left).toFixed(1) + 'px',
        width: h1R.width.toFixed(1) + 'px',
        fontSize: fs.fontSize,
        lineHeight: fs.lineHeight,
        clipPath: `inset(${splitPct.toFixed(1)}% 0 0 0)`,
      })
    }
    let layoutRAF = 0
    const scheduleLayout = () => {
      cancelAnimationFrame(layoutRAF)
      layoutRAF = requestAnimationFrame(wovenLayout)
    }
    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleLayout)
    } else {
      scheduleLayout()
    }
    // re-run a few times as fonts/layout settle
    const t1 = setTimeout(scheduleLayout, 300)
    const t2 = setTimeout(scheduleLayout, 900)
    window.addEventListener('resize', scheduleLayout)
    window.addEventListener('scroll', scheduleLayout, { passive: true })

    /* ─── Button bursts + cracks ──────────────────── */
    const buttons = Array.from(root.querySelectorAll<HTMLElement>('[data-burst]'))
    const onBtnClick = (e: Event) => {
      const el = e.currentTarget as HTMLElement
      const r = el.getBoundingClientRect()
      burst(r.left + r.width / 2, r.top + r.height / 2, 55)
      addCrack()
      card.classList.remove('mope-shake')
      void card.offsetWidth
      card.classList.add('mope-shake')
    }
    buttons.forEach((b) => b.addEventListener('click', onBtnClick))

    /* ─── Magnetic effect on magnetic buttons ─────── */
    const magnets = Array.from(root.querySelectorAll<HTMLElement>('[data-magnetic]'))
    const magHandlers: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = []
    magnets.forEach((m) => {
      const move = (e: MouseEvent) => {
        const r = m.getBoundingClientRect()
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.3
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.3
        m.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`
        ring.style.width = '60px'; ring.style.height = '60px'
        ring.style.borderColor = 'rgba(0,245,228,0.6)'
      }
      const leave = () => {
        m.style.transform = ''
        ring.style.width = '36px'; ring.style.height = '36px'
        ring.style.borderColor = 'rgba(255,255,255,0.4)'
      }
      m.addEventListener('mousemove', move)
      m.addEventListener('mouseleave', leave)
      magHandlers.push([m, move, leave])
    })

    /* ─── Cleanup ─────────────────────────────────── */
    cleanups.push(() => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousemove', onTilt)
      window.removeEventListener('resize', resize)
      window.removeEventListener('resize', scheduleLayout)
      window.removeEventListener('scroll', scheduleLayout)
      cancelAnimationFrame(ringRAF)
      cancelAnimationFrame(partRAF)
      cancelAnimationFrame(layoutRAF)
      clearTimeout(t1); clearTimeout(t2)
      buttons.forEach((b) => b.removeEventListener('click', onBtnClick))
      magHandlers.forEach(([m, move, leave]) => {
        m.removeEventListener('mousemove', move)
        m.removeEventListener('mouseleave', leave)
      })
      dot.remove(); ring.remove(); crackSvg.remove()
    })

    return () => cleanups.forEach((fn) => fn())
  }, [])

  const blobs = [
    { c: '#1a0050', s: 520, x: 15, y: 10, d: 20, dx1: '28vw', dy1: '22vh', dx2: '-12vw', dy2: '50vh', s1: 1.3, s2: 0.75 },
    { c: '#003040', s: 420, x: 65, y: 55, d: 25, dx1: '-22vw', dy1: '25vh', dx2: '14vw', dy2: '-18vh', s1: 0.85, s2: 1.45 },
    { c: '#100035', s: 640, x: 5, y: 65, d: 30, dx1: '38vw', dy1: '-12vh', dx2: '-8vw', dy2: '28vh', s1: 1.1, s2: 0.65 },
    { c: '#1a1045', s: 360, x: 78, y: 8, d: 22, dx1: '-28vw', dy1: '38vh', dx2: '18vw', dy2: '-28vh', s1: 1.55, s2: 1.15 },
    { c: '#0a0028', s: 480, x: 42, y: 82, d: 28, dx1: '22vw', dy1: '-38vh', dx2: '-20vw', dy2: '12vh', s1: 0.8, s2: 1.35 },
    { c: '#002030', s: 300, x: 90, y: 40, d: 18, dx1: '-15vw', dy1: '-20vh', dx2: '8vw', dy2: '35vh', s1: 1.2, s2: 0.9 },
  ]

  return (
    <div ref={rootRef} className="mope-root">
      {/* SVG goo filter */}
      <svg className="mope-defs" aria-hidden>
        <defs>
          <filter id="mope-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="22" result="blur" />
            <feColorMatrix in="blur" mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -12" />
          </filter>
        </defs>
      </svg>

      {/* Lava blob background */}
      <div className="mope-blob-bg" aria-hidden>
        {blobs.map((b, i) => (
          <div
            key={i}
            className="mope-blob"
            style={{
              width: b.s, height: b.s, left: `${b.x}%`, top: `${b.y}%`,
              background: b.c, animationDuration: `${b.d}s`,
              ['--dx1' as string]: b.dx1, ['--dy1' as string]: b.dy1,
              ['--dx2' as string]: b.dx2, ['--dy2' as string]: b.dy2,
              ['--s1' as string]: b.s1, ['--s2' as string]: b.s2,
            }}
          />
        ))}
      </div>

      <canvas ref={canvasRef} className="mope-particle-canvas" aria-hidden />

      {/* Back to normal */}
      <Link href="/" className="mope-back" data-magnetic>
        ← Tilbake til virkeligheten
      </Link>

      <div className="mope-container">
        {/* Hero */}
        <header className="mope-header">
          <h1 ref={h1Ref} className="mope-h1" data-text="Even L. Hovda">
            Even L. Hovda
          </h1>
        </header>

        <main className="mope-main">
          <div ref={heroCardRef} className="mope-card mope-hero-card">
            <div className="mope-card-inner">
              <span className="mope-pill">Konsulent · AI produktleder</span>
              <p className="mope-lead">AI, automatisering og forretningsutvikling.</p>
              <p className="mope-body">
                Jeg hjelper små og mellomstore bedrifter utvikle verdifulle
                løsninger med AI&nbsp;i sentrum.
              </p>
              <div className="mope-actions">
                <span className="mope-magnetic" data-magnetic>
                  <Link href="/projects" className="mope-btn" data-burst>
                    <span className="mope-btn-fill" />
                    Se prosjekter →
                  </Link>
                </span>
                <span className="mope-magnetic" data-magnetic>
                  <a href="mailto:evenlhovda+web@gmail.com" className="mope-btn mope-btn-ghost" data-burst>
                    Ta kontakt
                  </a>
                </span>
              </div>
            </div>
            <div className="mope-portrait">
              <Image
                src="/images/Profilbilde_lue_rund2.png"
                alt="Even L. Hovda"
                width={150}
                height={150}
                className="mope-portrait-img"
              />
            </div>
          </div>

          {/* h1 clone behind the card */}
          <div ref={h1BehindRef} className="mope-h1-behind" aria-hidden>
            Even L. Hovda
          </div>
        </main>

        {/* Kjerneområder */}
        <section className="mope-areas">
          <div className="mope-divider"><span>Kjerneområder</span></div>
          <div className="mope-grid">
            {coreAreas.map((a, i) => (
              <article
                key={a.title}
                className="mope-card mope-area-card"
                data-burst
                style={{ animationDelay: `${-i * 2.3}s` }}
              >
                <div className="mope-area-mark" />
                <h3 className="mope-area-title">{a.title}</h3>
                <p className="mope-area-body">{a.body}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="mope-footer">
          Dette er en test av hvordan KI — nærmere bestemt Fable-modellen — kan
          brukes til å lage avanserte frontend-designeffekter.
        </footer>
      </div>

      <style jsx global>{`
        .mope-root {
          --cyan: #00f5e4;
          --mag: #ff2070;
          --text: #eeeeff;
          --text-dim: rgba(200, 200, 255, 0.5);
          position: relative;
          min-height: 100vh;
          background: #06060f;
          color: var(--text);
          overflow: hidden;
          cursor: none;
          font-family: var(--font-dm-mono), monospace;
        }
        .mope-root a { cursor: none; }

        .mope-defs { position: fixed; width: 0; height: 0; }

        /* Blobs */
        .mope-blob-bg {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          filter: url(#mope-goo);
        }
        .mope-blob {
          position: absolute; border-radius: 50%;
          animation-name: mopeBlobDrift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes mopeBlobDrift {
          0% { transform: translate(0,0) scale(1) rotate(0deg); }
          33% { transform: translate(var(--dx1), var(--dy1)) scale(var(--s1)) rotate(120deg); }
          66% { transform: translate(var(--dx2), var(--dy2)) scale(var(--s2)) rotate(240deg); }
          100% { transform: translate(0,0) scale(1) rotate(360deg); }
        }

        .mope-particle-canvas {
          position: fixed; inset: 0; pointer-events: none; z-index: 998;
        }

        /* Cursor */
        .mope-cursor-dot {
          position: fixed; width: 10px; height: 10px; background: #fff;
          border-radius: 50%; pointer-events: none; z-index: 99999;
          transform: translate(-50%, -50%); mix-blend-mode: difference;
        }
        .mope-cursor-ring {
          position: fixed; width: 36px; height: 36px;
          border: 1px solid rgba(255,255,255,0.4); border-radius: 50%;
          pointer-events: none; z-index: 99998; transform: translate(-50%, -50%);
          mix-blend-mode: difference;
          transition: width 0.3s ease, height 0.3s ease, border-color 0.3s, transform 0.08s ease-out;
        }

        /* Back link */
        .mope-back {
          position: fixed; top: 24px; left: 24px; z-index: 1000;
          font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--text-dim); text-decoration: none;
          padding: 8px 14px; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px; background: rgba(12,12,32,0.5);
          backdrop-filter: blur(12px); transition: color 0.3s, border-color 0.3s;
        }
        .mope-back:hover { color: var(--cyan); border-color: rgba(0,245,228,0.4); }

        /* Layout */
        .mope-container {
          position: relative; z-index: 1;
          max-width: 980px; margin: 0 auto; padding: 96px 24px 100px;
        }
        .mope-header { text-align: center; position: relative; z-index: 3; }
        .mope-h1 {
          font-family: var(--font-syne), sans-serif; font-weight: 800;
          font-size: clamp(2.6rem, 7vw, 5.4rem); letter-spacing: -0.03em;
          line-height: 1; color: var(--text); position: relative;
          display: inline-block; margin: 0;
        }
        .mope-h1::before, .mope-h1::after {
          content: attr(data-text); position: absolute; inset: 0; pointer-events: none;
        }
        .mope-h1::before {
          color: var(--cyan); animation: mopeGlitchA 6s steps(1) infinite;
          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
        }
        .mope-h1::after {
          color: var(--mag); animation: mopeGlitchB 6s steps(1) infinite;
          clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
        }
        @keyframes mopeGlitchA {
          0%, 88%, 100% { transform: none; opacity: 0; }
          89% { transform: translate(-4px,0) skewX(-2deg); opacity: 0.9; }
          90% { transform: translate(3px,0); opacity: 0.9; }
          91% { transform: translate(-2px,0); opacity: 0.9; }
          92% { opacity: 0; }
        }
        @keyframes mopeGlitchB {
          0%, 88%, 100% { transform: none; opacity: 0; }
          90% { transform: translate(5px,0) skewX(1deg); opacity: 0.85; }
          91% { transform: translate(-3px,0); opacity: 0.85; }
          92% { opacity: 0; }
        }
        .mope-h1-behind {
          position: absolute; pointer-events: none; z-index: 1;
          font-family: var(--font-syne), sans-serif; font-weight: 800;
          letter-spacing: -0.03em; line-height: 1; color: var(--text);
          text-align: center;
        }

        .mope-main { position: relative; z-index: 2; margin-top: -2.6rem; }

        /* Card */
        .mope-card {
          background: rgba(12,12,32,0.55);
          backdrop-filter: blur(48px) saturate(130%) brightness(1.1);
          -webkit-backdrop-filter: blur(48px) saturate(130%) brightness(1.1);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 28px; position: relative;
          animation: mopeMorph 14s ease-in-out infinite;
          will-change: transform, border-radius;
        }
        .mope-hero-card {
          padding: 52px 44px 46px;
          display: flex; gap: 32px; align-items: center;
          transform-style: preserve-3d;
          transform: perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));
          transition: transform 0.12s ease-out;
        }
        .mope-card-inner { flex: 1; position: relative; z-index: 2; }
        @keyframes mopeMorph {
          0%, 100% { border-radius: 28px; }
          15% { border-radius: 55% 45% 48% 52% / 45% 55% 45% 55%; }
          30% { border-radius: 40% 60% 65% 35% / 60% 40% 60% 40%; }
          45% { border-radius: 62% 38% 32% 68% / 55% 60% 40% 45%; }
          60% { border-radius: 35% 65% 55% 45% / 48% 52% 55% 45%; }
          75% { border-radius: 50% 40% 60% 50% / 38% 62% 38% 62%; }
          90% { border-radius: 44% 56% 42% 58% / 60% 40% 58% 42%; }
        }
        .mope-card::before {
          content: ''; position: absolute; top: 0; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan) 30%, var(--mag) 70%, transparent);
          border-radius: 50%; animation: mopeShimmer 4s ease-in-out infinite; z-index: 1;
        }
        @keyframes mopeShimmer {
          0%, 100% { opacity: 0.3; transform: scaleX(0.8); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        .mope-shake { animation: mopeShake 0.28s ease, mopeMorph 14s ease-in-out infinite !important; }
        @keyframes mopeShake {
          0% { margin-left: 0; } 20% { margin-left: -6px; } 40% { margin-left: 6px; }
          60% { margin-left: -4px; } 80% { margin-left: 3px; } 100% { margin-left: 0; }
        }
        .mope-crack-svg {
          position: absolute; inset: 0; pointer-events: none; z-index: 20;
          overflow: hidden; border-radius: inherit; width: 100%; height: 100%;
        }

        .mope-pill {
          display: inline-block; margin-bottom: 18px;
          padding: 5px 12px; border-radius: 100px;
          background: rgba(0,245,228,0.08); border: 1px solid rgba(0,245,228,0.25);
          color: var(--cyan); font-size: 0.66rem; letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .mope-lead {
          font-family: var(--font-syne), sans-serif; font-weight: 700;
          font-size: 1.55rem; letter-spacing: -0.02em; margin: 0 0 14px;
          color: var(--text);
        }
        .mope-body {
          color: var(--text-dim); font-size: 0.9rem; line-height: 1.8;
          font-style: italic; font-weight: 300; margin: 0 0 30px; max-width: 44ch;
        }
        .mope-actions { display: flex; flex-wrap: wrap; gap: 14px; }
        .mope-magnetic { display: inline-block; will-change: transform; }
        .mope-btn {
          position: relative; display: inline-block; overflow: hidden; isolation: isolate;
          padding: 14px 34px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.2); color: var(--text);
          font-family: var(--font-dm-mono), monospace; font-size: 0.74rem;
          letter-spacing: 0.14em; text-transform: uppercase; text-decoration: none;
          transition: border-color 0.4s, color 0.4s;
        }
        .mope-btn-fill {
          position: absolute; inset: 0; z-index: -1; opacity: 0;
          background: linear-gradient(135deg, var(--cyan), var(--mag));
          transition: opacity 0.4s;
        }
        .mope-btn:hover { border-color: transparent; }
        .mope-btn:hover .mope-btn-fill { opacity: 1; }
        .mope-btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); }

        .mope-portrait {
          flex-shrink: 0; width: 150px; height: 150px; border-radius: 50%;
          padding: 3px; background: linear-gradient(135deg, var(--cyan), var(--mag));
          position: relative; z-index: 2;
          /* Samme organiske morph som kortet, men ute av takt
             (kortere syklus + negativ delay → hjørnene flyter i utakt) */
          animation: mopeMorph 11s ease-in-out infinite;
          animation-delay: -4s;
          will-change: border-radius;
        }
        .mope-portrait-img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }

        /* Areas */
        .mope-areas { margin-top: 64px; position: relative; z-index: 2; }
        .mope-divider {
          display: flex; align-items: center; gap: 16px; margin-bottom: 32px;
        }
        .mope-divider::before, .mope-divider::after {
          content: ''; flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12));
        }
        .mope-divider::after { transform: scaleX(-1); }
        .mope-divider span {
          font-family: var(--font-syne), sans-serif; font-size: 0.7rem;
          letter-spacing: 0.18em; text-transform: uppercase; color: var(--cyan);
        }
        .mope-grid { display: grid; gap: 20px; grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 760px) { .mope-grid { grid-template-columns: 1fr; } }
        .mope-area-card { padding: 30px 26px; }
        .mope-area-card > * { position: relative; z-index: 2; }
        .mope-area-mark {
          width: 34px; height: 2px; margin-bottom: 18px;
          background: linear-gradient(90deg, var(--cyan), var(--mag));
        }
        .mope-area-title {
          font-family: var(--font-syne), sans-serif; font-weight: 700;
          font-size: 1.1rem; margin: 0 0 10px; color: var(--text);
        }
        .mope-area-body {
          color: var(--text-dim); font-size: 0.82rem; line-height: 1.7;
          font-weight: 300; margin: 0;
        }

        .mope-footer {
          margin: 76px auto 0; max-width: 54ch; text-align: center;
          position: relative; z-index: 2;
          font-size: 0.72rem; line-height: 1.8; letter-spacing: 0.04em;
          color: var(--text-dim);
        }

        @media (max-width: 640px) {
          .mope-hero-card { flex-direction: column-reverse; text-align: center; }
          .mope-actions { justify-content: center; }
          .mope-body { margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </div>
  )
}
