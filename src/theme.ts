import { createContext, useContext } from "react";

export const appThemes = {
  emerald: {
    selection: "selection:bg-emerald-500/30",
    glowColor: "bg-emerald-500/20",
    text: "text-emerald-400",
    hoverText: "hover:text-emerald-400",
    cardBg: "bg-emerald-500 hover:bg-emerald-700",
    mainBg: "bg-emerald-500/10",
    mainBorder: "border-emerald-500/30",
    mainIcon: "text-emerald-400"
  },
  violet: {
    selection: "selection:bg-violet-500/30",
    glowColor: "bg-violet-500/20",
    text: "text-violet-400",
    hoverText: "hover:text-violet-400",
    cardBg: "bg-violet-500 hover:bg-violet-700",
    mainBg: "bg-violet-500/10",
    mainBorder: "border-violet-500/30",
    mainIcon: "text-violet-400"
  },
  sky: {
    selection: "selection:bg-sky-500/30",
    glowColor: "bg-sky-500/20",
    text: "text-sky-400",
    hoverText: "hover:text-sky-400",
    cardBg: "bg-sky-500 hover:bg-sky-700",
    mainBg: "bg-sky-500/10",
    mainBorder: "border-sky-500/30",
    mainIcon: "text-sky-400"
  },
  amber: {
    selection: "selection:bg-amber-500/30",
    glowColor: "bg-amber-500/20",
    text: "text-amber-400",
    hoverText: "hover:text-amber-400",
    cardBg: "bg-amber-500 hover:bg-amber-700",
    mainBg: "bg-amber-500/10",
    mainBorder: "border-amber-500/30",
    mainIcon: "text-amber-400"
  },
  lime: {
    selection: "selection:bg-lime-500/30",
    glowColor: "bg-lime-500/20",
    text: "text-lime-400",
    hoverText: "hover:text-lime-400",
    cardBg: "bg-lime-500 hover:bg-lime-700",
    mainBg: "bg-lime-500/10",
    mainBorder: "border-lime-500/30",
    mainIcon: "text-lime-400"
  },
  rose: {
    selection: "selection:bg-rose-500/30",
    glowColor: "bg-rose-500/20",
    text: "text-rose-400",
    hoverText: "hover:text-rose-400",
    cardBg: "bg-rose-500 hover:bg-rose-700",
      mainBg: "bg-rose-500/10",
    mainBorder: "border-rose-500/30",
    mainIcon: "text-rose-400"
  }
} as const;

export type ThemeColor = keyof typeof appThemes;
export const ThemeContext = createContext<ThemeColor | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve essere usato dentro un ThemeProvider");
  }
  return {
    color: context,
    theme: appThemes[context]
  };
}