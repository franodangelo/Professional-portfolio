import Image from "next/image";
import React from "react";

export default function InactiveSkillCard({ thumbnail, title }) {
    return (
        <div className="inactiveSkillCard">
            <Image src={thumbnail} alt={`${title} logo`} width="64px" height="64px" />
            <h6>{title}</h6>
        </div>
    )
}
