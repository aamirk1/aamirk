"use client";

import { createTheme, MantineProvider } from '@mantine/core';
import { ThemeProvider } from "next-themes";
import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioProvider } from './PortfolioContext';

const theme = createTheme({
  breakpoints: {
    'xs': '320px',
    'sm': '476px',
    'md': '640px',
    'bs': '768px',
    'lg': '900px',
    'xl': '1024px',
    '2xl': '1280px'
  },
  primaryColor: 'teal',
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out-cubic',
    });
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <MantineProvider theme={theme} defaultColorScheme="dark">
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </MantineProvider>
    </ThemeProvider>
  );
}

