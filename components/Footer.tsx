import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-900 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <Image src="/logo.svg" alt="Visas Elite" width={110} height={32} />
        <p className="text-center text-xs">
          © 2026 Catalina Cardozo — Visas Elite. Este sitio no está afiliado con la Embajada de los Estados Unidos.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition">Privacidad</a>
          <a href="#" className="hover:text-white transition">Términos</a>
        </div>
      </div>
    </footer>
  );
}
