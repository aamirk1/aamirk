"use client";
import { Button, useMatches, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload, IconFileText } from "@tabler/icons-react";
import Typewriter from "typewriter-effect";
import { usePortfolio } from "./PortfolioContext";
import dynamic from 'next/dynamic';
import { motion, Variants } from "framer-motion";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import Particles from "./magicui/particles";
import { useTheme } from "next-themes";

const ResumeViewer = dynamic(() => import('./ResumeViewer'), { ssr: false });

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const About = () => {
  const { Info } = usePortfolio();
  const [opened, { open, close }] = useDisclosure(false);
  const { theme: nextTheme } = useTheme();

  const theme = useMantineTheme();

  const btnSize = useMatches({
    xs: 'sm',
    sm: 'md',
    md: 'lg',
  });

  const particleColor = nextTheme === "dark" ? "#60a5fa" : "#1d4ed8";

  return (
    <section
      id="About"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden px-4 sm:px-8 lg:px-16"
    >
      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={150}
        ease={80}
        color={particleColor}
        refresh
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl w-full"
      >
        <div className="space-y-8 text-center lg:text-left">
          <motion.div variants={itemVariants} className="space-y-2">
            <span className="text-primaryColor font-mono text-sm tracking-widest uppercase">
              Hello, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground tracking-tight leading-tight">
              {Info.name}.
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="text-2xl sm:text-3xl lg:text-4xl font-bold flex flex-wrap justify-center lg:justify-start gap-x-3 items-center">
            <span className="text-muted-foreground opacity-80">Professional</span>
            <span className="text-primaryColor inline-block">
              <Typewriter
                options={{
                  strings: Info.stack,
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {Info.bio}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button
              onClick={open}
              size={btnSize}
              variant="filled"
              className="!bg-primaryColor !text-bgColor font-bold h-12 px-8 rounded-full translate-y-0 hover:-translate-y-1 transition-transform duration-200"
              leftSection={<IconFileText size={20} />}
            >
              Resume
            </Button>
            <Button
              component="a"
              href="/AamirResume.pdf"
              download={Info.name}
              size={btnSize}
              variant="outline"
              className="!border-primaryColor !text-primaryColor font-bold h-12 px-8 rounded-full translate-y-0 hover:-translate-y-1 transition-transform duration-200"
              leftSection={<IconDownload size={20} />}
            >
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative flex justify-center items-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primaryColor/20 blur-3xl rounded-full scale-110 group-hover:bg-primaryColor/30 transition-colors duration-500" />
            <NeonGradientCard className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-background p-1 shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105">
              <img
                src="/Icons/pic.jpeg"
                className="w-full h-full object-cover rounded-full"
                alt="profile"
              />
            </NeonGradientCard>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
