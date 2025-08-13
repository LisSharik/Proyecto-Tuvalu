import '@/banner/Banner.css';


export function Banner() {
    return (
        <div id='start' className="banner">
            <div className="banner_content">
                <div className="banner_text">
                    <img id='titulo' src="./images/TITULO.png" alt="Titulo tuvalu" />
                    <h2>EL PARAISO ESCONDIDO DEL PACIFICO</h2>
                    <p>Con apenas 26 Km2, Tuvalu es uno de los países más pequeños y menos visitados del mundo... pero su belleza es gigante! Playas virgenes, cultura viva y un mensaje urgente podria ser <strong>uno de los primeros en desaparecer por el cambio climático.</strong> </p>

                </div>
                <div className="banner_img">
                    <img id='person_2' src="./images/person-2.png" alt="imagen de una persona de tuvalu" />
                    <img id='person_1' src="./images/person-1.png" alt="imagen de una persona de tuvalu" />
                </div>
                
            </div>
            <div className="palmera_content">
                <img className='palmera palmera_1' src="./images/palmera.png" alt="img palmera" />
                <img className='palmera palmera_2' src="./images/palmera.png" alt="img palmera" />
                
            </div>
        </div>
    );
}