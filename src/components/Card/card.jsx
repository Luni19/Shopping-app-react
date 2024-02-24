import './test.css'; 
import img1 from "../../images/categories/cat-01.jpg"
import arrowSvg from "../../images/icons/arrow.svg"

function card () {
    return(
        <div className="card">
           
            <img src={img1} alt=""></img>
        
        <div className="card-description">
        Hoodies & Sweetshirt
            <div className="second-text">
            Explore Now!
            </div>


        </div>
        <div className="icon-right">
            <img className="card-img" src={arrowSvg} alt="arrow" />
        </div>
     </div>
    )
}

export default card