import React from 'react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Contact() {
    return (
        <main id="contact" className="flex w-full px-8 text-center h-screen py-16 items-center md:text-left">
            <div className="max-w-[1280px] m-auto md:grid grid-cols-3 gap-8 items-center">
                <section className="col-span-2">
                    <h4 className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">Contact me</h4>
                    <h1 className="py-4 font-extrabold text-blue-600">Get in touch!</h1>
                    <p className="py-2 font-normal text-sm md:text-base text-slate-600">Call me, write me an e-mail or a WhatsApp message, or just connect and chat with me in Linkedin.</p>
                </section>
                <section className="mt-4 md:mt-0">
                    <div className="flex flex-col m-auto justify-between gap-4 md:gap-8">
                        <div className='flex items-center justify-between gap-8'>
                            <h6 className="font-medium"><strong className='text-blue-600'>Phone number</strong>: +541122857609</h6>
                            <div className="p-4 rounded-full shadow-md shadow-blue-300 cursor-pointer hover:scale-110 hover:shadow-blue-400 ease-in-out duration-200">
                                <a href="https://wa.me/541122857609"
                                    target="_blank"
                                    rel="noreferrer"><FaWhatsapp /></a>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-8'>
                            <h6 className="font-medium"><strong className='text-blue-600'>Mail</strong>: ffrancodangelo@gmail.com</h6>
                            <div className="p-4 rounded-full shadow-md shadow-blue-300 cursor-pointer hover:scale-110 hover:shadow-blue-400 ease-in-out duration-200">
                                <a href="mailto:ffrancodangelo@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"><HiMail /></a>
                            </div>
                        </div>
                        <div className='flex items-center justify-between gap-8'>
                            <h6 className="font-medium"><strong className='text-blue-600'>Linkedin</strong>: in/franco-dangelo/</h6>
                            <div className="p-4 rounded-full shadow-md shadow-blue-300 cursor-pointer hover:scale-110 hover:shadow-blue-400 ease-in-out duration-200">
                                <a href="https://wa.me/541122857609"
                                    target="_blank"
                                    rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
