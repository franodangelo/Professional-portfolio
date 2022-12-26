import { useContext } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaChevronDown } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header() {
    const { texts } = useContext(LanguageContext);

    return (
        <header id="header" className="w-full h-screen text-center transition-all">
            <main className="flex flex-col w-full h-full p-6 md:p-10 justify-center items-center">
                <div className="flex flex-col mt-20">
                    <motion.h1 animate={{ scale: 1 }} initial={{ scale: 0 }}>{texts.headerH1}</motion.h1>
                    <motion.p animate={{ x: 0 }} transition={{ type: "tween", duration: 3 }} initial={{ x: 4000 }} className="flex self-end -mt-4 text-[10px] md:text-xs">{texts.headerNickname}</motion.p>
                </div>
                <h5 className="md:w-[80%] py-4 text-slate-800 dark:text-slate-300">{texts.headerH2}</h5>
                <div className="flex m-auto my-4 md:my-6 items-end justify-between gap-2 md:gap-6">
                    <a href="https://www.linkedin.com/in/franco-dangelo/" target="_blank" rel="noreferrer">
                        <button className="secondaryButton gap-2">
                            <FaLinkedinIn className="dark:text-slate-200" /> View Linkedin
                        </button>
                    </a>
                    <a href="https://github.com/franodangelo" target="_blank" rel="noreferrer">
                        <button className="secondaryButton gap-2">
                            <FaGithub className="dark:text-slate-200" /> View Github
                        </button>
                    </a>
                </div>
                <p>{texts.headerCTA}</p>
                <FaChevronDown className="animate-bounce my-4" />
            </main>
        </header>
    )
}