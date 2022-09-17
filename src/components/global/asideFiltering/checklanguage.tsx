// next & react
import { useState, useMemo } from 'react';

// libraies

// schemas
import { languageFilterItems } from "../../../schemas/asideFiltering";

const CheckLanguage = () => {

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی زبان مقالات </h5> 
            </header>
            <main className="flexCenter flexWrap letter mt-3">
                {/* <Dropdown>
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
                            languageFilterItems.map(item => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown> */}
            </main>
        </section>
    )
}

export default CheckLanguage;