import React, { useContext } from "react";
import Image from "next/image";
import propertyImg1 from "../public/assets/projects/project1.jpg";
import propertyImg2 from "../public/assets/projects/project2.jpg";
import propertyImg3 from "../public/assets/projects/project3.png";
import propertyImg4 from "../public/assets/projects/project4.png";
import propertyImg5 from "../public/assets/projects/project5.png";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
    const { texts } = useContext(LanguageContext);

    return (
        <main id="projects" className="w-full md:h-full p-6 md:px-16 md:py-24 items-center justify-center bg-white dark:bg-slate-900 shadow-lg">
            <div className="h-full mx-auto">
                <h6 className="sectionTypeHeading">✔️ {texts.projectsSection}</h6>
                <h2 className="text-center">{texts.projectsH1}</h2>
                <section className="grid grid-cols-1 py-4 gap-8 md:grid-cols-3">
                    <div className="projectCard">
                        <span className="dateChip">Sep 22</span>
                        <Image src={propertyImg5} alt="project thumbnail"
                            className="rounded object-cover" height={200} width={400} />
                        <div>
                            <div className="pb-4">
                                <h6 className="projectCardTitle">Tennis E-commerce</h6>
                                <p className="projectCardResponsive">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                                <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                                <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                                <span className="techChip text-white bg-yellow-500 dark:bg-yellow-500/80">Firebase</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="projectCardButton">
                                <a href="https://github.com/franodangelo/React-Ecommerce"
                                    target="_blank" rel="noreferrer">
                                    <FaGithub className="dark:text-slate-200" />
                                </a>
                            </span>
                            <span className="projectCardButton">
                                <a className="cursor" href="https://advantage-tennis-ecommerce.vercel.app/"
                                    target="_blank" rel="noreferrer">
                                    <IoMdOpen className="dark:text-slate-200" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="projectCard">
                        <div className="w-full flex justify-end gap-2">
                            <span className="apiChip">API REST</span>
                            <span className="dateChip">{texts.projectsAug} 22</span>
                        </div>
                        <Image src={propertyImg4} alt="project thumbnail"
                            className="rounded object-cover" height={200} width={400} />
                        <div>
                            <div className="pb-4">
                                <h6 className="projectCardTitle">Small Weather App</h6>
                                <p className="projectCardResponsive">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                                <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">Next.js</span>
                                <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="projectCardButton">
                                <a href="https://github.com/franodangelo/Weather-app"
                                    target="_blank" rel="noreferrer">
                                    <FaGithub className="dark:text-slate-200" />
                                </a>
                            </span>
                            <span className="projectCardButton">
                                <a href="https://howistheweathernow.vercel.app/"
                                    target="_blank" rel="noreferrer">
                                    <IoMdOpen className="dark:text-slate-200" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="projectCard">
                        <span className="dateChip">{texts.projectsAug} 22</span>
                        <Image src={propertyImg3} alt="project thumbnail"
                            className="rounded object-cover" height={200} width={400} />
                        <div>
                            <div className="pb-4">
                                <h6 className="projectCardTitle">Services SPA</h6>
                                <p className="projectCardResponsive">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                                <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                                <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="projectCardButton">
                                <a href="https://github.com/franodangelo/Services-SPA"
                                    target="_blank" rel="noreferrer">
                                    <FaGithub className="dark:text-slate-200" />
                                </a>
                            </span>
                            <span className="projectCardButton">
                                <a href="https://mybrandservices.vercel.app/"
                                    target="_blank" rel="noreferrer">
                                    <IoMdOpen className="dark:text-slate-200" />
                                </a>
                            </span>
                        </div>
                    </div>
                </section>
                {/* Last row */}
                <section className="grid grid-cols-1 py-4 gap-8 md:grid-cols-6">
                    <div className="md:col-start-2 md:col-span-2 projectCard">
                        <div className="w-full flex justify-end gap-2">
                            <span className="apiChip">API REST</span>
                            <span className="dateChip">Jun 22</span>
                        </div>
                        <Image src={propertyImg2} alt="project thumbnail"
                            className="rounded object-cover" height={200} width={400} />
                        <div>
                            <div className="pb-4">
                                <h6 className="projectCardTitle">yumPaw: Pet Care & Shop</h6>
                                <p className="projectCardNotResponsive">{texts.projectsNotResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                                <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                                <span className="techChip dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400">Redux</span>
                                <span className="techChip text-white bg-blue-500/80 dark:bg-blue-500">CSS</span>
                                <span className="techChip text-white bg-green-600/80 dark:bg-green-600">Node.js</span>
                                <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">Express</span>
                                <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">PostgreSQL</span>
                                <span className="techChip dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300">Sequelize</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="projectCardButton">
                                <a href="https://github.com/franodangelo/yumPaw-Project"
                                    target="_blank" rel="noreferrer">
                                    <FaGithub className="dark:text-slate-200" />
                                </a>
                            </span>
                            <span className="projectCardButton">
                                <a href="https://client-pg.vercel.app/"
                                    target="_blank" rel="noreferrer">
                                    <IoMdOpen className="dark:text-slate-200" />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="md:col-start-4 md:col-span-2 projectCard">
                        <div className="w-full flex justify-between">
                            <div className="w-full flex justify-end gap-2">
                                <span className="apiChip">API REST</span>
                                <span className="dateChip">May 22</span>
                            </div>
                        </div>
                        <Image src={propertyImg1} alt="project thumbnail"
                            className="rounded object-cover" height={200} width={400} />
                        <div>
                            <div className="pb-4">
                                <h6 className="projectCardTitle">Gameon: Video games Project</h6>
                                <p className="projectCardResponsive">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                                <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                                <span className="techChip dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400">Redux</span>
                                <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                                <span className="techChip text-white bg-green-600/80 dark:bg-green-600">Node.js</span>
                                <span className="techChip dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200">Express</span>
                                <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">PostgreSQL</span>
                                <span className="techChip dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300">Sequelize</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="projectCardButton">
                                <a href="https://github.com/franodangelo/Videogames-Proyect"
                                    target="_blank" rel="noreferrer">
                                    <FaGithub className="dark:text-slate-200" />
                                </a>
                            </span>
                            <span className="projectCardButton">
                                <a href="https://gameon-platform.vercel.app/"
                                    target="_blank" rel="noreferrer">
                                    <IoMdOpen className="dark:text-slate-200" />
                                </a>
                            </span>
                        </div>
                    </div>
                </section>
                {/* <h4 className="secondaryHeading text-center">{texts.projectsWorkingOn}</h4>
                <section className="grid py-4 grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="workingProjectCard">
                        <span className="dateChip">Oct 22</span>
                        <h6 className="py-1 pb-2 text-center dark:text-white">{`Client's Company Website`}</h6>
                        <div className="flex flex-wrap place-content-center py-2 gap-2">
                            <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                            <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                            <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                        </div>
                    </div>
                    <div className="workingProjectCard">
                        <div className="w-full flex justify-end gap-2">
                            <span className="apiChip">API REST</span>
                            <span className="dateChip">Nov 22</span>
                        </div>
                        <h6 className="py-1 pb-2 text-center dark:text-white">Streaming SPA</h6>
                        <div className="flex flex-wrap place-content-center py-2 gap-2">
                            <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                            <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                            <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                        </div>
                    </div>
                </section> */}
            </div>
        </main>
    )
}
