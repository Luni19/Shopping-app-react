import "./footer.css"
import fb from "../../images/socials/fb.svg"
import inst from "../../images/socials/inst.svg"
import twitter from "../../images/socials/tw.svg"
import linkin from "../../images/socials/in.svg"


function Footer () {
    return (
        <footer>
            <div className="conteiner">
         <div className="footer-wrapper">
         <div className="fasion-discription-wrapper">
         <h3 className="fasion-text">FASHION</h3>
         <p className="fasion-second-text">Complete your style with awesome clothes from us.</p>
         <ul className="socials-list">
            <li><a href=""><img src={fb} alt="" /></a></li>
            <li><a href=""><img src={inst} alt="" /></a></li>
            <li><a href=""><img src={twitter} alt="" /></a></li>
            <li><a href=""><img src={linkin} alt="" /></a></li>
         </ul>
         </div>
         <div className="lists-wrapper">
            <ul className="contacts-list">
                <li className="footer-list-item">Company</li>
                <li className="footer-list-item">About</li>
                <li className="footer-list-item">Contact us</li>
                <li className="footer-list-item">Support</li>
                <li className="footer-list-item">Careers</li>
            </ul>
            <ul className="faq-list">
                <li className="footer-list-item">Quick Link</li>
                <li className="footer-list-item">Share Location</li>
                <li className="footer-list-item">Orders Tracking</li>
                <li className="footer-list-item">Size Guide</li>
                <li className="footer-list-item">FAQs</li>
            </ul>
            <ul className="privacy-list">
                <li className="footer-list-item">Legal</li>
                <li className="footer-list-item">Terms & conditions</li>
                <li className="footer-list-item">Privacy Policy</li>
            </ul>
         </div>
         </div>
         </div>
        </footer>
    )
}






export default Footer