import Image from "next/image";

export default function SkillCard({ thumbnail, title }) {
    return (
        <div className="activeSkillCard">
            <div className="w-16 h-16">
                <Image
                    src={thumbnail}
                    alt={`${title} logo`}
                />
            </div>
            <h6 className="lg:text-xl">{title}</h6>
        </div>
    );
}
