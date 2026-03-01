import React from "react";

const projects = [
    {
        name: "MeowgAw",
        url: "https://meowgaw.vercel.app/"
    },
    {
        name: "Chiron",
        url: "https://chiron-central.vercel.app/"
    },
    {
        name: "UPV Pamplona",
        url: "https://github.com/madpurson/UPV-Pamplona"
    },
    {
        name: "eHalalan",
        url: "https://github.com/eHalalan/ehalalan"
    },
    {
        name: "DiceDiceDice",
        url: "https://github.com/madpurson/DiceDiceDice"
    },
    {
        name: "Katipunan",
        url: ""
    }
];

export function ProjectsPageBody() {
    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="object-top-left primary-color">
                        Projects.
                    </h1>
                </div>
                <div className="grid grid-cols-3">
                    {projects.map((project) => (
                    <a href={project.url}>
                        <div className="w-9/10">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>{project.name}.</span>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
            
        </>
    )
}