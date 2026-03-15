import React from "react";
import { projects } from "../assets/data/projects";


// TODO: Rework design to be a folder of project cards that can be clicked to open a detailed page about the project (with more images, write-up, etc.) instead of a grid of project summaries. This allows for a cleaner design and more in-depth presentation of each project without overwhelming the user with information on the main projects page.
export function ProjectsPageBody() {
    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="primary-h1 primary-color">
                        Projects.
                    </h1>
                </div>
                <div className="grid grid-cols-2 board">
                    {projects.map((project) => (
                        <div className="container project-container" key={project.id}>
                            <a href={project.url}>
                                <div className="w-9/10">
                                    {/* <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" /> */}
                                    <ul className="project-body grid grid-cols-2 ">
                                        <li className="project-content paper pale-color title-paper primary-cta">{project.title}</li>
                                        <li className="project-content paper secondary-sm secondary-color write-up paper-bg">{project.description}</li>
                                        <li className="project-content paper secondary-sm secondary-color write-up paper-bg">{project.responsibilities?.join(', ')}</li>
                                        <li className="project-content paper secondary-sm secondary-color note-pad note-pad-bg">{project.techStack?.join(', ')}</li>
                                        <li className="project-content paper secondary-sm secondary-color note-pad note-pad-bg">{project.tagline}</li>
                                        <li className="project-content paper secondary-sm secondary-color">{project.problem}</li>
                                        <li className="project-content paper secondary-sm secondary-color">{project.solution}</li>
                                    </ul>
                                    <span className="primary-color secondary-cta">{project.name}.</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}