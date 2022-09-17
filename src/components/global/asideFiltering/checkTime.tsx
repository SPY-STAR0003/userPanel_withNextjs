// next & react
import { useState, useMemo } from 'react';

// libraies

// schemas
import { timeFilterItems } from "../../../schemas/asideFiltering";

const CheckTime = () => {

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی زمان موردنیاز برای مطالعه </h5> 
            </header>
            <main className="flexCenter flexWrap letter mt-3">
                {/* <Dropdown>
                    <Dropdown.Button id="asideFilteringDropdown2" color="error" css={{ tt: "capitalize", direction : "ltr" }} >
                        {selectTime}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Single selection actions"
                        color="error"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedTime}
                        onSelectionChange={setSelectedTime}
                    >
                        {
                            timeFilterItems.map(item => (
                                <Dropdown.Item key={item}>{item}</Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown> */}
            </main>
        </section>
    )
}

export default CheckTime;