

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
        <h5 className="headerTitle fs-10 black"> {children} </h5>
    )
}

const HeaderStatus = ({children}) => {
    return (
        <p className="headerStatus fs-8 mt-1 gray"> {children} </p>
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
            {children}
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
Card.Body = Body;
Card.Options = Options;
Card.Footer = Footer;

export default Card;