// react & next 
import Link from "next/link";

// libraries
import PN from "persian-number";

interface BestAuthorProps {
    picSrc : string,
    size : number,
    name : string,
    description : string,
    score : number,
    avatarLink : string
    classes ?: string
}

const BestAuthor : React.FC<BestAuthorProps> = ({ picSrc, classes, size, name, description, score, avatarLink }) => {
    return (
        <Link href={avatarLink}>
            <div className={`${classes} group flex flex-col items-center mb-6 hover:-translate-y-1 transition`}>
                <div className={"overflow-hidden rounded-full"}>
                    <img
                        src={picSrc}
                        className={`${size} group-hover:scale-[1.1] transition duration-300 cursor-pointer rounded-full`}
                    />
                </div>
                <span className="text-center mt-2 mb-1 text-lg font-bold text-gray-900"> 
                    {name}
                </span>
                <span className="my-0.5 font-light">
                    {description}
                </span>
                <span className="text-sm font-bold text-gray-500">
                    {PN.convertEnToPe(score)} امتیاز
                </span>
            </div>
        </Link>
    )
}


export default BestAuthor;