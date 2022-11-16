import React, { useContext, useState } from "react";
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
import typescript from "../public/assets/skills/typescript.png";
import next from "../public/assets/skills/next.png";
import dart from "../public/assets/skills/dart.png";
import swift from "../public/assets/skills/swift.png";
import vsc from "../public/assets/skills/vsc.png";
import npm from "../public/assets/skills/npm.png";
import github from "../public/assets/skills/github.png";
import postman from "../public/assets/skills/postman.svg";
import figma from "../public/assets/skills/figma.png";
import adobexd from "../public/assets/skills/adobexd.png";
import notion from "../public/assets/skills/notion.png";
import jira from "../public/assets/skills/jira.png";
import trello from "../public/assets/skills/trello.png";
import { LanguageContext } from "../context/LanguageContext";

export default function Skills() {

    const [frontendTools, setFrontendTools] = useState(false);
    const [backendTools, setBackendTools] = useState(false);

    function handleFront() {
        setFrontendTools(!frontendTools);
        setBackendTools(false);
        console.log("Frontend button", frontendTools);
    }

    function handleBack() {
        setBackendTools(!backendTools);
        setFrontendTools(false);
        console.log("Backend button", backendTools);
    }

    const { texts } = useContext(LanguageContext);

    return (
        <main id="skills" className="w-full md:h-full p-6 md:px-16 md:py-24">
            <div className="flex flex-col h-full mx-auto justify-center items-center md:items-start">
                <h6 className="py-2 font-light text-slate-800 uppercase tracking-widest">📚 {texts.skillsSection}</h6>
                <h2 className="my-4 py-4 font-extrabold text-blue-600">{texts.skillsH1}</h2>
                <div className="flex w-fit self-center md:self-end mb-4 gap-4">
                    {backendTools ? <p onClick={handleFront}
                        className="px-2 py-1 font-semibold text-blue-200 hover:text-blue-400 border border-blue-200 hover:border-blue-400 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:shadow-blue-300 ease-in-out duration-200">
                        Frontend
                    </p> : <p onClick={handleFront}
                        className="px-2 py-1 font-semibold text-blue-600 border border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:shadow-blue-300 ease-in-out duration-200">
                        Frontend
                    </p>}
                    {frontendTools ? <p onClick={handleBack}
                        className="px-2 py-1 font-semibold text-blue-200 hover:text-blue-400 border border-blue-200 hover:border-blue-400 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:shadow-blue-300 ease-in-out duration-200">
                        Backend
                    </p> : <p onClick={handleBack}
                        className="px-2 py-1 font-semibold text-blue-600 border border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:shadow-blue-300 ease-in-out duration-200">
                        Backend
                    </p>}
                </div>
                <section className="grid w-full py-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {!backendTools && !frontendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={javascript} alt="JavaScript logo" width="64px" height="64px" />
                        <h6>JavaScript</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={javascript} alt="JavaScript logo" width="64px" height="64px" />
                        <h6>JavaScript</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={react} alt="React logo" width="64px" height="64px" />
                        <h6>React</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={react} alt="React logo" width="64px" height="64px" />
                        <h6>React</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={redux} alt="Redux logo" width="64px" height="64px" />
                        <h6>Redux</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={redux} alt="Redux logo" width="64px" height="64px" />
                        <h6>Redux</h6>
                    </div>}
                    {!frontendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={node} alt="node.js logo" width="64px" height="64px" />
                        <h6>Node.js</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={node} alt="node.js logo" width="64px" height="64px" />
                        <h6>Node.js</h6>
                    </div>}
                    {!frontendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={express} alt="Express logo" width="64px" height="64px" />
                        <h6>Express.js</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={express} alt="Express logo" width="64px" height="64px" />
                        <h6>Express</h6>
                    </div>}
                    {!frontendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={postgresql} alt="PostgreSQL logo" width="64px" height="64px" />
                        <h6>PostgreSQL</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={postgresql} alt="PostgreSQL logo" width="64px" height="64px" />
                        <h6>PostgreSQL</h6>
                    </div>}
                    {!frontendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={sequelize} alt="Sequelize logo" width="64px" height="70px" />
                        <h6>Sequelize</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={sequelize} alt="Sequelize logo" width="64px" height="70px" />
                        <h6>Sequelize</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={next} alt="Next.js logo" width="80px" height="56px" />
                        <h6>Next.js</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={next} alt="Next.js logo" width="80px" height="56px" />
                        <h6>Next.js</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={html} alt="HTML logo" width="64px" height="64px" />
                        <h6>HTML</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={html} alt="HTML logo" width="64px" height="64px" />
                        <h6>HTML</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={css} alt="CSS logo" width="64px" height="64px" />
                        <h6>CSS</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={css} alt="CSS logo" width="64px" height="64px" />
                        <h6>CSS</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={tailwind} alt="tailwindcss logo" width="64px" height="64px" />
                        <h6>Tailwind CSS</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={tailwind} alt="tailwindcss logo" width="64px" height="64px" />
                        <h6>Tailwindcss</h6>
                    </div>}
                    {!backendTools ? <div className="flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={bootstrap} alt="Bootstrap logo" width="80px" height="64px" />
                        <h6>Bootstrap</h6>
                    </div> : <div className="grayscale flex p-4 gap-8 justify-center items-center shadow-md shadow-sky-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <Image src={bootstrap} alt="Bootstrap logo" width="80px" height="64px" />
                        <h6>Bootstrap</h6>
                    </div>}
                </section>
                <h4 className="mt-8 py-4 font-extrabold text-blue-600">{texts.skillsH2}</h4>
                <section className="grid w-full py-4 gap-4 md:grid-cols-3">
                    <div className="flex flex-col p-4 justify-center items-center shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <div className="flex justify-center items-center gap-8">
                            <Image src={dart} alt="Dart logo" width="48px" height="48px" />
                            <h6>Dart</h6>
                        </div>
                        {/* This is the progress bar */}
                        <div className="w-full h-1 mt-4 bg-slate-100">
                            <div className="w-[65%] bg-green-300 h-1 border-r-2 border-green-400"></div>
                        </div>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <div className="flex justify-center items-center gap-8">
                            <Image src={swift} alt="Swift logo" width="48px" height="48px" />
                            <h6>Swift</h6>
                        </div>
                        {/* This is the progress bar */}
                        <div className="w-full h-1 mt-4 bg-slate-100">
                            <div className="w-[15%] bg-green-300 h-1 border-r-2 border-green-400"></div>
                        </div>
                    </div>
                    <div className="flex flex-col p-4 justify-center items-center shadow-md shadow-blue-200 bg-white rounded-lg hover:scale-105 ease-in-out duration-300">
                        <div className="flex justify-center items-center gap-8">
                            <Image src={typescript} alt="TypeScript logo" width="48px" height="48px" />
                            <h6>TypeScript</h6>
                        </div>
                        {/* This is the progress bar */}
                        <div className="w-full h-1 mt-4 bg-slate-100">
                            <div className="w-[40%] bg-green-300 h-1 border-r-2 border-green-400"></div>
                        </div>
                    </div>
                </section>
                <h6 className="my-8 py-4 self-center font-extrabold text-blue-600">{texts.skillsH3}</h6>
                <section className="grid w-full md:w-[60%] mx-4 px-4 py-2 self-center divide-y-2 rounded-lg bg-white shadow-md">
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-2/5">{texts.skillsSh1}</h6>
                            <div className="flex gap-4">
                                <span className="m-auto">
                                    <Image src={vsc} alt="Visual Studio Code logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={npm} alt="npm logo" width="56px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={github} alt="Github logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={postman} alt="Postman logo" width="56px" height="48px" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-2/5">{texts.skillsSh2}</h6>
                            <div className="flex gap-4">
                                <span className="m-auto">
                                    <Image src={figma} alt="Figma logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={adobexd} alt="AdobeXd logo" width="48px" height="48px" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-2/5">{texts.skillsSh3}</h6>
                            <div className="flex gap-4">
                                <span className="m-auto">
                                    <Image src={notion} alt="Notion logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={jira} alt="Jira logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={trello} alt="Trello logo" width="48px" height="48px" />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}