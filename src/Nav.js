import './App.css';
import { ReactComponent as Logo } from './assets/Logo.svg';
function Nav(){
    return(
        
    <nav className = 'topnav'>
        <Logo alt="Logo" className = 'logo'/>
        <a href="#hero-section">Home</a>
        <a href = "#about">About</a>
        <a>Menu</a>
        <a>Reservations</a>
        <a>Order Online</a>
        <a>Log in</a>
        
        
    </nav>
    )
}

export default  Nav;