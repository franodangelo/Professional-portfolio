import React, { useContext } from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { LanguageContext } from "../context/LanguageContext";

export default function Contact() {

    const { texts } = useContext(LanguageContext);

    return (
        <main id="contact" className="flex w-full p-6 md:p-20 text-center h-screen items-center">
            <div className="flex flex-col w-full m-auto gap-8 items-center">
                <section className="col-span-2">
                    <h6 className="py-2 font-light text-slate-800 uppercase tracking-widest">🤙 {texts.contactSection}</h6>
                    <h2 className="py-4 font-extrabold text-blue-600">{texts.contactH1}</h2>
                    <p className="py-2 font-normal text-sm md:text-base text-slate-600">{texts.contactP}</p>
                </section>
                <section className="flex flex-col w-fit justify-between gap-4 md:gap-8">
                    <div className="flex items-center justify-between gap-8">
                        <h6 className="font-medium"><strong className="text-blue-600">{texts.contactPhone}</strong>: +541122857609</h6>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                            <a href="https://wa.me/541122857609"
                                target="_blank"
                                rel="noreferrer"><FaWhatsapp /></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                        <h6 className="font-medium"><strong className="text-blue-600">Mail</strong>: ffrancodangelo@gmail.com</h6>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                            <a href="mailto:ffrancodangelo@gmail.com"
                                target="_blank"
                                rel="noreferrer"><HiMail /></a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-8">
                        <h6 className="font-medium"><strong className="text-blue-600">Linkedin</strong>: in/franco-dangelo/</h6>
                        <div className="p-4 rounded-full shadow-md shadow-blue-200 cursor-pointer hover:scale-105 hover:shadow-pink-300 ease-in-out duration-200">
                            <a href="https://www.linkedin.com/in/franco-dangelo/"
                                target="_blank"
                                rel="noreferrer"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
