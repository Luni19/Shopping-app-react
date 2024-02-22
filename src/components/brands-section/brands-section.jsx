import "./brands.css"
import hm from "../../images/brands/HM.png"
import ob from "../../images/brands/Obey.png"
import shopify from "../../images/brands/Shopify.png"
import lacoste from "../../images/brands/Lacoste.png"
import levis from "../../images/brands/Levis.png"
import amazon from "../../images/brands/Amazon.png"



function Brands () {
    return(
        <section className="brands">
            <div className="conteiner">
         <ul className="brands-list">
            <li><a href="#"></a><img src={hm} alt="hm" /></li>
            <li><a href="#"></a><img src={ob} alt="ob" /></li>
            <li><a href="#"></a><img src={shopify} alt="shopify" /></li>
            <li><a href="#"></a><img src={lacoste} alt="lacoste" /></li>
            <li><a href="#"></a><img src={levis} alt="levis" /></li>
            <li><a href="#"></a><img src={amazon} alt="amazon" /></li>
         </ul>
         </div>
        </section>
    
    )
}


export default Brands