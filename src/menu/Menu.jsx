import { useEffect, useState } from "react";
import "@/menu/Menu.css";

export function Menu() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`menu ${scrolled ? "scrolled" : ""}`}>
      <h1>TUVALU</h1>

      {/* Botón hamburguesa */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`submenu ${open ? "show" : ""}`}>
        <a href="#start" onClick={() => setOpen(false)}>Inicio</a>
        <a href="#location" onClick={() => setOpen(false)}>Geodemografía</a>
        <a href="#flag" onClick={() => setOpen(false)}>Bandera</a>
        <a href="#nature" onClick={() => setOpen(false)}>Biodiversidad</a>
        <a href="#weather" onClick={() => setOpen(false)}>Clima</a>
        <a href="#culture" onClick={() => setOpen(false)}>Cultura</a>
        <a href="#government" onClick={() => setOpen(false)}>Politica</a>
      </div>
    </div>
  );
}
