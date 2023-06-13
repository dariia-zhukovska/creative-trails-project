import { useState } from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import toursData from "./data/tours.json";

function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);

  const handleThemeChange = (isLight: boolean) => {
    setIsThemeLight(isLight);
  };

  const data = toursData.tours;
  return (
    <>
      <Header isLight={isThemeLight} onThemeChange={handleThemeChange} />
      <MainPage isLight={isThemeLight} data={data} />
      <Footer isLight={isThemeLight} />
    </>
  );
}

export default App;
