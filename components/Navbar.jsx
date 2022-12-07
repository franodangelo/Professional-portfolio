import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../public/fdlogo.png";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
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
                    <div className="hidden lg:flex items-center gap-4">
                        <Link offset={-200} href="/#header">
                            <Image src={logo} alt="logo"
                                className="hover:scale-105 duration-200 cursor-pointer" width="32px" height="32px" />
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
                <section className="flex">
                    <ul className="hidden lg:flex items-center gap-6">
                        <button onClick={handleMode}
                            className="themeButton">
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
                                <span className="absolute inline-flex rounded-full h-3 w-3 bg-pink-300 dark:bg-pink-200"></span>
                                <span className="animate-ping relative inline-flex h-full w-full rounded-full bg-pink-400 dark:bg-pink-100 opacity-75"></span>
                            </span>
                            <div className="flex items-center ml-4 space-x-4 cursor-pointer">
                                <button value="es" onClick={handleLanguage}>🇪🇸</button>
                                <button value="en" onClick={handleLanguage}>🇺🇲</button>
                            </div>
                        </div>
                    </ul>
                    {/* Here is the sm burger menu for the navbar */}
                    <div onClick={handleNav} className="lg:hidden cursor-pointer text-blue-600 dark:text-white">
                        <HiMenuAlt3 size={24} />
                    </div>
                </section>
            </main>
            {/* This is the blur of the Drawer */}
            <main className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/80" : null}>
                {/* Here is the mobile Drawer */}
                <div className={nav ?
                    "lg:hidden fixed right-0 top-0 w-[75%] sm:w-[60%] lg:[40%] h-screen bg-white dark:bg-slate-900 p-10 ease-in duration-300" :
                    "fixed right-[-100%] top-0 p-10 ease-out duration-500"}>
                    <section className="mb-8">
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Link href="/#header">
                                    <Image onClick={handleNav} src={logo} alt="logo" width="40px" height="40px" />
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
                        <div className="flex gap-8">
                            <button value="es" onClick={handleLanguage}>🇪🇸</button>
                            <button value="en" onClick={handleLanguage}>🇺🇲</button>
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
                            <div className="socialButton p-3">
                                <a href="https://www.linkedin.com/in/franco-dangelo/" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <div className="socialButton p-3">
                                <a href="https://github.com/franodangelo" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                            </div>
                            {/* <div className="socialButton p-3">
                                <a href="https://twitter.com/techfrano" target="_blank" rel="noreferrer">
                                    <FaTwitter />
                                </a>
                            </div> */}
                        </div>
                    </section>
                </div>
            </main>
        </nav>
    )
}
