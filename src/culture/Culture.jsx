import "@/culture/Culture.css";

const cultureData = [
    {
        img: "/images/culture-images/iglesia.jpg",
        title: "Creencias y rituales",
        text: "El cristianismo es la religión principal, coexistiendo con creencias animistas que honran a espíritus ancestrales y de la naturaleza. Los rituales incluyen cánticos, danzas y oraciones en eventos como nacimientos y funerales."
    },
    {
        img: "/images/culture-images/fiestas.jpg",
        title: "Fiestas y celebraciones",
        text: "Destacan el Día de Año Nuevo, el Día de la Bomba (23 de abril), los Días de Tuvalu (1 y 2 de octubre) y el Día del Huracán (21 de octubre), con música, desfiles, ceremonias y actos conmemorativos."
    },
    {
        img: "/images/culture-images/cotumbres.jpg",
        title: "Costumbres y vida cotidiana",
        text: "Las familias extendidas conviven juntas y los ancianos transmiten la cultura. Compartir recursos es una norma, y las tareas se dividen: mujeres en el hogar y cultivos, hombres en pesca y agricultura."
    },
    {
        img: "/images/culture-images/casas.jpg",
        title: "Arquitectura y hogares",
        text: "Las viviendas tradicionales (fale) se construyen con madera de coco, techos de pandanus y suelos de coral elevados, usando persianas tejidas para protegerse de la lluvia."
    },
    {
        img: "/images/culture-images/vestimenta.webp",
        title: "Vestimenta",
        text: "La vestimenta tradicional es ligera y colorida: hombres con sarongs y mujeres con faldas largas y blusas florales. En ceremonias se usan trajes de fibras de coco, hojas, collares y coronas artesanales."
    }
];

const foodData = [
    { img: "/images/culture-images/pescado.jpg", title: "PESCADO" },
    { img: "/images/culture-images/banano.avif", title: "PLATANO" },
    { img: "/images/culture-images/pulaka.jpg", title: "PULAKA" },
    { img: "/images/culture-images/coco.png", title: "COCO" },
    { img: "/images/culture-images/fruti.jpg", title: "FRUTIPAN" },
];

export function Culture() {
    return (
        <>
            {/* Galería de Cultura */}
            <section id="culture" className="culture">
                <h2 className="culture-title">CULTURA DE TUVALU</h2>
                <div className="culture-gallery">
                    {cultureData.map((item, i) => (
                        <div className="culture-card" key={i}>
                            <div className="culture-card-inner">
                                <div className="card-front">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <div className="card-back">
                                    <div className="card-back-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Galería de Comida */}
            <section id="food" className="food">
                <h2 className="culture-title">GASTRONOMÍA DE TUVALU</h2>
                <div className="food-gallery">
                    {foodData.map((item, i) => (
                        <div className="food-card" key={i}>
                            <img src={item.img} alt={item.title} />
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
