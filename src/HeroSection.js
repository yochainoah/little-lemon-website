import './App.css';
import restaurantfood from "./assets/restaurantfood.jpg";
import {useNavigate} from 'react-router-dom';


function HeroSection(){

    const navigate = useNavigate();
    function handleClick(){
        navigate('/booking');
    }
    return (
        <section id = 'hero-section'>
            <article className="name-description-1">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur exercitat<br />
                adipiscing elit,sed do eiusmod tempor incididunt ut <br />
                labore et dolore magnaaliqua. Ut enim ad minim veniam,<br /> 
                quis nostrud "</p>
            <button onClick={handleClick}>Reserve a Table</button>
            </article>
            <img src={restaurantfood} className='hero-section-img' alt="dish being served"/>        
        </section>
    )

}

export default HeroSection;