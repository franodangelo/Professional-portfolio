import React, { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "../context/LanguageContext";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Header() {

    const { texts } = useContext(LanguageContext);

    return (
        <header id="header" className="w-full h-screen text-center transition-all">
            <main className="flex w-full h-full mx-auto justify-center items-center">
                <section className="flex flex-col w-[90%]">
                    <h6 className="py-2 font-light text-slate-800 dark:text-slate-500 uppercase tracking-widest">🚀 {texts.headerSection}</h6>
                    <h2 className="py-4 font-extrabold text-blue-600 dark:text-white">{texts.headerH1}</h2>
                    <h4 className="py-2 font-normal text-slate-800 dark:text-slate-500">{texts.headerH2} 🇦🇷</h4>
                    <div className="flex m-auto my-8 items-end justify-between gap-8 md:gap-16">
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 dark:shadow-slate-800 cursor-pointer hover:scale-105 hover:shadow-pink-300 dark:hover:shadow-slate-700 ease-in-out duration-200">
                            <Link href="/">
                                <a href="https://www.linkedin.com/in/franco-dangelo/" target="_blank" rel="noreferrer"><FaLinkedinIn className="dark:text-slate-200" /></a>
                            </Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 dark:shadow-slate-800 cursor-pointer hover:scale-105 hover:shadow-pink-300 dark:hover:shadow-slate-700 ease-in-out duration-200">
                            <Link href="">
                                <a href="https://github.com/franodangelo" target="_blank" rel="noreferrer"><FaGithub className="dark:text-slate-200" /></a>
                            </Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 dark:shadow-slate-800 cursor-pointer hover:scale-105 hover:shadow-pink-300 dark:hover:shadow-slate-700 ease-in-out duration-200">
                            <Link href="">
                                <a href="https://twitter.com/techfrano" target="_blank" rel="noreferrer"><FaTwitter className="dark:text-slate-200" /></a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </header>
    )
}