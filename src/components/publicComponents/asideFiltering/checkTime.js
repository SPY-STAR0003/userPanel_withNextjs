// next & react
import { useState, useMemo } from 'react';

// libraies
import { Dropdown } from "@nextui-org/react";

// schemas
import { timeFilterItems } from "../../../schemas/asideFiltering";

const CheckTime = () => {

    const [selectedTime, setSelectedTime] = useState(new Set(["همه"]));

    const selectTime = useMemo(
      () => Array.from(selectedTime).join(", ").replaceAll("_", " "),
      [selectedTime]
    );

    return (
        <section className='mt-5'>
            <header>
                <h5> دسته بندی زمان موردنیاز برای مطالعه </h5> 
            </header>
            <main className="flexCenter flexWrap letter">
                <Dropdown>
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
                </Dropdown>
            </main>
        </section>
    )
}

export default CheckTime;