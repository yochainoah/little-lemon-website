import mario_adrian_b from "./assets/Mario and Adrian b.jpg";
import mario_adrian_a from "./assets/Mario and Adrian A.jpg";
function About(){
    return (
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
    )
}

export default About;