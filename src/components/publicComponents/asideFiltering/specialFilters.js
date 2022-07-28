// next & react
import { useState, useMemo } from 'react';

// libraies
import { Dropdown, Checkbox, Spacer } from "@nextui-org/react";
import {FaCheckDouble, FaFilter, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const SpecialFilters = () => {

    const [selectedFilters, setSelectedFilters] = useState(new Set(["همه"]));

    const selectFilters = useMemo(
      () => Array.from(selectedFilters).join(", ").replaceAll("_", " "),
      [selectedFilters]
    );


    const filterItems = [ "همه","آخرین مقالات منتشر شده", "پربحث ترین مقالات", "پربازدیدترین مقالات", "محبوب ترین مقالات", "مقالات تایید شده از نظر اساتید", "فقط مقالات تکمیل شده", "فقط مقالات تکمیل نشده", "فقط مقالات نیاز به ترجمه"]

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی های خاص </h5> 
            </header>
            <main className="flexCenter flexWrap letter">
                <Dropdown>
                    <Dropdown.Button id="asideFilteringDropdown1" color="error" css={{ tt: "capitalize", direction : "ltr" }} >
                        {selectFilters}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="error"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedFilters}
                        onSelectionChange={setSelectedFilters}
                    >
                        {
                            filterItems.map((item, index) => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </main>
        </section>
    )
}

export default SpecialFilters;