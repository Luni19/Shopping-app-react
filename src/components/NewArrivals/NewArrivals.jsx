import "./NewArrivals.css"
import Card from "../Card/card"

import Img1 from "../../images/categories/cat-01.jpg"
import Img2 from "../../images/categories/cat-02.jpg"
import Img3 from "../../images/categories/cat-03.jpg"


function NewArrivals () {
    return(<section className="arrivals" >
        <div className="conteiner">
            <div className="arrivals-header">
                <div className="arrivals-cards">
                    <h2 className="tittle-2">New Arrivals</h2>
                      <div className="cards-list">
                      <Card tittle ="Hoodies & Sweetshirt" img = {Img1}/>
                      <Card tittle ="Coats & Parkas"  img = {Img2}/>
                      <Card tittle ="Tees & T-Shirt"  img = {Img3}/>
                    </div>
                </div>
            </div>
        </div>

    </section>)
}



export default NewArrivals