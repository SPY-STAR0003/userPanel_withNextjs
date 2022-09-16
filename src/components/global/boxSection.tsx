// react & next
import Link from 'next/link';

interface BoxSectionProps {
    boxIcon ?: any,
    boxTitle ?: string,
    boxDescription ?: string,
    size ?: string,
    sortType ?: string,
    href : string
}

const BoxSection : React.FC<BoxSectionProps> = ({boxIcon, boxTitle, boxDescription, size, sortType = "vertical", href }) => {

    let sort = sortType === "horizontal" ? "flexColumn" : "dFlex"

    return (
        <Link href={href}>
            <div className={`box ${sort} ${size} ptb-6 prl-4 textCenter radius-3 pointer`}>
                <div className="boxHeader flexCenter">
                    {boxIcon}
                </div>
                <div className='boxMain mr-3 mt-2 flexColumn'>
                    <h2 className='fs-18 bold-9'> {boxTitle} </h2>
                    <p className=' bold-4'> {boxDescription} </p>
                </div>
            </div>
        </Link>

    )
}

export default BoxSection;