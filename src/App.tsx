import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeContext, appThemes, ThemeColor } from './theme';

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");
  const pureColors: Record<string, ThemeColor> = {
      "/": "emerald",
      "/about": "violet",
      "/projects": "sky"
  };

  const c = pureColors[currentPage] || "emerald";
  const selectionClass = appThemes[c].selection;

  return (
    <ThemeContext.Provider value={c}>
      <div className={`min-h-screen w-full bg-slate-950 flex flex-col items-center gap-8 pb-12 pt-24 ${selectionClass}`}>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>

        {currentPage === "/" && <Home />}
      </div>
    </ThemeContext.Provider>
  );
}