import { useState } from "react";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import WhyTravel from "./components/WhyTravel/WhyTravel";
import SpecificTour from "./components/SpecificTour/SpecificTour";

function App() {
  const [isThemeLight, setIsThemeLight] = useState(true);
  const handleThemeChange = (isLight: boolean) => {
    setIsThemeLight(isLight);
  };

  return (
    <div className={isThemeLight ? "App" : "AppDark"}>
      <Header isLight={isThemeLight} onThemeChange={handleThemeChange} />
      <Routes>
        <Route path="/" element={<MainPage isLight={isThemeLight} />}>
          <Route path="/tours" element={<MainPage isLight={isThemeLight} />} />
        </Route>
        <Route path="/about" element={<About isLight={isThemeLight} />} />
        <Route
          path="/whytravel"
          element={<WhyTravel isLight={isThemeLight} />}
        />
        <Route path="/contacts" element={<Contacts isLight={isThemeLight} />} />
        <Route
          index
          path="/tours/:id"
          element={<SpecificTour isLight={isThemeLight} />}
        />
      </Routes>
      <Footer isLight={isThemeLight} />
    </div>
  );
}

export default App;
