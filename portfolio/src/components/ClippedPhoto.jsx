import PaperClip from "../assets/svg/paper-clip.svg?react";

const ClippedPhoto = ({ imagePath, projectName }) => {
    
    return (
        <div className="clipped-photo-container">
            <PaperClip className="paper-clip" />
            <div className="project-photo-container">
                <img className="project-photo" src={imagePath} alt={`${projectName} project image`} />
            </div>
        </div>
    )
}

export default ClippedPhoto;