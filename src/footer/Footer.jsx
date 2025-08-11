import "@/footer/Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer_content">
                <div className="row_1">
                    <h2>Equipo 4</h2>
                    <ul className="team_list">
                        <li>Nombre 1</li>
                        <li>Lis Sharik Agudelo Tobón</li>
                        <li>Nombre 3</li>
                        <li>Nombre 4</li>
                        <li>Nombre 5</li>
                    </ul>

                </div>
                <div className="row_2">
                    <h3>Referencias</h3>
                    <ul>
                        <li>
                            MATA, E. M. (2024). Seguridad internacional y cambio climático: retos y desafíos para el archipiélago de Tuvalu (Doctoral dissertation, UNIVERSIDAD NACIONAL AUTÓNOMA DE MÉXICO).
                        </li>
                        <li>
                            EcuRed (2022) Mapa o ubicación de Tuvalu. Demografía, 
                            <a href="https://www.ecured.cu/Tuvalu" target="_blank" rel="noopener noreferrer">
                                ecured.cu/Tuvalu
                            </a>
                        </li>
                        <li>
                            <a href="https://en.wikipedia.org/wiki/Climate_change_in_Tuvalu" target="_blank" rel="noopener noreferrer">
                                Wikipedia - Climate change in Tuvalu
                            </a>
                        </li>
                        <li>
                            <a href="https://www.worldbank.org/en/news/press-release/2022/04/21/tuvalu-s-harbors-set-for-major-upgrade" target="_blank" rel="noopener noreferrer">
                                World Bank - Tuvalu's Harbors Upgrade
                            </a>
                        </li>
                        <li>
                            <a href="https://www.undp.org/pacific/stories/latest-digital-tools-track-climate-hazards-rolled-out-across-tuvalu" target="_blank" rel="noopener noreferrer">
                                UNDP - Climate hazards in Tuvalu
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </footer>
    );
}
