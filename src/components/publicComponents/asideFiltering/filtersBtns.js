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
                            <div className="showFilters">
                                <FaFilter />
                                <FaAngleDoubleRight onClick={() => setShowFilters(!showFilters)} />
                            </div> 
                        </>
                    :
                        <div className="showFilters">
                            <FaFilter />
                            <FaAngleDoubleLeft className='mr-3' onClick={() => setShowFilters(!showFilters)} />
                        </div>
            }
        </>
    )
}

FiltersBtns.propTypes = {
    showFilters : propTypes.string,
    setShowFilters: propTypes.func
}

export default FiltersBtns;