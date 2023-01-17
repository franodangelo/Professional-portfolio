import { useContext } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaChevronDown } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header() {
    const { texts } = useContext(LanguageContext);

    return (
        <header
            id="header"
            className="w-full h-screen text-center transition-all"
        >
            <main className="flex flex-col w-full h-full p-6 md:p-10 justify-center items-center">
                <motion.div
                    animate={{ transition: { duration: 0.5 }, scale: 1 }}
                    initial={{ scale: 0 }}
                    className="flex flex-col mt-20"
                >
                    <h1>{texts.headerH1}</h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ transition: { duration: 2.5 }, opacity: 1 }}
                        className="flex self-end -mt-4 text-[10px] md:text-xs"
                    >
                        {texts.headerNickname}
                    </motion.p>
                </motion.div>
                <h5 className="md:w-[80%] py-4 text-slate-800 dark:text-slate-300">
                    {texts.headerH2}
                </h5>
                <div className="flex m-auto my-4 md:my-6 items-end justify-between gap-2 md:gap-6">
                    <button className="secondaryButton">
                        <a
                            className="flex items-center gap-2"
                            href="https://www.linkedin.com/in/franco-dangelo/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedinIn className="dark:text-slate-200" />
                            View Linkedin
                        </a>
                    </button>
                    <button className="secondaryButton">
                        <a
                            className="flex items-center gap-2"
                            href="https://github.com/franodangelo"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub className="dark:text-slate-200" />
                            View Github
                        </a>
                    </button>
                </div>
                <p>{texts.headerCTA}</p>
                <FaChevronDown className="animate-bounce my-4" />
            </main>
        </header>
    );
}
