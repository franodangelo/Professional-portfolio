import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageContext } from "../context/LanguageContext";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import logo from ".//../public/fdlogo.png";

export default function Navbar() {

    const { texts, handleLanguage } = useContext(LanguageContext);
    const [nav, setNav] = useState(false);
    const [mode, setMode] = useState("light");

    useEffect(() => {
        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode])

    const handleNav = () => {
        setNav(!nav);
    }

    const handleMode = () => {
        setMode(mode === "dark" ? "light" : "dark");
    }

    return (
        <nav className="fixed w-full h-20 shadow-lg z-[100] bg-white dark:bg-slate-900 dark:shadow-slate-800/20 transition-all">
            <main className="flex justify-between items-center w-full h-full px-6 lg:px-10"> {/* Here is the lg navbar */}
                <section className="flex gap-8">
                    <div className="hidden lg:flex items-center gap-4">
                        <Link offset={-200} href="/#header">
                            <Image className="hover:scale-105 duration-200 cursor-pointer" src={logo} alt="logo" width="32px" height="32px" />
                        </Link>
                        <Link href="/#myself">
                            <p className="font-semibold text-sm text-blue-600 dark:text-blue-200 uppercase hover:text-pink-600 dark:hover:text-pink-300 hover:scale-105 duration-200 cursor-pointer">{texts.navbarMyself}</p>
                        </Link>
                        <Link href="/#projects">
                            <p className="font-semibold text-sm text-blue-600 dark:text-blue-200 uppercase hover:text-pink-600 dark:hover:text-pink-300 hover:scale-105 duration-200 cursor-pointer">{texts.navbarProjects}</p>
                        </Link>
                        <Link href="/#skills">
                            <p className="font-semibold text-sm text-blue-600 dark:text-blue-200 uppercase hover:text-pink-600 dark:hover:text-pink-300 hover:scale-105 duration-200 cursor-pointer">{texts.navbarSkills}</p>
                        </Link>
                    </div>
                </section>
                <section className="flex">
                    <ul className="hidden lg:flex items-center gap-6">
                        <button onClick={handleMode}
                            className="p-2 font-semibold text-blue-800 dark:text-pink-400 rounded-full shadow dark:shadow-slate-800 cursor-pointer hover:scale-105 ease-in-out duration-200">
                            {mode === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                        </button>
                        <div className="flex gap-2">
                            <Link href={texts.cvDocument} download>
                                <a className="py-2 px-4 font-semibold text-blue-600 dark:text-blue-400 uppercase border border-blue-600 dark:border-blue-400 rounded-lg shadow-md shadow-blue-200 dark:shadow-blue-900 cursor-pointer hover:scale-105 ease-in-out duration-200"
                                    target="_blank">{texts.navbarButtonCV}
                                </a>
                            </Link>
                            <Link href="/#contact">
                                <button className="py-2 px-4 font-semibold text-white uppercase bg-pink-600 dark:bg-pink-500 rounded-lg shadow-md shadow-pink-200 dark:shadow-pink-900 cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    {texts.navbarButtonContact}
                                </button>
                            </Link>
                            <div className="flex ml-4 space-x-4">
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
            {/* Drawer menu for sm devices */}
            <main className={nav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/80" : null}>
                {/* This is the blur of the bg */}
                <div className={nav
                    ? "lg:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] lg:[40%] h-screen bg-white dark:bg-slate-900 p-10 ease-in duration-300"
                    : "fixed left-[-100%] top-0 p-10 ease-out duration-500"}>
                    <section>
                        <div className="flex w-full items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Link href="/#header">
                                    <Image onClick={handleNav} src={logo} alt="logo" width="40px" height="40px" />
                                </Link>
                                <button onClick={handleMode}
                                    className="p-2 font-semibold text-blue-800 dark:text-pink-400 rounded-full shadow dark:shadow-slate-800 cursor-pointer hover:scale-105 ease-in-out duration-200">
                                    {mode === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                                </button>
                            </div>
                            <span onClick={handleNav}
                                className="p-2 rounded-full shadow-md shadow-pink-200 dark:shadow-slate-800 cursor-pointer">
                                <HiOutlineX />
                            </span>
                        </div>
                    </section>
                    <section>
                        <div className="flex w-full mt-8 mb-4 gap-10">
                            <button value="es" onClick={handleLanguage}>🇪🇸</button>
                            <button value="en" onClick={handleLanguage}>🇺🇲</button>
                        </div>
                        <div className="flex flex-col py-2">
                            <ul>
                                <Link href="/#myself">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 dark:text-white uppercase">
                                        {texts.navbarMyself}
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 dark:text-white uppercase">
                                        {texts.navbarProjects}
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 dark:text-white uppercase">
                                        {texts.navbarSkills}
                                    </li>
                                </Link>
                                <Link href="/#contact">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 dark:text-white uppercase">
                                        {texts.navbarButtonContact}
                                    </li>
                                </Link>
                            </ul>
                            <section className="pt-8">
                                <h6 className="tracking-widest text-blue-600 uppercase">
                                    {texts.navbarWTC}
                                </h6>
                                <div className="flex w-full my-4 items-center justify-between">
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer">
                                        <Link href="/">
                                            <a href="https://www.linkedin.com/in/franco-dangelo/"
                                                target="_blank"
                                                rel="noreferrer">
                                                <FaLinkedinIn />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer">
                                        <Link href="">
                                            <a href="https://github.com/franodangelo"
                                                target="_blank"
                                                rel="noreferrer">
                                                <FaGithub />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 dark:shadow-slate-800 cursor-pointer">
                                        <Link href="/">
                                            <a href="https://twitter.com/techfrano"
                                                target="_blank"
                                                rel="noreferrer">
                                                <FaTwitter />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <button className="w-full mt-8 py-2 px-4 font-semibold text-blue-600 dark:text-blue-400 uppercase border border-blue-600 dark:border-blue-400 rounded-lg shadow-md shadow-blue-200 dark:shadow-blue-900 cursor-pointer hover:scale-105 ease-in-out duration-300">
                                <a href="https://drive.google.com/file/d/1gDNcM1H47i5_e4duAOeLd_MWe-9hRoYp/view?usp=sharing" download target="_blank" rel="noreferrer">
                                    {texts.navbarButtonCV}
                                </a>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </nav>
    )
}
