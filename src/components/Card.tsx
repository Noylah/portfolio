import { useTheme } from "../theme";
interface CardProps {
  title: string;
  description: string;
  stack: string[];
  status: string;
  accent: string;
  repository?: string;
  project?: string;
  pullRequest?: string;
}

export default function Card({
  title,
  description,
  stack,
  status,
  accent,
  repository,
  project,
  pullRequest,
}: CardProps) {
  const { theme } = useTheme();
  const accentClass =
    { sky: "bg-sky-400", emerald: "bg-emerald-400", rose: "bg-rose-400" }[
      accent
    ] ?? "bg-slate-400";
  return (
    <article className="card-reveal flex min-h-64 flex-col border border-slate-700/60 bg-slate-900/50 p-5 transition-transform duration-300 hover:-translate-y-1 hover:border-slate-500">
      <div className={`mb-6 h-1 w-14 ${accentClass}`} />
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="font-jakarta text-2xl font-bold text-white">{title}</h3>
        <span className={`${theme.text} shrink-0 font-mono text-[10px]`}>
          {status}
        </span>
      </div>
      <p className="mb-6 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-800 pt-4">
        {stack.map((item) => (
          <span
            key={item}
            className="border border-slate-700 px-2 py-1 font-mono text-[10px] uppercase text-slate-500"
          >
            {item}
          </span>
        ))}
      </div>
      {(repository || project || pullRequest) && (
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs uppercase">
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.text} hover:text-white`}
            >
              repository -&gt;
            </a>
          )}
          {project && (
            <a
              href={project}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.text} hover:text-white`}
            >
              project -&gt;
            </a>
          )}
          {pullRequest && (
            <a
              href={pullRequest}
              target="_blank"
              rel="noopener noreferrer"
              className={`${theme.text} hover:text-white`}
            >
              pull request -&gt;
            </a>
          )}
        </div>
      )}
    </article>
  );
}
