

// components
import FixedPicture from "../../../publicComponents/fixedPicture"

const Sentence = () => {


    return (
        <FixedPicture
            picSrc="/images/writing7.jpg"
            picHeight={30}
            scroll={"fixed"}
        >
            <section className="dFlex"> 
                <p className="mr-10 w-5 fs-22">
                    افراد بسیاری دوست دارند که داستانی، شعری، یا حتی کتابی بنویسند، ولی هیچوقت شروع نمی کنند، چرا؟ چون آن ها از شروع کردن می ترسند .
                </p>
                <span className="selfBottom black fs-14 bold-7">
                    John C. Maxwell
                </span>
            </section>
        </FixedPicture>
    )
}


export default Sentence;