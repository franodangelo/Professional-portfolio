import { useContext } from "react";
import propertyImg1 from "../../public/assets/projects/project1.jpg";
import propertyImg2 from "../../public/assets/projects/project2.jpg";
import propertyImg3 from "../../public/assets/projects/project3.png";
import propertyImg5 from "../../public/assets/projects/project5.png";
import propertyImg6 from "../../public/assets/projects/project6.png";
import ProjectCard from "../cards/ProjectCard";
import { LanguageContext } from "../../context/LanguageContext";
import WorkingProjectCard from "../cards/WorkingProjectCard";

export default function Projects() {
    const { texts } = useContext(LanguageContext);

    return (
        <main
            id="projects"
            className="w-full md:h-full p-6 md:px-16 md:py-24 items-center justify-center bg-white dark:bg-slate-900 shadow-lg"
        >
            <div className="h-full mx-auto">
                <h2 className="mb-4 text-center">{texts.projectsH1}</h2>
                <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <ProjectCard
                        date={`${texts.projectsDec} 22`}
                        api={true}
                        img={propertyImg6}
                        title={`Songz: Music Project`}
                        isResponsive={texts.projectsResponsive}
                        technologies={["JavaScript", "Vite", "React", "Tailwind"]}
                        repo={`https://github.com/franodangelo/songz-music-proyect`}
                        demo={`https://songz-music-proyect.vercel.app/`}
                    />
                    <ProjectCard
                        date={`Sep 22`}
                        api={false}
                        img={propertyImg5}
                        title={`Tennis E-commerce`}
                        isResponsive={texts.projectsResponsive}
                        technologies={["JavaScript", "React", "Tailwind"]}
                        repo={`https://github.com/franodangelo/React-Ecommerce`}
                        demo={`https://advantage-tennis-ecommerce.vercel.app/`}
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
                        technologies={[
                            "JavaScript",
                            "React",
                            "Redux",
                            "CSS",
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                        ]}
                        repo={`https://github.com/franodangelo/yumPaw-Project`}
                        demo={`https://client-pg.vercel.app/`}
                    />
                    {/* <ProjectCard
                        date={`May 22`}
                        migration={true}
                        api={true}
                        img={propertyImg1}
                        title={`Gameon: Video games Project`}
                        isResponsive={texts.projectsResponsive}
                        technologies={[
                            "JavaScript",
                            "React",
                            "Redux",
                            "Tailwind",
                            "Node.js",
                            "Express",
                            "PostgreSQL",
                        ]}
                        repo={`https://github.com/franodangelo/Videogames-Proyect`}
                    // demo={`https://gameon-platform.vercel.app/`}
                    /> */}
                </section>
                <h4 className="secondaryHeading mb-4 text-center">
                    {texts.projectsWorkingOn}
                </h4>
                <section className="flex w-full mx-auto justify-evenly gap-8">
                    <WorkingProjectCard
                        date={`${texts.projectsJan} 23`}
                        api={true}
                        title={`Streaming Platform`}
                        technologies={[
                            "JavaScript",
                            "Next.js",
                            "React",
                            "Sass",
                        ]}
                    />
                    <WorkingProjectCard
                        date={`${texts.projectsJan} 23`}
                        api={true}
                        title={`Music Application`}
                        technologies={[
                            "JavaScript",
                            "Vite",
                            "React",
                            "Tailwind",
                        ]}
                    />
                </section>
            </div>
        </main>
    );
}
