import Shuarya from "../assets/Shuarya.png";
import itNotes from "../assets/itNotes.jpg";
import videoframe from "../assets/videoframe.png";
import library from "../assets/library.jpg";
import Result from "../assets/Result.jpeg";
import intern from "../assets/intern.jpeg";

export const skillsData = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind"],
  Backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  Languages: ["JavaScript", "Python", "MySql"],
  Tools: ["Git", "GitHub", "Postman", "VS Code"],
};

/* ------------------------------------------------------------------------------------------------------------------------- */

export const projectsData = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built using React to showcase my projects, technical skills, and professional experienc",
    technologies: ["React", "CSS", "Html", "JavaScript", "EmailJS"],
    image: Shuarya,
    liveLink: "portfolio-shaurya-one.vercel.app/",
    githubLink: "https://github.com/Shauryapratapsingh001?tab=repositories",
    projectStatus: "Completed",
    statusText: "Live and fully functional",
    progress: 100,
    showStatus: true,
  },
  {
    id: "2",
    title: "IT Notes",
    description:
      "A full-stack MERN e-commerce application with authentication, product browsing, cart system, order management.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: itNotes,
    liveLink: "https://it-courses-po3n.vercel.app",
    githubLink: "https://github.com/Shauryapratapsingh001?tab=repositories",
    projectStatus: "Under Development",
    statusText:
      "Frontend completed • Backend and payment integration in progress",
    progress: 80,
    showStatus: true,
  },
  {
    id: "3",
    title: "News Website",
    description:
      "A MERN stack doctor appointment booking system with authentication and appointment scheduling features and appointment scheduling features.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: videoframe,
    liveLink: "https://News-website.com",
    githubLink: "https://github.com/Shauryapratapsingh001?tab=repositories",
    projectStatus: "Completed",
    statusText: "Improving appointment flow and admin features",
    progress: 100,
    showStatus: true,
  },
];

/* ------------------------------------------------------------------------------------------------------------------------- */

export const experienceData = [
  {
    _id: "1",
    role: "React Web Developer",
    company: "Great learning",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Completed MongoDB training covering data modeling, aggregation pipelines, indexing, and database performance optimization.",
    isInternship: false,
  },
  {
    _id: "2",
    role: "Oracle Foundation Associate",
    company: "Oracle Cloud",
    duration: "Jan 2025 - Apr 2025",
    description:
      "Learned cloud computing fundamentals including IaaS, PaaS, SaaS models and core cloud architecture concepts.",
    isInternship: false,
  },
  {
    _id: "3",
    role: "Frontend Developer Intern",
    company: "Speaking Fever",
    duration: "Apr 2025 - Oct 2025",
    description:
      "Worked on front-end development using HTML, CSS, JavaScript, and React along with backend development using Node.js and Express. Built responsive applications and integrated REST APIs.",
    isInternship: true,
    internship: intern,
  },
];

/* ------------------------------------------------------------------------------------------------------------------------- */

export const educationData = [
  {
    _id: "1",
    degree: "B.Tech Computer Science and Engineering",
    institution: "Dr. Shakuntala Mishra National University, Lucknow",
    duration: "2018 - 2022",
    score: "7.7 CGPA.",
    degreeFile: Result,
  },
];
