import './App.css';
import starIcon from "./assets/star-icon.svg";
import photo_one from "./assets/people_1.jpg";
import photo_two from "./assets/people_2.jpg";
import photo_three from "./assets/people_3.jpg";

function Testimonials(){
    return (
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
    )
}

export default Testimonials;