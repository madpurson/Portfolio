export const projects = [
  {
    id: "meowgaw",
    title: "MeowgAw",
    url: "https://meowgaw.vercel.app/",
    tagline: "Helping campus shelter pets find homes",
    problem: "Campus animal shelters struggle to reach potential adopters and showcase pets effectively.",
    solution: "A web platform where shelters can create pet profiles and connect directly with adopters.",
    techStack: ["Next.js", "TailwindCSS", "MongoDB", "Express", "Node.js"],
    responsibilities: [
      "Designed and developed the full-stack web application using Next.js, TailwindCSS, MongoDB, Express, and Node.js.",
      "Implemented user authentication and shelter management features to allow shelters to create and manage pet profiles.",],
    assets: "/images/Project/meowgaw.png",
    positions: ["fullstack", "Devops", "product lead"],
    description:
      "MeowgAw is a third-party pet adoption service designed for campus shelters. It centralizes pet profiles and simplifies discovery for adopters through a clean, accessible interface."
  },
  {
    id: "chiron",
    title: "CHIRON",
    url: "https://chiron-central.vercel.app/",
    tagline: "Fighting health misinformation in the Philippines",
    problem:
      "Health-related fake news spreads easily due to limited coverage and poor source verification.",
    solution:
      "An automated health news aggregator that scrapes, classifies, and curates articles from credible sources.",
    techStack: [
      "Next.js",
      "TailwindCSS",
      "Flask",
      "MongoDB",
      "Puppeteer",
      "Scrapy",
      "DistilBERT"
    ],
    responsibilities: [
      "Built a Next.js and TailwindCSS frontend for users to access curated health news.",
      "Developed a Flask backend to handle data processing and API endpoints.",
    ],
    assets: "/images/Project/chiron.png",
    positions: ["fullstack", "Devops", "product lead", "data engineer"],
    description:
      "CHIRON curates legitimate health news using automated scraping and machine-learning-based classification, prioritizing recall and credibility for public health awareness."
  },
  {
    id: "upv-pamplona",
    title: "UPV Pamplona",
    url: "https://github.com/madpurson/UPV-Pamplona",
    tagline: "A cultural game for incoming UPV students",
    problem:
      "Incoming students often feel disconnected from UPV’s internal culture and humor.",
    solution:
      "A localized re-imagining of the Pamplona game that introduces campus culture through play.",
    techStack: ["Unity", "C#", "Photoshop"],
    responsibilities: [
      "Designed and developed a Unity-based game that incorporates UPV-specific references and humor.",
      "Created original art assets and animations to enhance the gaming experience."
    ],
    assets: "/images/Project/upv-pamplona.jpg",
    positions: ["fullstack", "product lead"],
    description:
      "UPV Pamplona is a culturally grounded game that familiarizes new students with UP Visayas through inside jokes, references, and playful mechanics."
  },
  {
    id: "ehalalan",
    title: "eHalalan",
    url: "https://github.com/eHalalan/ehalalan",
    tagline: "Secure digital voting through blockchain",
    problem:
      "Ensuring election integrity is increasingly difficult amid disinformation and remote participation.",
    solution:
      "A transparent online voting system leveraging blockchain for security and auditability.",
    techStack: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Solidity",
      "Ethereum",
      "shadcn/ui"
    ],
    responsibilities: [
      "Developed a Next.js frontend for voter registration, ballot access, and result visualization.",
      "Implemented a Node.js and Express backend to handle user authentication and voting logic.",
      "Designed and deployed Solidity smart contracts on the Ethereum blockchain to ensure secure and transparent vote recording."
    ],
    assets: "/images/Project/ehalalan.svg",
    positions: ["fullstack", "Devops"],
    description:
      "eHalalan explores blockchain-based voting to improve transparency, voter trust, and system integrity for modern elections."
  },
  {
    id: "dicedicedice",
    title: "DiceDiceDice",
    url: "https://github.com/madpurson/DiceDiceDice",
    tagline: "Digital tools for tabletop RPG players",
    problem:
      "TTRPG players lack simple, mobile-friendly tools for dice rolls and character management.",
    solution:
      "A mobile app that automates dice rolls and manages character sheets.",
    techStack: ["Flutter", "Dart", "Firebase"],
    responsibilities: [
      "Designed and developed a Flutter mobile app that provides digital dice rolling and character sheet management for tabletop RPG players.",
      "Implemented Firebase backend services for user authentication and data storage."
    ],
    assets: "/images/Project/dicedicedice.png",
    positions: ["fullstack", "Devops", "product lead"],
    description:
      "DiceDiceDice streamlines tabletop gameplay by combining dice rolling, character tracking, and session utilities into one mobile app."
  },
  {
    id: "katipunan",
    title: "Katipunan",
    url: "",
    tagline: "Preserving Filipino precolonial history",
    problem:
      "Filipino precolonial culture is fragmented across inaccessible or obscure sources.",
    solution:
      "A multimedia platform presenting history through timelines, exhibits, and educational content.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    responsibilities: [
      "Designed and developed a multimedia website using HTML, CSS, JavaScript, PHP, and MySQL to present Filipino precolonial history.",
      "Curated historical content and created interactive timelines and exhibits to engage users."
    ],
    assets: "/images/Project/katipunan.png",
    positions: ["fullstack", "Devops"],
    description:
      "Katipunan is an educational platform dedicated to showcasing Filipino precolonial history through interactive and narrative-driven content."
  }
];