import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import TourList from "./components/TourList/TourList";
import { useState } from "react";

function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);

  const handleThemeChange = (isLight: boolean) => {
    setIsThemeLight(isLight);
  };

  return (
    <>
      <Header isLight={isThemeLight} onThemeChange={handleThemeChange} />
      <TourList isLight={isThemeLight} />
      <Footer isLight={isThemeLight} />
    </>
  );
}

export default App;
