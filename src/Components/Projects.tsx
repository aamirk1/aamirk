"use client";
import { ProjectInfo } from "@/data/User";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SegmentedControl, useMatches } from "@mantine/core";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  
  const filteredProjects = ProjectInfo.filter((project: any) => 
    activeTab === "All" ? true : project.type === activeTab
  );

  const controlSize = useMatches({
    xs: 'sm',
    sm: 'md',
    md: 'lg'
  });

  return (
    <section className="px-4 sm:px-8 lg:px-16 my-20 max-w-7xl mx-auto" id="Work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
          <span className="text-primaryColor font-mono text-xl mr-2">02.</span>
          Portfolio
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Explore my work categorized by platform. Each project represents a unique challenge solved with modern technology.
        </p>
      </motion.div>

      <div className="flex justify-center mb-12">
        <SegmentedControl
          value={activeTab}
          onChange={setActiveTab}
          size={controlSize}
          radius="xl"
          transitionDuration={500}
          transitionTimingFunction="linear"
          className="!bg-muted/50 dark:!bg-card-bg/50 backdrop-blur-md p-1 border border-border"
          data={[
            { label: 'All Projects', value: 'All' },
            { label: 'Web Apps', value: 'Web' },
            { label: 'Mobile Apps', value: 'Mobile' },
          ]}
          styles={{
            root: { backgroundColor: 'transparent' },
            indicator: { backgroundColor: 'var(--primary)' },
            label: { 
              fontWeight: 700, 
              color: 'var(--foreground)',
              '&[data-active]': { color: 'var(--background)' }
            }
          }}
        />
      </div>

      <motion.div 
        layout
        className="flex flex-wrap justify-center gap-8 lg:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: any, index: number) => (
            <ProjectCard
              key={project.title} // Use title as key for consistent re-ordering
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
