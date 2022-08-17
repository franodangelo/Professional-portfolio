import React from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FaBehance, FaGithub, FaLinkedinIn } from 'react-icons/fa';


export default function Navbar() {
    return (
        <main className='fixed w-full h-20 shadow-lg z-[100]'>
            {/* Here is the lg navbar */}
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <h5>Hi, welcome!</h5>
                <section className='flex'>
                    <ul className='hidden md:flex'>
                        <Link href='/'><li className='ml-8 text-sm uppercase hover:border-b'>Home</li></Link>
                        <Link href='/'><li className='ml-8 text-sm uppercase hover:border-b'>Myself</li></Link>
                        <Link href='/'><li className='ml-8 text-sm uppercase hover:border-b'>Skills</li></Link>
                        <Link href='/'><li className='ml-8 text-sm uppercase hover:border-b'>Projects</li></Link>
                        <Link href='/'><li className='ml-8 text-sm uppercase hover:border-b'>Contact me</li></Link>
                    </ul>
                    {/* Here is the sm burger menu for the navbar */}
                    <div className='md:hidden'>
                        <HiMenuAlt3 size={24} />
                    </div>
                </section>
            </div>
            {/* Drawer menu for sm devices */}
            <div className='fixed lef-0 top-0 w-full h-screen bg-gray-900/90'> {/* This is the blur of the bg */}
                <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:[40%] h-screen bg-[#FFFFFE] p-10 ease-in-out duration-300'>
                    <section>
                        <div className='flex w-full items-center justify-between'>
                            <h5>Hi, welcome!</h5>
                            <div className='rounded-md shadow-md shadow-900-200 p-2 cursor-pointer'>
                                <HiOutlineX />
                            </div>
                        </div>
                        <div className='my-4 border-b border-gray-400'>
                            <p className='mb-2 w-[90%] md:w-[95%]'>Come see what I{"'"}ve been doing</p>
                        </div>
                    </section>
                    <section>
                        <div className='flex flex-col py-2'>
                            <ul>
                                <Link href='/'><li className='py-4 text-sm font-semibold uppercase hover:text-blue-900 hover:text-base hover:border-b-2 cursor-pointer'>Home</li></Link>
                                <Link href='/'><li className='py-4 text-sm font-semibold uppercase hover:text-blue-900 hover:text-base hover:border-b-2 cursor-pointer'>Myself</li></Link>
                                <Link href='/'><li className='py-4 text-sm font-semibold uppercase hover:text-blue-900 hover:text-base hover:border-b-2 cursor-pointer'>Skills</li></Link>
                                <Link href='/'><li className='py-4 text-sm font-semibold uppercase hover:text-blue-900 hover:text-base hover:border-b-2 cursor-pointer'>Projects</li></Link>
                                <Link href='/'><li className='py-4 text-sm font-semibold uppercase hover:text-blue-900 hover:text-base hover:border-b-2 cursor-pointer'>Contact me</li></Link>
                            </ul>
                            <div className='pt-20'>
                                <h6 className='tracking-widest text-blue-900 uppercase'>Let{"'"}s connect!</h6>
                                <div className='flex gap-8'>
                                    <FaGithub className='w-10 h-8 rounded-full shadow-md shadow-blue-200'/>
                                    <FaLinkedinIn/>
                                    <FaBehance/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
};