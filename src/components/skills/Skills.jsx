import './skills.css'
import { skillSet } from './data'

export default function Skills(){
    function splitAndReturn(arr){
        return ( arr.map((skill) => (   
            <div id="eachSkill">
                <p>{skill}</p>
            </div>
        )
        ))
    }
    return (
        <div className="skillSet">
        <section>
        <h3 id="skillTitle">Skills.</h3>
        <h2 id="skillDetails">Here are my techincal and non-technical skills!</h2>
        </section>
        <main id="skillId">
        {skillSet.map((skill) => (
            <div className="web">
            <h3>{skill.title}</h3>
            {splitAndReturn(skill.tech.split(','))}
            </div>
        ))}
        </main>
        </div>
    )
}