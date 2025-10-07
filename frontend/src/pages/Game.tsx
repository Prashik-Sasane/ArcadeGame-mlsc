import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import shipImg from "../assets/spaceship-fighter-removebg-preview.png";
import bulletImg from "../assets/red-laser-removebg-preview.png";
import enemyEasyImg from "../assets/enemyimages-removebg-preview.png";
import enemyMidImg from "../assets/HardEnemy.png";
import enemyHardImg from "../assets/HardestEnemy.png";
import explosionImg from "../assets/Explosion.png";

import shootSoundFile from "../assets/laser.wav";
import explosionSoundFile from "../assets/expl3.wav";
import powerupSoundFile from "../assets/pew.wav";
import gameOverSoundFile from "../assets/tgfcoder-FrozenJam-SeamlessLoop.ogg";

type EnemyType = "easy" | "mid" | "hard";

interface Enemy {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  hp: number;
  speed: number;
  type: EnemyType;
}

interface Bullet {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  speed: number;
}

interface Explosion {
  x: number;
  y: number;
  life: number;
}

const CANVAS_W = 700;
const CANVAS_H = 520;

let enemyIdSequence = 1;
let bulletIdSequence = 1;

const SpaceshipGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);

  const shipRef = useRef({ x: CANVAS_W / 2 - 32, y: CANVAS_H - 110, w: 64, h: 64, speed: 6 });
  const bulletsRef = useRef<Bullet[]>([]);
  const enemiesRef = useRef<Enemy[]>([]);
  const explosionsRef = useRef<Explosion[]>([]);
  const lastShotRef = useRef(0);
  const runningRef = useRef(true);
  const startTimeRef = useRef<number | null>(null);

  const shootSound = new Audio(shootSoundFile);
  const explosionSound = new Audio(explosionSoundFile);
  const powerupSound = new Audio(powerupSoundFile);
  const gameOverSound = new Audio(gameOverSoundFile);

  // image refs
  const shipImgRef = useRef<HTMLImageElement | null>(null);
  const bulletImgRef = useRef<HTMLImageElement | null>(null);
  const enemyEasyImgRef = useRef<HTMLImageElement | null>(null);
  const enemyMidImgRef = useRef<HTMLImageElement | null>(null);
  const enemyHardImgRef = useRef<HTMLImageElement | null>(null);
  const explosionImgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    shipImgRef.current = new Image();
    shipImgRef.current.src = shipImg;
    bulletImgRef.current = new Image();
    bulletImgRef.current.src = bulletImg;
    enemyEasyImgRef.current = new Image();
    enemyEasyImgRef.current.src = enemyEasyImg;
    enemyMidImgRef.current = new Image();
    enemyMidImgRef.current.src = enemyMidImg;
    enemyHardImgRef.current = new Image();
    enemyHardImgRef.current.src = enemyHardImg;
    explosionImgRef.current = new Image();
    explosionImgRef.current.src = explosionImg;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;

    const stars = Array.from({ length: 80 }, () => ({
      x: Math.random() * CANVAS_W,
      y: Math.random() * CANVAS_H,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.6 + 0.2,
    }));

    const keysDown: Record<string, boolean> = {};
    const onKeyDown = (e: KeyboardEvent) => {
      keysDown[e.code] = true;
      if (e.code === "Space") fireBullet();
    };
    const onKeyUp = (e: KeyboardEvent) => (keysDown[e.code] = false);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);


    const spawnEnemy = () => {
      const p = Math.random();
      let type: EnemyType = "easy";
      if (p < 0.6) type = "easy";
      else if (p < 0.9) type = "mid";
      else type = "hard";

      let speed = 1.3;
      let hp = 1;
      let w = 48;
      let h = 48;

      if (type === "easy") {
        speed = 1.3 * 1.5;
        hp = 1;
      }
      if (type === "mid") {
        speed = 2.1 * 1.5;
        hp = 2;
      }
      if (type === "hard") {
        speed = 3.0 * 1.5;
        hp = 4;
      }

      const x = Math.random() * (CANVAS_W - w);
      const y = -h - Math.random() * 100;
      enemiesRef.current.push({ id: enemyIdSequence++, x, y, w, h, hp, speed, type });
    };

    const fireBullet = () => {
      const now = performance.now();
      if (now - lastShotRef.current < 180) return;
      lastShotRef.current = now;

      const ship = shipRef.current;
      bulletsRef.current.push({
        id: bulletIdSequence++,
        x: ship.x + ship.w / 2 - 6,
        y: ship.y,
        w: 12,
        h: 20,
        speed: 10,
      });
      shootSound.currentTime = 0;
      shootSound.play();
    };
    canvas.addEventListener("click", fireBullet);

    const detectCollision = (a: any, b: any) =>
      a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;

    const createExplosion = (x: number, y: number) => {
      explosionsRef.current.push({ x, y, life: 18 });
      explosionSound.currentTime = 0;
      explosionSound.play();
    };

    const loop = (t: number) => {
      if (!startTimeRef.current) startTimeRef.current = t;
      if (!runningRef.current) return;

      // move background
      for (const s of stars) {
        s.y += s.speed;
        if (s.y > CANVAS_H) s.y = 0;
      }

      const ship = shipRef.current;
      if (keysDown["ArrowLeft"] || keysDown["KeyA"]) ship.x = Math.max(0, ship.x - ship.speed);
      if (keysDown["ArrowRight"] || keysDown["KeyD"]) ship.x = Math.min(CANVAS_W - ship.w, ship.x + ship.speed);
      if (keysDown["ArrowUp"] || keysDown["KeyW"]) ship.y = Math.max(0, ship.y - ship.speed);
      if (keysDown["ArrowDown"] || keysDown["KeyS"]) ship.y = Math.min(CANVAS_H - ship.h, ship.y + ship.speed);

      // background
      const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_H);
      gradient.addColorStop(0, "#030712");
      gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

      ctx.fillStyle = "#22d3ee";
      for (const s of stars) ctx.fillRect(s.x, s.y, s.size, s.size);

      if (shipImgRef.current?.complete) ctx.drawImage(shipImgRef.current, ship.x, ship.y, ship.w, ship.h);

      // update bullets
      for (let i = bulletsRef.current.length - 1; i >= 0; i--) {
        const b = bulletsRef.current[i];
        b.y -= b.speed;
        ctx.drawImage(bulletImgRef.current!, b.x, b.y, b.w, b.h);
        if (b.y + b.h < 0) bulletsRef.current.splice(i, 1);
      }

      // spawn enemies
      if (Math.random() < 0.03) spawnEnemy();

      // enemies update
      for (let i = enemiesRef.current.length - 1; i >= 0; i--) {
        const en = enemiesRef.current[i];
        en.y += en.speed;
        const img =
          en.type === "easy" ? enemyEasyImgRef.current : en.type === "mid" ? enemyMidImgRef.current : enemyHardImgRef.current;
        ctx.drawImage(img!, en.x, en.y, en.w, en.h);

        // collision with bullets
        for (let j = bulletsRef.current.length - 1; j >= 0; j--) {
          const b = bulletsRef.current[j];
          if (detectCollision(en, b)) {
            bulletsRef.current.splice(j, 1);
            en.hp -= 1;
            if (en.hp <= 0) {
              const gained = en.type === "easy" ? 10 : en.type === "mid" ? 25 : 60;
              setScore((s) => s + gained);
              createExplosion(en.x, en.y);
              enemiesRef.current.splice(i, 1);
            }
            break;
          }
        }

        // missed enemy
        if (en.y > CANVAS_H) {
          enemiesRef.current.splice(i, 1);
          setLives((l) => {
            const newL = l - 1;
            if (newL <= 0) gameOver();
            return newL;
          });
        }
      }

      // explosions
      for (let i = explosionsRef.current.length - 1; i >= 0; i--) {
        const ex = explosionsRef.current[i];
        ex.life -= 1;
        ctx.globalAlpha = ex.life / 18;
        ctx.drawImage(explosionImgRef.current!, ex.x - 25, ex.y - 25, 50, 50);
        ctx.globalAlpha = 1;
        if (ex.life <= 0) explosionsRef.current.splice(i, 1);
      }

      // score and lives display
      ctx.font = "20px monospace";
      ctx.fillStyle = "#22d3ee";
      ctx.fillText(`SCORE: ${score}`, 16, 30);
      ctx.fillStyle = "#f87171";
      ctx.fillText(`LIVES: ${lives}`, CANVAS_W - 120, 30);

      // ship collision
      for (const en of enemiesRef.current) {
        if (detectCollision(en, ship)) {
          createExplosion(ship.x, ship.y);
          setLives((l) => {
            const newL = l - 1;
            if (newL <= 0) gameOver();
            return newL;
          });
          enemiesRef.current = enemiesRef.current.filter((e) => e.id !== en.id);
          break;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    runningRef.current = true;
    raf = requestAnimationFrame(loop);

    const gameOver = () => {
      runningRef.current = false;
      setIsGameOver(true);
      gameOverSound.play();
      setTimeout(() => navigate("/access"), 2500);
    };

    return () => {
      runningRef.current = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("click", fireBullet);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] text-white">
      <h1 className="text-3xl mb-3 text-cyan-400 font-mono">🚀 GEN AI ARCADE — Spaceship Destruction</h1>
      <canvas ref={canvasRef} width={CANVAS_W} height={CANVAS_H} className="border border-cyan-700 rounded-xl shadow-lg" />
      <p className="text-sm text-slate-300 mt-3">Use Arrow keys / WASD to move, Space to shoot</p>
      <p className="text-xs text-slate-400">Score: {score} | Lives: {lives}</p>
      {isGameOver && <p className="mt-3 text-rose-400 text-xl font-bold animate-pulse">GAME OVER</p>}
    </div>
  );
};

export default SpaceshipGame;
