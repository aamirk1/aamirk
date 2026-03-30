"use client";
import { SkillInfo } from "@/data/User";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16 my-24 max-w-7xl mx-auto" id="Skills">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
          <span className="text-primaryColor font-mono text-xl mr-2">03.</span>
          Technical Expertise
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          My digital toolbox—curated for scalability, performance, and user experience.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {SkillInfo.map((skill: any, index: number) => (
          <SkillCard 
            key={index} 
            index={index}
            title={skill.title} 
            skills={skill.skills} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
