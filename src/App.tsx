import { useState } from 'react';
// import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";

export default function App() {
  const [currentPage, setCurrentPage] = useState("/");
  const pureColors: Record<string, string> = {
    "/": "emerald",
    "/about": "violet",
    "/projects": "sky"
  };

  const c = pureColors[currentPage] || "emerald";

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center gap-8 pb-12 pt-24">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} color={c}/>

      {currentPage === "/" && <Home color={pureColors[currentPage]}/>}
      {/* {currentPage === "/projects" && <Projects color={pureColors[currentPage]}/>} */}

      {/* <div className="w-full px-4 flex flex-wrap md:flex-nowrap md:overflow-x-auto md:justify-start justify-center gap-6 scrollbar-none">
        <Card title="Zenit" description="Lorem ipsum dolor sit..." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
        <Card title="Nexum" description="Lorem ipsum dolor sit..." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
        <Card title="Lorem" description="Lorem ipsum dolor sit..." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
        <Card title="Ipsum" description="Lorem ipsum dolor sit..." primaryBtn="Primary" secondaryBtn="Secondary" color={c}/>
      </div> */}

    </div>
  );
}