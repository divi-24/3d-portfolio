import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: "/assets/tech/flutter.svg",
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
  ],
};

const experiences = [
  {
    title: "Frontend Developer ",
    company_name: "Contributor at GSSOC",
    icon: "/assets/company/gssoc.webp",
    iconBg: "#E6DEDD",
    date: "October 2024 - November 2024",
    points: [
      "Contributed to GSSOC by enhancing user experience and interface design through intuitive web development solutions. Focused on creating visually appealing and user-friendly interactions while actively collaborating in the open-source community. 🚀✨",
    ],
  },
  {
    title: "Frontend Developer ",
    company_name: "Contributor at SWOC",
    icon: "/assets/company/sw.png",
    iconBg: "#E6DEDD",
    date: "December 2024 - February 2025",
    points: [
      "Actively contributed to open-source projects under Script Winter of Code, improving web development solutions and collaborating with the community. Focused on enhancing UI/UX, optimizing code, and building impactful digital experiences. 🚀✨",
    ],
  },
  {
    title: "Frontend Developer Intern ",
    company_name: "IndiBus",
    icon: "/assets/company/indi.png",
    iconBg: "#E6DEDD",
    date: "March 2025 - April 2025",
    points: [
      " I was responsible for building responsive and intuitive user interfaces using React.js. I collaborated closely with backend developers to integrate RESTful APIs, ensuring smooth data exchange across the platform. I improved overall UI/UX by implementing modern design practices with Tailwind CSS, aligning the interface with the brand's identity. My work involved developing reusable components, optimizing performance for both mobile and desktop experiences, and actively participating in daily stand-ups and sprint planning sessions within an agile team environment.",
    ],
  },
  {
    title: "Project Admin ",
    company_name: "SSOC",
    icon: "/assets/company/ssoc.png",
    iconBg: "#E6DEDD",
    date: "May 2025 -  Present",
    points: [
      "As a Project Admin at SSOC (Smart Summer of Code) since May 2025, I have been leading and managing open-source project contributions while mentoring budding developers. My responsibilities include onboarding contributors, creating and assigning issues, reviewing pull requests, and ensuring code quality and consistency across the repository. I also handle documentation, guide contributors through Git workflows, and conduct regular check-ins to track progress. This role has allowed me to foster a collaborative environment, promote best practices in open-source development, and contribute to the growth of a passionate developer community.",
    ],
  },
  {
    title: "Web Dev & Resume Building Mentor ",
    company_name: "SSSC by TechNeeds IGDTUW",
    icon: "/assets/company/sssc.png",
    iconBg: "#E6DEDD",
    date: "June 2025 - present",
    points: [
      "As a Web Development and Resume Building Mentor at SSSC by TechNeeds IGDTUW since June 2025, I have been guiding students through the fundamentals of front-end development, helping them build real-world projects using HTML, CSS, and JavaScript. Alongside technical mentorship, I also assist mentees in crafting impactful resumes tailored for internships and tech roles, offering personalized feedback and industry-ready formatting tips. My mentorship focuses on building confidence, encouraging consistency in learning, and preparing students for both technical and professional growth in the early stages of their careers.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IGDTUW3D",
    description:
      "IGDTUW3D is an innovative platform specializing in high-quality 3D visualization and interactive experiences. It leverages cutting-edge technology to create immersive 3D models for various industries, including architecture, education, and entertainment, enhancing user engagement and storytelling. 🚀✨",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "reactthreefiber",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Gsap",
        color: "yellow-text-gradient",
      },
    ],
    image:
      "/assets/projects/ig.png",
    source_code_link: "https://github.com/divi-24/IG3D.git",
    deployed_link: "https://www.elevate3d.tech/",
  },
  {
    name: "SheSync",
    description:
      "SheSync is a platform designed to support women's health and wellness by providing personalized cycle tracking, self-care tips, and community engagement. It offers a seamless and intuitive interface to help users stay informed about their menstrual health while fostering a supportive space for discussions and shared experiences. 🚀💖",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "express.js",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/She.png",
    source_code_link: "https://github.com/divi-24/SheSync.git",
    deployed_link: "https://shesync.netlify.app/",
  },
  {
    name: "Thrive",
    description:
      "Thrive is a platform that brings together developers, designers, and innovators to collaborate on solving real-world problems through hackathons. It provides a space for creative problem-solving and networking opportunities. 🚀💡",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/thrve.png",
    source_code_link: "https://github.com/divi-24/thrve-hack",
    deployed_link: "https://thrve-hack.vercel.app/",
  },
  {
    name: "RepoScout",
    description:
      "RepoScout is a smart repository discovery tool that helps developers find the perfect GitHub repositories based on language, topics, and project needs. It streamlines the search process, making it easier to explore and contribute to relevant open-source projects. 🚀💡",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "API",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/RP.png",
    source_code_link:
      "https://github.com/divi-24/RepoScout.git",
    deployed_link:
      "https://repo-scout-two.vercel.app/",
  },
  {
    name: "Kisaan Setu",
    description:
      "Kisaan Setu is a platform connecting farmers with modern agricultural resources, market information, and expert advice. It aims to bridge the gap between traditional farming practices and modern technology. 🌾🚜",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/kisaan.png",
    source_code_link: "https://github.com/divi-24/kisaan-setu",
    deployed_link: "https://kisaan-setu-f.vercel.app/",
  },
  {
    name: "ResQPlate",
    description:
      "ResQPlate is a food rescue platform that connects restaurants and food businesses with local charities to reduce food waste and help those in need. It's a sustainable solution for food redistribution. 🍽️🤝",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/resq.png",
    source_code_link: "https://github.com/divi-24/resqplate",
    deployed_link: "https://resqplate.vercel.app/",
  },
  {
    name: "Divios",
    description:
      "Divios is a modern portfolio platform that helps creators showcase their work in a beautiful and interactive way. It features 3D elements and smooth animations for an engaging user experience. 🎨✨",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/divios.png",
    source_code_link: "https://github.com/divi-24/divios",
    deployed_link: "https://divios.vercel.app/",
  },
  {
    name: "InnerBloom",
    description:
      "InnerBloom is a mental wellness platform that provides resources, tools, and community support for mental health. It offers guided meditation, journaling, and professional support. 🧘‍♀️💫",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/inner.png",
    source_code_link: "https://github.com/divi-24/innerbloom",
    deployed_link: "https://innerbloom.vercel.app/",
  },
  {
    name: "Quake",
    description:
      "Quake is an earthquake monitoring and alert system that provides real-time data and safety information. It helps communities stay informed and prepared for seismic activities. 🌍🔔",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/quake.png",
    source_code_link: "https://github.com/divi-24/quake-sigma",
    deployed_link: "https://quake-sigma.vercel.app/",
  },
  {
    name: "Disaster Management",
    description:
      "Disaster Management is a platform that helps communities stay informed and prepared for disasters. It provides real-time data and safety information. 🌍🔔",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/dm.png",
    source_code_link: "https://github.com/divi-24/dm-two-pi",
    deployed_link: "https://dm-two-pi.vercel.app/",
  },
  {
    name: "Mapify",
    description:
      "Mapify is a platform that helps users discover and share local experiences. It features interactive maps, reviews, and community features. 🗺️🌟",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "mapbox",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/mapp.png",
    source_code_link: "https://github.com/divi-24/mapp",
    deployed_link: "https://mapp-roan.vercel.app/",
  }
];

const certificates = [
  {
    title: "Contributor",
    issuer: "GSSOC",
    image: "/assets/Certi/gsso.jpg",
    
  },
  {
    title: "Full Stack Web Development",
    issuer: "100xDevs",
    image: "/assets/Certi/full.jpeg",
    
  },
  {
    title: "HACK-IT-UP Hackathon",
    issuer: "MSC-IGDTUW",
    image: "/assets/Certi/MS.jpg",
    
  },
  {
    title: "DEVACATION'25 Hackathon",
    issuer: "GDG-IGDTUW",
    image: "/assets/Certi/gd.jpeg",
    
  },
  {
    title: "AGENT'S FEST 2k25",
    issuer: "IEEE-AMITY",
    image: "/assets/Certi/ami.jpeg",
    
  },
  {
    title: "HACK FOR IMPACT",
    issuer: "ECELL-IIITD",
    image: "/assets/Certi/imp.jpeg",
    
  },
  {
    title: "0 to 1 Hackathon",
    issuer: "ECELL-IIITD",
    image: "/assets/Certi/0.jpeg",
    
  },
  {
    title: "AM HACKS",
    issuer: "ASSETMERKLE-IGDTUW",
    image: "/assets/Certi/am.jpeg",
    
  },
  {
    title: "BuildWithIndia",
    issuer: "HackwithIndia",
    image: "/assets/Certi/bu.jpg",
    
  },
  {
    title: "LEAN IN HACKS 6.0",
    issuer: "LEAN IN-IGDTUW",
    image: "/assets/Certi/lean.jpeg",
    
  },{
    title: "WIEMPOWER 6.0",
    issuer: "IEEE-IGDTUW",
    image: "/assets/Certi/IEE.jpg",
    
  },
  {
    title: "GLB Hackathon 4.0",
    issuer: "TECH VISOR CLUB",
    image: "/assets/Certi/gb.jpg",
    
  },
  // Add more certificates as needed
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/divi-24",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/deepakgupta249",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/Divi_2405",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Hustler",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
  socials,
  heroTexts,
};
