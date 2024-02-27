import "./hero-section.css"
import heroImage from "../../images/images/header-img.jpg"

function hero (){
    return (
    <section className='hero-section'> 
        <div className='conteiner'>
            <div className="hero-content">
                <div className="hero-text">
                    <h2 className="hero-tittle"><span className="word-lets"><span>LET’S</span></span> EXPLORE <span className="word-unique"><span>UNIQUE</span></span>CLOTHES.</h2>
                  <p className="hero-description">
                  Live for Influential and Innovative fashion!
                  </p>
                  <div className="btn-wrapper">
                  <button type="button" className="hero-btn">Shop Now</button>
                  </div>
                  </div>
                    <div className="hero-img">
                        <img src={heroImage} alt="heroImage" />  
                    </div>
                

            </div>

        </div>
    
    </section>)
}


export default hero