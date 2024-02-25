import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands-section/brands-section"
import NewArrivals from "./components/NewArrivals/NewArrivals";
import Sales from "./components/sale-section/sales";



function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Brands />
     <NewArrivals />
     <Sales />
    </div>
  )
}

export default App;
