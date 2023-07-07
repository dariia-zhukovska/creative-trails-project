import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import WhyTravel from "./pages/WhyTravel/WhyTravel";
import SpecificTour from "./pages/SpecificTour/SpecificTour";

import { selectTheme } from "./store/theme/theme-slices";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <div className={theme !== "isLight" ? "App" : "AppDark"}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/tours" element={<MainPage />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/whytravel" element={<WhyTravel />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route index path="/tours/:id" element={<SpecificTour />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
