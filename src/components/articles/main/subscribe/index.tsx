
// components
import MyButton from "../../../global/elements/form/button";
import MyInput from "../../../global/elements/form/input";

const Subscribe = () => {
    return (
        <article className="subscribe flexColumn flexCenter">
            <h4 className="fs-16 bold-4 w-3 mt-14 textCenter lineHeight-6"> با نوشتن آدرس پست الکترونیکی خودتان از آخرین اخبار مهم سایت باخبر شوید! </h4>
            <div className="flexColumn flexCenter w-10">
                {/* <MyInput
                    classes="mtb-6"
                    placeholder="Your E-mail" 
                    size="lg"
                    name="react-aria-2"
                    aria-label = "react-aria-2"
                /> */}
                <MyButton classes="mt-4">
                    به اشتراک گذاشتن
                </MyButton>
            </div>
        </article>
    )
}

export default Subscribe;