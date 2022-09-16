// react & next
import Link from 'next/link';

interface BoxSectionProps {
    boxIcon ?: any,
    boxTitle ?: string,
    boxDescription ?: string,
    size ?: string,
    isVertical ?: boolean,
    href : string
    isTextLarge ?: boolean,
}

const BoxSection : React.FC<BoxSectionProps> = ({boxIcon, isTextLarge = true, boxTitle, boxDescription, size, isVertical = true, href }) => {

    return (
        <Link href={href}>
            <div 
                className={`${isVertical ? "flex-col" : "flex-row"} ${size}
                    py-6 px-8 text-center rounded cursor-pointer items-center justify-center
                    hover:bg-gray-200 hover:-translate-y-2 transition duration-300`
                }
            >
                <div className="flex items-center justify-center">
                    {boxIcon}
                </div>
                <div className={`flex flex-col mt-2`}>
                    <h2 className={`my-4 ${isTextLarge ? "text-3xl" : "text-xl"} text-center font-extrabold`}> {boxTitle} </h2>
                    <p className='font-semibold leading-relaxed'> {boxDescription} </p>
                </div>
            </div>
        </Link>

    )
}

export default BoxSection;