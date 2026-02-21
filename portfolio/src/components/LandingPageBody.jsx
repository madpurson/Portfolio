import React from "react";
import tailwindConfig from "../../tailwind.config";
// import "../css/landing.css";
import { mouseTracker, startLoop, updateEye } from "../scripts/landingPageHelper";
import { useEffect } from "react";

// import { mouseTracker, startLoop } from "./mouseTracker";

export function LandingPageBody() {
    useEffect(() => {
        const tracker = mouseTracker("patrick");
        if (!tracker) return;
        // const leftEye = document.getElementById("left-eye");
        // console.log("leftEye:", leftEye.style);
        const leftPupil = document.getElementById("left-pupil");
        const rightPupil = document.getElementById("right-pupil");
        if (!leftPupil || !rightPupil) return;
      
        const stop = startLoop(() => {
          const { x, y } = tracker.mouse;
          updateEye("left-pupil", tracker.mouse);
          updateEye("right-pupil", tracker.mouse);
          // render logic here
        }, tracker.isActive);

        // dynamicEyeMovement("left-pupil", tracker.mouse);
        // dynamicEyeMovement("right-pupil", tracker.mouse);
      
        return () => {
          stop();
          tracker.destroy();
        };
        
      }, []);
      
    return (
        <div className="mt-10 h-screen landing-page-body relative">
            <div className="w-full box-border landing-banner-container container">
                <img className="landing-banner-image sticker--main" id="patrick" src="/images/banner1.png" alt="banner" />
                <div className="eyes-container container">
                    <div className="sticker eyes-sticker container">
                        <div className="eye container eye--left" id="left-eye">
                                {/* <img src="/images/left-eye.png" alt="pupil" /> */}
                                {/* <div className="pupil pupil--left" id="left-pupil"></div> */}
                            <img id="left-pupil" className="pupil pupil--left" src="/images/left-pupil.png" alt="left-pupil" />
                        </div>
                        <div className="eye container eye--right" id="right-eye">
                            {/* <img src="/images/right-eye.png" alt="pupil" /> */}
                            {/* <div className="pupil pupil--right" id="right-pupil"></div> */}
                            <img id="right-pupil" className="pupil pupil--right" src="/images/right-pupil.png" alt="right-pupil" />
                        </div>
                    </div>
                        {/* <img src="/images/eyes.png" alt="eyes"  /> */}
                </div>
            </div>
            <div className="profile w-full items-end inset-x-0 bottom-50">
                <h1 className="text-start text-dark-500 text-4xl font-bold color-main primary-h1">
                    Michael Patrick Pelegrino. 
                </h1>
                <h3 className="text-start text-rose-50">
                    Software Developer
                </h3>
            </div>
            
            <div className="landing-header">
                <div className="text-start w-full pr-10 text-rose-50 col-mobile-row justify-center">
                    <div className="container intro-container">   
                        <p className="intro-text">
                            I’m a software developer with a focus on backend systems, full-stack web development, and building real-world solutions. I enjoy working on meaningful projects that combine code, creativity, and impact.
                        </p>
                    </div> 
                    <div className="flex px-4 grow mt-10 opacity-75 text-center row container action-buttons-container">
                        <a className="flex primary-color secondary-body action-button" href="mailto:patrickmpelegrino@gmail.com">
                            Hire me
                        </a>
                        <a className="flex primary-color secondary-body action-button" href="/files/Michael_Patrick_Pelegrino_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            Download resume
                        </a>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}