import WaveTwo from "./wave-2"

const ProjectSection = function(){
    return(
        <div className="projects-container">
        <h1>Projects</h1>
        <p className="subheading">Checkout some of my past projects!</p>
        <section className="projects-collection">
            <div id="project-1" className="project-card">
                <a href="https://github.com/AndyLaBorde/Pawsome" target="_blank"><p>Pawsome</p></a>
            </div>
            <div id="project-2" className="project-card">
                <a href="https://github.com/https://github.com/Slimshady079/National-Parks-Search" target="_blank"><p>National Parks Search</p></a>
            </div>
            <div id="project-3" className="project-card">
                <a href="https://github.com/JacksonGrimm/Text-Editor-PWA" target="_blank"><p>Text Editor PWA</p></a>
            </div>
            <div id="project-4" className="project-card">
            <a href="https://github.com/JacksonGrimm/javascript-quiz-app" target="_blank" ><p>JavaScript Quiz</p></a>
            </div>
            <div id="project-5" className="project-card">
            <a href="https://github.com/JacksonGrimm/Weather_App" target="_blank"
                ><p>Weather_App</p>
                </a>
            </div>
            <div id="project-6" className="project-card">
            <a href="github.com" target="_blank">
                <p>Social Media backend</p>
            </a>
            </div>
        </section>
        < WaveTwo />
        </div>
    )
}

export default ProjectSection