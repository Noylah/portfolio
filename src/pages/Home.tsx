import { TypeAnimation } from 'react-type-animation';
import MainSection from '../components/MainSection'
import Footer from '../components/Footer';

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
    return (
        <>

            <div className="relative w-full text-left pt-15 md:pt-30 px-10">
            <div className={`absolute top-0 left-1 md:left-1/2 -translate-x-1/2 w-96 h-96 ${currentGlow} rounded-full blur-[100px] pointer-events-none`} />

                <div className="font-jakarta relative flex items-center justify-center flex-col mb-20">                    <h1 className="text-5xl md:text-8xl mb-3 sm:mb-5 font-black text-white">
                    SELECT <span className={`${currentTextColor}`}>*</span> FROM <span className={`${currentTextColor} lowercase`}>noyla</span>
                    </h1>
                    <p className="inline-block h-16 sm:h-auto align-center text-slate-400 mt-2 text-xl">Query OK, 1 <span className={`${currentTextColor} font-semibold text-2xl`}>
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
                    </span>affected (0.02 sec)</p>                    
                </div>
                    
                <div className="flex items-center justify-center flex-col gap-12"><MainSection /></div>

                </div>
                <Footer/>
            </>
        )
}