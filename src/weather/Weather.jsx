import "@/weather/Weather.css";

export function Weather() {
  return (
    <section id="weather" className="weather">
      <div className="weather_content">
        <div className="weather_content_card card_1">
          <h2>Problemas Climáticos</h2>
          <p>
            El aumento del nivel del mar provoca inundaciones y erosión costera,
            mientras que la salinización del agua y el suelo afecta la agricultura
            y la pesca. Esto conlleva migración forzada y pérdida cultural.
          </p>
        </div>
        <div className="weather_content_card card_2">
          <h2>Infraestructura</h2>
          <p>
            El Tuvalu Coastal Adaptation Project (TCAP) impulsa la mejora de puertos,
            carreteras y sistemas de agua potable y saneamiento, promoviendo energías
            renovables y planificación con tecnología GIS.
          </p>
        </div>
      </div>
    </section>
  );
}
