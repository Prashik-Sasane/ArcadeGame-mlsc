import { Link, useLocation } from "react-router-dom";

const NavLink = ({ to, label }: { to: string; label: string }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={[
        "relative px-4 py-2 rounded-md transition-colors font-semibold",
        active
          ? "text-[#58AEF7]"
          : "text-[#80B6FF] hover:text-[#2EC1FF]",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-[#58AEF7]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A14]",
      ].join(" ")}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className={[
          "pointer-events-none absolute left-3 right-3 -bottom-1 h-[2px] rounded",
          active
            ? "bg-[#58AEF7] shadow-[0_0_12px_rgba(40,200,255,.45)]"
            : "bg-transparent",
        ].join(" ")}
      />
    </Link>
  );
};

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2EC1FF]/10 bg-[#070A14]/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative grid h-7 w-7 place-items-center">
            <span className="absolute inset-0 rounded-full bg-[#58AEF7]/35 blur-md" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#58AEF7] shadow-glow group-hover:scale-110 transition" />
          </span>
          <span className="font-extrabold tracking-[0.22em] uppercase text-[#80B6FF]">
            GEN <span className="text-[#58AEF7]">AI</span> <span className="text-[#2EC1FF]">ARCADE</span>
          </span>
        </Link>

        {/* Center tabs */}
        <nav className="hidden items-center gap-1 md:flex mr-16">
          <NavLink to="/" label="Home" />
          <NavLink to="/game" label="Play" />
          <NavLink to="/access" label="Access" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://forms.gle/your-form-id"
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border-2 border-[#2EC1FF]/60 bg-gradient-to-b from-[#58AEF7] to-[#2EC1FF]/90 px-4 py-2 text-white font-semibold shadow-[0_0_16px_0_#58AEF7] transition hover:brightness-110"
          >
            <span className="relative z-10">Register</span>
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/30 mix-blend-overlay group-hover:translate-x-0 transition-transform duration-500" />
          </a>

          {/* Mobile menu (optional) */}
          <button
            aria-label="Menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-[#2EC1FF]/40 bg-[#101931]/60 text-[#80B6FF] hover:text-[#2EC1FF] transition"
          >
            ☰
          </button>
        </div>
      </div>
      <div className="pointer-events-none h-[2px] w-full bg-gradient-to-r from-transparent via-[#58AEF7]/50 to-transparent shadow-[0_0_20px_rgba(40,200,255,.45)]" />
    </header>
  );
}
