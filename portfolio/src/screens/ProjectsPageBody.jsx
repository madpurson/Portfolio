import React from "react";
import projects from "../data/projects.json";

export function ProjectsPageBody() {
    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="primary-h1 primary-color">
                        Projects.
                    </h1>
                </div>
                <div className="grid grid-cols-3">
                    {projects.map((project) => (
                        <div className="container">
                            <a href={project.url}>
                                <div className="w-9/10">
                                    <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
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