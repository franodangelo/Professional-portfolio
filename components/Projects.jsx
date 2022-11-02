import React, { useContext } from "react";
import Image from "next/image";
import propertyImg1 from "../public/assets/projects/project1.jpg";
import propertyImg2 from "../public/assets/projects/project2.png";
import propertyImg3 from "../public/assets/projects/project3.png";
import propertyImg4 from "../public/assets/projects/project4.png";
import propertyImg5 from "../public/assets/projects/project5.png";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {

    const { texts } = useContext(LanguageContext);

    return (
        <main id="projects" className="w-full md:h-full p-6 md:p-20 items-center justify-center bg-white shadow-lg">
            <div className="h-full mx-auto">
                <h6 className="py-2 font-light text-center text-slate-800 uppercase tracking-widest">✔️ {texts.projectsSection}</h6>
                <h2 className="py-4 font-extrabold text-center text-blue-600">{texts.projectsH1}</h2>
                <section className="grid grid-cols-1 p-4 gap-8 md:grid-cols-3">
                    <div className="flex flex-col h-auto w-full p-8 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">Sep 22</span>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg5} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Tennis E-commerce</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-yellow-500 rounded-full">Firebase</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/React-Ecommerce" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://advantage-tennis-ecommerce.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-full p-8 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-end gap-2">
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 bg-blue-200/50 rounded-md uppercase">API REST</span>
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">{texts.projectsAug} 22</span>
                        </div>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg4} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Small Weather App</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-gray-200/80 rounded-full">Next.js</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Weather-app" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://howistheweathernow.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-full p-8 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">{texts.projectsAug} 22</span>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg3} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Services SPA</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Services-SPA" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://mybrandservices.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                </section>
                {/* Last row */}
                <section className="grid grid-cols-1 p-4 gap-8 md:grid-cols-6">
                    <div className="col-start-2 col-span-2 flex flex-col h-auto w-full p-8 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-end gap-2">
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 bg-blue-200/50 rounded-md uppercase">API REST</span>
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">Jun 22</span>
                        </div>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg2} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">yumPaw: Pet Care & Shop</h6>
                                <p className="font-light text-xs text-center text-gray-500 uppercase">{texts.projectsNotResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-violet-400/80 rounded-full">Redux</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-blue-500/80 rounded-full">CSS</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-green-600/80 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-gray-200/80 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-blue-700/80 rounded-full">PostgreSQL</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-blue-300/80 rounded-full">Sequelize</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/yumPaw-Project" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://client-pg.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                    <div className="col-start-4 col-span-2 flex flex-col h-full w-full p-8 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-between">
                            {/* <span className="w-fit flex mb-4 py-1 px-2 self-end text-xs text-white bg-pink-500 rounded-md uppercase">Updated</span> */}
                            <div className="w-full flex justify-end gap-2">
                                <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 bg-blue-200/50 rounded-md uppercase">API REST</span>
                                <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">May 22</span>
                            </div>
                        </div>
                        <Image className="rounded object-cover" height={200} width={400} src={propertyImg1} alt="project thumbnail" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Gameon: Video games Project</h6>
                                <p className="font-light text-xs text-center text-blue-500 uppercase">{texts.projectsResponsive}</p>
                            </div>
                            <div className="flex flex-wrap place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-violet-400/80 rounded-full">Redux</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-green-600/80 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-gray-200/80 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-blue-700/80 rounded-full">PostgreSQL</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-blue-300/80 rounded-full">Sequelize</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Videogames-Proyect" target="_blank" rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-pink-200 cursor-pointer hover:shadow-md hover:shadow-pink-300 ease-in-out duration-200">
                                <a href="https://videogamesspa.vercel.app/" target="_blank" rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                </section>
                <h4 className="mt-8 py-4 font-extrabold text-center text-blue-600">{texts.projectsWorkingOn}</h4>
                <section className="grid p-4 grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col h-auto w-full p-4 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">Oct 22</span>
                        <div>
                            <div className="pb-2">
                                <h6 className="py-1 text-center">{`Client's Company Website`}</h6>
                            </div>
                            <div className="flex flex-wrap place-content-center py-2 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-auto w-full p-4 items-center justify-center shadow-md shadow-blue-200 rounded-xl relative cursor-pointer hover:shadow-lg hover:shadow-blue-300 ease-in-out duration-200">
                        <div className="w-full flex justify-end gap-2">
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-blue-800 bg-blue-200/50 rounded-md uppercase">API REST</span>
                            <span className="flex mb-4 py-1 px-2 self-end text-xs text-white bg-blue-600/50 rounded-md uppercase">Oct 22</span>
                        </div>
                        <div>
                            <div className="pb-2">
                                <h6 className="py-1 text-center">Cryptocurrency SPA</h6>
                            </div>
                            <div className="flex flex-wrap place-content-center py-2 gap-2">
                                <span className="px-2 py-1 font-light text-[10px] text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-cyan-500/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-[10px] text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
