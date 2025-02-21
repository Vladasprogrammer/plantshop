import './Header.css';
import Logo from '../images/Logo.svg';
import Search from '../images/Search.svg';
import Cart from '../images/Cart.svg';



export default function Header() {
    return (
        <div className='green-bg'>
            <div className='wrapper header'>
                <a href="#"><img src={Logo} alt="Logo" /></a>
                <nav className='header-links'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About us</a>
                    <a href="#">Contacts</a>
                </nav>
                <div className='header-right'>
                    <div className='header-search'>
                        Search <img src={Search} alt="search icon" />
                    </div>
                    <div className='header-cart'>
                        <a href="#"><img src={Cart} alt="cart icon" />3</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


