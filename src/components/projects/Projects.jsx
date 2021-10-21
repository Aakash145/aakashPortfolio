import { projects } from './data'
import './projects.css'

export default function Projects(){
    return (
        <div className="projectTitle">
        <section>
        <h3 id="projTitle">Projects.</h3>
        <h2 id="projDetails">Here are all the projects I've worked on!</h2>
        </section>
        <main id="projectId">
            {projects.map((project) => (
                <div className="project">
                    <div>
                    <img id="containsImage" alt={project.title} src={project.image} />
                    </div>
                    <div id="projectDetails">
                    <h3>{project.title}</h3>
                    <a id="containsLinks" href={project.github}>{project.github}</a>
                    <p class="projDescription">Technology: {project.technology}</p>
                    <p class="projDescription">{project.description}</p>
                    </div>
                </div>
            ))}
        </main>
        </div>
    )
}