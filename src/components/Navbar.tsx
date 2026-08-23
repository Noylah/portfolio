import { useState } from "react";
import { useTheme } from "../theme";
import portfolio from "../data/portfolio.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className="w-full fixed top-4 left-0 z-50 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-slate-800/50 border border-slate-700 rounded-2xl h-14 px-6 flex items-center justify-between shadow-lg backdrop-blur-lg">
        <a
          href="icon.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Noyla's GitHub profile"
          className={`group flex items-center gap-2 font-mono text-base font-bold tracking-tight ${theme.text}`}
        >
          <img
            src="icon.png"
            alt=""
            className="h-10 w-10 transition-transform duration-200 group-hover:scale-105"
          />
          <span>
            noyla<span className="text-slate-400">.dev</span>
          </span>
        </a>
        <div
          className="opacity-50 flex-1 h-full border-l border-r border-slate-700 my-0 mx-2 hidden sm:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #334155 8px, #334155 9.5px)",
          }}
        ></div>
        <div className="hidden md:flex justify-end gap-6 font-code">
          {portfolio.navigation.map((link) => {
            return (
              <a
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-px text-slate-400 hover:text-white"
                href={link.href}
              >
                [ {link.label} ]
              </a>
            );
          })}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-slate-400 ${theme.hoverText} text-xs font-mono font-bold tracking-widest cursor-pointer uppercase transition-colors`}
        >
          {isOpen ? "[ close ]" : "[ menu ]"}
        </button>
        {isOpen && (
          <div className="absolute top-16 left-4 right-4 bg-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl md:hidden">
            {portfolio.navigation.map((link) => {
              return (
                <a
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm uppercase font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-px text-slate-400 ${theme.hoverText}`}
                  href={link.href}
                >
                  [ {link.label} ]
                </a>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
