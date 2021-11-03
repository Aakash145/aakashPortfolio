import ProfilePic from '../../assets/images/profilePic.png'
import './about.css'

export default function About(){
    return (
        <div className="aboutSection">
        <section>
        <img src={ProfilePic} alt="Aakash Saini" />
        <p id="intro1">Hi, my name is</p>
        <h3>Aakash Saini.</h3>
        <h2>I love<small>/(I try) </small>building things for the web!</h2>
        <p id="intro2">I'm a software developer based in Vancouver, British Columbia. <br />
        If you would like to have a conversation about movies, games and life, Ping me!
        </p>
        </section>
        <main>
            <div className="about">
            <h3>About me</h3>
            <p id="details">Aakash (Sky) Saini loves programming, watching movies, traveling, and tea. He does not love talking about himself in the 3rd person but I don't know why he is doing that right now! 
            He loves learning new technologies like this portfolio is all made up of ReactJS and core HTML/CSS without the use of any other frameworks.</p>
            <small>Aakash thinks: </small><q>There's always something to learn, never be afraid just try it out</q>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <div className="socialMedia">
                <a href="https://github.com/Aakash145"><i class="fa fa-github fa-2x"><span>Github</span></i></a>
                <a href=""><i class="fa fa-facebook fa-2x"><span>Facebook</span></i></a>
                <a href=""><i class="fa fa-instagram fa-2x"><span>Instagram</span></i></a>
                <a href="https://www.linkedin.com/in/aakash-saini-186613177/"><i class="fa fa-linkedin fa-2x"><span>LinkedIn</span></i></a>
                <a href="mailTo:aakashsaini769@gmail.com"><i class="fa fa-envelope-square fa-2x"><span>Email</span></i></a>
                </div>
            </div>
        </main>
        </div>
        )
}