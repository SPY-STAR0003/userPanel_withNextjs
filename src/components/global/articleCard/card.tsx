// react & next
import Link from "next/link";

// libraries
import PN from "persian-number";
import { Chat, Clock, Heart, Show, Star } from "../../../assets/brokenIcons";

interface CardProps {
    children: any
}

const Card : React.FC<CardProps> = ({children}) => {
    return (
        <section className="group sm:w-auto w-full relative flex flex-col border-b lg:px-8 px-2 pt-4 pb-2 border-gray-200">
            {children}
        </section>
    )
}

interface CardHeaderProps {
    children : any
}

const Header : React.FC<CardHeaderProps> = ({children}) => {
    return (
        <header className="flex sm:flex-row flex-col items-center justify-between">
            {children}
        </header>
    )
}

interface CardProfileProps {
    profile : string
    author : string
    sort : string
}

const HeaderProfile : React.FC<CardProfileProps> = ({profile, author, sort}) => {
    return (
        <div className={"flex items-center text-gray-900 sm:mx-2 py-2 sm:py-0"}>
            <img src={profile} className={"w-8 h-8 rounded-full"} alt={"عکس پروفایل"} />
            <span className="mx-2"> {author} </span>
            <div className="flex"> <span className="text-gray-600"> در </span> <span className="text-gray-900 mr-2">{sort}</span></div>
        </div>
    )
}

interface CardHeaderStatusProps {
    children: string
}

const HeaderStatus : React.FC<CardHeaderStatusProps> = ({children}) => {
    return (
        <div className={"flex justify-between items-center space-x-2 space-x-reverse sm:mt-0 mt-2"}>
            <div className="group flex px-2 py-1 items-center text-sm text-rose-500 bg-gray-200/40 rounded-lg hover:bg-gray-200 hover:scale-110 transition cursor-pointer"> 
                <span className="font-bold ml-2"> {PN.convertEnToPe(39)} </span>
                <Heart color={"rgb(244 63 94)"} classes="w-5"/>
            </div>
            <div className="group flex px-2 py-1 items-center text-sm text-amber-500 bg-gray-200/40 rounded-lg hover:bg-gray-200 hover:scale-110 transition cursor-pointer"> 
                <span className="font-bold ml-2"> {PN.convertEnToPe(4.1)} </span>
                <Star color={"#fbbf24"} classes="w-5"/>
            </div>
            <div className="group flex px-2 py-1 items-center text-sm text-emerald-500 bg-gray-200/40 rounded-lg hover:bg-gray-200 hover:scale-110 transition cursor-pointer"> 
                <span className="font-bold ml-2"> {PN.convertEnToPe(834)} </span>
                <Show color={"#34d399"} classes="w-5"/>
            </div>
        </div>
    )
}

interface CardLabelProps {
    isAgreed : string
}

const Label : React.FC<CardLabelProps> = ({isAgreed}) => {
    return (
        <>
            {
                isAgreed && <div className="flex items-center scale-[0.6] -rotate-[20deg] shadow-blue-300 shadow-xl bg-transparent justify-center absolute left-0 top-8 text-blue-600 font-extrabold w-20 h-20 rounded-full text-center border-2 outline outline-1 outline-offset-2 border-blue-600">
                    تایید دانشگاه
                </div>
            }
        </>
    )
}

interface CardBodyProps {
    children : React.ReactNode
    description : string
}

const Body : React.FC<CardBodyProps> = ({children, description}) => {
    return (
        <main className="mt-4">
            <p className="sm:text-2xl text-xl sm:text-right text-center font-extrabold">{children}</p>
            <p className="sm:block hidden text-gray-700 leading-loose mt-4">{description.slice(0, 220) + " ... "}</p>
        </main>
    )
}

interface CardBodyTitleProps {
    link : string
    children : string
}

const BodyTitle : React.FC<CardBodyTitleProps> = ({link, children}) => {
    return (
        <Link href={link}>
            <span className=""> {children} </span>
        </Link>
    )
}
interface CardOptionsProps {
    children : string
}

const Options : React.FC<CardOptionsProps> = ({children}) => {
    return (
        <div className="hidden flex-col absolute left-0 top-0 px-4 h-full bg-gray-200/40 backdrop-blur-[1px] animate-show-from-left">
            <div className="flex text-emerald-400 flex-col items-center my-2 text-lg">
                <Show color="#34d399" classes="w-8" />
                <div className="mt-1 font-bold"> {PN.convertEnToPe(125)} </div>
            </div>
            <div className="flex text-amber-500 flex-col items-center my-2 text-lg">
                <Star color="#fbbf24" classes="w-8"/>
                <div className="mt-1 font-bold"> {PN.convertEnToPe(4.3)} </div>
            </div>
            <div className="flex text-rose-600 flex-col items-center my-2 text-lg">
                <Heart color={"rgb(225 29 72)"} classes="w-8"/>
                <div className="mt-1 font-bold"> {PN.convertEnToPe(43)} </div>
            </div>
            {/* <div className="flex text-gray-700 flex-col items-center my-2 text-lg">
                <Chat color={"#6b7280"} classes="w-8"/>
                <div className="mt-1 font-bold"> {PN.convertEnToPe(2)} </div>
            </div> */}
        </div>
    )
}

interface CardFooterProps {
    hashtags : any
}

const Footer : React.FC<CardFooterProps> = ({hashtags}) => {
    return (
        <footer className="flex sm:flex-row flex-col justify-between my-4">
            <div className="flex flex-wrap justify-center sm:justify-start">
                {
                    hashtags.slice(0,3).map((item : any, index : number) => (
                        <span className="transition duration-300 hover:bg-gray-200 cursor-pointer bg-gray-200/60 my-1 mx-2 py-2 px-3 text-xs rounded-full text-gray-700 font-semibold" key={index}> {`#${item}`} </span>
                    ))
                }
            </div>
            <div className={"flex justify-center sm:mt-0 mt-4"}>
                <span className="flex items-center text-gray-400 w-24"> <Clock color="#9ca3af" classes="ml-2 w-5" /> : {PN.convertEnToPe(6)} دقیقه </span>
            </div>
        </footer>
    )
}

Card.Header = Header;
Card.HeaderProfile = HeaderProfile;
Card.HeaderStatus = HeaderStatus;
Card.Label = Label;
Card.Body = Body;
Card.BodyTitle = BodyTitle;
Card.Options = Options;
Card.Footer = Footer;

export default Card;