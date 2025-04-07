import './componentsStyle/Header.css';
import Logo from '../images/Logo.svg';
import Search from '../images/Search.svg';
import Cart from '../images/Cart.svg';
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <div className='header-bg'>
            <div className='wrapper header'>
                <Link to='/' ><img src={Logo} alt="Logo" /></Link>
                <nav className='header-links'>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/products' end>Products</NavLink>
                    <NavLink to='/about' end>About us</NavLink>
                    <NavLink to='/contant' end>Contacts</NavLink>
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


