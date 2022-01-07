import ProfilePic from '../../assets/images/profilePic.png'
import './about.css'
import { 
    Link
   } from 'react-router-dom'
export default function About(){
    return (
        <div className="aboutSection">
        <section>
        <img src={ProfilePic} alt="Aakash Saini" />
        <p id="intro1">Hi, my name is</p>
        <h3>Aakash Saini.</h3>
        <h2>I love<small>/(I try) </small>building things for the web!</h2>
        <p id="intro2">I'm a Software Developer based in Vancouver, British Columbia. <br />
        If you would like to have a conversation about movies, games and life, <small><a href="mailTo:aakashsaini769@gmail.com">Ping me!</a></small>
        </p>
        </section>
        <main>
            <div className="about">
            <h3>About me</h3>
            <p id="details">I love spending time on finding and fixing little issues along with learning new technologies.
            I've worked as a Full Stack Developer in a major e-commerce platform in India majorly working on transitioning from vanilla JavaScript to React! I've also got the chance 
            to lead the design and implementation of Test Automation Infrastructure as Software Engineer Intern at a real estate company in Vancouver, BC.
            </p>
            <small><Link to="/projects">Check out the stuff I've been working on in the Projects Section!</Link></small>
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