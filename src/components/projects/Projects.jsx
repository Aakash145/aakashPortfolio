import { projects } from './data'
import { useState, useEffect } from 'react'
import './projects.css'

export default function Projects(){

    const [tech, setTech] = useState([]);
    const [proj, setProj] = useState([])
    const allTechnologies = new Array();
    
    useEffect(() => {
        setProj(projects);
        projects.forEach((project) => {
            const technologies = project.technology;
            const techArray = technologies.split(",")
            techArray.forEach((newTech) => {
                const trimTech = newTech.trim();
                if(!allTechnologies.includes(trimTech)){
                    allTechnologies.push(trimTech)
                }
            })
        })
        setTech(allTechnologies)
    }, [])

    

    function onFilterClick(technology){
        if(technology == "All"){
            setProj(projects)
        }else{
                let arr = projects.filter((project) => {
                let technologies = project.technology;
                let techArray = technologies.split(",")
                const trimArray = techArray.map(element => {
                    return element.trim();
                  });
                return (trimArray.includes(technology))
            })
            setProj(arr)
        }
    }

    return (
        <div className="projectTitle">
        <section>
        <h3 id="projTitle">Projects.</h3>
        <h2 id="projDetails">Here are all the projects I've worked on!</h2>
        </section>
        <main id="projectId">
        <p id="projTags" >Technologies:  
        <button value="All" className="typeOfTech" onClick={() => {onFilterClick("All")}}>All</button>
            {tech.map((eachTech) => (
                <button value={eachTech} className="typeOfTech" onClick={() => {onFilterClick(eachTech)}}>{eachTech}</button>
            ))}
        </p>
            {proj.map((project) => (
                <div className="project">
                    <div>
                    <img id="containsImage" alt={project.title} src={project.image} />
                    </div>
                    <div id="projectDetails">
                    <h3>{project.title}</h3>
                    <p class="projDescription"><a id="containsLinks" href={project.github}>{project.github}</a></p>
                    <p class="projDescription">Technology: {project.technology}</p>
                    <p class="projDescription">Description: {project.description}</p>
                    </div>
                </div>
            ))}
        </main>
        </div>
    )
}