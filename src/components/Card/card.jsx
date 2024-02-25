import './test.css'; 
import arrowSvg from "../../images/icons/arrow.svg"

function card (props) {
    return(
        <div className="card">
           
            <img src={props.img} alt=""></img>
        <div className="text-with-arrow">
        <div className="card-description">
        {props.tittle}
            <div className="second-text">
            Explore Now!
            </div>
        </div>
        <div className="icon-right">
            <img className="card-img" src={arrowSvg} alt="arrow" />
        </div>
        </div>
     </div>
    )
}

export default card