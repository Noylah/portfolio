import { TypeAnimation } from 'react-type-animation';
import MainSection from '../components/MainSection'
import Footer from '../components/Footer';
import { useTheme } from "../theme";

export default function Home() {
    const { theme } = useTheme();
    return (
        <>

            <div className="relative w-full text-left pt-15 md:pt-30 px-10">
            <div className={`absolute top-0 left-1 md:left-1/2 -translate-x-1/2 w-96 h-96 ${theme.glowColor} rounded-full blur-[100px] pointer-events-none`} />

                <div className="font-jakarta relative flex items-center justify-center flex-col mb-20">                    <h1 className="text-5xl md:text-8xl mb-3 sm:mb-5 font-black text-white">
                    SELECT <span className={`${theme.text}`}>*</span> FROM <span className={`${theme.text} lowercase`}>noyla</span>
                    </h1>
                    <p className="inline-block h-16 sm:h-auto align-center text-slate-400 mt-2 text-xl">Query OK, 1 <span className={`${theme.text} font-semibold text-2xl`}>
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
                <Footer />
            </>
        )
}