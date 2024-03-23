import './App.css';
import restaurantfood from "./assets/restaurantfood.jpg";
import  greekSalad from "./assets/greek salad.jpg"
import  bruschetta from "./assets/bruchetta.svg"
import  lemonDessert from "./assets/lemon dessert.jpg"
import scootericon from "./assets/scooter_bike_svg.svg";
import starIcon from "./assets/star-icon.svg";
import photo_one from "./assets/people_1.jpg";
import photo_two from "./assets/people_2.jpg";
import photo_three from "./assets/people_3.jpg";
import mario_adrian_b from "./assets/Mario and Adrian b.jpg";
import mario_adrian_a from "./assets/Mario and Adrian A.jpg";
function Main(){
    return (<main>
        <section id = 'hero-section'>
            <article className="name-description-1">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur exercitat<br />
                adipiscing elit,sed do eiusmod tempor incididunt ut <br />
                labore et dolore magnaaliqua. Ut enim ad minim veniam,<br /> 
                quis nostrud "</p>
                <button>Reserve a Table</button>
            </article>
            <img src={restaurantfood} className='hero-section-img' alt="dish being served"/>
            
        </section>
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
        <section id = "testimonials">
            <h3>Testimonials</h3>
            <div className='testimonials-container'>
                <article id="testimony-box">
                    <div id = "rating-container">
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                    </div>
                    <div id="profile-container">
                        <img src={photo_one} id="person" alt='person'/>
                        <p>Joseph Gonzalez</p>
                    </div>
                    <p id="testimony-text">
                        The food was tasty 
                        and staff <br/>always attentive and caring!!
                    </p>
                </article>
                <article id="testimony-box">
                <div id = "rating-container">
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                    </div>
                    <div id="profile-container">
                        <img src={photo_two} id="person" alt='person'/>
                        <p>Ian dooley</p>
                    </div>
                    <p id="testimony-text">
                    There was a great atmosphere
                    in the place.It was greatest
                    Greek salad I ever tasted!!
                    </p>
                </article>
                <article id="testimony-box">
                <div id = "rating-container">
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                        <img src={starIcon} alt='rating star icon' id = 'star'/>
                    </div>
                    <div id="profile-container">
                        <img src={photo_three} id="person" alt='person'/>
                        <p>Prince Akachi</p>
                    </div>
                    <p id="testimony-text">
                        The food was fresh and on time
                        . There was air conditioning and
                        everything was clean. 
                    </p>
                </article>
            </div>
        </section>
        <section id = 'about'>
            <article className='name-description-2'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent quis erat euismod, commodo dui a, tincidunt 
                    dolor. Quisque mauris lacus, mollis vel pellentesque ac, 
                    dictum eu nisl.Vivamus mattis odio a interdum.
                    Suspendisse eu sodales lacus. Aliquam
                </p>
                <img src={mario_adrian_b} id= "mario-adrian-b"  alt="mario and adrian"/>
                <img src={mario_adrian_a} id= "mario-adrian-a"  alt="mario and adrian"/>
            </article>
                
        </section>
    </main>)
}
export default Main;