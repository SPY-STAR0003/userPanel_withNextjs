// next & react
import { useState, useMemo } from 'react';

// libraies

// schemas
import { filterItems } from "../../../schemas/asideFiltering";

const SpecialFilters = () => {

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی های خاص </h5> 
            </header>
            <main className="flexCenter flexWrap letter mt-3">
                {/* <Dropdown>
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
                            filterItems.map(item => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown> */}
            </main>
        </section>
    )
}

export default SpecialFilters;