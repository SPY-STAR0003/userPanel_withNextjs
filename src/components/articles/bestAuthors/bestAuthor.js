// react & next 
import propTypes from 'prop-types'

// libraries
import { Grid, Avatar } from "@nextui-org/react";
import PN from "persian-number";

const BestAuthor = ({ picSrc, size, name, description, score }) => {
    return (
        <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
            <Avatar
                src={picSrc}
                css={{ size: `$${size}` }}
                zoomed
                bordered
                color="error"
                className="pointer"
            />
            <span className="w-10 textCenter mt-2 mb-2 fs-10 bold-7"> 
                {name}
            </span>
            <span className="bold-3">
                {description}
            </span>
            <span className="fs-8 bold-5">
                {PN.convertEnToPe({score})} امتیاز
            </span>
        </Grid>
    )
}

BestAuthor.propTypes = {
    picSrc : propTypes.string,
    size : propTypes.number,
    name : propTypes.string,
    description : propTypes.string,
    score : propTypes.number,
}

export default BestAuthor;