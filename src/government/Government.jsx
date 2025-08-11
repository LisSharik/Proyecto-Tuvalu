import "@/government/Government.css";

export function Government() {
    return (
        <section id="government" className="government">
            <div className="gov-container">
                <div className="gov-text">
                    <h2>Política y Economía</h2>
                    <p>
                        Tuvalu es una monarquía constitucional parlamentaria, 
                        con el rey Carlos III como jefe de Estado, representado localmente 
                        por un Gobernador General. El poder ejecutivo reside en el Primer 
                        Ministro y su gabinete, mientras que el poder legislativo está en 
                        el Parlamento unicameral.
                    </p>
                    <p>
                        La economía se basa principalmente en la pesca, remesas de ciudadanos 
                        en el extranjero y el arrendamiento de su dominio de internet <b>.tv</b>. 
                        También obtiene ingresos por la venta de sellos y monedas conmemorativas, 
                        además del turismo que, aunque limitado, es una fuente importante.
                    </p>
                </div>
                <div className="gov-image">
                    <img 
                        src="/images/moneda.JPG" 
                        alt="Gobierno y economía de Tuvalu" 
                    />
                </div>
            </div>
        </section>
    );
}
