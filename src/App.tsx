import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import WhyTravel from "./components/WhyTravel/WhyTravel";
import SpecificTour from "./components/SpecificTour/SpecificTour";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/theme/theme-selector";

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
