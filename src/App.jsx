import "./App.css";
import { Menu } from "@/menu/Menu.jsx";
import { Banner } from "@/banner/Banner.jsx";
import { Location } from "@/location/Location.jsx";
import { Flag } from "@/flag/Flag.jsx";
import { Nature } from "@/nature/Nature.jsx";
import { Weather } from "@/weather/Weather.jsx"; 
import { Culture } from "@/culture/Culture.jsx";
import { Government } from "@/government/Government.jsx";
import { Footer } from "./footer/Footer";


function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Location />
      <Flag />
      <Nature />
      <Weather />
      <Culture /> 
      <Government /> 
      <Footer />
    </>
  );
}

export default App;
