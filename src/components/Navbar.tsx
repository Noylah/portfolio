import { useState } from "react";

interface NavbarProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
    color?: string;
}

export default function Navbar({ currentPage, setCurrentPage, color }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
    { title: "Home", path: "/"},
    { title: "About me", path: "/about"},
    { title: "Projects", path: "/projects"}
    ];
    return (
        <nav className="w-full fixed top-4 left-0 z-50 px-4 flex justify-center">
            <div className="w-full max-w-5xl bg-slate-800 border border-slate-700 rounded-2xl h-14 px-6 flex items-center justify-between shadow-lg">
                <div className={`font-mono text-base font-bold tracking-tight text-${color}-400`}>
                    noyla<span className="text-slate-400">.dev</span>
                </div>
                <div className="hidden md:flex justify-end gap-6">
                    {links.map((link) => {
                        const isActive = currentPage === link.path;

                        return (
                            <button
                            key={link.title}
                            onClick={() => setCurrentPage(link.path)}
                            className={`text-sm uppercase font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-[1px] ${
                                isActive 
                                ? `text-${color}-500`
                                : "text-slate-400 hover:text-white"
                            }`}
                            >
                            [ {link.title} ]
                            </button>
                        );
                        })}
                </div>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={`md:hidden text-slate-400 hover:text-${color}-400 text-xs font-mono font-bold tracking-widest cursor-pointer uppercase transition-colors`}
                >
                    {isOpen ? "[ chiudi ]" : "[ menu ]"}
                </button>
                {isOpen && (
                <div className="absolute top-16 left-4 right-4 bg-slate-900/95 backdrop-blur-lg border border-slate-700/50 rounded-2xl p-4 flex flex-col gap-3 shadow-2xl md:hidden">
                    {links.map((link) => {
                        const isActive = currentPage === link.path;

                        return (
                            <button
                            key={link.title}
                            onClick={() => setCurrentPage(link.path)}
                            className={`text-sm uppercase font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-[1px] ${
                                isActive 
                                ? `text-${color}-500`
                                : "text-slate-400 hover:text-white"
                            }`}
                            >
                            [ {link.title} ]
                            </button>
                        );
                    })}
                </div>
                )}
            </div>
        </nav>
    );
}