// next & react
import { useState, useMemo } from 'react';

// libraies

// schemas
import { sortFilterItems } from "../../../schemas/asideFiltering";

const CheckSort = () => {

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی موضوع مقالات </h5> 
            </header>
            <main className="flexCenter flexWrap letter mt-3">
                {/* <Dropdown>
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
                            sortFilterItems.map(item => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown> */}
            </main>
        </section>
    )
}

export default CheckSort;