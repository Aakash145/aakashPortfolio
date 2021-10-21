import About from '../about/About'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Work from '../work/Work'

import './NavBar.css'

import { 
    BrowserRouter,
    Link,
    Route,
    Switch
   } from 'react-router-dom'

export default function Navbar(){
    return (
        <BrowserRouter>
        <nav>
            <div id="nameLink" >
            <Link to="/" >Aakash Saini</Link>
            </div>
            <ul>
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