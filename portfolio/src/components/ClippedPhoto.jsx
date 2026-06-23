import PaperClip from "../assets/svg/paper-clip.svg?react";
import { useState } from "react";

const ClippedPhoto = ({ imagePath, projectName, handleShuffle = () => {}, shuffled = false }) => {
    const [shuffleDeg, setShuffleDeg] = useState(0);
    const handleReceiptShuffle = () => {
    
    const deg = (Math.random() * 10 - 5).toFixed(2);
    setShuffleDeg(deg);
    handleShuffle()
    }
    return (
        <div 
        style={{ transform: `rotate(${shuffleDeg}deg)`, zIndex: `${shuffled ? 3 : 4}` }}
        className="clipped-photo-container" 
        onClick={(e)=>{
            // e.stopPropagation();
            handleReceiptShuffle();
        }}>
            <div className="project-photo-container">
                <img className="project-photo" src={imagePath} alt={`${projectName} project image`} />
            </div>
        </div>
    )
}

export default ClippedPhoto;