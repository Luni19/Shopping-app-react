import "./promo.css"



function Promo () {
    return(
        <section className="promo-section">
            <div className="conteiner">
                <div className="content-wrapper">
              <h2 className="main-promo-text">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
               <p className="second-promo-text">Type your email down below and be young wild generation</p>
               <div className="input-wrapper">
               <input className="email-input" type="text" placeholder="Add your email here"/>
               <button className="promo-button" type="button">SEND</button>
                </div>
               </div>
               
                
            </div>

        </section>
    )
}


export default Promo 