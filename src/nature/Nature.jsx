import { useEffect, useRef, useState } from "react";
import "@/Nature/Nature.css";

export function Nature() {
  const fauna = [
    {
      src: "/images/nature-images/rat.webp",
      alt: "Rata de la Polinesia",
      title: "Rata de la Polinesia",
    },
    {
      src: "/images/nature-images/ballena.jpg",
      alt: "Tortuga marina",
      title: "Ballenas jorobadas",
    },
    {
      src: "/images/nature-images/charran.jpg",
      alt: "Pez tropical",
      title: "charrán",
    },
    {
      src: "/images/nature-images/piquero.jpg",
      alt: "Ave marina",
      title: "Piquero patirrojo",
    },
    {
      src: "/images/nature-images/tiñosa.webp",
      alt: "Cangrejo de coco",
      title: "La tiñosa menuda",
    },
    
  ];

  const flora = [
    {
      src: "/images/nature-images/cocotero.jpg",
      alt: "Cocotero",
      title: "La palma de coco ",
    },
    {
      src: "/images/nature-images/pandanus.jpg",
      alt: "Pandanus",
      title: "El hala (Pandanus tectorius)",
    },
    {
      src: "/images/nature-images/hibisco.jpg",
      alt: "Hibisco",
      title: "Hibisco",
    },
    {
      src: "/images/nature-images/plumeria.jpg",
      alt: "Plumeria rubra",
      title: "Plumeria rubra",
    },
    {
      src: "/images/nature-images/campanilla.jpg",
      alt: "campanilla de playa.",
      title: "Campanilla de playa",
    },
    { src: "/images/nature-images/pulaka.jpg", alt: "pulaka", title: "Pulaka" },
    { src: "/images/nature-images/pan.jpg", alt: "Árboles del pan", title: "Árboles del pan" },
  ];

  return (
    <section id="nature" className="nature">
      <div className="nature_content">
        <NatureRow
          title="Fauna"
          text="La fauna terrestre de Tuvalu es muy limitada; la mayor parte de la vida animal se encuentra en el mar y en las costas, con vibrantes arrecifes de coral que albergan peces, moluscos y crustáceos."
          items={fauna}
        />
        <NatureRow
          title="Flora"
          text="La biodiversidad de Tuvalu es un orgullo nacional, con atolones de coral que crean un hábitat único para especies marinas y terrestres, esenciales para la cultura y sustento local."
          items={flora}
        />
      </div>
    </section>
  );
}

function NatureRow({ title, text, items }) {
  const trackRef = useRef(null);
  const VISIBLE = 3; // tarjetas visibles en escritorio
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      // pequeño margen para evitar precisión de float
      setCanPrev(el.scrollLeft > 5);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
    };

    update();
    el.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  const slide = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth / VISIBLE; // desplazamiento por 1 card visible
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <div className="nature_row">
      <h2>{title}</h2>
      <p>{text}</p>

      <div className="carousel-wrapper" aria-roledescription="carousel">
        <button
          className="carousel-btn prev"
          onClick={() => slide(-1)}
          disabled={!canPrev}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div ref={trackRef} className="carousel-track">
          {items.map((item, i) => (
            <div key={i} className="carousel_card">
              <img src={item.src} alt={item.alt} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <button
          className="carousel-btn next"
          onClick={() => slide(1)}
          disabled={!canNext}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </div>
  );
}
