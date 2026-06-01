interface CardProps {
    title: string;
    description: string;
    image?: string;
    primaryBtn?: string;
    secondaryBtn?: string;
    primaryBtnClick?: () => void;
    secondaryBtnClick?: () => void;
    color?: string; 
}

export default function Card({ title, description, image, primaryBtn, secondaryBtn, primaryBtnClick, secondaryBtnClick, color = "emerald"}: CardProps) {
        const bgColors: Record<string, string> = {
        emerald: "bg-emerald-500 hover:bg-emerald-700",
        violet: "bg-violet-500 hover:bg-violet-700",
        sky: "bg-sky-500 hover:bg-sky-700"
    };

    const currentBg = bgColors[color] || bgColors.emerald;

    return (
        <div className="shrink-0 w-full max-w-[384px] p-4 bg-slate-800/30 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center">
            {image ? <div className={`h-44 w-full rounded-xl flex items-center justify-center mb-2 ${currentBg}`}> <img src={image} alt="Card Image" className="w-full h-full object-cover rounded-xl"></img></div> : ""}
            <div className="p-2 flex flex-col">
                <h1 className="text-white font-semibold text-2xl">{title}</h1>
                <p className="text-slate-400 text-md sm:text-sm">{description}</p>
            </div>
            { secondaryBtn || primaryBtn &&
                <div className="self-end flex mt-auto py-2">
                    { secondaryBtn ? <a className="text-slate-300 px-4 py-2 cursor-pointer hover:text-white" onClick={secondaryBtnClick}>{secondaryBtn}</a> : "" }
                    { primaryBtn ? <a className={`text-white px-4 py-2 rounded-lg cursor-pointer font-semibold ${currentBg}`} onClick={primaryBtnClick}>{primaryBtn}</a> : "" }
                </div>
            }
        </div>
    )
}