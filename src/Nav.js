import './App.css';
import { ReactComponent as Logo } from './assets/Logo.svg';
import {Link} from 'react-router-dom';
function Nav(){
    return(
    <nav className = 'topnav'>
        <Logo alt="Logo" className = 'logo'/>
        <Link to="/">Home</Link>
        <Link to="/#about">About</Link>
        <a>Menu</a>
        <Link to='/booking'>Reservations</Link>
        <a>Order Online</a>
        <a>Log in</a>
    </nav>
    )
}

export default  Nav;