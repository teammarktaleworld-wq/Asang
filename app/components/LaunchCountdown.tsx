"use client";

import { useEffect, useState, useRef } from "react";

const LAUNCH_DATE = new Date("2026-09-25T19:00:00+05:30").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const difference = Math.max(LAUNCH_DATE - Date.now(), 0);
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// Particle component
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const count = 55;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      dx: (Math.random() - 0.5) * 0.18,
      dy: -Math.random() * 0.22 - 0.05,
      o: Math.random() * 0.35 + 0.05,
    }));

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(178,165,140,${p.o})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -5) { p.y = H + 5; p.x = Math.random() * W; }
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
      }
      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      style={{ opacity: 0.7 }}
    />
  );
}

// Flipping digit
function Digit({ value, prev }: { value: number; prev: number }) {
  const [flip, setFlip] = useState(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setDisplay(value);
        setFlip(false);
      }, 280);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <span
      style={{
        display: "inline-block",
        transition: flip ? "transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.28s" : "none",
        transform: flip ? "translateY(-8px) scaleY(0.85)" : "translateY(0) scaleY(1)",
        opacity: flip ? 0 : 1,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {String(display).padStart(2, "0")}
    </span>
  );
}

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const [prevTime, setPrevTime] = useState<TimeLeft>(getTimeLeft());
  const [launched, setLaunched] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Stagger reveal
    const t = setTimeout(() => setRevealed(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeLeft();
      setPrevTime(timeLeft);
      setTimeLeft(remaining);
      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        setLaunched(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const items = [
    { value: timeLeft.days, prev: prevTime.days, label: "Days" },
    { value: timeLeft.hours, prev: prevTime.hours, label: "Hours" },
    { value: timeLeft.minutes, prev: prevTime.minutes, label: "Min" },
    { value: timeLeft.seconds, prev: prevTime.seconds, label: "Sec" },
  ];

  /* ─── STYLES (inline, no Tailwind required for the animations) ─── */
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #0F0E0C;
      --cream: #F2EDE4;
      --gold: #B8A88A;
      --muted: #7A7060;
      --line: rgba(242,237,228,0.10);
    }

    body { background: var(--bg); }

    .asang-wrap {
      position: relative;
      min-height: 100svh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--bg);
      color: var(--cream);
      font-family: 'DM Sans', sans-serif;
      overflow: hidden;
      padding: 2rem 1.5rem;
    }

    /* ── Ambient glow ── */
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(90px);
      pointer-events: none;
      z-index: 0;
    }
    .glow-1 {
      width: 520px; height: 520px;
      top: -80px; left: -100px;
      background: radial-gradient(circle, rgba(184,168,138,0.07) 0%, transparent 70%);
      animation: breathe 8s ease-in-out infinite;
    }
    .glow-2 {
      width: 400px; height: 400px;
      bottom: -60px; right: -60px;
      background: radial-gradient(circle, rgba(184,168,138,0.05) 0%, transparent 70%);
      animation: breathe 10s ease-in-out infinite reverse;
    }

    @keyframes breathe {
      0%, 100% { transform: scale(1); opacity: 1; }
      50%       { transform: scale(1.12); opacity: 0.6; }
    }

    /* ── Content layer ── */
    .content {
      position: relative;
      z-index: 2;
      width: 100%;
      max-width: 900px;
      text-align: center;
    }

    /* ── Logo ── */
    .logo-wrap {
      margin-bottom: 3.5rem;
      transition: opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1);
    }
    .logo-wrap.hidden { opacity: 0; transform: translateY(10px); }
    .logo-wrap.shown  { opacity: 1; transform: translateY(0); }

    .logo-img {
      height: 52px;
      width: auto;
      display: inline-block;
      filter: brightness(0.96);
    }

    .logo-rule {
      width: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--gold), transparent);
      margin: 1.1rem auto 0;
      transition: width 1.4s cubic-bezier(0.16,1,0.3,1) 0.5s;
    }
    .logo-rule.shown { width: 80px; }

    /* ── Eyebrow ── */
    .eyebrow {
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: 0.65rem;
      letter-spacing: 0.3em;
      color: var(--gold);
      text-transform: uppercase;
      margin-bottom: 1.4rem;
      opacity: 0;
      transform: translateY(12px);
      transition: opacity 0.9s ease 0.8s, transform 0.9s ease 0.8s;
    }
    .eyebrow.shown { opacity: 1; transform: translateY(0); }

    /* ── Main heading ── */
    .headline {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(3.2rem, 9vw, 7.5rem);
      line-height: 0.92;
      letter-spacing: -0.01em;
      color: var(--cream);
      margin-bottom: 0.3rem;
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 1s ease 1s, transform 1s ease 1s;
    }
    .headline.shown { opacity: 1; transform: translateY(0); }

    .headline-em {
      font-style: italic;
      color: var(--gold);
      display: block;
    }

    /* ── Countdown grid ── */
    .countdown-wrap {
      margin: 3.5rem auto 0;
      max-width: 760px;
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.9s ease 1.3s, transform 0.9s ease 1.3s;
    }
    .countdown-wrap.shown { opacity: 1; transform: translateY(0); }

    .countdown-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      border: 1px solid var(--line);
    }

    .cd-cell {
      padding: 2.2rem 1rem 1.8rem;
      position: relative;
    }
    .cd-cell:not(:last-child) {
      border-right: 1px solid var(--line);
    }

    .cd-number {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(2.8rem, 7vw, 5.5rem);
      line-height: 1;
      color: var(--cream);
      display: block;
      letter-spacing: -0.02em;
    }

    .cd-label {
      display: block;
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: 0.58rem;
      letter-spacing: 0.28em;
      color: var(--muted);
      text-transform: uppercase;
      margin-top: 0.75rem;
    }

    /* top-left corner accent */
    .cd-cell::before {
      content: '';
      position: absolute;
      top: -1px; left: -1px;
      width: 8px; height: 8px;
      border-top: 1px solid var(--gold);
      border-left: 1px solid var(--gold);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
    .cd-cell:hover::before { opacity: 1; }

    /* ── Launch info ── */
    .launch-info {
      margin-top: 3rem;
      opacity: 0;
      transition: opacity 0.9s ease 1.6s;
    }
    .launch-info.shown { opacity: 1; }

    .launch-date {
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: 0.65rem;
      letter-spacing: 0.35em;
      color: var(--muted);
      text-transform: uppercase;
    }

    .launch-time {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: 1.35rem;
      color: var(--cream);
      margin-top: 0.4rem;
      letter-spacing: 0.04em;
    }

    /* ── Footer tagline ── */
    .tagline {
      margin-top: 4rem;
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: 0.65rem;
      letter-spacing: 0.3em;
      color: var(--muted);
      opacity: 0;
      transition: opacity 0.9s ease 1.9s;
    }
    .tagline.shown { opacity: 1; }

    /* ── Launched state ── */
    .launched {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100svh;
      background: var(--bg);
      color: var(--cream);
      font-family: 'DM Sans', sans-serif;
      text-align: center;
      animation: fadeIn 2s ease forwards;
    }
    @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }

    .launched-img { height: 64px; width: auto; margin-bottom: 2.5rem; }

    .launched-sub {
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: 0.65rem;
      letter-spacing: 0.35em;
      color: var(--gold);
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }

    .launched-head {
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      font-size: clamp(3rem, 8vw, 6rem);
      line-height: 0.95;
    }

    .launched-body {
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: 0.85rem;
      color: var(--muted);
      margin-top: 1.5rem;
      max-width: 340px;
      line-height: 1.8;
    }

    @media (max-width: 540px) {
      .countdown-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .cd-cell:nth-child(1),
      .cd-cell:nth-child(2) {
        border-bottom: 1px solid var(--line);
      }
      .cd-cell:nth-child(2) {
        border-right: none;
      }
      .cd-cell:last-child {
        border-right: none;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }
  `;

  if (launched) {
    return (
      <>
        <style>{styles}</style>
        <div className="launched">
          <img
            src="/Asang-logo-trans-white.png"
            alt="ASANG"
            className="launched-img"
          />
          <p className="launched-sub">Now Live</p>
          <h1 className="launched-head">
            ASANG
            <br />
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>is here.</span>
          </h1>
          <p className="launched-body">
            Architecture, interiors and spaces<br />shaped with intention.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="asang-wrap">
        <Particles />
        <div className="glow glow-1" />
        <div className="glow glow-2" />

        <div className="content">
          {/* Logo */}
          <div className={`logo-wrap ${revealed ? "shown" : "hidden"}`}>
            <img
              src="/Asang-logo-trans-white.png"
              alt="ASANG"
              className="logo-img"
            />
            <div className={`logo-rule ${revealed ? "shown" : ""}`} />
          </div>

          {/* Eyebrow */}
          <p className={`eyebrow ${revealed ? "shown" : ""}`}>
            A new space is about to begin
          </p>

          {/* Headline */}
          <h1 className={`headline ${revealed ? "shown" : ""}`}>
            We open
            <span className="headline-em">Tomorrow.</span>
          </h1>

          {/* Countdown */}
          <div className={`countdown-wrap ${revealed ? "shown" : ""}`}>
            <div className="countdown-grid">
              {items.map((item) => (
                <div className="cd-cell" key={item.label}>
                  <span className="cd-number">
                    <Digit value={item.value} prev={item.prev} />
                  </span>
                  <span className="cd-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Launch info */}
          <div className={`launch-info ${revealed ? "shown" : ""}`}>
            <p className="launch-date">September 25, 2026</p>
            <p className="launch-time">7:00 PM IST</p>
          </div>

          {/* Tagline */}
          <p className={`tagline ${revealed ? "shown" : ""}`}>
            Architecture · Interiors · Spaces shaped with intention
          </p>
        </div>
      </div>
    </>
  );
}