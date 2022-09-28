import React from "react";
import Image from "next/image";
import react from "../public/assets/skills/react.png";
import next from "../public/assets/skills/next.png";
import tailwind from "../public/assets/skills/tailwind.png";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row w-full h-40 py-12 lg:py-0 lg:px-12 gap-8 items-center justify-between bg-white">
            <div className="flex flex-wrap lg:flex-col lg:flex-nowrap justify-center items-center gap-2">
                <h1 className="font-medium text-center text-base text-blue-600">This portfolio was created with</h1>
                <ul className="flex justify-between lg:justify-evenly gap-2 lg:gap-4">
                    <span className="flex p-2 items-center rounded-full shadow-lg shadow-blue-200">
                        <Image src={react} alt="Next.js logo" width="24px" height="24px" />
                    </span>
                    <span className="flex p-2 items-center rounded-full shadow-lg shadow-blue-200">
                        <Image src={next} alt="Next.js logo" width="24px" height="16px" />
                    </span>
                    <span className="flex p-2 items-center rounded-full shadow-lg shadow-blue-200">
                        <Image src={tailwind} alt="Next.js logo" width="24px" height="24px" />
                    </span>
                </ul>
            </div>
            <div className="flex lg:flex-col gap-2 items-center">
                <h2 className="font-medium text-sm md:text-base text-blue-600">Thanks for watching! 😀</h2>
                <p className="font-thin text-xs md:text-sm text-blue-600">Last update: 28-09-2022</p>
            </div>
        </footer>
    )
}
