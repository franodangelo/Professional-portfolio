import React, { useContext } from "react";
import propertyImg1 from "../../public/assets/projects/project1.jpg";
import propertyImg2 from "../../public/assets/projects/project2.jpg";
import propertyImg3 from "../../public/assets/projects/project3.png";
import propertyImg4 from "../../public/assets/projects/project4.png";
import propertyImg5 from "../../public/assets/projects/project5.png";
import ProjectCard from "../cards/ProjectCard";
import { LanguageContext } from "../../context/LanguageContext";

export default function Projects() {
    const { texts } = useContext(LanguageContext);

    return (
        <main id="projects" className="w-full md:h-full p-6 md:px-16 md:py-24 items-center justify-center bg-white dark:bg-slate-900 shadow-lg">
            <div className="h-full mx-auto">
                <h6 className="sectionTypeHeading">✔️ {texts.projectsSection}</h6>
                <h3 className="text-center">{texts.projectsH1}</h3>
                <section className="grid grid-cols-1 py-4 gap-8 md:grid-cols-3">
                    <ProjectCard
                        date={`Sep 22`}
                        api={false}
                        img={propertyImg5}
                        title={`Tennis E-commerce`}
                        isResponsive={texts.projectsResponsive}
                        technologies={["JavaScript", "React", "Tailwind", "Firebase"]}
                        repo={`https://github.com/franodangelo/React-Ecommerce`}
                        demo={`https://advantage-tennis-ecommerce.vercel.app/`}
                    />
                    <ProjectCard
                        date={`${texts.projectsAug} 22`}
                        api={true}
                        img={propertyImg4}
                        title={`Small Weather App`}
                        isResponsive={texts.projectsResponsive}
                        technologies={["JavaScript", "Next.js", "Tailwind"]}
                        repo={`https://github.com/franodangelo/Weather-app`}
                        demo={`https://howistheweathernow.vercel.app/`}
                    />
                    <ProjectCard
                        date={`${texts.projectsAug} 22`}
                        api={false}
                        img={propertyImg3}
                        title={`Services Landing Page`}
                        isResponsive={texts.projectsResponsive}
                        technologies={["JavaScript", "React", "Tailwind"]}
                        repo={`https://github.com/franodangelo/Services-SPA`}
                        demo={`https://mybrandservices.vercel.app/`}
                    />
                    <ProjectCard
                        date={`Jun 22`}
                        api={false}
                        img={propertyImg2}
                        title={`yumPaw: Pet Care & Shop`}
                        isResponsive={texts.projectsNotResponsive}
                        technologies={["JavaScript", "React", "Redux", "CSS", "Node.js", "Express", "PostgreSQL", "Sequelize"]}
                        repo={`https://github.com/franodangelo/yumPaw-Project`}
                        demo={`https://client-pg.vercel.app/`}
                    />
                    <ProjectCard
                        date={`May 22`}
                        api={true}
                        img={propertyImg1}
                        title={`Gameon: Video games Project`}
                        isResponsive={texts.projectsResponsive}
                        technologies={["JavaScript", "React", "Redux", "Tailwind", "Node.js", "Express", "PostgreSQL", "Sequelize"]}
                        repo={`https://github.com/franodangelo/Videogames-Proyect`}
                        demo={`https://gameon-platform.vercel.app/`}
                    />
                </section>
                <h5 className="secondaryHeading text-center">{texts.projectsWorkingOn}</h5>
                <section className="grid py-4 grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="workingProjectCard">
                        <span className="dateChip">Nov 22</span>
                        <h6 className="py-1 pb-2 text-center dark:text-white">{`Crypto Wallet`}</h6>
                        <div className="flex flex-wrap place-content-center py-2 gap-2">
                            <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                            <span className="techChip text-white bg-green-600/80 dark:bg-green-600">Node.js</span>
                            <span className="techChip text-white bg-blue-700/80 dark:bg-blue-600">MySQL</span>
                            <span className="techChip dark:text-slate-900 bg-blue-300/80 dark:bg-blue-300">Sequelize</span>
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
                    <div className="workingProjectCard">
                        <span className="dateChip">Oct 22</span>
                        <h6 className="py-1 pb-2 text-center dark:text-white">{`Client's Company Website`}</h6>
                        <div className="flex flex-wrap place-content-center py-2 gap-2">
                            <span className="techChip dark:text-slate-900 bg-yellow-500/80 dark:bg-yellow-400">JavaScript</span>
                            <span className="techChip text-white bg-cyan-500/80 dark:bg-cyan-500">React</span>
                            <span className="techChip text-white bg-emerald-500/80 dark:bg-emerald-500">Tailwind</span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
