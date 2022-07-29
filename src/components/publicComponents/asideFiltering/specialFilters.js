// next & react
import { useState, useMemo } from 'react';

// libraies
import { Dropdown } from "@nextui-org/react";

// schemas
import { filterItems } from "../../../schemas/asideFiltering";

const SpecialFilters = () => {

    const [selectedFilters, setSelectedFilters] = useState(new Set(["همه"]));

    const selectFilters = useMemo(
      () => Array.from(selectedFilters).join(", ").replaceAll("_", " "),
      [selectedFilters]
    );

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی های خاص </h5> 
            </header>
            <main className="flexCenter flexWrap letter mt-3">
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
                            filterItems.map(item => (
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