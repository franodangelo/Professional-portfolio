import { useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "../../public/assets/profilepic.jpg";
import { LanguageContext } from "../../context/LanguageContext";

export default function Myself() {
    const { texts } = useContext(LanguageContext);

    return (
        <main id="myself" className="w-full md:h-full p-6 md:px-16 md:py-24 gap-8 items-center transition-all">
            <div className="m-auto gap-8 items-center md:grid grid-cols-3">
                <motion.div animate={{ x: 0 }} initial={{ x: -1500 }} transition={{ type: "tween", duration: 1 }} className="w-full h-auto my-4 p-4 rounded-lg shadow-lg shadow-blue-200 dark:shadow-blue-900/50">
                    <Image
                        src={me} alt="picture of me"
                        className="rounded-xl"
                        layout="responsive"
                        width={120}
                        height={120} />
                </motion.div>
                <section className="col-span-2">
                    <motion.div animate={{ x: 0 }} initial={{ x: 1500 }} transition={{ type: "tween", duration: 1.75 }} className="flex gap-2">
                        <span className="dateChip">Full-Stack</span>
                        <span className="apiChip">Frontend</span>
                        <span className="apiChip">{texts.myselfProfile}</span>
                    </motion.div>
                    <motion.h3 animate={{ x: 0 }} initial={{ x: 1500 }} transition={{ type: "tween", duration: 1.25 }}>{texts.myselfH1}</motion.h3>
                    <motion.p animate={{ x: 0 }} initial={{ x: 1500 }} transition={{ type: "tween", duration: 1.5 }} className="paragraph">{texts.myselfP}</motion.p>
                    <a href="https://www.linkedin.com/in/franco-dangelo/" target='_blank' rel="noreferrer">
                        <motion.p animate={{ x: 0 }} initial={{ x: 1500 }} transition={{ type: "tween", duration: 3 }} className="highlightParagraph font-montserrat">{texts.myselfCTA}</motion.p>
                    </a>
                </section>
            </div>
        </main>
    )
}