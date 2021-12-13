import { workExp } from './data'
import React, { useState, useEffect } from 'react';
import './work.css'

export default function Work(){

    const [works, setWork] = useState([])

    useEffect(() => {
        let arr = workExp.filter((work) => {
            return work.type == "technical"
        })
        setWork(arr)
    }, []);

    function onTechnicalClick(){
        let arr = workExp.filter((work) => {
            return work.type == "technical"
        })
        setWork(arr)
    }
    function onNonTechnicalClick(){
        let arr = workExp.filter((work) => {
            return work.type == "non-technical"
        })
        setWork(arr)
    }
    
    return (
        <div className="workExp">
        <section>
        <h3 id="expTitle">Work Experience.</h3>
        <h2 id="expDetails">Here is the experience I've gained by working at different organisations!</h2>
        </section>
        <main id="workType">
        <div id="buttonTech">
        <button id="button1" className="typeOfWork" onClick={onTechnicalClick}>Technical</button>
        <button id="button2" className="typeOfWork" onClick={onNonTechnicalClick}>Non-Technical</button>
        </div>
        {works.map((work) => (
            <div className="displayExp">
                    <div>
                    <img id="containsImage" alt={work.type} src={work.image} />
                    </div>
                    <div id="workDiv">
                    <h3>{work.company}</h3>
                    <p id="workRole">{work.role}</p>
                    <p class="workRes">Responsibilities: 
                    <ul>
                    {work.responsibilites.split(".").map((exp) => (
                        <li>{exp}</li>
                        ))}
                        </ul>
                        </p>
                    </div>
                </div>
        ))}
        </main>
        </div>
    )
}