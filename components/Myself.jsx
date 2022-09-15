import React from "react";
import Image from "next/image";
import me from "../public/assets/profilepic.jpg"

export default function Myself() {
    return (
        <main id="myself" className="flex w-full py-16 px-8 items-center text-center md:h-screen md:text-left">
            <div className="max-w-[1280px] m-auto gap-8 items-center md:grid grid-cols-3">
                <section className="col-span-2">
                    <h4 className="py-2 font-light text-base text-slate-800 uppercase tracking-widest">👦 This is me</h4>
                    <h1 className="py-4 font-extrabold text-blue-600">I{"'"}m searching for new challenges & experiences in my very first job in IT</h1>
                    <p className="py-2 font-normal text-sm md:text-base text-slate-600">I{"'"}m interested in working in technology to help with all my knowledge in <span className="font-bold text-blue-600">development</span> and <span className="font-bold text-blue-600">UX design</span>.<br />I would love to collaborate in social impact projects where I can really solve people{"'"}s needs.</p>
                    <a href="https://www.linkedin.com/in/franco-dangelo/" target='_blank' rel="noreferrer"><span className="font-semibold text-pink-600 underline cursor-pointer">See my experience and formation in detail</span></a>
                </section>
                <div className="w-full h-auto my-4 p-4 justify-center items-center rounded-lg shadow-lg shadow-pink-200">
                    <Image className="rounded-xl" src={me} alt="picture of Frano" layout="responsive" width={80} height={80} />
                </div>
            </div>
        </main>
    )
};