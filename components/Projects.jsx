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
                <h2 className="py-4 font-extrabold text-center text-blue-600 dark:text-white">{texts.projectsH1}</h2>
                <section className="grid grid-cols-1 py-4 gap-8 md:grid-cols-3">
                    <div className="flex flex-col h-auto w-full p-8 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">Sep 22</span>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg5} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center dark:text-white border-t-2 border-slate-200 dark:border-slate-500">Tennis E-commerce</h6>
                                <p className="font-light text-xs text-center text-blue-500 dark:text-blue-400 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 dark:bg-cyan-500 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 dark:bg-emerald-500 rounded-full">Tailwind</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-yellow-500 dark:bg-yellow-500/80 rounded-full">Firebase</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/React-Ecommerce" target="_blank" rel="noreferrer"><FaGithub className="dark:text-slate-200" /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a className="cursor" href="https://advantage-tennis-ecommerce.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen className="dark:text-slate-200" /></a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-full p-8 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-end gap-2">
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 dark:text-blue-500 bg-blue-200/50 dark:bg-blue-200 rounded-md uppercase">API REST</span>
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">{texts.projectsAug} 22</span>
                        </div>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg4} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center dark:text-white border-t-2 border-slate-200 dark:border-slate-500">Small Weather App</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200 rounded-full">Next.js</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 dark:bg-emerald-500 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Weather-app" target="_blank" rel="noreferrer"><FaGithub className="dark:text-slate-200" /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://howistheweathernow.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen className="dark:text-slate-200" /></a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-full p-8 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">{texts.projectsAug} 22</span>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg3} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center dark:text-white border-t-2 border-slate-200 dark:border-slate-500">Services SPA</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 dark:bg-cyan-500 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 dark:bg-emerald-500 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Services-SPA" target="_blank" rel="noreferrer"><FaGithub className="dark:text-slate-200" /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://mybrandservices.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen className="dark:text-slate-200" /></a>
                            </span>
                        </div>
                    </div>
                </section>
                {/* Last row */}
                <section className="grid grid-cols-1 py-4 gap-8 md:grid-cols-6">
                    <div className="md:col-start-2 md:col-span-2 flex flex-col h-auto w-full p-8 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-end gap-2">
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 dark:text-blue-500 bg-blue-200/50 dark:bg-blue-200 rounded-md uppercase">API REST</span>
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">Jun 22</span>
                        </div>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg2} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center dark:text-white border-t-2 border-slate-200 dark:border-slate-500">yumPaw: Pet Care & Shop</h6>
                                <p className="font-light text-xs text-center text-slate-400 uppercase">{texts.projectsNotResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 dark:bg-cyan-500 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400 rounded-full">Redux</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-blue-500/80 dark:bg-blue-500 rounded-full">CSS</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-green-600/80 dark:bg-green-600 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-blue-700/80 dark:bg-blue-600 rounded-full">PostgreSQL</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300 rounded-full">Sequelize</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/yumPaw-Project" target="_blank" rel="noreferrer"><FaGithub className="dark:text-slate-200" /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://client-pg.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen className="dark:text-slate-200" /></a>
                            </span>
                        </div>
                    </div>
                    <div className="md:col-start-4 md:col-span-2 flex flex-col h-full w-full p-8 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-between">
                            <div className="w-full flex justify-end gap-2">
                                <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 dark:text-blue-500 bg-blue-200/50 dark:bg-blue-200 rounded-md uppercase">API REST</span>
                                <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">May 22</span>
                            </div>
                        </div>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg1} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center dark:text-white border-t-2 border-slate-200 dark:border-slate-500">Gameon: Video games Project</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 dark:bg-cyan-500 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-violet-400/80 dark:bg-violet-400 rounded-full">Redux</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 dark:bg-emerald-500 rounded-full">Tailwind</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-green-600/80 dark:bg-green-600 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-slate-200/80 dark:bg-slate-200 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-blue-700/80 dark:bg-blue-600 rounded-full">PostgreSQL</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300 rounded-full">Sequelize</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Videogames-Proyect" target="_blank" rel="noreferrer"><FaGithub className="dark:text-slate-200" /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://gameon-platform.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen className="dark:text-slate-200" /></a>
                            </span>
                        </div>
                    </div>
                </section>
                <h4 className="mt-8 py-4 font-extrabold text-center text-blue-600 dark:text-white">{texts.projectsWorkingOn}</h4>
                <section className="grid py-4 grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col h-auto w-full p-4 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">Oct 22</span>
                        <div>
                            <div className="pb-2">
                                <h6 className="py-1 text-center dark:text-white">{`Client's Company Website`}</h6>
                            </div>
                            <div className="flex flex-wrap place-content-center py-2 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 dark:bg-cyan-500 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 dark:bg-emerald-500 rounded-full">Tailwind</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-full p-4 items-center justify-center dark:bg-slate-900 shadow-md shadow-blue-200 dark:shadow-blue-900/50 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-end gap-2">
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 dark:text-blue-500 bg-blue-200/50 dark:bg-blue-200 rounded-md uppercase">API REST</span>
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 dark:bg-blue-500 rounded-md uppercase">Nov 22</span>
                        </div>
                        <div>
                            <div className="pb-2">
                                <h6 className="py-1 text-center dark:text-white">Streaming SPA</h6>
                            </div>
                            <div className="flex flex-wrap place-content-center py-2 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 dark:bg-cyan-500 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 dark:bg-emerald-500 rounded-full">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
