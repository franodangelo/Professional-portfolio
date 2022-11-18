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
import postman from "../public/assets/skills/postman.png";
import figma from "../public/assets/skills/figma.png";
import adobexd from "../public/assets/skills/adobexd.png";
import notion from "../public/assets/skills/notion.png";
import jira from "../public/assets/skills/jira.png";
import trello from "../public/assets/skills/trello.png";
import { LanguageContext } from "../context/LanguageContext";

export default function Skills() {
    const { texts } = useContext(LanguageContext);

    const [frontendTools, setFrontendTools] = useState(false);
    const [backendTools, setBackendTools] = useState(false);

    function handleFront() {
        setFrontendTools(!frontendTools);
        setBackendTools(false);
    }

    function handleBack() {
        setBackendTools(!backendTools);
        setFrontendTools(false);
    }

    return (
        <main id="skills" className="w-full md:h-full p-6 md:px-16 md:py-24">
            <div className="flex flex-col h-full mx-auto justify-center items-center md:items-start">
                <h6 className="sectionTypeHeading">📚 {texts.skillsSection}</h6>
                <h2 className="my-4">{texts.skillsH1}</h2>
                <div className="flex w-fit self-center md:self-end mb-4 gap-2">
                    {
                        backendTools ?
                            <p onClick={handleFront} className="inactiveStackButton">Frontend</p> :
                            <p onClick={handleFront} className="activeStackButton">Frontend</p>
                    }
                    {
                        frontendTools ?
                            <p onClick={handleBack} className="inactiveStackButton">Backend</p> :
                            <p onClick={handleBack} className="activeStackButton">Backend</p>
                    }
                </div>
                <section className="grid w-full py-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                        !backendTools && !frontendTools ?
                            <div className="activeSkillCard">
                                <Image src={javascript} alt="JavaScript logo" width="64px" height="64px" />
                                <h6>JavaScript</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={javascript} alt="JavaScript logo" width="64px" height="64px" />
                                <h6>JavaScript</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={react} alt="React logo" width="64px" height="64px" />
                                <h6>React</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={react} alt="React logo" width="64px" height="64px" />
                                <h6>React</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={redux} alt="Redux logo" width="64px" height="64px" />
                                <h6>Redux</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={redux} alt="Redux logo" width="64px" height="64px" />
                                <h6>Redux</h6>
                            </div>
                    }
                    {
                        !frontendTools ?
                            <div className="activeSkillCard">
                                <Image src={node} alt="Node.js logo" width="64px" height="64px" />
                                <h6>Node.js</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={node} alt="Node.js logo" width="64px" height="64px" />
                                <h6>Node.js</h6>
                            </div>
                    }
                    {
                        !frontendTools ?
                            <div className="activeSkillCard">
                                <Image src={express} alt="Express.js logo" width="64px" height="64px" />
                                <h6>Express.js</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={express} alt="Express.js logo" width="64px" height="64px" />
                                <h6>Express.js</h6>
                            </div>
                    }
                    {
                        !frontendTools ?
                            <div className="activeSkillCard">
                                <Image src={postgresql} alt="PostgreSQL logo" width="64px" height="64px" />
                                <h6>PostgreSQL</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={postgresql} alt="PostgreSQL logo" width="64px" height="64px" />
                                <h6>PostgreSQL</h6>
                            </div>
                    }
                    {
                        !frontendTools ?
                            <div className="activeSkillCard">
                                <Image src={sequelize} alt="Sequelize logo" width="64px" height="64px" />
                                <h6>Sequelize</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={sequelize} alt="Sequelize logo" width="64px" height="64px" />
                                <h6>Sequelize</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={next} alt="Next.js logo" width="80px" height="56px" />
                                <h6>Next.js</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={next} alt="Next.js logo" width="80px" height="56px" />
                                <h6>Next.js</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={html} alt="HTML logo" width="64px" height="64px" />
                                <h6>HTML</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={html} alt="HTML logo" width="64px" height="64px" />
                                <h6>HTML</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={css} alt="CSS logo" width="64px" height="64px" />
                                <h6>CSS</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={css} alt="CSS logo" width="64px" height="64px" />
                                <h6>CSS</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={tailwind} alt="Tailwind CSS logo" width="64px" height="64px" />
                                <h6>Tailwind CSS</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={tailwind} alt="Tailwind CSS logo" width="64px" height="64px" />
                                <h6>Tailwind CSS</h6>
                            </div>
                    }
                    {
                        !backendTools ?
                            <div className="activeSkillCard">
                                <Image src={bootstrap} alt="Bootstrap logo" width="64px" height="64px" />
                                <h6>Bootstrap</h6>
                            </div> :
                            <div className="inactiveSkillCard">
                                <Image src={bootstrap} alt="Bootstrap logo" width="64px" height="64px" />
                                <h6>Bootstrap</h6>
                            </div>
                    }
                </section>
                <h4 className="mt-8 py-4 font-extrabold text-blue-600 dark:text-white">{texts.skillsH2}</h4>
                <section className="grid w-full py-4 gap-4 md:grid-cols-3">
                    <div className="learningCard">
                        <div className="flex justify-center items-center gap-8">
                            <Image src={dart} alt="Dart logo" width="48px" height="48px" />
                            <h6>Dart</h6>
                        </div>
                        <div className="w-full h-1 mt-4 bg-slate-100 dark:bg-slate-800">
                            <div className="w-[65%] bg-green-300 h-1 border-r-2 border-green-400 dark:border-green-600" />
                        </div>
                    </div>
                    <div className="learningCard">
                        <div className="flex justify-center items-center gap-8">
                            <Image src={swift} alt="Swift logo" width="48px" height="48px" />
                            <h6>Swift</h6>
                        </div>
                        <div className="w-full h-1 mt-4 bg-slate-100 dark:bg-slate-800">
                            <div className="w-[15%] bg-green-300 h-1 border-r-2 border-green-400 dark:border-green-600" />
                        </div>
                    </div>
                    <div className="learningCard">
                        <div className="flex justify-center items-center gap-8">
                            <Image src={typescript} alt="TypeScript logo" width="48px" height="48px" />
                            <h6>TypeScript</h6>
                        </div>
                        <div className="w-full h-1 mt-4 bg-slate-100 dark:bg-slate-800">
                            <div className="w-[40%] bg-green-300 h-1 border-r-2 border-green-400 dark:border-green-600" />
                        </div>
                    </div>
                </section>
                <h6 className="my-8 py-4 self-center font-extrabold text-blue-600 dark:text-white">{texts.skillsH3}</h6>
                <section className="grid w-full md:w-[60%] mx-4 px-4 py-2 self-center divide-y-2 dark:divide-slate-800 rounded-lg bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-900">
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-2/5">{texts.skillsSh1}</h6>
                            <div className="flex gap-4">
                                <span className="m-auto">
                                    <Image src={vsc} alt="Visual Studio Code logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={npm} alt="npm logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={github} alt="Github logo" width="48px" height="48px" />
                                </span>
                                <span className="m-auto">
                                    <Image src={postman} alt="Postman logo" width="48px" height="48px" />
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