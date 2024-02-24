import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands-section/brands-section"
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Card from "./components/Card/card";




function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Brands />
     <NewArrivals />
     <Card />
    </div>
  )
}

export default App;
