import "./hero-section.css"
import heroImage from "../../images/images/header-img.jpg"

function hero (){
    return (
    <section className='hero-section'> 
        <div className='conteiner'>
            <div className="hero-content">
                <div className="hero-text">
                    <div className="hero-tittle"> LET’S EXPLORE UNIQUE CLOTHES.</div>
               
                <div className="hero-description">
                Live for Influential and Innovative fashion!
                </div>
                <div className="hero-btn"></div>
                    <div className="hero-img">
                        <img src={heroImage} alt="heroImage" />
                        
                    </div>
                </div>

            </div>

        </div>
    
    </section>)
}


export default hero