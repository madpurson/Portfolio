import React from "react";

export function ProjectsPageBody() {
    return (
        <> 
            <div className="page-body">
                <h1 className="object-top-left text-start">
                    Projects.
                </h1>
                <div className="grid grid-cols-3">
                    <a href="https://meowgaw.vercel.app/">
                        <div className="w-9/10">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>MeowgAw.</span>
                        </div>
                    </a>

                    <a href="https://chiron-central.vercel.app/">
                        <div className="w-9/10 flex-1">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>Chiron.</span>
                        </div>
                    </a>

                    <a href="https://github.com/madpurson/UPV-Pamplona">
                        <div className="w-9/10">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>UPV Pamplona.</span>
                        </div>
                    </a>

                    <a href="https://github.com/eHalalan/ehalalan">
                        <div className="w-9/10">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>eHalalan.</span>
                        </div>
                    </a>
                    
                    <a href="https://github.com/madpurson/DiceDiceDice">
                        <div className="w-9/10">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>DiceDiceDice.</span>
                        </div>
                    </a>
                    
                
                    <a href="">
                        <div className="w-9/10">
                            <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                            <span>Katipunan.</span>
                        </div>
                    </a>
                    
                    
                </div>
            </div>
            
        </>
    )
}