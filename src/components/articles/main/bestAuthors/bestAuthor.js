// react & next 
import propTypes from 'prop-types';
import Link from "next/Link";

// libraries
import { Grid, Avatar } from "@nextui-org/react";
import PN from "persian-number";

const BestAuthor = ({ picSrc, size, name, description, score, avatarLink }) => {
    return (
        <Link href={avatarLink}>
            <Grid className="flexColumn flexAlignCenter mb-6 mrl-5">
                <Avatar
                    src={picSrc}
                    css={{ size: `$${size}` }}
                    zoomed
                    className="pointer"
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
            </Grid>
        </Link>
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