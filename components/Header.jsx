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
                    <h6 className="sectionTypeHeading">🚀 {texts.headerSection}</h6>
                    <h2>{texts.headerH1}</h2>
                    <h4 className="py-2 font-normal text-slate-800 dark:text-slate-300">{texts.headerH2} 🇦🇷</h4>
                    <div className="flex m-auto my-8 items-end justify-between gap-8 md:gap-16">
                        <div className="socialButton">
                            <Link href="/">
                                <a href="https://www.linkedin.com/in/franco-dangelo/" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn className="dark:text-slate-200" />
                                </a>
                            </Link>
                        </div>
                        <div className="socialButton">
                            <Link href="">
                                <a href="https://github.com/franodangelo" target="_blank" rel="noreferrer">
                                    <FaGithub className="dark:text-slate-200" />
                                </a>
                            </Link>
                        </div>
                        <div className="socialButton">
                            <Link href="">
                                <a href="https://twitter.com/techfrano" target="_blank" rel="noreferrer">
                                    <FaTwitter className="dark:text-slate-200" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </header>
    )
}