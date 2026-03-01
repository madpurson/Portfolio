import React from "react";

const projects = [
    {
        name: "MeowgAw",
        url: "https://meowgaw.vercel.app/",
        problemStatement: "pet adoption third party service to help campus shelters find homes for their animals",
        solution: "a web application that allows shelters to create profiles for their animals and connect with potential adopters",
        techStack: "TailwindCSS, Bootstrap, MongoDB, ExpressJS, React, NodeJS",
        overview: "MeowgAw is a pet adoption third party service that helps campus shelters find homes for their animals. It is a web application that allows shelters to create profiles for their animals and connect with potential adopters. The application is built using NextJS, TailwindCSS, and Firebase."
    },
    {
        name: "Chiron",
        url: "https://chiron-central.vercel.app/",
        problemStatement: "In the Philippines, and most of international news outlets, there is a lack of coverage on health related news--allowing fake news to sprawl up all over the social media and in real life.",
        solution: "a news aggregator that curates health related news from credible sources by timely scraping and automated classification through embeddings and presents them in a user friendly way",
        techStack: "NextJS, TailwindCSS, Flask, Puppeteer, Scrapy, MongoDB, DistilBERT, NodeJS",
        overview: "Chiron is a news aggregator that curates health related news from credible sources and presents them in a user friendly way. It is built using NextJS, TailwindCSS, and Firebase."
    },
    {
        name: "UPV Pamplona",
        url: "https://github.com/madpurson/UPV-Pamplona",
        problemStatement: "The University of the Philippines Visayas has a cloistered zeitgeist that may be overwhelming for incoming students, especially those who are not from the Visayas region.",
        solution: "a recreation of the Pamplona game using modern web technologies in a more familiar and localized way to introduce the inside jokes and cultural nuances of the UPV community to incoming students",
        techStack: "C#, Unity, Photoshop",
        overview: "UPV Pamplona is a recreation of the Pamplona game using modern web technologies in a more familiar and localized way to introduce the inside jokes and cultural nuances of the UPV community to incoming students. It is built using C# and Unity."
    },
    {
        name: "eHalalan",
        url: "https://github.com/eHalalan/ehalalan",
        problemStatement: "The Philippine Commission on Elections (COMELEC) has been facing challenges in ensuring the integrity and security of the electoral process, particularly in the context of the COVID-19 pandemic and the increasing prevalence of disinformation and misinformation following the upcoming 2025 elections.",
        solution: "a secure and transparent online voting system that leverages blockchain technology to ensure the integrity and security of the electoral process, while also providing a user-friendly interface for voters and election officials",
        techStack: "NextJS, NodeJS, ExpressJS, MongoDB, ShadCN, Solidity, Ethereum",
        overview: "eHalalan is a secure and transparent online voting system that leverages blockchain technology to ensure the integrity and security of the electoral process, while also providing a user-friendly interface for voters and election officials. It is built using NextJS, NodeJS, ExpressJS, MongoDB, Solidity, and Ethereum."
    },
    {
        name: "DiceDiceDice",
        url: "https://github.com/madpurson/DiceDiceDice",
        problemStatement: "There is a lack of accessible and user-friendly tools for tabletop role-playing game (TTRPG) players to manage their character sheets, track their progress, and roll dice during gameplay.",
        solution: "a mobile application that automates dice rolls, manages character sheets, and provides a platform for players to connect and play TTRPGs online",
        techStack: "Flutter, Dart, Firebase",
        overview: "DiceDiceDice is a mobile application that automates dice rolls, manages character sheets, and provides a platform for players to connect and play TTRPGs online. It is built using Flutter and Dart."
    },
    {
        name: "Katipunan",
        url: "",
        problemStatement: "There is a lack of centralized and accessible platforms for showcasing Filipino precolonial history and culture, leading to a gap in knowledge and appreciation among the general public.",
        solution: "a multimedia platform that curates and presents Filipino precolonial history and culture through interactive timelines, virtual museum exhibits, and educational resources",
        techStack: "Vanilla JS, Vanilla CSS, HTML, PHP, MySQL",
        overview: "Katipunan is a multimedia platform that curates and presents Filipino precolonial history and culture through interactive timelines, virtual museum exhibits, and educational resources. It is built using Vanilla JS, Vanilla CSS, HTML, PHP, and MySQL."
    }
];

export function ProjectsPageBody() {
    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="primary-h1 primary-color">
                        Projects.
                    </h1>
                </div>
                <div className="grid grid-cols-3">
                    {projects.map((project) => (
                        <div className="container">
                            <a href={project.url}>
                                <div className="w-9/10">
                                    <img className="w-9/10 object-contain" src="/images/vector2.png" alt="projects" />
                                    <span className="primary-color secondary-cta">{project.name}.</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}