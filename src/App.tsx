import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeContext } from "./theme";

export default function App() {
  return (
    <ThemeContext.Provider value="rose">
      <div className="min-h-screen w-full overflow-hidden bg-slate-950 text-slate-100 selection:bg-rose-500/30">
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}
