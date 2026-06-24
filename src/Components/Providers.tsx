"use client";

import { createTheme, MantineProvider } from '@mantine/core';
import { ThemeProvider } from "next-themes";
import '@mantine/core/styles.css';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { PortfolioProvider } from './PortfolioContext';

// Suppress React 19 false-positive script tag warnings from next-themes in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  const originalError = console.error;
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Encountered a script tag while rendering React component")
    ) {
      return;
    }
    originalError.apply(console, args);
  };
}

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

