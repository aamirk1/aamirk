import type { Metadata } from "next";
import { Providers } from "@/Components/Providers";
import "./globals.css";


export const metadata: Metadata = {
  title: "Aamir Khan | Portfolio",
  description: "Next.js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
