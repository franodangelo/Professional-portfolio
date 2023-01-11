import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

export default function ProjectCard({
    migration,
    api,
    date,
    img,
    title,
    isResponsive,
    technologies,
    repo,
    demo,
}) {
    return (
        <main className="projectCard">
            <div className="w-full flex justify-end gap-2">
                {migration ? (
                    <span className="apiChip">Updating backend...</span>
                ) : null}
                {api ? <span className="apiChip">+ API</span> : null}
                <span className="dateChip">{date}</span>
            </div>
            <Image
                src={img}
                alt={`${title}'s thumbnail`}
                className="rounded object-cover"
                height={200}
                width={400}
            />
            <section>
                <div className="pb-4">
                    <h6 className="projectCardTitle text-base md:text-lg">
                        {title}
                    </h6>
                    {isResponsive.length > 17 ? (
                        <p className="projectCardNotResponsive">
                            {isResponsive}
                        </p>
                    ) : (
                        <p className="projectCardResponsive">{isResponsive}</p>
                    )}
                </div>
                <div className="flex flex-wrap place-content-center py-4 gap-2">
                    {technologies?.includes("JavaScript") ? (
                        <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">
                            JavaScript
                        </span>
                    ) : null}
                    {technologies?.includes("React") ? (
                        <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">
                            React
                        </span>
                    ) : null}
                    {technologies?.includes("Vite") ? (
                        <span className="techChip text-white bg-purple-500/80 dark:bg-purple-500">
                            Vite
                        </span>
                    ) : null}
                    {technologies?.includes("Next.js") ? (
                        <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">
                            Next.js
                        </span>
                    ) : null}
                    {technologies?.includes("Redux") ? (
                        <span className="techChip dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400">
                            Redux
                        </span>
                    ) : null}
                    {technologies?.includes("Tailwind") ? (
                        <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">
                            Tailwind
                        </span>
                    ) : null}
                    {technologies?.includes("CSS") ? (
                        <span className="techChip text-white bg-blue-500/80 dark:bg-blue-500">
                            CSS
                        </span>
                    ) : null}
                    {technologies?.includes("Node.js") ? (
                        <span className="techChip text-white bg-green-600/80 dark:bg-green-600">
                            Node.js
                        </span>
                    ) : null}
                    {technologies?.includes("Express") ? (
                        <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">
                            Express
                        </span>
                    ) : null}
                    {technologies?.includes("Firebase") ? (
                        <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">
                            Firebase
                        </span>
                    ) : null}
                    {technologies?.includes("MySQL") ? (
                        <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">
                            MySQL
                        </span>
                    ) : null}
                    {technologies?.includes("PostgreSQL") ? (
                        <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">
                            PostgreSQL
                        </span>
                    ) : null}
                    {technologies?.includes("Sequelize") ? (
                        <span className="techChip dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300">
                            Sequelize
                        </span>
                    ) : null}
                </div>
            </section>
            <div className="flex mt-4 justify-center items-center gap-4">
                <span className="projectCardButton">
                    <a href={repo} target="_blank" rel="noreferrer">
                        <FaGithub className="dark:text-slate-200" />
                    </a>
                </span>
                {demo ? (
                    <span className="projectCardButton">
                        <a
                            className="cursor"
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoMdOpen className="dark:text-slate-200" />
                        </a>
                    </span>
                ) : (
                    <span className="projectCardButton-disabled">
                        <a
                            className="cursor"
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IoMdOpen className="dark:text-slate-200" />
                        </a>
                    </span>
                )}
            </div>
        </main>
    );
}
