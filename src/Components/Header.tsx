"use client";
import { IconHexagonLetterA, IconMoon, IconSun } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Work", "Experience", "Skills", "Contact"];

const navLinks = (col: boolean, clicked: any) => {
  const handleClick = () => {
    if (clicked) clicked();
  }
  return links.map((link, index) => (
    <motion.a
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={handleClick}
      className={`${col ? 'flex flex-col items-center py-4 ' : ''} text-textColor text-sm font-bold tracking-tight hover:text-primaryColor transition-colors duration-300 relative group`}
      href={`#${link}`}
    >
      <span className="text-primaryColor mr-1.5 font-mono text-xs">0{index + 1}.</span>
      {link}
      {!col && (
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full" />
      )}
    </motion.a>
  ));
};

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const [show, setShow] = useState(true);
  const [shadow, setShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, setTheme } = useTheme();
  const { toggleColorScheme } = useMantineColorScheme();

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 70) setShow(false);
    else setShow(true);
    if (window.scrollY > 70) setShadow(true);
    else setShadow(false);
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    toggleColorScheme();
  };

  return (
    <nav className={`fixed w-full z-50 glass h-20 transition-all duration-300 ease-in-out px-10 flex items-center justify-between ${show ? "translate-y-0" : "-translate-y-full"} ${shadow ? "shadow-lg bg-background/80 backdrop-blur-md" : "bg-transparent h-24"}`}>
      <motion.div 
        whileHover={{ rotate: 10, scale: 1.1 }}
        className="flex items-center gap-2 cursor-pointer"
      >
        <IconHexagonLetterA size={isMobile ? 35 : 45} color="var(--primary)" stroke={1.5} />
        {!isMobile && <span className="font-bold text-xl tracking-tighter">Aamir.</span>}
      </motion.div>

      <div className="flex items-center gap-8">
        {!isMobile && (
          <div className="flex gap-8 items-center mr-4">
            {navLinks(false, null)}
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ActionIcon
              variant="subtle"
              color={theme === "dark" ? "yellow" : "teal"}
              onClick={toggleTheme}
              size="lg"
              radius="md"
              className="hover:bg-primaryColor/10"
            >
              {theme === "dark" ? <IconSun size={20} /> : <IconMoon size={20} />}
            </ActionIcon>
          </motion.div>
        </AnimatePresence>

        <SideBar />
      </div>
    </nav>
  );
};

export default Header;
export { navLinks };
