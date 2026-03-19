export default function Footer() {
  return (
    <footer className="bg-[#0f3d28] text-white/70 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white text-lg font-semibold">Tarin Raj</p>
          <p className="text-sm mt-1">
            Rudna Glava, Majdanpek · Istočna Srbija
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#o-nama" className="hover:text-white transition-colors">
            O nama
          </a>
          <a href="#galerija" className="hover:text-white transition-colors">
            Galerija
          </a>
          <a href="#mapa" className="hover:text-white transition-colors">
            Lokacija
          </a>
          <a href="#kontakt" className="hover:text-white transition-colors">
            Kontakt
          </a>
        </nav>

        <p className="text-xs text-white/40 text-center md:text-right">
          &copy; {new Date().getFullYear()} Tarin Raj. Sva prava zadržana.
        </p>
      </div>
    </footer>
  );
}
