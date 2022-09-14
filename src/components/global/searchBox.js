// next & react
import propTypes from "prop-types";

// libraries

// components


const SearchBox = ({heightClass}) => {
    const clicker = () => {
        console.log(456548)
    }
    return (
        <article className={`searchBox flexCenter ${heightClass}`}>
            <Input
                id={"react-aria-1"}
                aria-label={"SearchBox"}
                rounded
                autoComplete='on'
                placeholder="قسمتی از عنوان مقاله ای را  که به دنبال آن هستید وارد نمایید ..."
                size={"xl"}
                contentRightStyling={false}
                contentRight={
                    <span className='searchBoxBtn' onClick={() => clicker()}>
                        برو برای جستجو
                    </span>
                  }
            />
        </article>
    )
}

SearchBox.propTypes = {
    heightClass: propTypes.string,
}

export default SearchBox;