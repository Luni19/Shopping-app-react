import "./sales.css"
import img1 from "../../images/images/promo-img.jpg"

function sales () {
    return(
        <section className="sales-section">
            <div className="conteiner">
                <div className="conteiner-wrapper">
                <div className="img-conteiner">
                    <img src={img1} alt="" />
                </div>
                <div className="text-conteine">
                    <h2>PAYDAY SALE NOW</h2>
                    <p>Spend minimal $100 get 30% off voucher code for your next purchase</p>
                    <p><strong className="bold-text">1 June - 10 June 2021 </strong> *Terms & Conditions apply </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default sales