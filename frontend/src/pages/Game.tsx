import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import useKeys from "../hooks/useKeys";

type Vector = { x: number; y: number; };
type Bullet = Vector & { v: number; r: number; };
type Enemy = Vector & { r: number; alive: boolean; vx: number; };

export default function Game() {
  const bgRef = useRef<HTMLCanvasElement>(null);
  const mainRef = useRef<HTMLCanvasElement>(null);
  const shipRef = useRef<HTMLCanvasElement>(null);
  const keys = useKeys();
  const navigate = useNavigate();

  useEffect(() => {
    const bg = bgRef.current!, main = mainRef.current!, ship = shipRef.current!;
    const bctx = bg.getContext("2d")!, mctx = main.getContext("2d")!, sctx = ship.getContext("2d")!;
    const W = 900, H = 560;
    [bg, main, ship].forEach(c => { c.width = W; c.height = H; });

    // Game State
    const player: Vector & { r: number; cd: number } = { x: W/2, y: H-70, r: 16, cd: 0 };
    const bullets: Bullet[] = [];
    const enemies: Enemy[] = [];
    let frame = 0, running = true, starOffset = 0;

    // Wave: grid of UFOs
    const cols = 8, rows = 3, gapX = 90, gapY = 70, startX = 120, startY = 80;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        enemies.push({ x: startX + c * gapX, y: startY + r * gapY, r: 20, alive: true, vx: 1.2 });
      }
    }

    // Background starfield
    function drawBackground() {
      bctx.clearRect(0,0,W,H);
      starOffset += 1.2;
      bctx.fillStyle = "rgba(255,255,255,.8)";
      for (let i=0;i<120;i++){
        const x = (i*73 % W), y = ((i*131 + starOffset) % H);
        const s = i % 7 === 0 ? 2 : 1;
        bctx.globalAlpha = i % 9 === 0 ? 0.5 : 0.25;
        bctx.fillRect(x,y,s,s);
      }
      bctx.globalAlpha = 1;
    }

    function drawShip() {
      sctx.clearRect(0,0,W,H);
      // simple triangle ship
      sctx.save();
      sctx.translate(player.x, player.y);
      sctx.fillStyle = "oklch(0.76 0.20 240)"; // neon.blue
      sctx.beginPath();
      sctx.moveTo(0, -player.r);
      sctx.lineTo(player.r*0.8, player.r);
      sctx.lineTo(-player.r*0.8, player.r);
      sctx.closePath();
      sctx.fill();

      // thrusters
      sctx.fillStyle = "oklch(0.82 0.18 95)";
      sctx.fillRect(-4, player.r, 3, 10);
      sctx.fillRect(1,  player.r, 3, 12);
      sctx.restore();
    }

    function drawMain() {
      mctx.clearRect(0,0,W,H);
      // bullets
      mctx.fillStyle = "oklch(0.82 0.13 220)";
      bullets.forEach(b => mctx.fillRect(b.x-2, b.y-10, 4, 12));

      // enemies
      enemies.forEach(e => {
        if (!e.alive) return;
        mctx.save();
        mctx.translate(e.x, e.y);
        mctx.fillStyle = "oklch(0.62 0.23 304)";
        mctx.beginPath();
        mctx.arc(0,0,e.r,Math.PI,0);
        mctx.lineTo(e.r*0.8, e.r*0.3);
        mctx.arc(0, e.r*0.3, e.r*0.8, 0, Math.PI, true);
        mctx.closePath();
        mctx.fill();
        mctx.restore();
      });
    }

    function update(dt:number) {
      frame++;
      // player input
      const speed = 320 * dt;
      if (keys.current["arrowleft"] || keys.current["a"]) player.x -= speed;
      if (keys.current["arrowright"] || keys.current["d"]) player.x += speed;
      player.x = Math.max(30, Math.min(W-30, player.x));

      // shooting
      player.cd -= dt;
      if ((keys.current[" "] || keys.current["space"]) && player.cd <= 0) {
        bullets.push({ x: player.x, y: player.y - player.r, v: 480, r: 4 });
        player.cd = 0.2;
      }

      // bullets move
      bullets.forEach(b => b.y -= b.v * dt);
      // enemies sway + descend over time
      enemies.forEach((e, i) => {
        if (!e.alive) return;
        e.x += Math.sin((frame+i)*0.02) * 0.8 + e.vx;
        if (frame % 240 === 0) e.y += 12;
      });

      // collisions
      bullets.forEach(b => {
        enemies.forEach(e => {
          if (!e.alive) return;
          const dx = e.x - b.x, dy = e.y - b.y;
          if (dx*dx + dy*dy <= (e.r+6)*(e.r+6)) {
            e.alive = false;
            b.y = -9999;
          }
        });
      });

      // win condition
      if (enemies.every(e => !e.alive)) {
        running = false;
        setTimeout(() => navigate("/access"), 500);
      }
    }

    let last = performance.now();
    function loop(now:number){
      const dt = Math.min(0.033, (now-last)/1000);
      last = now;
      if (!running) return;
      update(dt);
      drawBackground();
      drawMain();
      drawShip();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    return () => { running = false; };
  }, [navigate]);

  return (
    <div className="min-h-dvh">
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 text-white/70">
          Move: ← → or A/D • Shoot: Space
        </div>
        <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-space-900">
          <canvas ref={bgRef} className="block w-full" />
          <canvas ref={mainRef} className="absolute left-0 top-0 w-full" />
          <canvas ref={shipRef} className="absolute left-0 top-0 w-full" />
        </div>
      </main>
    </div>
  );
}
