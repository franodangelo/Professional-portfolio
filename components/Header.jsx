import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Header() {
    return (
        <header className='w-full h-screen text-center'>
            <main className='flex max-w-[1280px] w-full h-full mx-auto p-2 justify-center items-center'>
                <section className='flex flex-col w-[80%]'>
                    <p className='font-normal text-base text-slate-600 uppercase tracking-widest'>Welcome to my portfolio</p>
                    <h1 className='font-extrabold text-blue-600 my-4'>Hi everyone, I{`'`}m Frano!</h1>
                    <h4 className='font-light'>a <span className='font-bold text-blue-600'>Full-Stack Developer</span> based in Buenos Aires, Argentina</h4>
                    <p></p>
                    <div className="flex max-w-[340px] m-auto mt-4 py-4 items-center justify-between gap-4">
                        <div className="p-4 rounded-full shadow-md shadow-pink-400 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-pink-500 ease-in-out duration-200">
                            <Link href="https://www.linkedin.com/in/franco-dangelo/"><FaLinkedinIn /></Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-pink-400 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-pink-500 ease-in-out duration-200">
                            <Link href="https://github.com/franodangelo"><FaGithub /></Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-pink-400 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-pink-500 ease-in-out duration-200">
                            <Link href=''><FaBehance /></Link>
                        </div>
                        <div className="p-4 rounded-full shadow-md shadow-pink-400 cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-pink-500 ease-in-out duration-200">
                            <Link href='mailto:ffrancodangelo@gmail.com'><HiMail /></Link>
                        </div>
                    </div>
                </section>
            </main>
        </header>
    )
};