

// components
import FixedPicture from "../../global/fixedPicture"

const Sentence = () => {

    return (
        <FixedPicture
            picSrc="/images/writing7.jpg"
            picHeight={30}
            scroll={"fixed"}
        >
            <section className="flex flex-col"> 
                <p className="lg:pr-20 md:w-1/2 lg:text-3xl lg:leading-loose md:leading-loose leading-loose md:pr-10 md:text-xl md:text-gray-800 md:text-right md:bg-transparent px-12 text-2xl text-white bg-black/40 text-center">
                    افراد بسیاری دوست دارند که داستانی، شعری، یا حتی کتابی بنویسند، ولی هیچوقت شروع نمی کنند، چرا؟ چون آن ها از شروع کردن می ترسند .
                </p>
                <span className="self-center md:font-extrabold text-gray-700 font-normal p-3">
                    John C. Maxwell
                </span>
            </section>
        </FixedPicture>
    )
}


export default Sentence;