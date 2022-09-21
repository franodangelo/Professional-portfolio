import React from "react";
import Link from "next/link";

import { FaLinkedinIn, FaGithub, FaBehance, FaTwitter } from "react-icons/fa";

export default function Header() {
    return (
        <header id="header" className="w-full h-screen text-center">
            <main className="flex w-full h-full mx-auto justify-center items-center">
                <section className="flex flex-col w-[80%]">
                    <p className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">🚀 Welcome to my portfolio</p>
                    <h1 className="py-4 font-extrabold text-blue-600">Hi everyone, I{`'`}m Franco!</h1>
                    <h4 className="py-2 font-light">a <span className="font-bold text-blue-600">Full-Stack Developer</span> based in Buenos Aires, Argentina 🇦🇷</h4>
                    <div className="flex m-auto my-8 items-end justify-between gap-8 md:gap-16">
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                            <Link href="/">
                                <a href="https://www.linkedin.com/in/franco-dangelo/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
                            </Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                            <Link href="">
                                <a href="https://github.com/franodangelo" target='_blank' rel="noreferrer"><FaGithub /></a>
                            </Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                            <Link href="">
                                <a href="https://twitter.com/techfrano" target='_blank' rel="noreferrer"><FaTwitter /></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </header>
    )
};