import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

export default function ProjectCard(props) {
    return (
        <main className="projectCard">
            <div className="w-full flex justify-end gap-2">
                {props.api ? <span className="apiChip">API REST</span> : null}
                <span className="dateChip">{props.date}</span>
            </div>
            <Image src={props.img} alt="project thumbnail"
                className="rounded object-cover" height={200} width={400}
            />
            <section>
                <div className="pb-4">
                    <h6 className="projectCardTitle">{props.title}</h6>
                    <p className="projectCardResponsive">{props.isResponsive}</p>
                </div>
                <div className="flex flex-wrap place-content-center py-4 gap-2">
                    {props.technologies?.includes("JavaScript") ? <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span> : null}
                    {props.technologies?.includes("React") ? <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span> : null}
                    {props.technologies?.includes("Redux") ? <span className="techChip dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400">Redux</span> : null}
                    {props.technologies?.includes("Tailwind") ? <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span> : null}
                    {props.technologies?.includes("CSS") ? <span className="techChip text-white bg-blue-500/80 dark:bg-blue-500">CSS</span> : null}
                    {props.technologies?.includes("Node.js") ? <span className="techChip text-white bg-green-600/80 dark:bg-green-600">Node.js</span> : null}
                    {props.technologies?.includes("Express") ? <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">Express</span> : null}
                    {props.technologies?.includes("Firebase") ? <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">Firebase</span> : null}
                    {props.technologies?.includes("PostgreSQL") ? <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">PostgreSQL</span> : null}
                    {props.technologies?.includes("Sequelize") ? <span className="techChip dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300">Sequelize</span> : null}
                </div>
            </section>
            <div className="flex mt-4 justify-center items-center gap-4">
                <span className="projectCardButton">
                    <a href={props.repo} target="_blank" rel="noreferrer">
                        <FaGithub className="dark:text-slate-200" />
                    </a>
                </span>
                <span className="projectCardButton">
                    <a className="cursor" href={props.demo} target="_blank" rel="noreferrer">
                        <IoMdOpen className="dark:text-slate-200" />
                    </a>
                </span>
            </div>
        </main>
    )
}
