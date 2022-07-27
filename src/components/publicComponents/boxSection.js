// react & next
import propTypes from 'prop-types';


const BoxSection = ({boxIcon, boxTitle, boxDescription, size, sortType }) => {

    let sort = sortType === "horizontal" ? "flexColumn" : "dFlex"

    return (
        <section className={`box ${sort} ${size} ptb-6 prl-4 textCenter radius-3 pointer`}>
            <div className="boxHeader flexCenter">
                {boxIcon}
            </div>
            <div className='boxMain mr-3 mt-2 flexColumn'>
                <h2 className='fs-18 bold-9'> {boxTitle} </h2>
                <p className=' bold-4'> {boxDescription} </p>
            </div>
        </section>
    )
}

BoxSection.propTypes = {
    boxIcon : propTypes.node,
    boxTitle : propTypes.string,
    boxDescription : propTypes.string,
    size : propTypes.string,
    sortType : propTypes.string
}

BoxSection.defaultProps = {
    boxDescription : "",
    sortType : "vertical"
}

export default BoxSection;