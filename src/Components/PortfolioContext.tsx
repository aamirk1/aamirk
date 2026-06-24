"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { db, isConfigured } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs, setDoc, query, orderBy } from "firebase/firestore";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const iconMap: Record<string, any> = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
};

export interface InfoType {
  name: string;
  stack: string[];
  bio: string;
}

export interface ProjectType {
  title: string;
  desc: string;
  image: string;
  live: boolean;
  technologies: string[];
  link: string;
  github: string;
  type: string;
}

export interface SkillType {
  title: string;
  skills: string[];
}

export interface ExperienceType {
  role: string;
  company: string;
  date: string;
  desc: string;
  skills: string[];
}

export interface SocialLinkType {
  link: string;
  icon: any;
}

const DEFAULT_INFO: InfoType = {
  name: "Aamir Khan",
  stack: ["Software Developer", "Full Stack Web Developer", "Flutter Developer", "Python Developer"],
  bio: "I am a distinguished software developer with a specialization in developing sophisticated, scalable solutions and delivering premium web applications. My focus is on providing exceptional IT services that go beyond client expectations. I invite you to connect and collaborate to achieve extraordinary results."
};

const DEFAULT_PROJECT_INFO: ProjectType[] = [
  {
    title: "SMS",
    desc: "This project assesses teachers and teachers by conducting and maintaining online records for the students appearing for various classes and sections. The College Management System would be highly useful for the staffs and admins for having a platform to maintain all the necessary records regarding student’s details. This project will enable educational institutes maintain records. The project allows faculties to create their records for students, classes, sections.",
    image: "/Icons/projectImages/sms.png",
    live: false,
    technologies: ["Python", "Django", "Bootstrap", "HTML", "CSS", "Javascript", "Ajax", "ChartJs"],
    link: "#",
    github: "https://github.com/aamirk1/sms-project.git",
    type: "Web"
  },
  {
    title: "TMS",
    desc: "The Ticket Management System is a Flutter-based web application with two main tabs: Master and Reports. The Master tab allows the admin to create users, manage work lists, and organize buildings, floors, rooms, and assets. The **Reports** tab enables the admin to filter and view tickets based on specific criteria. The system is designed to streamline ticket management and provide efficient oversight of tasks and resources.",
    image: "/Icons/projectImages/tms.png",
    live: true,
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://tms.nldalmia.in",
    github: "https://github.com/aamirk1/ticket_management_system.git",
    type: "Web"
  },
  {
    title: "Ecommerce",
    desc: "The PHP eCommerce Platform is a robust and scalable online shopping solution designed to offer a shopping experience for users and an intuitive management system for administrators. This platform leverages PHP to handle server-side scripting, coupled with MySQL for database management, HTML/CSS/JavaScript for the front-end, and various libraries and frameworks to enhance functionality. Our e-commerce platform features a powerful and intuitive admin dashboard designed to streamline the management of your online store. With a focus on flexibility and ease of use, the dashboard enables administrators to efficiently organize and maintain product listings, categories, and variants to ensure a seamless shopping experience for customers",
    image: "https://placehold.co/600x400?text=E-Commerce+Platform",
    live: false,
    technologies: ["PHP", "Bootstrap", "HTML", "CSS", "Javascript"],
    link: "https://maasav.com",
    github: "https://github.com/aamirk1/ecomerc.git",
    type: "Web"
  },
  {
    title: "Society Manager",
    desc: "A comprehensive solution for residential society management, streamlining communication between residents and administrators. Features include notice boards, complaint tracking, and visitor management, all built within a high-performance cross-platform environment.",
    image: "/Icons/projectImages/societyadmin.png",
    live: true,
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://societyadmin.web.app/",
    github: "https://github.com/aamirk1/ecomerc.git",
    type: "Mobile"
  },
  {
    title: "Zap Account",
    desc: "An accounting solution designed to handle complex financial transactions and reporting. Built with PHP and integrated with modern bootstrap components for a clear and professional financial overview.",
    image: "/Icons/projectImages/zapAccount.jpeg",
    live: true,
    technologies: ["PHP", "Bootstrap", "HTML", "CSS", "Javascript"],
    link: "https://dataclode.zapwmp.in",
    github: "https://github.com/aamirk1/ecomerc.git",
    type: "Web"
  },
  {
    title: "ResumeUploader",
    desc: "A modern recruitment tool that simplifies the resume submission and tracking process. Using Django's powerful backend to manage applicant data and provide an efficient portal for HR review.",
    image: "https://placehold.co/600x400?text=Resume+Management+System",
    live: false,
    technologies: ["Python", "Django", "sqlite", "HTML", "CSS", "Javascript"],
    link: "https://maasav.com",
    github: "https://github.com/aamirk1/ecomerc.git",
    type: "Web"
  }
];

const DEFAULT_SKILL_INFO: SkillType[] = [
  {
    title: "Frontend",
    skills: ["Flutter", "HTML", "CSS", "JavaScript", "React JS", "Next JS", "Tailwind CSS", "Material UI", "Bootstrap"]
  },
  {
    title: "Backend",
    skills: ["Django", "Django Rest Framework", "FastAPI", "PHP"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Sqlite", "Redis", "Hive"]
  },
  {
    title: "Language",
    skills: ["C", "C++", "Python", "Dart", "PHP", "JavaScript", "TypeScript"]
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "Figma", "VS Code", "Postman", "MongoDB Compass", "Linux", "Numpy", "Matplotlib", "Pandas", "TensorFlow", "Xampp"]
  }
];

const DEFAULT_EXPERIENCE_INFO: ExperienceType[] = [
  {
    role: "Web Application Developer",
    company: "Zap Solutionz",
    date: "Dec 2022 - 2023",
    desc: "As a Web Application Developer at Zap Solutionz, I am responsible for designing, developing, and maintaining dynamic web applications. My role involves collaborating with cross-functional teams to create user-friendly interfaces and ensure seamless functionality. I utilize various technologies to deliver high-quality solutions that meet client requirements and enhance user experience.",
    skills: ["Django", "Python", "HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "MySQL", "XAMPP"]
  },
  {
    role: "Flutter Developer",
    company: "Zap Solutionz",
    date: "Dec 2023 - March 2025",
    desc: "As a Flutter Developer at Zap Solutionz, I am responsible for designing and building cross-platform mobile applications that provide an engaging user experience. My role involves collaborating with product teams to define application features and ensure high performance across various devices. I leverage the Flutter framework and Dart programming language to deliver high-quality, maintainable code.",
    skills: ["Flutter", "Dart", "Firebase", "REST API", "Git"]
  },
  {
    role: "Flutter Developer",
    company: "Freelancer",
    date: "April 2025 - May 2025",
    desc: "As a Flutter Developer, I am responsible for designing and building cross-platform mobile applications that provide an engaging user experience. My role involves collaborating with clients and designers to define application features and ensure high performance across various devices. I leverage the Flutter framework and Dart programming language to deliver high-quality, maintainable code.",
    skills: ["Flutter", "Dart", "Firebase", "REST API", "Git"]
  },
  {
    role: "Senior Flutter Developer",
    company: "Anjita IT Solutions",
    date: "June 2025 - Present",
    desc: "As a Senior Flutter Developer, I am responsible for designing and building cross-platform mobile applications that provide an engaging user experience. My role involves collaborating with clients, backend developers, UI/UX designers and project managers to define application features and ensure high performance across various devices. I leverage the Flutter framework and Dart programming language to deliver high-quality, maintainable code.",
    skills: ["Flutter", "Dart", "Firebase", "REST API", "Git"]
  }
];

const DEFAULT_SLUGS: string[] = [
  "typescript",
  "dart",
  "java",
  "react",
  "nextjs",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

const DEFAULT_SOCIALS = [
  { link: "https://github.com/aamirk1", icon: IconBrandGithub },
  { link: "https://in.linkedin.com/in/aamirkhan131", icon: IconBrandLinkedin },
];

interface PortfolioContextProps {
  loading: boolean;
  Info: InfoType;
  ProjectInfo: ProjectType[];
  SkillInfo: SkillType[];
  ExperienceInfo: ExperienceType[];
  Slugs: string[];
  socialLinks: SocialLinkType[];
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [portfolioData, setPortfolioData] = useState<Omit<PortfolioContextProps, "loading">>({
    Info: DEFAULT_INFO,
    ProjectInfo: DEFAULT_PROJECT_INFO,
    SkillInfo: DEFAULT_SKILL_INFO,
    ExperienceInfo: DEFAULT_EXPERIENCE_INFO,
    Slugs: DEFAULT_SLUGS,
    socialLinks: DEFAULT_SOCIALS,
  });

  useEffect(() => {
    const loadData = async () => {
      if (!isConfigured || !db) {
        console.warn("Firebase is not configured or initialized. Using local static data.");
        setLoading(false);
        return;
      }

      try {
        const aboutDocRef = doc(db, "profile_info", "about");
        const aboutDocSnap = await getDoc(aboutDocRef);

        if (aboutDocSnap.exists()) {
          // Fetch all other collections in parallel
          const [projectsSnap, skillsSnap, experienceSnap, socialSnap, slugsSnap] = await Promise.all([
            getDocs(collection(db, "projects")),
            getDocs(collection(db, "skills")),
            getDocs(query(collection(db, "experience"), orderBy("order", "asc"))),
            getDocs(query(collection(db, "social_links"), orderBy("order", "asc"))),
            getDoc(doc(db, "slugs", "tech_slugs")),
          ]);

          const infoData = aboutDocSnap.data() as InfoType;

          const projectsData = projectsSnap.docs.map((doc) => doc.data()) as ProjectType[];

          const skillsData = skillsSnap.docs.map((doc) => doc.data()) as SkillType[];

          const experienceData = experienceSnap.docs.map((doc) => {
            const { order, ...rest } = doc.data();
            return rest;
          }) as ExperienceType[];

          const socialLinksData = socialSnap.docs.map((doc) => {
            const data = doc.data();
            return {
              link: data.link,
              icon: iconMap[data.iconName] || IconBrandGithub,
            };
          }) as SocialLinkType[];

          const slugsData = slugsSnap.exists() ? (slugsSnap.data().list || DEFAULT_SLUGS) : DEFAULT_SLUGS;

          setPortfolioData({
            Info: infoData || DEFAULT_INFO,
            ProjectInfo: projectsData.length > 0 ? projectsData : DEFAULT_PROJECT_INFO,
            SkillInfo: skillsData.length > 0 ? skillsData : DEFAULT_SKILL_INFO,
            ExperienceInfo: experienceData.length > 0 ? experienceData : DEFAULT_EXPERIENCE_INFO,
            Slugs: slugsData,
            socialLinks: socialLinksData.length > 0 ? socialLinksData : DEFAULT_SOCIALS,
          });
        } else {
          // Collections do not exist/empty, seed all of them
          console.log("Firestore collections not found. Seeding with default separate collections...");

          // Seed profile_info/about
          await setDoc(aboutDocRef, DEFAULT_INFO);

          // Seed projects
          for (const project of DEFAULT_PROJECT_INFO) {
            await setDoc(doc(db, "projects", project.title), project);
          }

          // Seed skills
          for (const skillCat of DEFAULT_SKILL_INFO) {
            await setDoc(doc(db, "skills", skillCat.title.toLowerCase()), skillCat);
          }

          // Seed experience
          for (let i = 0; i < DEFAULT_EXPERIENCE_INFO.length; i++) {
            const exp = DEFAULT_EXPERIENCE_INFO[i];
            await setDoc(doc(db, "experience", `exp_${i}`), { ...exp, order: i });
          }

          // Seed social_links
          const defaultSocials = [
            { link: "https://github.com/aamirk1", iconName: "github", order: 0 },
            { link: "https://in.linkedin.com/in/aamirkhan131", iconName: "linkedin", order: 1 }
          ];
          for (let i = 0; i < defaultSocials.length; i++) {
            await setDoc(doc(db, "social_links", `social_${i}`), defaultSocials[i]);
          }

          // Seed slugs
          await setDoc(doc(db, "slugs", "tech_slugs"), { list: DEFAULT_SLUGS });

          console.log("All separate Firestore collections successfully seeded!");
        }
      } catch (error) {
        console.error("Error fetching or seeding Firestore separate collections:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ loading, ...portfolioData }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
