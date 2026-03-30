"use client";
import React from 'react';
import { Info, socialLinks } from "@/data/User";
import { motion } from "framer-motion";
import { IconChevronUp } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialIcons = socialLinks.map((social, index) => {
        return (
            <motion.a 
                key={index} 
                href={social.link} 
                whileHover={{ scale: 1.2, color: "var(--primary)" }}
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground transition-all duration-300"
            >
                <social.icon stroke={1.5} size={24} />
            </motion.a>
        );
    });

    return (
        <footer className="mt-40 mb-10 py-10 px-4 sm:px-8 max-w-7xl mx-auto border-t border-border flex flex-col items-center gap-12 relative">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute -top-6 left-1/2 -translate-x-1/2"
            >
                <ActionIcon 
                    onClick={scrollToTop}
                    variant="filled" 
                    className="!bg-primaryColor !text-bgColor rounded-full shadow-lg h-12 w-12 hover:-translate-y-1 transition-transform"
                >
                    <IconChevronUp size={24} />
                </ActionIcon>
            </motion.div>

            <motion.div 
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-black text-foreground tracking-tighter hover:text-primaryColor transition-colors cursor-default">
                    {Info.name}.
                </h2>
                <div className="flex gap-8 items-center text-muted-foreground group">
                    {socialIcons}
                </div>
            </motion.div>

            <motion.div 
                className="text-center space-y-2 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className="text-sm font-medium tracking-tight">
                    Designed & Built with <span className="text-primaryColor">AK Passion</span>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] font-mono opacity-60">
                    &copy; {new Date().getFullYear()} {Info.name} • Version 2.0
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;