import Badge from '../components/Badge';
import { 
  SiDjango, 
  SiJavascript, 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiCss, 
  SiTailwindcss, 
  SiPostgresql,
  SiGit, 
  SiGithub 
} from 'react-icons/si';

export default function TechStack() {
    return (
        <div className="mt-12 flex flex-col gap-6">
            <div>
                <h3 className="font-mono text-slate-500 text-xs uppercase tracking-wider mb-3">FRONTEND STACK</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <Badge
                        Icon={SiReact}
                        name="React"
                        color="hover:bg-sky-500/10"
                        borderColor="hover:border-sky-500/50"
                        textColor="group-hover:text-sky-300"
                    />
                    <Badge
                        Icon={SiTypescript} 
                        name="Typescript"
                        color="hover:bg-blue-500/10"
                        borderColor="hover:border-blue-500/50"
                        textColor="group-hover:text-blue-300"
                    />
                    <Badge
                        Icon={SiJavascript} 
                        name="Javascript"
                        color="hover:bg-yellow-500/10"
                        borderColor="hover:border-yellow-500/50"
                        textColor="group-hover:text-yellow-200"
                    />
                    <Badge
                        Icon={SiTailwindcss} 
                        name="Tailwind CSS"
                        color="hover:bg-cyan-500/10"
                        borderColor="hover:border-cyan-500/50"
                        textColor="group-hover:text-cyan-200"
                    />
                    <Badge
                        Icon={SiCss} 
                        name="CSS3"
                        color="hover:bg-blue-600/10"
                        borderColor="hover:border-blue-600/50"
                        textColor="group-hover:text-blue-400"
                    />
                </div>
            </div>
            <div>
                <h3 className="font-mono text-slate-500 text-xs uppercase tracking-wider mb-3">BACKEND STACK</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <Badge
                        Icon={SiDjango} 
                        name="Django"
                        color="hover:bg-emerald-800/10"
                        borderColor="hover:border-emerald-800/50"
                        textColor="group-hover:text-emerald-300"
                    /> 
                    <Badge
                        Icon={SiPython} 
                        name="Python"
                        color="hover:bg-orange-400/10"
                        borderColor="hover:border-yellow-600/30"
                        textColor="group-hover:text-yellow-300"
                    /> 
                </div>
            </div>
            <div>
                <h3 className="font-mono text-slate-500 text-xs uppercase tracking-wider mb-3">DATABASES & TOOLS</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <Badge
                        Icon={SiPostgresql} 
                        name="SQL"
                        color="hover:bg-sky-600/10"
                        borderColor="hover:border-sky-600/50"
                        textColor="group-hover:text-sky-300"
                    /> 
                    <Badge
                        Icon={SiGit} 
                        name="Git"
                        color="hover:bg-orange-600/10"
                        borderColor="hover:border-orange-600/50"
                        textColor="group-hover:text-orange-300"
                    /> 
                    <Badge
                        Icon={SiGithub} 
                        name="GitHub"
                        color="hover:bg-zinc-100/10"
                        borderColor="hover:border-zinc-100/30"
                        textColor="group-hover:text-white"
                    /> 
                </div>
            </div>

        </div>
    )
}