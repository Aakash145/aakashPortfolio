import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Work from '../work/Work'
import { useEffect, useState } from "react";
import $ from 'jquery';

import './NavBar.css'

import { 
    BrowserRouter,
    Link,
    Route,
    Switch
   } from 'react-router-dom'

export default function Navbar(){

    const [hamburger,setHamburger] = useState();
    const [navMenu,setNavMenu] = useState();

    useEffect(() => {
        setHamburger(document.querySelector(".hamburger"));
        setNavMenu(document.querySelector(".nav-menu"));
    })

    function mobileMenu() {
    if($("#crossButton").hasClass("fa-bars")){
        $("#crossButton").removeClass("fa-bars").addClass("fa-times");
    }else{
        $("#crossButton").removeClass("fa-times").addClass("fa-bars");
    }
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

    return (
        <BrowserRouter>
        <nav>
            <div id="nameLink" >
            <Link to="/" >Aakash Saini</Link>
            </div>
            <button className="hamburger" id="hamburger" onClick={mobileMenu}>
            <i id="crossButton" className="fa fa-bars"></i>        
            </button>
            <ul className="nav-menu">
            <li className="item">
            <Link to="/">About</Link>
            </li>
            <li className="item">
            <Link to="/projects">Projects</Link>
            </li>
            <li className="item">
            <Link to="/skills">Skills</Link>
            </li>
            <li className="item">
            <Link to="/work">Work</Link>
            </li>
        </ul>
        </nav>
        <Switch>
            <Route exact path="/"><About /></Route>
            <Route exact path="/projects"><Projects /></Route>
            <Route exact path="/skills"><Skills /></Route>
            <Route exact path="/work"><Work /></Route>
        </Switch>
        </BrowserRouter>
        
    )
}