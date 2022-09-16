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
}

const BestAuthor : React.FC<BestAuthorProps> = ({ picSrc, size, name, description, score, avatarLink }) => {
    return (
        <Link href={avatarLink}>
            <div className="flexColumn flexAlignCenter mb-6 mrl-5">
                <img
                    src={picSrc}
                    // css={{ size: `$${size}` }}
                    // zoomed
                    className="cursor-pointer"
                />
                <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                    {name}
                </span>
                <span className="bold-3">
                    {description}
                </span>
                <span className="fs-8 bold-5 gray">
                    {PN.convertEnToPe(score)} امتیاز
                </span>
            </div>
        </Link>
    )
}


export default BestAuthor;