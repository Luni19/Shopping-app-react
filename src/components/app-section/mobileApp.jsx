import "./mobileApp.css"
import imgApp from "../../images/images/vouchers-img.png"
import imgApple from "../../images/icons/app-store.png"
import imgAndroid from "../../images/icons/google-play.png"

function MobileApp () {
    return(
        <section className="appm">
            <div className="conteiner">
              <div className="mobile-app-wrapper">
                <div className="text-conteiner-wrapper">
                    <h2 className="Voucher-text">DOWNLOAD APP & GET THE VOUCHER!</h2>
                    <p className="discount-text">Get 30% off for first transaction using Rondovision mobile app for now.</p>
                    <div className="wrapper">
                       <img src={imgApple} alt="Apple-store" />
                       <img src={imgAndroid} alt="Google-play" />
                    </div>

                </div>
                <img src={imgApp} alt="" />
                
              </div>
         </div>
        </section>
    )
    
}


export default MobileApp