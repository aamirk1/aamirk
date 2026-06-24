
"use client";
import { IconHexagon } from "@tabler/icons-react";
import IconCloud from "./magicui/icon-cloud";

const defaultSlugs = [
  "typescript",
  "dart",
  "java",
  "react",
  "nextjs",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.5s] items-center justify-center px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={defaultSlugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_5s_linear_infinite]" size={120} color="#64FFDA" stroke={1.25}/>
      <div className="absolute font-mono text-primaryColor font-semibold text-6xl -z-10">AK</div>
    </div>
  );
}
