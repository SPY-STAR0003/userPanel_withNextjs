// next & react
import { useState, useMemo } from 'react';

// libraies
import { Dropdown, Checkbox, Spacer } from "@nextui-org/react";
import {FaCheckDouble, FaFilter, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const CheckSort = () => {

    const [selectedSort, setSelectedSort] = useState(new Set(["همه"]));

    const selectSort = useMemo(
      () => Array.from(selectedSort).join(", ").replaceAll("_", " "),
      [selectedSort]
    );


    const sortFilterItems = [ "همه","تکنولوژی", "علم و دانش", "فضا", "ورزشی", "تاریخ و جغرافیا", "داستان و رمان", "درس و دانشگاه", "کودکانه"]

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی موضوع مقالات </h5> 
            </header>
            <main className="flexCenter flexWrap letter">
                <Dropdown>
                    <Dropdown.Button id="asideFilteringDropdown1" color="error" css={{ tt: "capitalize", direction : "ltr" }} >
                        {selectSort}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="error"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedSort}
                        onSelectionChange={setSelectedSort}
                    >
                        {
                            sortFilterItems.map((item, index) => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </main>
        </section>
    )
}

export default CheckSort;