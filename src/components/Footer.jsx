import fb from '../images/Socials/facebook.svg';
import inst from '../images/Socials/instagram.svg';
import yt from '../images/Socials/youtube.svg';
import li from '../images/Socials/linkedin.svg';
import tw from '../images/Socials/twitter.svg';
import './componentsStyle/Footer.css';


export default function Footer() {

  return (
    <footer>
      <div className="second-menu wrapper">
        <nav className='footer-menu'>
          <a href="">Products</a>
          <a href="">Returns</a>
          <a href="">FAQ</a>
          <a href="">Shipping</a>
          <a href="">About us</a>
          <a href="">Contact us</a>
        </nav>
        <nav className='footer-social'>
          <a href=""><img src={yt} alt="youtube" /></a>
          <a href=""><img src={fb} alt="facebook" /></a>
          <a href=""><img src={tw} alt="twitter" /></a>
          <a href=""><img src={inst} alt="instagram" /></a>
          <a href=""><img src={li} alt="linkedin" /></a>
        </nav>
      </div>
      <div className='green-bg footer-banner'>
        <div className="wrapper">
          Copyright Green thumb. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}