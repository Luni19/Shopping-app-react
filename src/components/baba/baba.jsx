import imgBaba from "../../images/images/promo-img.jpg"
import "./baba.css"



function Baba () {
    return (
        <section>
            <div className="conteiner">
                <div className="conteiner-baba-wrapper">
                    <div className="imgdiv">
                        <img className="baba" src={imgBaba} alt="" />
                    </div>
                    <div className="divtext">
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                </div>
            </div>
 
        </section>
    )
}


export default Baba