import Nav from "../components/Nav";

export default function Final() {
  return (
    <div className="min-h-dvh bg-[#070A14]">
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-16 space-y-10 text-center">
        <h2
          className="text-5xl font-extrabold text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] animate-pulse"
          style={{
            textShadow:
              "0 0 5px #FFD700, 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 40px #FFFF00",
          }}
        >
          Access Unlocked
        </h2>
        <p className="text-[#80B6FF]/90 text-lg max-w-xl mx-auto mb-12">
          Thanks for clearing the arcade — here are the official links.
        </p>

        <div className="grid gap-6 text-left">
          <a
            href=" https://chat.whatsapp.com/KfqHxXxOxjI26FsZf7SMmQ?mode=ems_copy_c"
            className="block rounded-xl border-2 border-[#7FFF00]/50 bg-[#101931]/90 p-6 text-[#7FFF00] hover:bg-[#1a2b40] transition"
            target="_blank"
            rel="noreferrer"
          >
            ✅ WhatsApp Group
          </a>
          <a
            href="https://forms.gle/o2WQ6fdcZ7dtkgcWA"
            className="block rounded-xl border-2 border-[#FFD700]/40 bg-[#101931]/90 p-6 text-[#FFD700]  hover:bg-[#1a2b40] transition"
            target="_blank"
            rel="noreferrer"
          >
            📝 Registration (Google Form)
          </a>
          <div className="rounded-xl border-2 border-[#9B59B6]/50 bg-[#101931]/90 p-6 text-[#9B59B6]">
            <p className="mb-3 text-xl font-semibold">🌐 MLSC Socials</p>
            <div className="flex gap-5 justify-center">
              <a
                className="underline text-[#80B6FF] hover:text-[#2EC1FF] transition"
                href="https://www.linkedin.com/company/mlscvitpune/?originalSubdomain=in"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="underline text-[#80B6FF] hover:text-[#2EC1FF] transition"
                href="https://www.instagram.com/mlscvitpune/?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
