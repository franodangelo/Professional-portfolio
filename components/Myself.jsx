import React, { useContext } from "react";
import Image from "next/image";
import me from "../public/assets/profilepic.jpg";
import { LanguageContext } from "../context/LanguageContext";

export default function Myself() {

    const { texts } = useContext(LanguageContext);

    return (
        <main id="myself" className="flex w-full p-6 md:p-16 items-center text-center md:h-screen md:text-left transition-all">
            <div className="m-auto gap-8 items-center md:grid grid-cols-3">
                <section className="col-span-2">
                    <h6 className="sectionTypeHeading">👦 {texts.myselfSection}</h6>
                    <h2 className="py-4 font-extrabold text-blue-600 dark:text-white">{texts.myselfH1}</h2>
                    <p className="py-2 font-normal text-sm md:text-base text-slate-800 dark:text-slate-300">{texts.myselfP}</p>
                    <a href="https://www.linkedin.com/in/franco-dangelo/" target='_blank' rel="noreferrer"><p className="font-semibold text-pink-600 dark:text-pink-500 underline cursor-pointer">{texts.myselfP2}</p></a>
                </section>
                <div className="w-full h-auto my-4 p-4 justify-center items-center rounded-lg shadow-lg shadow-blue-200 dark:shadow-slate-800">
                    <Image className="rounded-xl" src={me} alt="picture of me" layout="responsive" width={80} height={80} />
                </div>
            </div>
        </main>
    )
}