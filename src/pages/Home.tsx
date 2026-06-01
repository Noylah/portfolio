import { TypeAnimation } from 'react-type-animation';

export default function Home({ color }: { color: string }) {
    const glowColors: Record<string, string> = {
        emerald: "bg-emerald-500/20",
        violet: "bg-violet-500/20",
        sky: "bg-sky-500/20"
    };
    const textColors: Record<string, string> = {
        emerald: "text-emerald-500",
        violet: "text-violet-500",
        sky: "text-sky-500"
    };
    const currentTextColor = textColors[color] || textColors["emerald"]
    const currentGlow = glowColors[color] || glowColors["emerald"]
    const borderColorMap: Record<string, string> = {
        emerald: "border-emerald-500",
        violet: "border-violet-500",
        sky: "border-sky-500"
    };
    return (
        <div className="sm:fixed sm:inset-0 flex flex-col items-center justify-center text-center px-10 bg-slate-950 overflow-hidden">
            <div className={`absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-96 h-96 md:w-150 md:h-150 ${currentGlow} rounded-full blur-[100px] md:blur-[150px] pointer-events-none z-0`} />

            <div className="relative mt-10 sm:mt-0 z-10 flex items-center justify-center flex-col">
                <h1 className="font-jakarta text-5xl md:text-8xl font-black text-white">
                    SELECT <span className={`${currentTextColor}`}>*</span> FROM <span className={`${currentTextColor} lowercase`}>noyla</span>
                </h1>
                <p className="font-jakarta text-slate-400 mt-4 text-xl md:text-2xl">
                    Query OK, 1 <span className={`${currentTextColor} font-semibold text-2xl`}>
                    <TypeAnimation
                        sequence={[
                            'FULL STACK EXPLORER',
                            1500,
                            'DATA & WEB ENTHUSIAST',
                            1500,
                            'CURIOUS DEVELOPER',
                            1500,
                        ]}
                        repeat={Infinity}
                    />    
                    </span> affected (0.02 sec)
                </p>
            </div>
            <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-10 sm:flex flex-col items-center gap-1 animate-bounce opacity-70">
                <span className="font-mono text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
                <div className={`w-3 h-3 border-b-2 border-r-2 ${borderColorMap[color] || 'border-emerald-500'} rotate-45 mt-1`} />
            </div>
            
        </div>
    )
}