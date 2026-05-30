import { PropsWithChildren } from 'react'

export default function SQLHeader({children}: PropsWithChildren) {
    return (
        <div className="w-full px-6 flex flex-col gap-1">
            <h1 className="font-mono text-xl md:text-2xl font-bold tracking-tight text-slate-400">
                {children}
            </h1>
            <p className="font-mono text-xs md:text-sm text-slate-500">
                Query OK, 4 rows affected (0.02 sec)
            </p>
        </div>
    )
}

// <span className="text-slate-400">$</span> SELECT <span className={currentTitleColor}>*</span> FROM <span className={`lowercase ${currentTitleColor}`}>projects</span>