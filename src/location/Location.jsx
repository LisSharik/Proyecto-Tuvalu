import "@/location/Location.css";

export function Location() {
  return (
    <div id="location" className="location">
      <div className="location_content">

        <img src="/images/tuvalu-map.png" alt="Mapa de Tuvalu" />
        <div className="location_content_text">
          <h2>Localización de Tuvalu</h2>
          <p>
            Isla del océano Pacífico que existe como nación independiente desde 1976.
            <br />
            <strong>Países más cercanos:</strong>
            <ul id="paises">
              <li>Kiribati</li>
              <li>Samoa</li>
              <li>Fiyi</li>
            </ul>
          </p>
          <p>
            Tuvalu significa “ocho islas”, aunque en realidad está compuesto por nueve.
          </p>
          <p>Tuvalu es la nacion  con menos habitantes en el mundo, seguida por Nauru y Palaos.</p>
          <p>los idiomas oficiales son el ingles, samoano, el gilbertes o I-Kiribati.</p>

          <h2>Demografía de Tuvalu</h2>
          <p>Población muy pequeña y territorio reducido.</p>
          <ul className="demografia">
            <li>
              <span>Población</span>
              10,643
            </li>
            <li>
              <span>Superficie</span>
              26 km²
            </li>
            <li>
              <span>Esperanza de vida</span>
              63,8 años
            </li>
            <li>
              <span>Idioma</span>
              Tuvaluano e inglés
            </li>
            <li>
              <span>Religión</span>
              Cristiana
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
