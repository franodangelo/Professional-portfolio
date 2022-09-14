import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg1 from "../public/assets/projects/project1.png";
import propertyImg2 from "../public/assets/projects/project2.png";
import propertyImg3 from "../public/assets/projects/project3.png";
import propertyImg4 from "../public/assets/projects/project4.png";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

export default function Projects() {
    return (
        <main id="projects" className='w-full md:h-full py-24 items-center justify-center'>
            <div className='max-w-[1280px] h-full mx-auto'>
                <h4 className="py-2 font-light text-center text-base text-slate-800 uppercase tracking-widest">✔️ Projects</h4>
                <h1 className="py-4 font-extrabold text-center text-blue-600">My works so far</h1>
                <section className='grid p-4 grid-cols-1 gap-8 md:grid-cols-2'>
                    <div className='flex flex-col h-auto w-full p-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg1} alt="/" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Video games Project</h6>
                                <p className="font-thin text-sm text-center text-gray-500">Working on Responsive</p>
                            </div>
                            <div className="grid grid-cols-3 place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-xs text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-green-600/80 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-gray-200/80 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-blue-600/80 rounded-full">PostgreSQL</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Videogames-Proyect" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://videogamesspa.vercel.app/" target='_blank' rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto w-full p-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg2} alt="/" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">yumPaw: Pet Care & Shop</h6>
                                <p className="font-thin text-sm text-center text-gray-500">Working on Responsive</p>
                            </div>
                            <div className="grid grid-cols-3 place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-xs text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-green-600/80 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-gray-200/80 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-blue-600/80 rounded-full">PostgreSQL</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/yumPaw-Project" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://client-pg.vercel.app/" target='_blank' rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto w-full p-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg3} alt="/" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Services SPA</h6>
                                <p className="text-sm text-center text-blue-500">Responsive</p>
                            </div>
                            <div className="grid grid-cols-3 place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-xs text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Services-SPA" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://mybrandservices.vercel.app/" target='_blank' rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto w-full p-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg4} alt="/" />
                        <div>
                            <div className="pb-4">
                                <h6 className="mt-4 py-2 text-center border-t-2 border-gray-200">Small Weather App</h6>
                                <p className="text-sm text-center text-blue-500">Responsive</p>
                            </div>
                            <div className="grid grid-cols-3 place-content-center py-4 gap-2">
                                <span className="px-2 py-1 font-light text-xs text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-gray-200/80 rounded-full">Next.js</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/Weather-app" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://howistheweathernow.vercel.app/" target='_blank' rel="noreferrer"><IoMdOpen /></a>
                            </span>
                        </div>
                    </div>
                </section>
                <h6 className=" mt-8 py-4 font-extrabold text-blue-600 text-center">And currently working on:</h6>
                <section className='flex flex-wrap m-auto p-4 gap-8 justify-center md:flex-nowrap'>
                    <div className='flex flex-col h-auto w-full md:w-[50%] p-8 items-center justify-center shadow-lg shadow-gray-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-gray-400 grayscale hover:grayscale-0 ease-in-out duration-300'>
                        <div>
                            <h6 className="my-4 py-2 text-center">E-Commerce Project</h6>
                            <div className="grid grid-cols-3 place-content-center py-2 gap-2">
                                <span className="px-2 py-1 font-light text-xs text-center bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs text-center bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-center text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <a href="https://github.com/franodangelo/React-Ecommerce" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
};
