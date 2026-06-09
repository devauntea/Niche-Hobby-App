"use client";

import { useEffect, useRef, useCallback } from "react";

interface Props {
  onComplete: () => void;
}

const PALETTES = [
  { main: ["#D4537E", "#2b256c", "#EF9F27"], sat: ["#D85A30", "#1D9E75"] },
  { main: ["#D85A30", "#1D9E75", "#378ADD"], sat: ["#D4537E", "#EF9F27"] },
  { main: ["#378ADD", "#639922", "#D4537E"], sat: ["#7F77DD", "#D85A30"] },
];
const FINAL = PALETTES[0];

const BASE_FC = [
  { dx: -38, dy: -20, r: 52 },
  { dx: 38, dy: -20, r: 52 },
  { dx: 0, dy: 40, r: 52 },
];

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
}
function lerpColor(a: string, b: string, t: number) {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  return `rgb(${Math.round(lerp(ar, br, t))},${Math.round(lerp(ag, bg, t))},${Math.round(lerp(ab, bb, t))})`;
}

export default function LogoAnimation({ onComplete }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wmRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    dots: [] as Array<{
      angle: number;
      orbR: number;
      speed: number;
      size: number;
      idx: number;
      satColor?: string;
    }>,
    cycle: 0,
    cycleT: 0,
    t: 0,
    currentColors: PALETTES[0].main.slice(),
    targetColors: PALETTES[0].main.slice(),
    blendT: 0,
    isBlending: false,
    convergeProgress: 0,
    bloomProgress: 0,
    done: false,
    lastTime: 0,
  });

  const initState = useCallback(() => {
    const s = stateRef.current;
    s.dots = [
      { angle: 0, orbR: 72, speed: 0.9, size: 9, idx: 0 },
      { angle: (Math.PI * 2) / 3, orbR: 72, speed: 0.9, size: 9, idx: 1 },
      { angle: (Math.PI * 4) / 3, orbR: 72, speed: 0.9, size: 9, idx: 2 },
      {
        angle: Math.PI / 3,
        orbR: 46,
        speed: -1.3,
        size: 4.5,
        idx: -1,
        satColor: PALETTES[0].sat[0],
      },
      {
        angle: Math.PI * 1.2,
        orbR: 54,
        speed: 1.5,
        size: 3.5,
        idx: -1,
        satColor: PALETTES[0].sat[1],
      },
      {
        angle: Math.PI * 1.8,
        orbR: 40,
        speed: -1.1,
        size: 4,
        idx: -1,
        satColor: PALETTES[0].sat[0],
      },
    ];
    s.cycle = 0;
    s.cycleT = 0;
    s.t = 0;
    s.currentColors = PALETTES[0].main.slice();
    s.targetColors = PALETTES[0].main.slice();
    s.blendT = 0;
    s.isBlending = false;
    s.convergeProgress = 0;
    s.bloomProgress = 0;
    s.done = false;
    s.lastTime = 0;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const _ctx = canvas.getContext("2d");
    if (!_ctx) return;
    const ctx: CanvasRenderingContext2D = _ctx;

    const DPR = window.devicePixelRatio || 1;
    const SIZE = Math.min(window.innerWidth, 340);
    canvas.width = SIZE * DPR;
    canvas.height = SIZE * DPR;
    canvas.style.width = `${SIZE}px`;
    canvas.style.height = `${SIZE}px`;
    ctx.scale(DPR, DPR);

    const W = SIZE,
      H = SIZE,
      CX = W / 2,
      CY = H / 2;
    const ORBIT_DUR = 1.6,
      BLEND_DUR = 0.35,
      CONV_DUR = 1.1,
      BLOOM_DUR = 0.75;

    initState();
    const s = stateRef.current;

    let animId: number;

    function getMainColor(idx: number) {
      if (s.cycle >= 3)
        return lerpColor(
          s.currentColors[idx],
          FINAL.main[idx],
          s.convergeProgress,
        );
      if (s.isBlending)
        return lerpColor(
          s.currentColors[idx],
          s.targetColors[idx],
          easeInOut(s.blendT / BLEND_DUR),
        );
      return s.currentColors[idx];
    }

    function frame(ts: number) {
      if (!s.lastTime) s.lastTime = ts;
      const dt = Math.min((ts - s.lastTime) / 1000, 0.05);
      s.lastTime = ts;
      s.t += dt;
      s.cycleT += dt;

      ctx.clearRect(0, 0, W, H);

      // ── State machine ──
      if (s.cycle < 3) {
        if (s.isBlending) {
          s.blendT += dt;
          if (s.blendT >= BLEND_DUR) {
            s.currentColors = s.targetColors.slice();
            s.isBlending = false;
          }
        }
        if (s.cycleT >= ORBIT_DUR) {
          s.cycleT = 0;
          s.cycle++;
          if (s.cycle < 3) {
            s.targetColors = PALETTES[s.cycle].main.slice();
            s.blendT = 0;
            s.isBlending = true;
            let si = 0;
            for (const d of s.dots) {
              if (d.idx === -1) {
                d.satColor = PALETTES[s.cycle].sat[si++ % 2];
              }
            }
          }
        }
        for (const d of s.dots) d.angle += d.speed * dt;
      } else {
        s.convergeProgress = Math.min(s.cycleT / CONV_DUR, 1);
        const ep = easeInOut(s.convergeProgress);
        for (const d of s.dots) d.angle += d.speed * dt * (1 - ep);
        if (s.cycleT > CONV_DUR) {
          s.bloomProgress = Math.min((s.cycleT - CONV_DUR) / BLOOM_DUR, 1);
          if (s.bloomProgress >= 0.35 && wmRef.current) {
            wmRef.current.style.opacity = "1";
          }
        }
        if (s.cycleT > CONV_DUR + BLOOM_DUR + 0.6) {
          s.done = true;
          setTimeout(onComplete, 400);
        }
      }

      const ep1 = easeInOut(s.convergeProgress);
      const ep2 = easeInOut(s.bloomProgress);

      // ── Orbit trail ──
      if (s.cycle < 3) {
        ctx.save();
        ctx.strokeStyle = "rgba(180,175,165,0.13)";
        ctx.lineWidth = 1;
        ctx.setLineDash([3, 6]);
        ctx.beginPath();
        ctx.arc(CX, CY, 72, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // ── Satellite dots ──
      const satAlpha = s.cycle < 3 ? 0.75 : Math.max(0, 0.75 * (1 - ep1 * 1.8));
      if (satAlpha > 0) {
        for (const d of s.dots) {
          if (d.idx !== -1) continue;
          ctx.save();
          ctx.globalAlpha = satAlpha;
          ctx.beginPath();
          ctx.arc(
            CX + Math.cos(d.angle) * d.orbR,
            CY + Math.sin(d.angle) * d.orbR,
            d.size,
            0,
            Math.PI * 2,
          );
          ctx.fillStyle = d.satColor!;
          ctx.fill();
          ctx.restore();
        }
      }

      // ── Constellation lines ──
      if (s.cycle < 3 || ep1 < 0.6) {
        const la = s.cycle < 3 ? 0.28 : 0.28 * Math.max(0, 1 - ep1 * 2);
        if (la > 0) {
          const md = s.dots.filter((d) => d.idx !== -1);
          ctx.save();
          ctx.strokeStyle = `rgba(180,175,165,${la})`;
          ctx.lineWidth = 1;
          for (let i = 0; i < md.length; i++) {
            for (let j = i + 1; j < md.length; j++) {
              ctx.beginPath();
              ctx.moveTo(
                CX + Math.cos(md[i].angle) * md[i].orbR,
                CY + Math.sin(md[i].angle) * md[i].orbR,
              );
              ctx.lineTo(
                CX + Math.cos(md[j].angle) * md[j].orbR,
                CY + Math.sin(md[j].angle) * md[j].orbR,
              );
              ctx.stroke();
            }
          }
          ctx.restore();
        }
      }

      // ── Main dots → circles ──
      for (const d of s.dots) {
        if (d.idx === -1) continue;
        const fc = BASE_FC[d.idx];
        const color = getMainColor(d.idx);
        const ox = CX + Math.cos(d.angle) * d.orbR;
        const oy = CY + Math.sin(d.angle) * d.orbR;
        const x = lerp(ox, CX + fc.dx, ep1);
        const y = lerp(oy, CY + fc.dy, ep1);
        const circleR = lerp(0, fc.r, ep2);

        if (ep2 > 0.01) {
          ctx.save();
          ctx.globalAlpha = ep2 * 0.2;
          ctx.beginPath();
          ctx.arc(x, y, circleR, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          ctx.globalAlpha = ep2 * 0.55;
          ctx.beginPath();
          ctx.arc(x, y, circleR, 0, Math.PI * 2);
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }

        const dotR = s.cycle >= 3 ? lerp(d.size, 6, ep2) : d.size;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, dotR, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.restore();
      }

      // ── Center niche dot ──
      if (ep2 > 0.35) {
        const na = Math.min((ep2 - 0.35) / 0.45, 1);
        const nr = lerp(0, 6.5, na);
        ctx.save();
        ctx.globalAlpha = na * 0.95;
        ctx.beginPath();
        ctx.arc(CX, CY - 2, nr + 4.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FAF8F2";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(CX, CY - 2, nr, 0, Math.PI * 2);
        ctx.fillStyle = "#7F77DD";
        ctx.fill();
        ctx.restore();
      }

      if (!s.done) animId = requestAnimationFrame(frame);
    }

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [initState, onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FAF8F2] z-50">
      <canvas ref={canvasRef} />
      <div
        ref={wmRef}
        style={{ opacity: 0, transition: "opacity 0.9s ease" }}
        className="mt-4 text-2xl font-medium tracking-tight text-[#1A1916]"
      >
        aspect<span className="text-[#7F77DD]">·niche</span>
      </div>
    </div>
  );
}
