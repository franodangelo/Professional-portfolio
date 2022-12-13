export default function WorkingProjectCard({ title, date, api, technologies }) {
    return (
        <div className="workingProjectCard">
            <div className="w-full flex justify-end gap-2">
                {api ? <span className="apiChip">API REST</span> : null}
                <span className="dateChip">{date}</span>
            </div>
            <h6 className="py-1 pb-2 text-center dark:text-white">{title}</h6>
            <section className="flex flex-wrap place-content-center py-2 gap-2">
                {technologies?.includes("JavaScript") ? <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span> : null}
                {technologies?.includes("React") ? <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span> : null}
                {technologies?.includes("Next.js") ? <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">Next.js</span> : null}
                {technologies?.includes("Redux") ? <span className="techChip dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400">Redux</span> : null}
                {technologies?.includes("Tailwind") ? <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span> : null}
                {technologies?.includes("CSS") ? <span className="techChip text-white bg-blue-500/80 dark:bg-blue-500">CSS</span> : null}
                {technologies?.includes("Node.js") ? <span className="techChip text-white bg-green-600/80 dark:bg-green-600">Node.js</span> : null}
                {technologies?.includes("Express") ? <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">Express</span> : null}
                {technologies?.includes("Firebase") ? <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">Firebase</span> : null}
                {technologies?.includes("MySQL") ? <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">MySQL</span> : null}
                {technologies?.includes("PostgreSQL") ? <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">PostgreSQL</span> : null}
                {technologies?.includes("Sequelize") ? <span className="techChip dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300">Sequelize</span> : null}
            </section>
        </div>
    )
}
