import React, { useEffect } from "react";
import { projects } from "../assets/data/projects";
import { useNavigate } from "react-router-dom";

export function ProjectsPageBody() {
    const [isHovered, setIsHovered] = React.useState(false);
    const navigate = useNavigate();

    const addHoveredState = (projectId) => {
        if (!projectId) return;
        setIsHovered(true);
        const hoveredComponent = document.getElementById(projectId);
        const allFolders = document.querySelectorAll(".folder");
        allFolders.forEach((folder) => {
            folder.classList.remove("hovered-folder");
        });
        const folder = hoveredComponent.classList.add("hovered-folder");
        const children = folder.children;
        children.forEach((child) => {
            child.classList.remove("unhovered-children");
        })
    }

    const handleHoverExit = (e) => {
        setIsHovered(false);
    }

    const handleNavigate = (projectId) => {
        if (!projectId) return;
        navigate(`/projects/${projectId}`);
    }

    useEffect(() => {
        if (!isHovered) {
            const folders = document.querySelectorAll(".folder");
            const allFolders = document.querySelectorAll(".folder");
            allFolders.forEach((folder) => {
                folder.classList.remove("hovered-folder");
            });
            folders[folders.length - 1].classList.add("hovered-folder");
        }
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
                            
                                <div className="folder" onClick={() => handleNavigate(project.id)} onMouseEnter={() => addHoveredState(project.title)} onMouseLeave={handleHoverExit} id={project.title}>
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