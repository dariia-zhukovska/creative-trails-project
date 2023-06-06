import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import MainPage from "./components/MainPage/MainPage";

function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);

  const handleThemeChange = (isLight: boolean) => {
    setIsThemeLight(isLight);
  };

  return (
    <>
      <Header isLight={isThemeLight} onThemeChange={handleThemeChange} />
      <MainPage isLight={isThemeLight} />
      <Footer isLight={isThemeLight} />
    </>
  );
}

export default App;
