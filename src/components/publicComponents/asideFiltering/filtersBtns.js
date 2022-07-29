// react & next
import propTypes from "prop-types";

// libraies
import {FaCheckDouble, FaFilter, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const FiltersBtns = ({setShowFilters, showFilters}) => {
    return (
        <>
            {
                showFilters
                    ?
                        <>
                            <div className="submitFilters">
                                <FaCheckDouble />
                            </div>
                            <div className="showFilters" onClick={() => setShowFilters(!showFilters)} >
                                <FaFilter />
                                <FaAngleDoubleRight />
                            </div> 
                        </>
                    :
                        <div className="showFilters leftedFilters"  onClick={() => setShowFilters(!showFilters)} >
                            <FaFilter />
                            <FaAngleDoubleLeft className='mr-3'/>
                        </div>
            }
        </>
    )
}

FiltersBtns.propTypes = {
    showFilters : propTypes.bool,
    setShowFilters: propTypes.func
}

export default FiltersBtns;