
import { useParams } from "react-router-dom";
import { projects } from "../assets/data/projects";
import TechStackReceipt from "../components/TechStackReceipt";
import OverviewPaperDocument from "../components/OverviewPaperDocument";
import ClippedPhoto from "../components/ClippedPhoto";
import React from "react";
import PaperClip from '../assets/svg/paper-clip.svg?react';

export const ProjectDetails = () => {
    const { id } = useParams();
    console.log('Project ID from URL parameters:', id);
    if (!id || isNaN(id) || typeof(id) !== 'string') console.error('Project ID is missing or invalid from URL parameters');
    console.log('Projects data:', projects);
    const projectDetails = projects.find((project) => project.id === id);
    const projectIndex = projects.findIndex((project) => project.id === id);
    console.log('Project details found:', projectDetails);
    // if (!projectDetails) throw new Error('Project details not found');
    const { title, description, image, url, tagline, problem, solution } = projectDetails;
    const PERSONAL_GITHUB_URL = "https://github.com/madpurson";
    // if (!title || !description || !image) throw new Error('Project details are missing required fields');
    const [isReceiptShuffled, setIsReceiptShuffled] = React.useState(false);
    const [isReceiptOpen, setIsReceiptOpen] = React.useState(false);

    const receiptStackShuffleHandler = () => {
        console.log("is this triggered now")
        console.log('STATE INT HE PARENT', isReceiptShuffled)
        setIsReceiptShuffled(prev => !prev);
    }

    


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
                            <img src="/images/opened-folder.png" alt="opened-folder" className="opened-folder-image" />
                            <span className="left-side">
                                <img className="binder-clip" src="/images/binder-clip.png" alt="binder-clip" />
                                
                                {/* {isReceiptOpen && (
                                    <div className="paper-clip-container">
                                        <PaperClip />
                                    </div>
                                )} */}
                                {isReceiptOpen && (
                                    <div className="techstack-receipt">
                                        <div className="paper-clip-container">
                                            <PaperClip className="paper-clip" />
                                        </div>
                                        <ClippedPhoto 
                                            shuffled={isReceiptShuffled}
                                            handleShuffle={receiptStackShuffleHandler}
                                            imagePath={projectDetails.assets} 
                                            projectName={title}
                                        />
                                        <TechStackReceipt 
                                            shuffled={isReceiptShuffled}
                                            handleShuffle={receiptStackShuffleHandler}
                                            title={title} 
                                            index={projectIndex}
                                            items={projectDetails.techStack.map((tech) => ({ name: tech }))} 
                                            footerNote="WE LOVE TO HEAR FROM YOU!" 
                                            url={url || PERSONAL_GITHUB_URL}
                                        />
                                    </div>
                                )}
                                
                            </span>
                            
                            <span className="right-side">
                                {/* <PaperClip className="paper-clip" /> */}
                                <OverviewPaperDocument 
                                    referenceId={`ORDER #0${projectIndex + 1}`}
                                    title={title}
                                    label={tagline}
                                    date={new Date().toLocaleDateString()}
                                    problemStatement={problem || "Problem statement not provided."}
                                    solutionStatement={solution || "Solution statement not provided."}
                                    projectSummary={description || "Project summary not provided."}
                                />
                                {/* {!isReceiptOpen && 
                                    (<div className="paper-clip-container">
                                        <PaperClip />
                                    </div>
                                )} */}
                                
                                {!isReceiptOpen && (
                                    <div onClick={() => setIsReceiptOpen(true)} className="techstack-receipt">
                                        <div className="paper-clip-container">
                                            <PaperClip className="paper-clip" />
                                        </div>
                                        <ClippedPhoto 
                                            shuffled={isReceiptShuffled}
                                            handleShuffle={receiptStackShuffleHandler}
                                            imagePath={projectDetails.assets} 
                                            projectName={title}
                                        />
                                        <TechStackReceipt 
                                            shuffled={isReceiptShuffled}
                                            handleShuffle={receiptStackShuffleHandler}
                                            title={title} 
                                            index={projectIndex}
                                            items={projectDetails.techStack.map((tech) => ({ name: tech }))} 
                                            footerNote="WE LOVE TO HEAR FROM YOU!" 
                                            url={url || PERSONAL_GITHUB_URL}
                                        />
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default ProjectDetails;