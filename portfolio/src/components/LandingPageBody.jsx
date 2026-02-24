import React from "react";
import tailwindConfig from "../../tailwind.config";
// import "../css/landing.css";
import { mouseTracker, startLoop, renderEye } from "../scripts/landingPageHelper";
import { useEffect } from "react";

// import { mouseTracker, startLoop } from "./mouseTracker";

export function LandingPageBody() {
    useEffect(() => {
    const tracker = mouseTracker("patrick-container");
    if (!tracker) return;

    const leftEye = document.getElementById("left-eye");
    const rightEye = document.getElementById("right-eye");

    if (!leftEye || !rightEye) return;

    const stop = startLoop(() => {
        renderEye(leftEye, tracker.mouse);
        renderEye(rightEye, tracker.mouse);
    }, tracker.isActive);

    return () => {
        stop();
        tracker.destroy();
    };
    }, []);
    return (
        <div className="mt-10 page-body landing-page-body relative">
            <div id="patrick-container" className="w-full box-border landing-banner-container container">
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
            <div className="profile container column w-full items-end">
                <h1 className="font-bold color-main primary-title">
                    Patrick Pelegrino. 
                </h1>
                <span className="primary-color secondary-sm">
                    Software Developer
                </span>
            </div>
            
            <div className="landing-header">
                <div className="text-start w-full pr-10 text-rose-50 col-mobile-row justify-center">
                    <div className="container intro-container">   
                        <p className="intro-text">
                            I’m a software developer with a focus on backend systems, full-stack web development, and building real-world solutions. I enjoy working on meaningful projects that combine code, creativity, and impact.
                        </p>
                    </div> 
                    <div className="flex px-4 grow mt-10 text-center row container action-buttons-container">
                        <a className="flex primary-color plain-text secondary-body action-button" href="mailto:pelegrinompatrick@gmail.com">
                            <span>Hire me</span>
                        </a>
                        <a className="flex primary-color plain-text secondary-body action-button" href="/cv/PatrickPelegrino-CV.pdf" target="_blank" rel="noopener noreferrer">
                            <span>Download resume</span>
                        </a>
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}