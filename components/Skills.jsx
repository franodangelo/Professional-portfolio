import React from "react";
import Image from "next/image";

export default function Skills() {
    return (
        <main id="skills" className="w-full lg:h-full p-2">
            <div className="max-w-[1280px] h-full mx-auto flex flex-col justify-center">
                <h4 className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">Skills</h4>
                <h2 className="py-4 font-extrabold text-blue-600">This is my tech stack</h2>
                <section className="py-2 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/javascript.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>JavaScript</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/react.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>React</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/redux.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Redux</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/node.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Node.js</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/express.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Express</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/postgresql.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>PostgreSQL</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/html.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>HTML</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/css.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>CSS</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/sequelize.png" alt="/" width="64px" height="72px" />
                            </span>
                            <span className="">
                                <h6>Sequelize</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/tailwind.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Tailwind</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/bootstrap.png" alt="/" width="72px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Bootstrap</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-6 shadow-lg rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-between items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/github.png" alt="/" width="64px" height="64px" />
                            </span>
                            <span className="">
                                <h6>Github</h6>
                            </span>
                        </div>
                    </div>
                </section>
                <h6 className=" mt-4 py-4 font-extrabold text-blue-600">And currently learning</h6>
                <section className="py-2 grid md:grid-cols-3 gap-8">
                    <div className="p-2 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/typescript.png" alt="/" width="48px" height="48px" />
                            </span>
                            <span className="">
                                <h6>TypeScript</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-2 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/react.png" alt="/" width="48px" height="48px" />
                            </span>
                            <span className="">
                                <h6>React Native</h6>
                            </span>
                        </div>
                    </div>
                    <div className="p-2 shadow-md rounded-xl hover:scale-105 ease-in-out duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <span className="m-auto">
                                <Image src="/../public/assets/skills/next.png" alt="/" width="72px" height="48px" />
                            </span>
                            <span className="">
                                <h6>Next.js</h6>
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
};
