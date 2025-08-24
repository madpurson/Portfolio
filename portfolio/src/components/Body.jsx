import React from "react";

export function MainBody() {
    return (
        <div className="mt-10">
            <h1 className="object-top-left text-start">
                Michael Patrick Pelegrino.
            </h1>
            <h3 className="text-start">
                Software Developer
            </h3>
            <div className="flex flex-row items-end">
                <div className="text-start w-3/5 pr-10">
                    <p>
                        I’m a software developer with a focus on backend systems, full-stack web development, and building real-world solutions. I enjoy working on meaningful projects that combine code, creativity, and impact.
                    </p>
                    <div className="flex px-4 grow mt-10 gap-y-8 gap-x-8">
                        <button className="flex grow">
                            Hire me
                        </button>
                        <button className="flex grow">
                            Download resume
                        </button>
                    </div>
                </div>
                <div className="w-2/5">
                    <img src="banner.png" alt="banner" />
                </div>
            </div>
            
        </div>
    )
}