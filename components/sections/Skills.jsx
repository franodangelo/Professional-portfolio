import { useContext, useState } from "react";
import Image from "next/image";
import javascript from "../../public/assets/skills/javascript.png";
import react from "../../public/assets/skills/react.png";
import redux from "../../public/assets/skills/redux.png";
import node from "../../public/assets/skills/node.png";
import express from "../../public/assets/skills/express.png";
import postgresql from "../../public/assets/skills/postgresql.png";
import html from "../../public/assets/skills/html.png";
import css from "../../public/assets/skills/css.png";
import sequelize from "../../public/assets/skills/sequelize.png";
import tailwind from "../../public/assets/skills/tailwind.png";
import bootstrap from "../../public/assets/skills/bootstrap.png";
import vite from "../../public/assets/skills/vite.png";
import git from "../../public/assets/skills/git.png";
import typescript from "../../public/assets/skills/typescript.png";
import next from "../../public/assets/skills/next.png";
import sass from "../../public/assets/skills/sass.png";
import dart from "../../public/assets/skills/dart.png";
import swift from "../../public/assets/skills/swift.png";
import flutter from "../../public/assets/skills/flutter.png";
import vsc from "../../public/assets/skills/vsc.png";
import npm from "../../public/assets/skills/npm.png";
import github from "../../public/assets/skills/github.png";
import thunderclient from "../../public/assets/skills/thunderclient.png";
import postman from "../../public/assets/skills/postman.png";
import figma from "../../public/assets/skills/figma.png";
import adobexd from "../../public/assets/skills/adobexd.png";
import notion from "../../public/assets/skills/notion.png";
import jira from "../../public/assets/skills/jira.png";
import trello from "../../public/assets/skills/trello.png";
import SkillCard from "../cards/SkillCard";
import InactiveSkillCard from "../cards/InactiveSkillCard";
import LearningCard from "../cards/LearningCard";
import { LanguageContext } from "../../context/LanguageContext";

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
                <h2 className="mb-8 md:mb-4">{texts.skillsH1}</h2>
                <div className="flex w-fit self-center md:self-end mb-4 gap-2">
                    {backendTools ? (
                        <p
                            onClick={handleFront}
                            className="inactiveStackButton"
                        >
                            Frontend
                        </p>
                    ) : (
                        <p onClick={handleFront} className="activeStackButton">
                            Frontend
                        </p>
                    )}
                    {frontendTools ? (
                        <p onClick={handleBack} className="inactiveStackButton">
                            Backend
                        </p>
                    ) : (
                        <p onClick={handleBack} className="activeStackButton">
                            Backend
                        </p>
                    )}
                </div>
                <section className="grid w-full py-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {!backendTools && !frontendTools ? (
                        <SkillCard thumbnail={javascript} title="JavaScript" />
                    ) : (
                        <InactiveSkillCard
                            thumbnail={javascript}
                            title="JavaScript"
                        />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={react} title="React" />
                    ) : (
                        <InactiveSkillCard thumbnail={react} title="React" />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={redux} title="Redux" />
                    ) : (
                        <InactiveSkillCard thumbnail={redux} title="Redux" />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={tailwind} title="Tailwind CSS" />
                    ) : (
                        <InactiveSkillCard
                            thumbnail={tailwind}
                            title="Tailwind CSS"
                        />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={html} title="HTML" />
                    ) : (
                        <InactiveSkillCard thumbnail={html} title="HTML" />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={css} title="CSS" />
                    ) : (
                        <InactiveSkillCard thumbnail={css} title="CSS" />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={sass} title="Sass" />
                    ) : (
                        <InactiveSkillCard thumbnail={sass} title="Sass" />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={bootstrap} title="Bootstrap" />
                    ) : (
                        <InactiveSkillCard
                            thumbnail={bootstrap}
                            title="Bootstrap"
                        />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={next} title="Next.js" />
                    ) : (
                        <InactiveSkillCard thumbnail={next} title="Next.js" />
                    )}
                    {!backendTools ? (
                        <SkillCard thumbnail={vite} title="Vite" />
                    ) : (
                        <InactiveSkillCard thumbnail={vite} title="Vite" />
                    )}
                    {!frontendTools ? (
                        <SkillCard thumbnail={node} title="Node.js" />
                    ) : (
                        <InactiveSkillCard thumbnail={node} title="Node.js" />
                    )}
                    {!frontendTools ? (
                        <SkillCard thumbnail={express} title="Express.js" />
                    ) : (
                        <InactiveSkillCard
                            thumbnail={express}
                            title="Express.js"
                        />
                    )}
                    {!frontendTools ? (
                        <SkillCard thumbnail={postgresql} title="PostgreSQL" />
                    ) : (
                        <InactiveSkillCard
                            thumbnail={postgresql}
                            title="PostgreSQL"
                        />
                    )}
                    {!frontendTools ? (
                        <SkillCard thumbnail={sequelize} title="Sequelize" />
                    ) : (
                        <InactiveSkillCard
                            thumbnail={sequelize}
                            title="Sequelize"
                        />
                    )}
                    {!backendTools && !frontendTools ? (
                        <SkillCard thumbnail={git} title="Git" />
                    ) : (
                        <InactiveSkillCard thumbnail={git} title="Git" />
                    )}
                </section>
                <h4 className="secondaryHeading">{texts.skillsH2}</h4>
                <section className="flex flex-col w-full items-center md:items-start">
                    <h6 className="pt-2 font-semibold">{texts.pathFS}</h6>
                    <div className="grid w-full mb-4 py-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <LearningCard
                            thumbnail={typescript}
                            title="TypeScript"
                            progress="w-[40%]"
                        />
                    </div>
                    <h6 className="pt-2 font-semibold">{texts.pathMD}</h6>
                    <div className="grid w-full mb-4 py-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <LearningCard
                            thumbnail={dart}
                            title="Dart"
                            progress="w-[65%]"
                        />
                        <LearningCard
                            thumbnail={swift}
                            title="Swift"
                            progress="w-[20%]"
                        />
                        <LearningCard
                            thumbnail={flutter}
                            title="Flutter"
                            progress="hidden"
                        />
                    </div>
                </section>
                <h5 className="tertiaryHeading">{texts.skillsH3}</h5>
                <section className="otherSkillsGrid">
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-2/5 mb-2 md:mb-0">
                                {texts.skillsSh1}
                            </h6>
                            <div className="flex gap-4">
                                <Image
                                    src={vsc}
                                    alt="Visual Studio Code logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={npm}
                                    alt="npm logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={thunderclient}
                                    alt="Thunder Client logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={postman}
                                    alt="Postman logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={github}
                                    alt="Github logo"
                                    width="48px"
                                    height="48px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-2/5 mb-2 md:mb-0">
                                {texts.skillsSh2}
                            </h6>
                            <div className="flex gap-4">
                                <Image
                                    src={figma}
                                    alt="Figma logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={adobexd}
                                    alt="Adobe Xd logo"
                                    width="48px"
                                    height="48px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center">
                            <h6 className="basis-3/5 mb-2 md:mb-0">
                                {texts.skillsSh3}
                            </h6>
                            <div className="flex gap-4">
                                <Image
                                    src={notion}
                                    alt="Notion logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={jira}
                                    alt="Jira logo"
                                    width="48px"
                                    height="48px"
                                />
                                <Image
                                    src={trello}
                                    alt="Trello logo"
                                    width="48px"
                                    height="48px"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
