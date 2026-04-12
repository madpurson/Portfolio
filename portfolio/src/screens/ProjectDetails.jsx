import { useParams } from "react-router-dom";
import { projects } from "../assets/data/projects";

export const ProjectDetails = () => {
    const { id } = useParams();
    console.log('Project ID from URL parameters:', id);
    if (!id || isNaN(id) || typeof(id) !== 'string') console.error('Project ID is missing or invalid from URL parameters');
    console.log('Projects data:', projects);
    const projectDetails = projects.find((project) => project.id === id);
    console.log('Project details found:', projectDetails);
    // if (!projectDetails) throw new Error('Project details not found');
    const { title, description, image, url } = projectDetails;
    // if (!title || !description || !image) throw new Error('Project details are missing required fields');


    return (
        <>
            <div className='flex flex-col w-[900px] object-center'>

                <div className="page-body">
                    <div className="page-header header-container">
                        <h1 className="primary-h1 primary-color">
                            {`${title}.`}
                        </h1>
                    </div>
                    <div className="opened-folder">
                        
                        <div className="opened-folder-content">
                            <span className="left-side">
                                <img className="binder-clip" src="/images/binder-clip.png" alt="binder-clip" />

                                <div className="opened-folder-left-content"></div>
                            </span>
                            <span className="right-side">
                                <img src="/images/paper.png" alt={title} className="opened-folder-right-content"></img>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ProjectDetails;