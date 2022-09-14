// next & react
import propTypes from 'prop-types';

const FixedPicture = ({ picSrc, picHeight, children, scroll }) => {
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

FixedPicture.propTypes = {
    picSrc : propTypes.string,
    picHeight : propTypes.number,
    scroll : propTypes.string
}

export default FixedPicture;