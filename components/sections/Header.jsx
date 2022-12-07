import React, { useContext } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter, FaChevronDown } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header() {
    const { texts } = useContext(LanguageContext);

    return (
        <header id="header" className="w-full h-screen text-center transition-all">
            <main className="flex w-full h-full mx-auto justify-center items-center">
                <section className="flex flex-col w-[90%] mt-16 md:mt-20 items-center">
                    <h6 className="sectionTypeHeading">🚀 {texts.headerSection}</h6>
                    <div className="flex flex-col">
                        <h1>{texts.headerH1}</h1>
                        <p className="flex self-end -mt-4 text-[10px] md:text-xs">{texts.headerNickname}</p>
                    </div>
                    <h5 className="md:w-[80%] py-4 text-slate-800 dark:text-slate-300">{texts.headerH2}</h5>
                    <div className="flex m-auto my-4 md:my-6 items-end justify-between gap-2 md:gap-6">
                        <button className="secondaryButton gap-2">
                            <FaLinkedinIn className="dark:text-slate-200" /> View Linkedin
                        </button>
                        <button className="secondaryButton gap-2">
                            <FaGithub className="dark:text-slate-200" /> View Github
                        </button>
                        {/* <div className="socialButton">
                            <a href="https://www.linkedin.com/in/franco-dangelo/" target="_blank" rel="noreferrer">
                                <FaLinkedinIn className="dark:text-slate-200" />
                            </a>
                        </div>
                        <div className="socialButton">
                            <a href="https://github.com/franodangelo" target="_blank" rel="noreferrer">
                                <FaGithub className="dark:text-slate-200" />
                            </a>
                        </div> */}
                        {/* <div className="socialButton">
                            <Link href="">
                                <a href="https://twitter.com/techfrano" target="_blank" rel="noreferrer">
                                    <FaTwitter className="dark:text-slate-200" />
                                </a>
                            </Link>
                        </div> */}
                    </div>
                    <p>{texts.headerCTA}</p>
                    <FaChevronDown className="animate-bounce my-4" />
                </section>
            </main>
        </header>
    )
}