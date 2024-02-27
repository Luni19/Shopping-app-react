import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands-section/brands-section"
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Yangs from "./components/Young’s Favourite-section/Young’s Favourite";
import MobileApp from "./components/app-section/mobileApp";
import Promo from "./components/promo-input/promo";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Brands />
     <NewArrivals />
     <Yangs />
     <MobileApp />
     <Promo />
     <Footer />
    </div>
  )
}

export default App;
