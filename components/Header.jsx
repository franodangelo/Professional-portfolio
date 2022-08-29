import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaGithub, FaBehance } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Header() {
    return (
        <header id="header" className="w-full h-screen text-center">
            <main className="flex w-full h-full mx-auto justify-center items-center">
                <section className="flex flex-col w-[80%]">
                    <p className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">Welcome to my portfolio</p>
                    <h1 className="py-4 font-extrabold text-blue-600">Hi everyone, I{`'`}m Frano!</h1>
                    <h4 className="py-2 font-light">a <span className="font-bold text-blue-600">Full-Stack Developer</span> based in Buenos Aires, Argentina</h4>
                    <div className="flex m-auto my-4 items-center justify-between gap-16">
                        <div className="p-4 rounded-full shadow-md shadow-blue-300 cursor-pointer hover:scale-110 hover:shadow-blue-400 ease-in-out duration-200">
                            <Link href="/">
                                <a href="https://www.linkedin.com/in/franco-dangelo/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
                            </Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-blue-300 cursor-pointer hover:scale-110 hover:shadow-blue-400 ease-in-out duration-200">
                            <Link href="">
                                <a href="https://github.com/franodangelo" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-blue-300 cursor-pointer hover:scale-110 hover:shadow-blue-400 ease-in-out duration-200">
                            <Link href="/">
                                <a href="https://www.behance.net/francodangelo" target='_blank' rel="noreferrer"><FaBehance /></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </header>
    )
};