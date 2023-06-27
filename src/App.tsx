import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import "./App.css";
import toursData from "./data/tours.json";


function App() {


  const data = toursData.tours;
  return (
    <>
      <Header />
      <MainPage data={data} />
      <Footer />
    </>
  );
}

export default App;
