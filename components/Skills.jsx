import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "next/image";
import skillsData from "../utils/skillsData";
import promise from "../utils/promise";
import react from "../public/assets/skills/react.png";
import typescript from "../public/assets/skills/typescript.png";
import next from "../public/assets/skills/next.png";

export default function Skills() {

    const [skills, setSkills] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        promise(setSkills(skillsData));
    }, [id])

    return (
        <main id="skills" className="w-full md:h-full py-24">
            <div className="max-w-[1280px] h-full mx-auto flex flex-col justify-center items-center md:items-start">
                <h4 className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">📚 Skills</h4>

                <h2 className="py-4 font-extrabold text-blue-600">This is my tech stack</h2>
                <section className="grid w-full p-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {skills.map(s => {
                        return (
                            <div key="tech" className="p-4 shadow-lg rounded-xl hover:scale-105 grayscale hover:grayscale-0 ease-in-out duration-300">
                                <div className="grid grid-cols-2 gap-4 justify-between items-center">
                                    <span className="m-auto">
                                        <Image src={s.thumbnail} alt="/" width="64px" height="64px" />
                                    </span>
                                    <h6>{s.tech}</h6>
                                </div>
                            </div>
                        )
                    })}
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
