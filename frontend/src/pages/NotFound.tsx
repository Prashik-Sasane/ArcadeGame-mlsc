import { Link } from "react-router-dom";
export default function NotFound(){
  return (
    <main className="min-h-dvh grid place-items-center text-center p-8">
      <div>
        <p className="text-neon-purple mb-2">404</p>
        <h1 className="text-3xl font-bold">Signal lost in deep space.</h1>
        <Link to="/" className="mt-4 inline-block rounded border border-white/20 px-4 py-2 hover:bg-white/10">
          Return to Portal
        </Link>
      </div>
    </main>
  );
}
