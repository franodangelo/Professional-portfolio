import Image from "next/image";

export default function SkillCard({ thumbnail, title }) {
    return (
        <div className="activeSkillCard">
            <Image
                src={thumbnail}
                alt={`${title} logo`}
                width="64px"
                height="64px"
            />
            <h6 className="lg:text-xl">{title}</h6>
        </div>
    );
}
