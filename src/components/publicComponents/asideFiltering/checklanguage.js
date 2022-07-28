// next & react
import { useState, useMemo } from 'react';

// libraies
import { Dropdown, Checkbox, Spacer } from "@nextui-org/react";
import {FaCheckDouble, FaFilter, FaAngleDoubleLeft, FaAngleDoubleRight} from "react-icons/fa";

const CheckLanguage = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(new Set(["همه"]));

    const selectLanguage = useMemo(
      () => Array.from(selectedLanguage).join(", ").replaceAll("_", " "),
      [selectedLanguage]
    );

    const languageFilterItems = [ "همه","پارسی", "انگلیسی", "عربی", "اسپانیایی", "فرانسوی", "آلمانی", " ترکی ", "چینی" ]

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی زبان مقالات </h5> 
            </header>
            <main className="flexCenter flexWrap letter">
                <Dropdown>
                    <Dropdown.Button id="asideFilteringDropdown2" color="error" css={{ tt: "capitalize", direction : "ltr" }} >
                        {selectLanguage}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="error"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedLanguage}
                        onSelectionChange={setSelectedLanguage}
                    >
                        {
                            languageFilterItems.map((item, index) => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </main>
        </section>
    )
}

export default CheckLanguage;