import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import GlitchText from "../components/GlitchText";
import Guide from "../assets/AdityaRane.jpg";
import logo from "../assets/mlscpune.png";
import ArcadeGames from "../assets/ArcadeGames.jpg";
import gsap from "gsap";

const GOOGLE_FORM = "https://forms.gle/o2WQ6fdcZ7dtkgcWA";

const navyBg = "bg-[#070A14]";
const neonBlue = "text-[#58AEF7]";
const cyanText = "text-[#2EC1FF]";
const lightBlue = "text-[#80B6FF]";
const panelBg = "bg-[#0E1725]/90";
const borderGlow = "border-[#58AEF7]/20";
const buttonGrad = "bg-gradient-to-r from-[#2196F3] via-[#58AEF7] to-[#2EC1FF]";
const darkBg = "bg-[#070A14]";
const btnShadow = "shadow-[0_0_24px_0_#58AEF7]";

export default function Landing() {
  const titleRef = useRef(null);
  const btnRefs = useRef<(HTMLAnchorElement | HTMLAnchorElement | null)[]>([]);
  const descRef = useRef(null);
  const previewRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      titleRef.current,
      { autoAlpha: 0, x: -30 },
      { autoAlpha: 1, x: 0, duration: 1.6 }
    )
      .to(titleRef.current, {
        x: 5,
        duration: 0.15,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 3,
      })
      .to(titleRef.current, { x: 0, duration: 0.2 });

    tl.fromTo(
      btnRefs.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.6"
    );

    tl.fromTo(
      [descRef.current, previewRef.current],
      { autoAlpha: 0, x: 40 },
      {
        autoAlpha: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.9"
    );

    tl.fromTo(
      footerRef.current,
      { autoAlpha: 0, y: 30 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.7"
    );
  }, []);

  return (
    <div className={`${navyBg} min-h-dvh`}>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <section className="space-y-6">
          <p className={`uppercase tracking-[0.35em] ${cyanText} font-semibold text-lg flex items-center`}>
            <img className="w-16 h-16" src={logo} alt="MLSC Logo" />
            MLSC VIT Pune
          </p>
          <h1
            ref={titleRef}
            className={`text-4xl md:text-6xl font-extrabold leading-tight ${neonBlue} drop-shadow-[0_0_25px_rgba(40,200,255,.35)]`}
          >
            <GlitchText text="GEN AI ARCADE" />
          </h1>
          <p className={`text-xl font-medium ${lightBlue}`}>
            The Future of AI and its Real-World Impact
          </p>
          <div className={`rounded-2xl ${borderGlow} border-2 ${panelBg} p-4 shadow-lg`}>
            <p className={lightBlue}>Speaker: Aditya Rane (AI Consultant @ Google)</p>
            <p className={lightBlue}>Date: Oct 10 • Time: 5:00 PM • Venue: Main Auditorium</p>
            <p className={lightBlue}>Highlights: Live demos, AI arcade, networking, goodies</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href={GOOGLE_FORM}
              target="_blank"
              rel="noreferrer"
              ref={(el) => { if(el) (btnRefs.current[0] = el)}}
              className={`px-6 py-3 rounded-xl font-semibold ${buttonGrad} text-white ${btnShadow} border-2 border-[#58AEF7]/30 transition-all hover:scale-105 hover:border-[#2EC1FF]/70`}
            >
              REGISTER NOW
            </a>
            <Link
              to="/game"
              ref={(el) => { if (el) (btnRefs.current[1] = el)}}
              className="px-6 py-3 rounded-xl border-2 border-[#80B6FF]/60 text-[#80B6FF] font-semibold hover:bg-[#0E1725]/80 hover:text-[#58AEF7] transition-all"
            >
              ENTER ARCADE
            </Link>
          </div>
        </section>

        <section
          ref={previewRef}
          className={`relative flex justify-center items-center aspect-[3/4] w-full max-w-md rounded-2xl ${panelBg} border-2 ${borderGlow} overflow-hidden shadow-xl`}
        >
          <img
            src={Guide}
            alt="GEN AI ARCADE Poster"
            className="object-cover w-full h-full rounded-2xl shadow-[0_0_32px_0_#58AEF7]"
          />
        </section>
      </main>

      <section
        ref={descRef}
        className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left: Description Text */}
        <div className="space-y-6 text-left">
          <h3 className="text-3xl font-extrabold text-[#58AEF7] drop-shadow-md">
            About Spaceship Destruction
          </h3>
          <p className="text-[#80B6FF] text-lg">
            Dive into “Spaceship Destruction,” an exciting arcade-style game inspired by classic space shooters. Take control of your spaceship, dodge enemy fire, and destroy waves of alien ships before they overwhelm you.
          </p>
          <p className="text-[#80B6FF] text-lg">
            Use arrow keys or A/D to move left and right. Press spacebar to fire energy bolts and clear your path to victory. Get ready for a light-hearted, engaging challenge that brings the future of AI into a fun retro game experience.
          </p>
        </div>

        {/* Right: Game Preview Image */}
        <div
          className={`aspect-video rounded-xl ${panelBg} border-2 ${borderGlow} overflow-hidden shadow-glow flex items-center justify-center`}
        >
          <img
            src={ArcadeGames}
            alt="Spaceship Destruction Preview"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      <footer
        ref={footerRef}
        className={`${darkBg} ${borderGlow} pt-8 pb-4 w-full`}
      >
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side: event and copyright */}
          <div className="text-center md:text-left">
            <span className={`uppercase tracking-[0.23em] ${cyanText} font-bold text-sm`}>
              GEN AI ARCADE 2025
            </span>
            <p className="text-[#80B6FF] text-xs mt-2">
              © MLSC VIT Pune &nbsp;|&nbsp; All rights reserved.
            </p>
          </div>

          {/* Center: quick links */}
          <div className="flex items-center gap-6">
            <a
              className={`${neonBlue} underline hover:text-[#2EC1FF] transition font-medium`}
              href="https://forms.gle/o2WQ6fdcZ7dtkgcWA"
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
            <a
              className={`${neonBlue} underline hover:text-[#2EC1FF] transition font-medium`}
              href="https://www.linkedin.com/company/mlscvitpune/?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={`${neonBlue} underline hover:text-[#2EC1FF] transition font-medium`}
              href="https://www.instagram.com/mlscvitpune/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

          {/* Right side: event logo */}
          <div className="hidden md:block">
            <span className="inline-block rounded-full bg-[#58AEF7]/30 p-2 shadow-[0_0_12px_0_#58AEF7]">
              {/* Replace below with your actual logo */}
              <svg width={36} height={36} viewBox="0 0 36 36" fill="none">
                <circle cx={18} cy={18} r={16} fill="#070A14" stroke="#2EC1FF" strokeWidth={3} />
                <text
                  x="50%"
                  y="55%"
                  textAnchor="middle"
                  fontSize={10}
                  fill="#58AEF7"
                  fontWeight="bold"
                  dy=".3em"
                >
                  MLSC
                </text>
              </svg>
            </span>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-[#2EC1FF]/80 tracking-wide">
          Designed & Developed by MLSC Web Dev Team
        </div>
      </footer>
    </div>
  );
}
