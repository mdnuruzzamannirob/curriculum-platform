import { useEffect, useRef } from "react";

export default function AnimatedBadge() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d")!;
    const SNAKE = 200,
      SPEED = 1,
      POINTS = 800;
    let animId: number,
      progress = 0;

    const { width: BW, height: BH } = container.getBoundingClientRect();
    const W = (canvas.width = BW);
    const H = (canvas.height = BH);
    const R = BH / 2;
    const topLen = W - 2 * R,
      arcLen = Math.PI * R;
    const total = topLen * 2 + arcLen * 2;

    const pts = Array.from({ length: POINTS }, (_, i) => {
      let d = (i / POINTS) * total;
      if (d < topLen) return { x: R + d, y: 0 };
      d -= topLen;
      if (d < arcLen) {
        const a = -Math.PI / 2 + d / R;
        return { x: W - R + Math.cos(a) * R, y: R + Math.sin(a) * R };
      }
      d -= arcLen;
      if (d < topLen) return { x: W - R - d, y: H };
      d -= topLen;
      const a = Math.PI / 2 + d / R;
      return { x: R + Math.cos(a) * R, y: R + Math.sin(a) * R };
    });

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < SNAKE; i++) {
        const frac = i / SNAKE;
        const idx = Math.floor((progress - (SNAKE - i) + POINTS * 99) % POINTS);
        const pt = pts[idx],
          np = pts[(idx + 1) % POINTS];
        ctx.beginPath();
        ctx.moveTo(pt.x, pt.y);
        ctx.lineTo(np.x, np.y);
        ctx.strokeStyle = `rgba(${Math.round(90 + frac * 165)},${Math.round(50 + frac * 205)},255,${Math.pow(frac, 1.4)})`;
        ctx.lineWidth = 0.4 + frac * 1.2;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      const hp = pts[Math.floor(progress % POINTS)];
      ctx.beginPath();
      ctx.arc(hp.x, hp.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();
      progress = (progress + SPEED) % POINTS;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative inline-flex">
      <canvas
        ref={canvasRef}
        className="absolute  pointer-events-none z-10 rounded-full"
      />

      <div
        ref={containerRef}
        className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border  px-3 py-1.5 text-[10px] font-semibold text-subtle border-border bg-card/80 uppercase tracking-wide backdrop-blur-md"
      >
        <span
          className="badge-shine absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)]"
          style={{ transform: "translateX(-130%) skewX(-12deg)" }}
        />
        <svg width="19" height="19" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285f4" />
              <stop offset="33%" stopColor="#9b72cb" />
              <stop offset="66%" stopColor="#d96570" />
              <stop offset="100%" stopColor="#ea4335" />
            </linearGradient>
          </defs>
          <path
            fill="url(#g1)"
            d="M50 2 C50 2 56 38 98 50 C56 62 50 98 50 98 C50 98 44 62 2 50 C44 38 50 2 50 2 Z"
          />
        </svg>
        <span className="relative ">Structured Learning Platform</span>
      </div>
    </div>
  );
}
