
// components
import { Grid, Input, Button } from "@nextui-org/react";

const Subscribe = () => {
    return (
        <article className="subscribe flexColumn flexCenter">
            <h4 className="fs-16 bold-4 w-3 mt-14 textCenter lineHeight-6"> با نوشتن آدرس پست الکترونیکی خودتان از آخرین اخبار مهم سایت باخبر شوید! </h4>
            <Grid className="flexColumn flexCenter w-10">
                <Input
                    bordered
                    className="mtb-6"
                    placeholder="Your E-mail" 
                    size="lg"
                    id="react-aria-2"
                    aria-label = "react-aria-2"
                />
                <Button auto className="mt-4">
                    به اشتراک گذاشتن
                </Button>
            </Grid>
        </article>
    )
}

export default Subscribe;