import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import lightLogo from "./../public/fdlogo.png";
import darkLogo from "./../public/fdlogo-dark.png";
import argFlag from "../public/assets/argentina.png";
import usaFlag from "../public/assets/usa.png";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { LanguageContext } from "../context/LanguageContext";

export default function Navbar() {
    const { texts, handleLanguage } = useContext(LanguageContext);
    const [nav, setNav] = useState(false);
    const [mode, setMode] = useState("light");

    useEffect(() => {
        if (mode === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [mode])

    const handleNav = () => { setNav(!nav) };
    const handleMode = () => { setMode(mode === "dark" ? "light" : "dark") };

    return (
        <nav className="navbar">
            {/* Here is the desktop navbar */}
            <main className="flex justify-between items-center w-full h-full px-6 lg:px-10">
                <section className="flex gap-8">
                    <div className="hidden lg:flex items-center gap-6">
                        <Link offset={-200} href="/#header">
                            {mode === "light" ?
                                <Image
                                    src={lightLogo}
                                    alt="logo"
                                    className="hover:scale-105 duration-200 cursor-pointer"
                                    width="32px"
                                    height="32px" /> :
                                <Image
                                    src={darkLogo}
                                    alt="logo"
                                    className="hover:scale-105 duration-200 cursor-pointer"
                                    width="32px"
                                    height="32px" />
                            }
                        </Link>
                        <Link href="/#myself">
                            <p className="navSectionDesktop">{texts.navbarMyself}</p>
                        </Link>
                        <Link href="/#projects">
                            <p className="navSectionDesktop">{texts.navbarProjects}</p>
                        </Link>
                        <Link href="/#skills">
                            <p className="navSectionDesktop">{texts.navbarSkills}</p>
                        </Link>
                    </div>
                </section>
                <section className="hidden lg:flex items-center gap-6">
                    <button onClick={handleMode} className="themeButton">
                        {mode === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                    </button>
                    <div className="flex gap-2">
                        <Link href={texts.cvDocument} download>
                            <a className="secondaryButton uppercase" target="_blank">{texts.navbarButtonCV}</a>
                        </Link>
                        <Link href="/#contact">
                            <button className="primaryButton uppercase">{texts.navbarButtonContact}</button>
                        </Link>
                        <span className="flex -ml-4 -mt-1 h-3 w-3">
                            <span className="absolute inline-flex rounded-full h-3 w-3 bg-pink-300 dark:bg-pink-200" />
                            <span className="animate-ping relative inline-flex h-full w-full rounded-full bg-pink-400 dark:bg-pink-100 opacity-75" />
                        </span>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image
                            src={argFlag}
                            alt="Argentinian flag. Used to change language to spanish."
                            value="es"
                            width="24px"
                            height="24px"
                            onClick={handleLanguage} />
                        <Image
                            src={usaFlag}
                            alt="USA flag. Used to change language to english."
                            value="en"
                            width="24px"
                            height="24px"
                            onClick={handleLanguage} />
                    </div>
                </section>
                {/* Here is the sm burger menu for the navbar */}
                <HiMenuAlt3 size={24}
                    onClick={handleNav}
                    className="lg:hidden cursor-pointer text-blue-600 dark:text-white" />
            </main>
            {/* This is the blur of the Drawer */}
            <main className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/80" : null}>
                {/* Here is the mobile Drawer */}
                <div
                    className={nav ?
                        "lg:hidden fixed right-0 top-0 w-[75%] sm:w-[60%] lg:[40%] h-screen bg-white dark:bg-slate-900 p-10 ease-in duration-300" :
                        "fixed right-[-100%] top-0 p-10 ease-out duration-500"}>
                    <section className="mb-8">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Link href="/#header">
                                    {mode === "light" ?
                                        <Image
                                            onClick={handleNav}
                                            src={lightLogo}
                                            alt="logo"
                                            width="40px"
                                            height="40px" /> :
                                        <Image
                                            onClick={handleNav}
                                            src={darkLogo}
                                            alt="logo"
                                            width="40px"
                                            height="40px" />
                                    }
                                </Link>
                                <button onClick={handleMode}
                                    className="themeButton">
                                    {mode === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                                </button>
                            </div>
                            <span onClick={handleNav}
                                className="closeButton">
                                <HiOutlineX />
                            </span>
                        </div>
                    </section>
                    <section className="flex flex-col gap-8">
                        <div className="flex gap-6">
                            <Image
                                src={argFlag}
                                alt="Argentinian flag. Used to change language to spanish."
                                value="es"
                                width="24px"
                                height="24px"
                                onClick={handleLanguage} />
                            <Image
                                src={usaFlag}
                                alt="USA flag. Used to change language to english."
                                value="en"
                                width="24px"
                                height="24px"
                                onClick={handleLanguage} />
                        </div>
                        <ul className="flex flex-col gap-8">
                            <Link href="/#myself">
                                <li onClick={handleNav} className="navSectionMobile">{texts.navbarMyself}</li>
                            </Link>
                            <Link href="/#projects">
                                <li onClick={handleNav} className="navSectionMobile">{texts.navbarProjects}</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={handleNav} className="navSectionMobile">{texts.navbarSkills}</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={handleNav} className="navSectionMobile">{texts.navbarButtonContact}</li>
                            </Link>
                        </ul>
                        <a className="secondaryButton uppercase w-full justify-center" href={texts.cvDocument}
                            download target="_blank" rel="noreferrer">
                            {texts.navbarButtonCV}
                        </a>
                        <div className="flex w-full items-center justify-around">
                            <a
                                href="https://www.linkedin.com/in/franco-dangelo/"
                                target="_blank"
                                rel="noreferrer"
                                className="socialButton p-3">
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/franodangelo"
                                target="_blank"
                                rel="noreferrer"
                                className="socialButton p-3">
                                <FaGithub />
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </nav>
    )
}
