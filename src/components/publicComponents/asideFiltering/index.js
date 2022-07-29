// next & react
import {useState} from 'react';

// components
import CheckElphebet from "./checkElphebet";
import CheckSort from "./checkSort";
import CheckLanguage from "./checkLanguage";
import CheckTime from "./checkTime";
import SpecialFilters from './specialFilters';
import FiltersBtns from './filtersBtns';

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
                    <FiltersBtns setShowFilters={setShowFilters} showFilters={showFilters} />
                </section>
            </article>
        </>
    )
}

export default AsideFilteriing;