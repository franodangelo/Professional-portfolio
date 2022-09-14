import React from "react";
import Image from "next/image";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import redux from "../public/assets/skills/redux.png";
import node from "../public/assets/skills/node.png";
import express from "../public/assets/skills/express.png";
import postgresql from "../public/assets/skills/postgresql.png";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import sequelize from "../public/assets/skills/sequelize.png";
import tailwind from "../public/assets/skills/tailwind.png";
import bootstrap from "../public/assets/skills/bootstrap.png";
import github from "../public/assets/skills/github.png";
import typescript from "../public/assets/skills/typescript.png";
import next from "../public/assets/skills/next.png";

export default function Skills() {
    return (
        <main id="skills" className="w-full md:h-full py-24">
            <div className="max-w-[1280px] h-full mx-auto flex flex-col justify-center items-center md:items-start">
                <h4 className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">📚 Skills</h4>
                <h2 className="py-4 font-extrabold text-blue-600">This is my tech stack</h2>
                <section className="grid w-full p-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={javascript} alt="/" width="64px" height="64px" />
                            </span>
                            <h6>JavaScript</h6>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={react} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>React</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={redux} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Redux</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={node} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Node.js</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={express} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Express</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={postgresql} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>PostgreSQL</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={html} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>HTML</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={css} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>CSS</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={sequelize} alt="/" width="64px" height="70px" />
                            </span>
                            <span className="">
                                <h6>Sequelize</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={tailwind} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>TailwindCSS</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={bootstrap} alt="/" width="72px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Bootstrap</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src={github} alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Github</h6>
                            </span>
                        </div>
                    </div>
                </section>
                <h6 className=" mt-4 py-4 font-extrabold text-blue-600">And currently learning</h6>
                <section className="w-full py-2 grid md:grid-cols-3 gap-8">
                    <div className="p-2 shadow-md rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <span className="m-auto">
                                <Image src={next} alt="/" width="72px" height="48px" />
                            </span>
                            <span className="">
                                <h6>Next.js</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-2 shadow-md rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <span className="m-auto">
                                <Image src={react} alt="/" width="48px" height="48px" />
                            </span>
                            <span className="">
                                <h6>React Native</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-2 shadow-md rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <span className="m-auto">
                                <Image src={typescript} alt="/" width="48px" height="48px" />
                            </span>
                            <span className="">
                                <h6>TypeScript</h6>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
};