import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import GlitchText from "../components/GlitchText";
import Guide from "../assets/AdityaRane.jpg"
import logo from "../assets/mlscpune.png"
// If your image is named 'gen-ai-arcade.jpg' and in public/assets/, use that path:
// import poster from '/assets/gen-ai-arcade.jpg';  // Or require/URL.createObjectURL

const GOOGLE_FORM = "https://forms.gle/your-form-id";

// Colors from your poster
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
  return (
    <div className={`${navyBg} min-h-dvh`}>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content as before */}
        <section className="space-y-6">
          <p className={`uppercase tracking-[0.35em] ${cyanText} font-semibold text-lg flex items-center`}><img className="w-16 h-16" src={logo}></img>MLSC VIT Pune</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <GlitchText text="GEN AI ARCADE" className={`${neonBlue} drop-shadow-[0_0_25px_rgba(40,200,255,.35)]`} />
          </h1>
          <p className={`text-xl font-medium ${lightBlue}`}>
            The Future of AI and its Real-World Impact
          </p>
          <div className={`rounded-2xl ${borderGlow} border-2 ${panelBg} p-4 shadow-lg`}>
            <p className={lightBlue}>
              Speaker: Aditya Rane (AI Consultant @ Google)
            </p>
            <p className={lightBlue}>Date: Oct 10 • Time: 5:00 PM • Venue: Main Auditorium</p>
            <p className={lightBlue}>Highlights: Live demos, AI arcade, networking, goodies</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href={GOOGLE_FORM}
              target="_blank"
              className={`px-6 py-3 rounded-xl font-semibold ${buttonGrad} text-white ${btnShadow} border-2 border-[#58AEF7]/30 transition-all hover:scale-105 hover:border-[#2EC1FF]/70`}
              rel="noreferrer"
            >
              REGISTER NOW
            </a>
            <Link
              to="/game"
              className="px-6 py-3 rounded-xl border-2 border-[#80B6FF]/60 text-[#80B6FF] font-semibold hover:bg-[#0E1725]/80 hover:text-[#58AEF7] transition-all"
            >
              ENTER ARCADE
            </Link>
          </div>
        </section>
        {/* Right side: Attractive event poster image */}
        <section className="relative flex justify-center items-center">
          <div className={`aspect-[3/4] w-full max-w-md rounded-2xl ${panelBg} border-2 ${borderGlow} overflow-hidden shadow-xl flex items-center justify-center`}>
            <img
              src={Guide}// Update path as needed
              alt="GEN AI ARCADE Poster"
              className="object-cover w-full h-full rounded-2xl shadow-[0_0_32px_0_#58AEF7]"
            />
          </div>
        </section>
        {/* Game Description Section */}
      </main>
       <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
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
            src="/assets/spaceship-destruction-preview.png" // replace with your actual preview image path
            alt="Spaceship Destruction Preview"
            className="w-full h-full object-contain"
            />
        </div>
        </section>
      <footer className={`${darkBg} ${borderGlow} pt-8 pb-4 w-full`}>
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
        {/* Center: quick links (optional, update URLs) */}
        <div className="flex items-center gap-6">
          <a
            className={`${neonBlue} underline hover:text-[#2EC1FF] transition font-medium`}
            href="https://forms.gle/your-form-id"
            target="_blank"
            rel="noreferrer"
          >
            Register
          </a>
          <a
            className={`${neonBlue} underline hover:text-[#2EC1FF] transition font-medium`}
            href="https://www.linkedin.com/company/mlsc-vit-pune"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={`${neonBlue} underline hover:text-[#2EC1FF] transition font-medium`}
            href="https://www.instagram.com/mlsc.vitpune"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        {/* Right side: event logo (optional, if you have SVG or image) */}
        <div className="hidden md:block">
          {/* Example event logo as SVG circle with blue glow */}
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
