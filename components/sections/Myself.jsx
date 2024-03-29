import { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import me from "../../public/assets/profilepic.jpg";
import { LanguageContext } from "../../context/LanguageContext";

export default function Myself() {
    const { texts } = useContext(LanguageContext);

    return (
        <main
            id="myself"
            className="w-full md:h-full px-6 md:px-16 p-24 gap-8 items-center transition-all"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ transition: { duration: 0.75 }, opacity: 1 }}
                className="m-auto gap-8 items-center md:grid grid-cols-3"
            >
                <div className="w-full h-auto my-4 p-4 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-900/50">
                    <Image
                        src={me}
                        alt="picture of me"
                        className="rounded-xl"
                        layout="responsive"
                        width={120}
                        height={120}
                    />
                </div>
                <section className="col-span-2">
                    <div className="flex gap-2">
                        <span className="roleChip bg-blue-300 dark:bg-blue-400 text-slate-900">Full Stack</span>
                        <span className="roleChip bg-blue-200 dark:bg-blue-300 text-slate-900">Frontend</span>
                        <span className="roleChip bg-pink-200 text-slate-600">{texts.myselfProfile}</span>
                    </div>
                    <h3>{texts.myselfH1}</h3>
                    <p className="paragraph">{texts.myselfP}</p>
                    <a
                        href="https://www.linkedin.com/in/franco-dangelo/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="highlightParagraph font-montserrat">
                            {texts.myselfCTA}
                        </p>
                    </a>
                </section>
            </motion.div>
        </main>
    );
}
