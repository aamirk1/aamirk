"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mantine/hooks";

const SkillBadge = (skills: string[]) => {
  return skills.map((skill: string, index: number) => (
    <motion.div 
      key={index}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, backgroundColor: 'rgba(100,255,218,0.15)' }}
      className="flex items-center gap-3 border border-border bg-muted/30 dark:bg-card-bg/40 backdrop-blur-sm rounded-xl py-2 px-4 shadow-sm hover:border-primaryColor transition-all duration-300"
    >
      <img
        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        src={`/Icons/${skill}.png`}
        alt={skill}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=Icon";
        }}
      />
      <span className="text-foreground font-medium text-sm sm:text-base whitespace-nowrap">{skill}</span>
    </motion.div>
  ));
};

const SkillCard = ({ title, skills, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-8 professional-card glass !bg-opacity-5 relative overflow-hidden group"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primaryColor/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:bg-primaryColor/10 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col gap-8">
        <h3 className="text-2xl sm:text-3xl font-black text-center text-foreground group-hover:text-primaryColor transition-colors tracking-tight">
          {title}
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {SkillBadge(skills)}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
