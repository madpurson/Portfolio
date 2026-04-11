import React, { useEffect } from "react";
import { projects } from "../assets/data/projects";

export function ProjectsPageBody() {
    const [isHovered, setIsHovered] = React.useState(false);

    const addHoveredState = (component) => {
        const folder = component.classList.add("hovered-folder");
        const children = folder.children;
        children.forEach((child) => {
            child.classList.remove("unhovered-folder");
        })
        
    }
    const handleHover = (e) => {
        const folder = e.currentTarget;
        const tab = folder.querySelector(".folder");
    }

    useEffect(() => {
        if (!isHovered) {
            const folders = document.querySelectorAll(".folder");
            folders[folders.length - 1].classList.add("hovered-folder");
        }
        const folders = document.querySelectorAll(".folder");
    }, [isHovered]);

    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="primary-h1 primary-color">
                        Projects.
                    </h1>
                </div>
                <div className="shelf">
                    {projects.map((project) => (
                        <div className="container" key={project.id}>
                            
                                <div className="folder">
                                    {/* <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" /> */}
                                    
                                    <span className="project-content folder-tab primary-cta primary-color">
                                        <p>{project.title}</p>
                                    </span>
                                    <span className="folder-body">
                                        <p className="secondary-color secondary-sm unhovered-children">{project.description}</p>
                                        <p className="secondary-color secondary-sm unhovered-children">{project.techStack.join(", ")}</p>
                                    </span>
                                        
                                 
                                   
                                </div>
                           
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}