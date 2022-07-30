// react & next
import Link from "next/Link";

// libraries
import {FaHeart, FaEye ,FaCommentDots, FaRegStar} from "react-icons/fa";
import PN from "persian-number";

const Card = ({children}) => {
    return (
        <section className="myCard">
            {children}
        </section>
    )
}

const Header = ({children}) => {
    return (
        <header className="cardHeader flexAlignCenter">
            {children}
        </header>
    )
}

const HeaderProfile = ({imgSrc}) => {
    return (<img src={imgSrc} alt={"عکس پروفایل"} />)
}

const HeaderText = ({children}) => {
    return (
        <div className={"headerText mr-3 textRight"}>
            {children}
        </div>
    )
}

const HeaderTitle = ({children}) => {
    return (
        <Link href={"./singleArticle"}>
            <h5 className="headerTitle fs-10 black"> {children} </h5>
        </Link>
    )
}

const HeaderStatus = ({children}) => {
    return (
        <p className="headerStatus fs-8 mt-1 gray"> {children} </p>
    )
}

const Label = ({children, isSubmit}) => {
    return (
        <div className="cardLabel">
            {children}
        </div>
    )
}

const Body = ({children}) => {
    return (
        <main className="cardBody p-3 fs-9 lineHeight-3">
            {children.slice(0, 220) + " ... "}
        </main>
    )
}

const Options = ({children}) => {
    return (
        <div className="cardOptions">
            <div className="seen flexColumn flexCenter mtb-3 fs-12">
                <FaEye />
                <div className="mt-1 bold-7"> {PN.convertEnToPe(125)} </div>
            </div>
            <div className="star flexColumn flexCenter mtb-3 fs-12">
                <FaRegStar />
                <div className="mt-1 bold-7"> {PN.convertEnToPe(4.3)} </div>
            </div>
            <div className="like flexColumn flexCenter mtb-3 fs-12">
                <FaHeart />
                <div className="mt-1 bold-7"> {PN.convertEnToPe(43)} </div>
            </div>
            <div className="comment flexColumn flexCenter mtb-3 fs-12">
                <FaCommentDots />
                <div className="mt-1 bold-7"> {PN.convertEnToPe(2)} </div>
            </div>
        </div>
    )
}

const Footer = ({hashtags}) => {
    return (
        <footer className="cardFooter">
            {
                hashtags.map((item, index) => (
                    <div className="fs-7 hashtag" key={index}> {` #${item}`} </div>
                ))
            }
        </footer>
    )
}

Card.Header = Header;
Card.HeaderTitle = HeaderTitle;
Card.HeaderProfile = HeaderProfile;
Card.HeaderText = HeaderText;
Card.HeaderTitle = HeaderTitle;
Card.HeaderStatus = HeaderStatus;
Card.Label = Label;
Card.Body = Body;
Card.Options = Options;
Card.Footer = Footer;

export default Card;