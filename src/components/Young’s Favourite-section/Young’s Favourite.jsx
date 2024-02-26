import "./Young’s Favourite.css"
import Card from "../Card/card"
import img1 from "../../images/images/promo-01.jpg"
import img2 from "../../images/images/promo-02.jpg"


function yangs () {
    return (
        <section>
            <div className="conteiner">
            <div className="tittle-2">
            Young’s Favourite
            </div>
            <div className="content-conteiner">
            <Card tittle ="Trending on instagram" img ={img1}/>
            <Card tittle ="All Under $40" img ={img2}/>
            </div>
            </div>
        </section>
    )
}


export default yangs