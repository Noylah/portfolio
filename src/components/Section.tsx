import { Braces } from "lucide-react"
import TechStack from "./TechStack"

export default function Section() {
    return (
        <div className="relative w-full max-w-6xl h-auto border border-slate-800 bg-slate-900/20 rounded-lg p-8 md:p-12">
            <div className="absolute top-0 left-0 bottom-0 w-8 border-r border-dashed border-slate-800 rounded" style={{
    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 6px, #334155 6px, #334155 7.5px)'
    }}>
            </div>
            <div className="absolute inset-0 pointer-events-none grid grid-cols-4">
                <div className="border-r border-slate-800/20 h-full"></div>
                <div className="border-r border-slate-800/20 h-full"></div>
                <div className="border-r border-slate-800/20 h-full"></div>
                <div className="h-full"></div>
            </div>
            <div className="absolute -top-3 left-4 flex items-center justify-center gap-1.5 px-2 py-0.5 rounded border border-slate-800 bg-slate-950/90 font-mono text-xs text-slate-500 shadow-lg z-10">
                <span>div.noyla</span>
            </div>
            <div className="pl-8 pr-2 py-2">
                <div className="w-full border-b border-slate-400/20 mb-0"></div>
                <div className="flex items-center justify-start">
                    <p className="font-jakarta text-white text-xl">I create projects to solve real problems and to help people. I am a predominantly front-end developer but also have back-end skills.</p>
                </div>
                <div className="w-full border-b border-slate-400/20 mb-2"></div>
                <div className="flex flex-col">
                    <div className="px-4 pb-4 mt-4 bg-slate-950/40 rounded-md border border-blue-900/20">
                        <div className="mb-0 mt-4 px-4 py-1 bg-slate-800/20 w-fit rounded-md border border-blue-900/20 flex items-center justify-center space-x-2">
                            <div className="w-fit h-fit p-1.5 rounded-md border border-sky-500/20 bg-sky-500/10 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                                <Braces className="w-5 h-5 text-sky-400 stroke-[1.5]" />
                            </div>
                            <span className="font-jakarta text-white text-xl uppercase text-center font-bold">Tech Stack</span>
                        </div>
                        <TechStack />
                    </div>
                    <div className="w-full border-b border-slate-800/20 mb-0"></div>
                </div>
            </div>
        </div>
    )
}