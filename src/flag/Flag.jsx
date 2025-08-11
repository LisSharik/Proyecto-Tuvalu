import "@/flag/Flag.css";

export function Flag() {
  return (
    <section id="flag" className="flag">
      <div className="flag_content">
        {/* Fila 1 - Bandera Oficial */}
        <div className="flag_row">
          <div className="flag_col">
            <img
              src="/images/tuvalu-flag.png"
              alt="Bandera oficial de Tuvalu"
              className="flag_image"
            />
          </div>
          <div className="flag_col">
            <h2>Bandera Oficial de Tuvalu</h2>
            <p>
              La bandera oficial muestra las nueve islas en amarillo sobre fondo
              azul celeste, con la <strong>Union Jack</strong> en el cantón,
              reflejando la herencia británica.
            </p>
            <p>
              Adoptada el <strong>1 de octubre de 1978</strong>, ha tenido
              cambios importantes:
            </p>
            <ul>
              <li>
                1995: Intento de eliminar la Union Jack, no aceptado por la
                población.
              </li>
              <li>
                1997: Restauración del diseño original con ajuste de posición de
                las estrellas.
              </li>
            </ul>
          </div>
        </div>

        {/* Fila 2 - Bandera Rediseñada */}
        <div className="flag_row reverse">
          <div className="flag_col">
            <img
              src="/images/tuvalu-flag-new.jpg"
              alt="Bandera rediseñada de Tuvalu"
              className="flag_image"
            />
          </div>
          <div className="flag_col">
            <h2>Bandera Rediseñada</h2>
            <ul className="flag_list">
              <li>
                <strong>Azul oscuro:</strong> Representa el Océano Pacífico que
                rodea y une las islas de Tuvalu, fuente de vida, sustento y
                cultura. También evoca calma, serenidad e identidad isleña.
              </li>
              <li>
                <strong>Ondas blancas y azules:</strong> Simbolizan las olas y
                corrientes marinas que rodean al país desde todos los puntos
                cardinales. Reflejan la belleza y fragilidad del entorno marino,
                así como la paz y las arenas de coral.
              </li>
              <li>
                <strong>Flor de hibisco blanca con centro amarillo:</strong>{" "}
                Símbolo de hospitalidad, belleza y cultura local. El blanco
                representa pureza y paz; el amarillo, la energía del sol y la
                vida que florece a pesar de las adversidades climáticas.
              </li>
              <li>
                <strong>Nueve estrellas doradas:</strong> Representan todas las
                islas de Tuvalu (aunque el nombre signifique “ocho juntos”). El
                dorado simboliza esperanza, prosperidad y valor del territorio.
              </li>
              <li>
                <strong>Distribución circular:</strong> Las estrellas rodean la
                flor central, representando la unidad y una misma raíz cultural
                para todas las islas.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img id="background_flag" src="/images/background-flag.png" alt="" />
    </section>
  );
}
