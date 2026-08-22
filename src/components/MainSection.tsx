import { Braces } from "lucide-react";
import TechStack from "./TechStack";
import { useTheme } from "../theme";
import portfolio from "../data/portfolio.json";

export default function MainSection() {
  const { theme } = useTheme();
  const renderHighlightedText = (text: string, highlights: string[]) => {
    const expression = new RegExp(`(${highlights.join("|")})`, "gi");
    return text.split(expression).map((part, index) =>
      highlights.some((highlight) => highlight.toLowerCase() === part.toLowerCase()) ? (
        <strong key={`${part}-${index}`} className={`${theme.text} font-semibold`}>
          {part}
        </strong>
      ) : (
        part
      ),
    );
  };
  return (
    <section
      id="about"
      className="about-reveal relative w-full max-w-6xl scroll-mt-24 border border-slate-800 bg-slate-900/20 p-6 sm:rounded-lg sm:p-8 md:p-12"
    >
      <div
        className="absolute top-0 left-0 bottom-0 w-8 border-r border-slate-800 rounded"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 6px, #334155 6px, #334155 7.5px)",
        }}
      ></div>
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4">
        <div className="border-r border-slate-800/20 h-full"></div>
        <div className="border-r border-slate-800/20 h-full"></div>
        <div className="border-r border-slate-800/20 h-full"></div>
        <div className="h-full"></div>
      </div>
      <div className="absolute -top-3 left-4 flex items-center justify-center gap-1.5 px-2 py-0.5 rounded border border-slate-800 bg-slate-950/90 font-mono text-xs text-slate-500 shadow-lg z-10">
        <span>
          div.<span className={`${theme.text}`}>noyla</span>
        </span>
      </div>
      <div className="pl-8 pr-2 py-2">
        <div className="flex items-center">
          <span className="font-mono text-sm uppercase text-slate-400 mb-0">
            WHO AM I
          </span>
          <span className="hidden sm:block opacity-30 ml-auto font-mono text-xs text-slate-200 bg-slate-950/80 border border-slate-200/40 rounded-sm mb-1 px-2 py-1">
            noyla["info"]["personal"]
          </span>
        </div>
        <div className="w-full border-b border-slate-400/20 mb-0"></div>
        <div className="flex items-center justify-start">
          <p className="font-jakarta text-lg leading-relaxed text-white sm:text-xl">
            {renderHighlightedText(portfolio.profile.intro, portfolio.profile.introHighlights)}
          </p>
        </div>
        <div className="w-full border-b border-slate-400/20 mb-5"></div>
        <div className="flex items-center">
          <span className="font-mono text-sm uppercase text-slate-400 mb-0">
            HOW I WORK
          </span>
          <span className="hidden sm:block opacity-30 ml-auto font-mono text-xs text-slate-200 bg-slate-950/80 border border-slate-200/40 rounded-sm mb-1 px-2 py-1">
            noyla["info"]["workflow"]
          </span>
        </div>
        <div className="w-full border-b border-slate-400/20 mb-0"></div>
        <div className="flex items-center justify-start">
          <p className="font-jakarta text-lg leading-relaxed text-white sm:text-xl">
            {renderHighlightedText(portfolio.profile.workflow, portfolio.profile.workflowHighlights)}
          </p>
        </div>
        <div className="w-full border-b border-slate-400/20 mb-5"></div>
        <div className="flex flex-col">
          <div className="mt-8">
            <div className="flex items-center">
              <span className="font-mono text-sm uppercase text-slate-400 mb-0">
                WHAT DO I USE TO WORK
              </span>
              <span className="hidden sm:block opacity-30 ml-auto font-mono text-xs text-slate-200 bg-slate-950/80 border border-slate-200/40 rounded-sm mb-1 px-2 py-1">
                noyla["info"]["techstack"]
              </span>
            </div>
            <div className="px-4 pb-4 bg-slate-950/40 rounded-md border border-blue-900/20">
              <div className="mb-0 mt-4 px-4 py-1 bg-slate-800/20 w-fit rounded-md border border-blue-900/20 flex items-center justify-center space-x-2">
                <div
                  className={`w-fit h-fit p-1.5 rounded-md border ${theme.mainBg} ${theme.mainBorder} shadow-[0_0_15px_rgba(14,165,233,0.1)]`}
                >
                  <Braces
                    className={`w-5 h-5 ${theme.mainIcon} stroke-[1.5]`}
                  />
                </div>
                <span className="font-jakarta text-white text-xl uppercase text-center font-bold">
                  Tech Stack
                </span>
              </div>
              <TechStack />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-3 right-4 flex items-center justify-center gap-1.5 px-2 py-0.5 rounded border border-slate-800 bg-slate-950/90 font-mono text-xs text-slate-500 shadow-lg z-10">
        <span>noyla["info"]</span>
      </div>
    </section>
  );
}
