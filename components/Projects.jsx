import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg1 from "../public/assets/projects/project1.png";
import propertyImg2 from "../public/assets/projects/project2.png";
import propertyImg3 from "../public/assets/projects/project3.png";
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

export default function Projects() {
    return (
        <main id="projects" className='w-full'>
            <div className='max-w-[1280px] mx-auto px-2 py-16'>
                <h4 className="py-2 font-light text-center text-base text-slate-800 uppercase tracking-widest">Projects</h4>
                <h1 className="py-4 font-extrabold text-center text-blue-600">My works so far</h1>
                <section className='grid md:grid-cols-3 gap-8'>
                    <div className='flex flex-col h-auto w-full px-4 py-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg1} alt="/" />
                        <div>
                            <h6 className="my-4 pt-4 text-center border-t-2 border-gray-200">Videogames Project</h6>
                            <div className="flex py-2 gap-2">
                                <span className="px-2 py-1 font-light text-xs bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-white bg-green-600/80 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-xs bg-gray-200/80 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-xs text-white bg-blue-600/80 rounded-full">PostgreSQL</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <Link href="https://github.com/franodangelo/Videogames-Proyect"><FaGithub /></Link>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <Link href="https://videogamesspa.vercel.app/"><IoMdOpen /></Link>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto w-full px-4 py-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg2} alt="/" />
                        <div>
                            <h6 className="my-4 pt-4 text-center border-t-2 border-gray-200">yumPaw: Pet Care & Shop</h6>
                            <div className="flex py-2 gap-2">
                                <span className="px-2 py-1 font-light text-xs bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-white bg-green-600/80 rounded-full">Node.js</span>
                                <span className="px-2 py-1 font-light text-xs bg-gray-200/80 rounded-full">Express</span>
                                <span className="px-2 py-1 font-light text-xs text-white bg-blue-600/80 rounded-full">PostgreSQL</span>

                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <Link href="https://github.com/franodangelo/yumPaw-Project"><FaGithub /></Link>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <Link href="https://client-pg.vercel.app/"><IoMdOpen /></Link>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col h-auto w-full px-4 py-8 items-center justify-center shadow-lg shadow-blue-300 rounded-xl relative cursor-pointer hover:shadow-xl hover:shadow-blue-400 ease-in-out duration-300'>
                        <Image className="rounded-xl" src={propertyImg3} alt="/" />
                        <div>
                            <h6 className="my-4 pt-4 text-center border-t-2 border-gray-200">Services SPA</h6>
                            <div className="flex py-2 gap-2">
                                <span className="px-2 py-1 font-light text-xs bg-yellow-500/80 rounded-full">JavaScript</span>
                                <span className="px-2 py-1 font-light text-xs bg-cyan-400/80 rounded-full">React</span>
                                <span className="px-2 py-1 font-light text-xs text-white bg-emerald-500/80 rounded-full">Tailwind</span>
                            </div>
                        </div>
                        <div className="flex mt-4 justify-center items-center gap-4">
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <Link href="https://github.com/franodangelo/Services-SPA"><FaGithub /></Link>
                            </span>
                            <span className="p-2 rounded-full shadow-sm shadow-gray-300 cursor-pointer hover:shadow-md hover:shadow-gray-400 ease-in-out duration-200">
                                <Link href="https://mybrandservices.vercel.app/"><IoMdOpen /></Link>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
};
