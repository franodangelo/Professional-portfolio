import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaBehance, FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from ".//../public/fdlogo.png";

export default function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="fixed w-full h-20 shadow-lg z-[100] bg-[#EFF0F3]">
            <main className="flex justify-between items-center w-full h-full px-6 2xl:px-16"> {/* Here is the lg navbar */}
                <Image src={logo} alt="logo" width="40px" height="40px" />
                <section className="flex">
                    <ul className="hidden md:flex items-center">
                        <Link offset={-200} href="/#header">
                            <li className="ml-8 font-semibold text-sm uppercase hover:text-blue-400 duration-200 cursor-pointer">Home</li>
                        </Link>
                        <Link href="/#myself">
                            <li className="ml-8 font-semibold text-sm uppercase hover:text-blue-400 duration-200 cursor-pointer">Myself</li>
                        </Link>
                        <Link href="/#skills">
                            <li className="ml-8 font-semibold text-sm uppercase hover:text-blue-400 duration-200 cursor-pointer">Skills</li>
                        </Link>
                        <Link href="/#projects">
                            <li className="ml-8 font-semibold text-sm uppercase hover:text-blue-400 duration-200 cursor-pointer">Projects</li>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1bnItJ1HsNa4XnA-M67K5LFuSu4FZFuEa/view?usp=sharing" download>
                            <a className="ml-12 py-2 px-4 font-semibold text-blue-600 uppercase border-2 border-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 ease-in-out duration-300" target='_blank'>Download CV</a>
                        </Link>
                        <Link href="mailto:ffrancodangelo@gmail.com">
                            <button className="ml-4 py-2 px-4 font-semibold text-[#EFF0F3] uppercase bg-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 ease-in-out duration-300">Contact me</button>
                        </Link>
                    </ul>
                    {/* Here is the sm burger menu for the navbar */}
                    <div onClick={handleNav} className="md:hidden cursor-pointer">
                        <HiMenuAlt3 size={24} />
                    </div>
                </section>
            </main>
            {/* Drawer menu for sm devices */}
            <main className={nav ? "md:hidden fixed lef-0 top-0 w-full h-screen bg-gray-900/90" : null}>
                {/* This is the blur of the bg */}
                <div className={nav
                    ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:[40%] h-screen bg-[#FFFFFE] p-10 ease-in duration-300"
                    : "fixed left-[-100%] top-0 p-10 ease-out duration-500"}>
                    <section>
                        <div className="flex w-full items-center justify-between">
                            <h5 className="text-blue-600">I{"'"}m Frano!</h5>
                            <span onClick={handleNav} className="rounded-md shadow-md shadow-900-200 p-2 cursor-pointer">
                                <HiOutlineX />
                            </span>
                        </div>
                        <div className="my-4 border-b border-gray-400">
                            <h6 className="mb-2 w-[90%] font-medium md:w-[95%]">
                                Come see what I{"'"}ve been doing
                            </h6>
                        </div>
                    </section>
                    <section>
                        <div className="flex flex-col py-2">
                            <ul>
                                <Link href="/#header">
                                    <li onClick={handleNav} className="py-4 font-semibold text-sm text-blue-900 uppercase">
                                        Home
                                    </li>
                                </Link>
                                <Link href="/#myself">
                                    <li onClick={handleNav} className="py-4 font-semibold text-sm text-blue-900 uppercase">
                                        Myself
                                    </li>
                                </Link>
                                <Link href="/#skills">
                                    <li onClick={handleNav} className="py-4 font-semibold text-sm text-blue-900 uppercase">
                                        Skills
                                    </li>
                                </Link>
                                <Link href="/#projects">
                                    <li onClick={handleNav} className="py-4 font-semibold text-sm text-blue-900 uppercase">
                                        Projects
                                    </li>
                                </Link>
                            </ul>
                            <section className="pt-16">
                                <h6 className="tracking-widest text-blue-600 uppercase">
                                    Want to connect?
                                </h6>
                                <div className="flex w-full my-4 items-center justify-between sm:w-[80%]">
                                    <div className="p-3 rounded-full shadow-sm shadow-blue-100 cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-blue-200 ease-in-out duration-200">
                                        <Link href="/">
                                            <a href="https://www.linkedin.com/in/franco-dangelo/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-blue-100 cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-blue-200 ease-in-out duration-200">
                                        <Link href="">
                                            <a href="https://github.com/franodangelo" target='_blank' rel="noreferrer"><FaGithub /></a>
                                        </Link>
                                    </div>
                                    <div className="p-3 rounded-full shadow-sm shadow-blue-100 cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-blue-200 ease-in-out duration-200">
                                        <Link href="/">
                                            <a href="https://www.behance.net/francodangelo" target='_blank' rel="noreferrer"><FaBehance /></a>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <button className="w-full mt-16 py-2 px-4 font-semibold text-[#EFF0F3] uppercase bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 ease-in-out duration-300">
                                <a href="https://drive.google.com/file/d/1bnItJ1HsNa4XnA-M67K5LFuSu4FZFuEa/view?usp=sharing" download target='_blank' rel="noreferrer">
                                    Download CV
                                </a>
                            </button>
                            <Link href="mailto:ffrancodangelo@gmail.com">
                                <button className="w-full mt-16 py-2 px-4 font-semibold text-[#EFF0F3] uppercase bg-gradient-to-l from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-md shadow-blue-200 cursor-pointer hover:scale-105 ease-in-out duration-300">Contact me</button>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </nav>
    );
}
