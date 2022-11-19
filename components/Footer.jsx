import React, { useContext } from "react";
import Image from "next/image";
import react from "../public/assets/skills/react.png";
import next from "../public/assets/skills/next.png";
import tailwind from "../public/assets/skills/tailwind.png";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
    const { texts } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <div className="flex flex-wrap lg:flex-col lg:flex-nowrap justify-center items-center gap-2">
                <h1 className="footerHeading">{texts.footerCreated}</h1>
                <ul className="flex justify-between lg:justify-evenly gap-2 lg:gap-4">
                    <span className="footerSocial">
                        <Image src={react} alt="React logo" width="24px" height="24px" />
                    </span>
                    <span className="footerSocial">
                        <Image src={next} alt="Next.js logo" width="24px" height="16px" />
                    </span>
                    <span className="footerSocial">
                        <Image src={tailwind} alt="Tailwind CSS logo" width="24px" height="24px" />
                    </span>
                </ul>
            </div>
            <div className="flex lg:flex-col gap-2 items-center">
                <h2 className="footerHeading">{texts.footerThanks} 😀</h2>
                <p className="footerSubheading">{texts.footerUpdate} 19-11-2022</p>
            </div>
        </footer>
    )
}
