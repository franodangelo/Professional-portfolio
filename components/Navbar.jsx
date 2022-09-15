import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaBehance, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from ".//../public/fdlogo.png";

export default function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="fixed w-full h-20 shadow-lg z-[100] bg-[#EFF0F3]">
            <main className="flex justify-between items-center w-full h-full px-6 2xl:px-16"> {/* Here is the lg navbar */}
                <Image src={logo} alt="logo" width="32px" height="32px" />
                <section className="flex">
                    <ul className="hidden md:flex items-center gap-8">
                        <Link offset={-200} href="/#header">
                            <li className="font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer">Home</li>
                        </Link>
                        <Link href="/#myself">
                            <li className="font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer">Myself</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="font-semibold text-sm text-blue-600 uppercase hover:text-pink-600 hover:scale-105 duration-200 cursor-pointer">Projects</li>
                        </Link>
                        <div className="flex gap-4">
                            <Link href="https://drive.google.com/file/d/1gdeUKkJOyLxEbb0iNGpLHvPPqMBsA5pr/view?usp=sharing" download>
                                <a className="py-2 px-4 font-semibold text-blue-600 uppercase border border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-blue-300 ease-in-out duration-200"
                                    target='_blank'>Download CV
                                </a>
                            </Link>
                            <Link href="/#contact">
                                <button className="py-2 px-4 font-semibold text-[#EFF0F3] uppercase bg-pink-600 rounded-lg shadow-md shadow-pink-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                                    Contact me
                                </button>
                            </Link>
                            
                        </div>
                    </ul>
                    {/* Here is the sm burger menu for the navbar */}
                    <div onClick={handleNav} className="md:hidden cursor-pointer text-blue-600">
                        <HiMenuAlt3 size={24} />
                    </div>
                </section>
            </main>
            {/* Drawer menu for sm devices */}
            <main className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/80" : null}>
                {/* This is the blur of the bg */}
                <div className={nav
                    ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:[40%] h-screen bg-[#EFF0F3] p-10 ease-in duration-300"
                    : "fixed left-[-100%] top-0 p-10 ease-out duration-500"}>
                    <section>
                        <div className="flex w-full items-center justify-between">
                            <Image src={logo} alt="logo" width="40px" height="40px" />
                            <span onClick={handleNav}
                                className="rounded-full shadow-md shadow-pink-200 p-2 cursor-pointer">
                                <HiOutlineX />
                            </span>
                        </div>
                    </section>
                    <section>
                        <div className="flex flex-col py-2">
                            <ul>
                                <Link href="/#header">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 uppercase">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/#myself">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 uppercase">
                                        Myself
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 uppercase">
                                        Skills
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 uppercase">
                                        Projects
                                    </li>
                                </Link>
                                <Link href="/#contact">
                                    <li onClick={handleNav}
                                        className="py-4 font-semibold text-sm text-blue-600 uppercase">
                                        Contact me
                                    </li>
                                </Link>
                            </ul>
                            <section className="pt-8">
                                <h6 className="tracking-widest text-blue-600 uppercase">
                                    Want to connect?
                                </h6>
                                <div className="flex w-full my-4 items-center justify-between">
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer">
                                        <Link href="/">
                                            <a href="https://www.linkedin.com/in/franco-dangelo/"
                                                target='_blank'
                                                rel="noreferrer">
                                                <FaLinkedinIn />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer">
                                        <Link href="">
                                            <a href="https://github.com/franodangelo"
                                                target='_blank'
                                                rel="noreferrer">
                                                <FaGithub />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer">
                                        <Link href="/">
                                            <a href="https://www.behance.net/francodangelo"
                                                target='_blank'
                                                rel="noreferrer">
                                                <FaBehance />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-pink-200 cursor-pointer">
                                        <Link href="/">
                                            <a href="https://twitter.com/techfrano"
                                                target='_blank'
                                                rel="noreferrer">
                                                <FaTwitter />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <button className="w-full mt-8 py-2 px-4 font-semibold text-blue-600 uppercase border border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 ease-in-out duration-300">
                                <a href="https://drive.google.com/file/d/1bnItJ1HsNa4XnA-M67K5LFuSu4FZFuEa/view?usp=sharing" download target='_blank' rel="noreferrer">
                                    Download CV
                                </a>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </nav>
    );
}
