import { SiGithub, SiTelegram } from "react-icons/si";
import { useTheme } from "../theme";
import portfolio from "../data/portfolio.json";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      id="contact"
      className="relative mt-24 w-full border-y border-slate-800 bg-slate-950/80 px-8 font-mono text-xs text-slate-400 backdrop-blur-md md:px-12"
    >
      <div className="absolute -top-3 left-4 flex items-center justify-center gap-1.5 px-2 py-0.5 rounded border border-slate-800 bg-slate-950/90 font-mono text-xs text-slate-500 shadow-lg z-10">
        <span>
          div.<span className={`${theme.text}`}>footer</span>
        </span>
      </div>
      <div className="flex items-center max-w-5xl mx-auto min-h-16 justify-start">
        <div>
          <span className="text-md">
            {portfolio.profile.name}.
            <span className={`${theme.text}`}>{portfolio.profile.domain}</span>
          </span>
        </div>
        <div className="ml-auto flex flex-col space-y-1">
          {portfolio.socials.map((social) => (
            <a
              key={social.label}
              className="flex items-center space-x-2 group hover:text-white"
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon === "github" ? (
                <SiGithub className="h-3 w-3 group-hover:fill-white" />
              ) : (
                <SiTelegram className="h-3 w-3 group-hover:fill-white" />
              )}
              <span>{social.label}</span>
            </a>
          ))}
        </div>
        <div
          className="z-[-1] opacity-5 absolute right-0 top-0 bottom-0 w-full h-full border-l border-r border-dashed border-slate-800/80"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 8px, #334155 8px, #334155 9.5px)",
          }}
        ></div>
      </div>
    </footer>
  );
}
