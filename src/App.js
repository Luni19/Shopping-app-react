import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Brands from "./components/brands-section/brands-section"
import NewArrivals from "./components/NewArrivals/NewArrivals";




function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Brands />
     <NewArrivals />
    </div>
  )
}

export default App;
