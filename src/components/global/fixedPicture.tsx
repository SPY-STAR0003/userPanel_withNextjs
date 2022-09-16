
interface FixedPictureProps {
    picSrc ?: string,
    picHeight ?: number,
    scroll ?: string
    children ?: any
}

const FixedPicture : React.FC<FixedPictureProps> = ({ picSrc, picHeight, children, scroll }) => {
    return (
        <article
            style={{
                width : "100%",
                background : `url(${picSrc}) ${scroll} no-repeat`,
                height : `${picHeight}rem`,
            }}
            className="flexCenter"
        >
            {children}
        </article>
    )
}

export default FixedPicture;