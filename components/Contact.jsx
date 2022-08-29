import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Contact() {
    return (
        <main id="contact" className="flex w-full px-8 text-center md:h-screen py-16 items-center md:text-left">
            <div className="max-w-[1280px] m-auto md:grid grid-cols-3 gap-8 items-center">
                <section className="col-span-2">
                    <h4 className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">Contact me</h4>
                    <h1 className="py-4 font-extrabold text-blue-600">Get in touch!</h1>
                    <p className="py-2 font-normal text-sm md:text-base text-slate-600">Call me, write me an e-mail or a WhatsApp message, or just connect with me and chat in Linkedin. </p>
                </section>
                <section>
                    <div className='flex flex-col gap-4'>
                        <div className="flex p-4 justify-between shadow-md rounded-xl hover:scale-105 ease-in-out duration-300">
                            <FaWhatsapp className='h-8 w-8 text-green-500' />
                            <h6>+5491122857609</h6>
                        </div>
                        <div className="flex p-4 justify-between shadow-md rounded-xl hover:scale-105 ease-in-out duration-300">
                            <HiMail className='h-8 w-8 text-blue-600' />
                            <h6>ffrancodangelo@gmail.com</h6>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
