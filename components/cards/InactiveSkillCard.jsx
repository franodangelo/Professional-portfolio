import Image from "next/image";

export default function InactiveSkillCard({ thumbnail, title }) {
    return (
        <div className="inactiveSkillCard">
            <div className="w-16 h-16">
                <Image src={thumbnail} alt={`${title} logo`} />
            </div>
            <h6 className="lg:text-xl">{title}</h6>
        </div>
    );
}
