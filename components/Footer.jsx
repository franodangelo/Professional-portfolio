import Link from "next/link";
import React from "react";
import { FaChevronUp } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full h-20 gap-2 items-center justify-center border-t border-blue-600 bg-[#EFF0F3]">
            <h2 className="font-medium text-lg text-blue-600">Thanks for watching!😀</h2>
            <p className="font-thin text-sm text-blue-600">Last update: 14-09-2022</p>
        </footer>
    )
}
