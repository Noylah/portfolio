import { SiGithub, SiTelegram } from "react-icons/si"

export default function Footer() {
    return (
        <footer className="relative w-full mt-auto border-y border-slate-800 bg-slate-950/80 backdrop-blur-md font-mono text-xs text-slate-400 px-8 md:px-12">
            <div className="absolute -top-3 left-4 flex items-center justify-center gap-1.5 px-2 py-0.5 rounded border border-slate-800 bg-slate-950/90 font-mono text-xs text-slate-500 shadow-lg z-10">
                <span>div.footer</span>
            </div>
            <div className="flex items-center max-w-5xl mx-auto min-h-16 justify-start">
                <div>
                    <span className="text-md">noyla.<span className="text-emerald-500">dev</span></span>
                </div>
                <div className="ml-auto flex flex-col space-y-1">
                    <div className="flex space-x-2 items-center group cursor-pointer" onClick={() => window.open('https://github.com/noylah', '_blank', 'noopener,noreferrer')}><SiGithub className="h-3 w-3 p-0 group-hover:fill-white" /><span className="text-md group-hover:text-white duration-300">Github</span></div>
                    <div className="flex space-x-2 items-center group cursor-pointer" onClick={() => window.open('https://telegram.me/sconfittoo', '_blank', 'noopener,noreferrer')}><SiTelegram className="h-3 w-3 p-0 group-hover:fill-white" /><span className="text-md group-hover:text-white transition-all duration-300">Telegram</span></div>
                </div>
                    <div 
                    className="z-[-1] opacity-5 absolute right-0 top-0 bottom-0 w-full h-full border-l border-r border-dashed border-slate-800/80" 
                    style={{
                        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 8px, #334155 8px, #334155 9.5px)'
                    }}
                ></div>
            </div>
        </footer>
    )
}