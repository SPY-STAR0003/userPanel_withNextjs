// next & react
import { useState, useMemo } from 'react';


// libraies
import { Dropdown, Checkbox, Spacer } from "@nextui-org/react";
import {FaCheckDouble, FaFilter, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

// components
import CheckElphebet from "./checkElphebet";
import CheckSort from "./checkSort";
import CheckLanguage from "./checkLanguage";
import CheckTime from "./checkTime";
import SpecialFilters from './specialFilters';

const AsideFilteriing = () => {

    const [showFilters , setShowFilters] = useState(true);

    return (
        <>
            <article className={`${showFilters?"show":"hide"} flexColumn asideFiltering white`}>
                <section className=" relative flexColumn p-3 white">
                    <header className="asideFilteringHeader mb-3">
                        <h4 className=""> فیلتر مقالات </h4>
                        <span className="fs-6">(حتما در پایان کار روی اعمال فیلتر کلیک کنید.) </span>
                    </header>
                    <main className="asideFilteringMain">
                        <CheckElphebet />
                        <SpecialFilters />
                        <CheckSort />
                        <CheckLanguage />
                        <CheckTime />
                    </main>
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
                </section>
            </article>

        </>
    )
}

export default AsideFilteriing;