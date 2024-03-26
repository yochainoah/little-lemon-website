import './App.css';
import  greekSalad from "./assets/greek salad.jpg"
import  bruschetta from "./assets/bruchetta.svg"
import  lemonDessert from "./assets/lemon dessert.jpg"
import scootericon from "./assets/scooter_bike_svg.svg";
function Highlights(){
    return (
        <section id = 'highlights'>
            <article className = "header-btn">
                <h3>This weeks specials!</h3>
                <button>Online Menu</button>
            </article>
            <div className="specials">
                <article id = "dish-card">
                    <img src={greekSalad} alt="a greek salad upclose"/>
                    <div id="name-and-price"><h4>Greek Salad</h4><p>$12.99</p></div>
                    <p>"Lorem ipsum dolor sit amet,<br/> consectetur 
                        adipiscing elit, sed do eiusmod <br/>tempor 
                         incididunt ut labore<br/> et dolore magna</p>
                    <div id="order-icon-container"><h4>Order a delivery</h4><img src={scootericon} id = "scooter-icon" alt="scooter icon"/></div>
                </article>
                <article id = "dish-card">
                    <img src={bruschetta} alt="a bruchetta upclose"/>
                    <div id="name-and-price"><h4>Bruschetta</h4><p>$5.00</p></div>
                    <p>"Lorem ipsum dolor sit amet,<br/> consectetur 
                        adipiscing elit, sed do eiusmod <br/>tempor 
                         incididunt ut labore<br/> et dolore magna</p>
                    <div id="order-icon-container"><h4>Order a delivery</h4><img src={scootericon} id = "scooter-icon" alt="scooter icon"/></div>
                </article>
                <article id = "dish-card">
                <img src={lemonDessert} alt="a lemon cake upclose"/>
                    <div id="name-and-price"><h4>Lemon dessert</h4><p>$6.99</p></div>
                    <p>"Lorem ipsum dolor sit amet,<br/> consectetur 
                        adipiscing elit, sed do eiusmod <br/>tempor 
                         incididunt ut labore<br/> et dolore magna</p>
                    <div id="order-icon-container"><h4>Order a delivery</h4><img src={scootericon} id = "scooter-icon" alt="scooter icon"/></div>
                </article>
            </div>
        </section>
    )

}
export default Highlights;
