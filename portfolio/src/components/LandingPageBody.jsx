import React from "react";
import tailwindConfig from "../../tailwind.config";
// import "../css/landing.css";

export function LandingPageBody() {
    return (
        <div className="mt-10 h-screen landing-page-body relative">
            
            <div className="object-top-left flex">
                <div className="text-start w-3/5 pr-10 text-rose-50 flex flex-row justify-center">
                    <p>
                        I’m a software developer with a focus on backend systems, full-stack web development, and building real-world solutions. I enjoy working on meaningful projects that combine code, creativity, and impact.
                    </p>
                    <div className="flex px-4 grow mt-10 gap-y-8 gap-x-8 opacity-75 text-center">
                        <button className="flex font-semibold grow bg-rose-950 text-rose-50 rounded-md p-3 cursor-pointer justify-center
                        hover:bg-rose-800 hover:scale-105 transition-all duration-200 ease-in-out">
                            Hire me
                        </button>
                        <button className="flex grow rounded-md text-rose-50 p-3 justify-center bg-amber-950 cursor-pointer
                        hover:bg-amber-800 hover:scale-105 transition-all duration-200 ease-in-out">
                            Download resume
                        </button>
                    </div>
                </div>
            </div>
            <div className="profile w-full items-end inset-x-0 bottom-50">
                <h1 className="text-start text-dark-500 text-4xl font-bold color-main font-delta">
                    Michael Patrick Pelegrino.
                </h1>
                <h3 className="text-start text-rose-50">
                    Software Developer
                </h3>
            </div>
            <div className="w-2/5 box-border landing-banner-container">
                <img className="w-full landing-banner-image" src="/images/banner1.png" alt="banner" />
            </div>
            
        </div>
    )
}