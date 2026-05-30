import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useState } from 'react';


export default function App() {
  const [currentPage, setCurrentPage] = useState("/")
  const pureColors: Record<string, string> = {
    "/": "emerald",
    "/about": "violet",
    "/projects": "sky"
  };

  const c = pureColors[currentPage] || "emerald";
  
  return (
    <div className="min-h-screen w-full bg-slate-900 flex flex-col items-center gap-8 pb-12 pt-24">
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} color={c}/>
      <div className="w-full px-6 flex flex-col gap-1">
        <h1 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-slate-400">
          <span className="text-slate-400">$</span> SELECT <span className={`text-${c}-500`}>*</span> FROM <span className={`lowercase text-${c}-500`}>projects</span>
        </h1>
        <p className="font-mono text-xs md:text-sm text-slate-500">
          Query OK, 4 rows affected (0.02 sec)
        </p>
      </div>
      <div className="w-full px-4 flex flex-wrap md:flex-nowrap md:overflow-x-auto md:justify-start justify-center gap-6 scrollbar-none">
        <Card title="Zenit" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum explicabo at repudiandae vel animi exercitationem! Atque alias unde eum." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
        <Card title="Nexum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum explicabo at repudiandae vel animi exercitationem! Atque alias unde eum." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
        <Card title="Lorem" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum explicabo at repudiandae vel animi exercitationem! Atque alias unde eum." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
        <Card title="Ipsum" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illum explicabo at repudiandae vel animi exercitationem! Atque alias unde eum." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
      </div>

    </div>
  );
}