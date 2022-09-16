// next & react
import MyInput from "./elements/form/input";

// libraries

// components

interface SearchBoxProps {
    heightClass : string
}

const SearchBox : React.FC<SearchBoxProps> = ({heightClass}) => {
    const clicker = () => {
        console.log(456548)
    }
    return (
        <article className={`searchBox flexCenter ${heightClass}`}>
            {/* <MyInput
                name={"react-aria-1"}
                aria-label={"SearchBox"}
                placeholder="قسمتی از عنوان مقاله ای را  که به دنبال آن هستید وارد نمایید ..."
                // contentRight={
                //     <span className='searchBoxBtn' onClick={() => clicker()}>
                //         برو برای جستجو
                //     </span>
                //   }
            /> */}
        </article>
    )
}

export default SearchBox;