import './App.css';
import { ReactComponent as CubeLogo } from './assets/littlelemonlogo1.svg';
function Footer(){
    return (
    <footer className = 'footer-navigation'>
        <CubeLogo className = 'cube-logo' alt = 'cube logo'/>
        <article className = 'doormat-navigation'>
            <h1>Doormat Navigation</h1>
            <a href="#hero-section">Home</a>
            <a href = "about">About</a>
            <a>Menu</a>
            <a>Reservations</a>
            <a>Order Online</a>
            <a>Log in</a>
        </article>
        <article className='contact-info'>
            <h1>Contact info</h1>
            <p>Address</p>
            <p>phone number</p>
            <p>email</p>
        </article>
        <article className='socialmedia-links'>   
            <h1>Social media links</h1>
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Google Maps</a>
        </article>
    </footer>
    )
}
export default Footer;