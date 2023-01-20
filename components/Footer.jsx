import { useContext } from "react";
import Image from "next/image";
import react from "../public/assets/skills/react.png";
import next from "../public/assets/skills/next.png";
import tailwind from "../public/assets/skills/tailwind.png";
import { LanguageContext } from "../context/LanguageContext";

export default function Footer() {
    const { texts } = useContext(LanguageContext);

    return (
        <footer className="footer">
            <div className="flex flex-col items-center md:items-start gap-2">
                <h4 className="footerHeading">{texts.footerThanks} 😀</h4>
                <p className="footerSubheading">{texts.footerRights}</p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-nowrap justify-center items-center gap-2">
                <h4 className="footerSubheading">{texts.footerCreated}</h4>
                <ul className="flex justify-between lg:justify-evenly gap-2 lg:gap-4">
                    <span className="footerSocial">
                        <div className="flex w-6 h-6 md:w-4 md:h-4">
                            <Image
                                src={next}
                                alt="Next.js logo"
                            />
                        </div>
                    </span>
                    <span className="footerSocial">
                        <div className="flex w-6 h-6 md:w-4 md:h-4">
                            <Image
                                src={react}
                                alt="React logo"
                            />
                        </div>
                    </span>
                    <span className="footerSocial">
                        <div className="flex w-6 h-6 md:w-4 md:h-4">
                            <Image
                                src={tailwind}
                                alt="Tailwind CSS logo"
                            />
                        </div>
                    </span>
                </ul>
            </div>
        </footer>
    );
}
