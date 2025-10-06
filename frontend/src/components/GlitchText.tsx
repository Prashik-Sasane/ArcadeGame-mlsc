import { useEffect, useState } from "react";

export default function GlitchText({ text, className="" }: { text: string; className?: string }) {
  const [jitter, setJitter] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setJitter(j => !j), 1200);
    return () => clearInterval(id);
  }, []);
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span aria-hidden className={`absolute inset-0 z-0 translate-x-0.5 text-neon-purple opacity-70 ${jitter ? "animate-pulse" : ""}`}>{text}</span>
      <span aria-hidden className={`absolute inset-0 z-0 -translate-x-0.5 -translate-y-0.5 text-neon-cyan opacity-70 ${jitter ? "animate-pulse" : ""}`}>{text}</span>
    </span>
  );
}
