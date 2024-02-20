import './header.css';
import logo from '../../images/icons/logo.svg'

function Header () {
    return(
        <header className='header'>
            <div className="conteiner">
                
                <div className="header-row">

                    <div className="logo"><img src={logo}></img><span>Fashion</span></div>
                
            
            <nav className='navigation'>
                <ul className='navigation-list'>
                    <li><a href='#!'>CATALOGUE</a></li>
                    <li ><a href='#!'>FASHION</a></li>
                    <li ><a href='#!'>FAVOURITE</a></li>
                    <li ><a href='#!'>LIFESTYLE</a></li>
                    <li ><a href='#!'className='sing-up-btn'>SING UP</a></li>
                </ul>
            </nav>
            
            </div>

            </div>

        </header>
    )
    
}

export default Header;