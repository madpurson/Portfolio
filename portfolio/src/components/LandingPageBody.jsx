import React from "react";
import tailwindConfig from "../../tailwind.config";

export function LandingPageBody() {
    return (
        <div className="mt-10 h-screen ">
            <h1 className="object-top-left text-start text-dark-500 text-4xl font-bold">
                Michael Patrick Pelegrino.
            </h1>
            <h3 className="text-start text-midnight">
                Software Developer
            </h3>
            <div className="flex flex-row items-end">
                <div className="text-start w-3/5 pr-10">
                    <p>
                        I’m a software developer with a focus on backend systems, full-stack web development, and building real-world solutions. I enjoy working on meaningful projects that combine code, creativity, and impact.
                    </p>
                    <div className="flex px-4 grow mt-10 gap-y-8 gap-x-8">
                        <button className="flex grow text-midnight">
                            Hire me
                        </button>
                        <button className="flex grow">
                            Download resume
                        </button>
                    </div>
                </div>
                <div className="w-2/5 box-border">
                    <img className="w-full" src="/images/banner.png" alt="banner" />
                </div>
            </div>
            
        </div>
    )
}