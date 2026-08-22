import Badge from "./Badge";
import portfolio from "../data/portfolio.json";
import {
  SiCss,
  SiDjango,
  SiGit,
  SiGithub,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpring,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { Code2 } from "lucide-react";

const icons = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  css: SiCss,
  django: SiDjango,
  python: SiPython,
  postgresql: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  spring: SiSpring,
  java: DiJava,
  nodejs: SiNodedotjs,
};

const colors: Record<
  string,
  { color: string; borderColor: string; textColor: string }
> = {
  sky: {
    color: "hover:bg-sky-500/10",
    borderColor: "hover:border-sky-500/50",
    textColor: "group-hover:text-sky-300",
  },
  blue: {
    color: "hover:bg-blue-500/10",
    borderColor: "hover:border-blue-500/50",
    textColor: "group-hover:text-blue-300",
  },
  yellow: {
    color: "hover:bg-yellow-500/10",
    borderColor: "hover:border-yellow-500/50",
    textColor: "group-hover:text-yellow-200",
  },
  cyan: {
    color: "hover:bg-cyan-500/10",
    borderColor: "hover:border-cyan-500/50",
    textColor: "group-hover:text-cyan-200",
  },
  emerald: {
    color: "hover:bg-emerald-500/10",
    borderColor: "hover:border-emerald-500/50",
    textColor: "group-hover:text-emerald-300",
  },
  green: {
    color: "hover:bg-green-500/10",
    borderColor: "hover:border-green-500/50",
    textColor: "group-hover:text-green-300",
  },
  orange: {
    color: "hover:bg-orange-500/10",
    borderColor: "hover:border-orange-500/50",
    textColor: "group-hover:text-orange-300",
  },
  zinc: {
    color: "hover:bg-zinc-100/10",
    borderColor: "hover:border-zinc-100/30",
    textColor: "group-hover:text-white",
  },
};

export default function TechStack() {
  return (
    <div className="mt-4 flex flex-col gap-6">
      {Object.entries(portfolio.stack).map(([category, items]) => (
        <div key={category}>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-500">
            {category}
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            {items.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons] ?? Code2;
              const style = colors[item.color];
              return (
                <Badge
                  key={item.name}
                  Icon={Icon}
                  name={item.name}
                  {...style}
                  shadowColor="hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]"
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
