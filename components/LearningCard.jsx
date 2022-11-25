import Image from "next/image";
import React from "react";

export default function LearningCard({ thumbnail, title, progress }) {
    return (
        <div className="learningCard">
            <div className="flex justify-center items-center gap-8">
                <Image src={thumbnail} alt={`${title} logo`} width="48px" height="48px" />
                <h6>{title}</h6>
            </div>
            <div className="progressBar">
                <div className={`w-[${progress}%] activeProgressBar`} />
            </div>
        </div>
    )
}
