"use client";
import { Timeline, useMatches, Badge, Group, Text, Image } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { ExperienceInfo } from "@/data/User";
import { motion } from "framer-motion";

const TimelineItem = (items: any[]) => {
  const bulletSize = useMatches({
    xs: 12,
    sm: 16,
    md: 20,
  });

  return items.map((item: any, index: number) => (
    <Timeline.Item 
      key={index}
      bullet={<IconBriefcase size={bulletSize} className="text-bgColor" />}
      className="pb-12"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="p-6 professional-card glass !bg-opacity-5 relative group"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primaryColor/10 blur-xl rounded-lg scale-110 group-hover:bg-primaryColor/20 transition-colors" />
            <img
              src={`/Icons/${item.company}.png`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl relative z-10 border border-border bg-card-bg p-2 group-hover:border-primaryColor transition-colors"
              alt={item.company}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://placehold.co/100x100?text=" + item.company[0];
              }}
            />
          </div>
          
          <div className="flex-1">
            <Text className="text-2xl font-black text-foreground tracking-tight group-hover:text-primaryColor transition-colors">
              {item.role}
            </Text>
            <Text className="text-muted-foreground font-bold flex items-center gap-2">
              <span className="text-primaryColor">{item.company}</span>
              <span className="opacity-50">•</span>
              <span className="text-sm uppercase tracking-wider font-mono">{item.date}</span>
            </Text>
          </div>
        </div>

        <Text className="text-muted-foreground text-[15px] leading-relaxed mb-6 leading-7">
          {item.desc}
        </Text>

        <Group gap="xs">
          <Text size="sm" fw={800} className="text-foreground uppercase tracking-widest text-[10px]">Skills:</Text>
          {item.skills.map((skill: string, sIndex: number) => (
            <Badge 
              key={sIndex} 
              variant="outline" 
              color="teal" 
              size="sm"
              className="!border-primaryColor/20 !text-primaryColor/70 !text-[10px] font-bold"
            >
              {skill}
            </Badge>
          ))}
        </Group>
      </motion.div>
    </Timeline.Item>
  ));
};

const Experience = () => {
  const bulletSize = useMatches({
    xs: 24,
    sm: 30,
    md: 36,
  });

  return (
    <section className="px-4 sm:px-8 lg:px-16 my-24 max-w-5xl mx-auto" id="Experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
          <span className="text-primaryColor font-mono text-xl mr-2">04.</span>
          Professional Journey
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          My path through diverse technical environments, delivering impactful solutions.
        </p>
      </motion.div>

      <div className="pl-4 sm:pl-8">
        <Timeline 
          color="#64FFDA" 
          active={ExperienceInfo.length} 
          bulletSize={bulletSize} 
          lineWidth={2}
          className="!border-l-primaryColor/20"
        >
          {TimelineItem(ExperienceInfo)}
        </Timeline>
      </div>
    </section>
  );
};

export default Experience;
