import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const Info = {
    name: "Aamir Khan",
    stack: ["Software Developer", "Full Stack Web Developer","Flutter Developer","Python Developer"],
    bio: "I am a distinguished software developer with a specialization in developing sophisticated, scalable solutions and delivering premium web applications. My focus is on providing exceptional IT services that go beyond client expectations. I invite you to connect and collaborate to achieve extraordinary results."
}
const ProjectInfo = [
    {
        title: "SMS",
        desc: "This project assesses teachers and teachers by conducting and maintaining online records for the students appearing for various classes and sections. The College Management System would be highly useful for the staffs and admins for having a platform to maintain all the necessary records regarding student’s details. This project will enable educational institutes maintain records. The project allows faculties to create their records for students, classes, sections.",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/sms.png`,
        live:false,
        technologies: ["Python", "Django", "Bootstrap", "HTML", "CSS", "Javascript", "Ajax", "ChartJs"],
        link: "#",
        github: "https://github.com/aamirk1/sms-project.git"
    },
    {
        title: "TMS",
        desc: "The Ticket Management System is a Flutter-based web application with two main tabs: Master and Reports. The Master tab allows the admin to create users, manage work lists, and organize buildings, floors, rooms, and assets. The **Reports** tab enables the admin to filter and view tickets based on specific criteria. The system is designed to streamline ticket management and provide efficient oversight of tasks and resources.",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/tms.png`,
        live:true,
        technologies:["Flutter", "Dart", "Firebase"],
        link: "https://tms.nldalmia.in",
        github: "https://github.com/aamirk1/ticket_management_system.git"
    },
    {
        title: "Ecommerce",
        desc: "The PHP eCommerce Platform is a robust and scalable online shopping solution designed to offer a seamless shopping experience for users and an intuitive management system for administrators. This platform leverages PHP to handle server-side scripting, coupled with MySQL for database management, HTML/CSS/JavaScript for the front-end, and various libraries and frameworks to enhance functionality. Our e-commerce platform features a powerful and intuitive admin dashboard designed to streamline the management of your online store. With a focus on flexibility and ease of use, the dashboard enables administrators to efficiently organize and maintain product listings, categories, and variants to ensure a seamless shopping experience for customers",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/ecom.png`,
        live:false,
        technologies: ["PHP", "Bootstrap", "HTML", "CSS", "Javascript"],
        link: "https://maasav.com",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
    {
        title: "Society Manager",
        desc: "",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/societyadmin.png`,
        live:true,
        technologies: ["Flutter", "Dart", "Firebase"],
        link: "https://societyadmin.web.app/",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
    {
        title: "Zap Account",
        desc: "",
        image: "zapAccount.png",
        live:true,
        technologies: ["PHP", "Bootstrap", "HTML", "CSS", "Javascript"],
        link: "https://maasav.com",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
    
    {
        title: "ResumeUploader",
        desc: "",
        image: `${process.env.PUBLIC_URL}/Icons/projectImages/resume.png`,
        live:false,
        technologies: ["Python", "Django", "sqlite", "HTML", "CSS", "Javascript"],
        link: "https://maasav.com",
        github: "https://github.com/aamirk1/ecomerc.git"
    },
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Material UI", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Django", "Flutter", "MySQL", "MongoDB", "Firebase", "PostgreSQL", "Node JS", "Express JS", "Sqlite", "Redis" ]
    },
    {
        title: "Language",
        skills: ["C", "C++", "Python", "Dart", "PHP", "JavaScript", "TypeScript" ]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "Linux", "VS Code", "MongoDB Compass", "Postman", "Django Rest Framework", "Numpy", "Matplotlib", "Pandas", "TensorFlow", "Xampp", "Shared Hosting" ]
    }
]

const ExperienceInfo = [
    {
        role: "Web Application Developer",
        company: "Zap Solutionz",
        date: "Dec 2022 - Present",
        desc: "jnhgbkhiuhuiiu biuguyhinjiuh",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "XAMPP"]
    }
]
const socialLinks = [{link:"https://github.com/aamirk1", icon:IconBrandGithub}, {link:"https://in.linkedin.com/in/aamirkhan131", icon:IconBrandLinkedin},];
   
const Slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
export { Info, ProjectInfo, SkillInfo, ExperienceInfo, socialLinks, Slugs };

