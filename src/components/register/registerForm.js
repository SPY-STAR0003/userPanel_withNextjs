
// libraries
import { Input, Grid } from "@nextui-org/react";

const RegisterForm = () => {
    return (
        <Grid.Container
            gap={4}
            className="inputs"
        >
            <Grid>
                <Input 
                underlined 
                labelPlaceholder="نام و نام خانوادگی" 
                color="default" />
            </Grid>
            <Grid>
                <Input 
                underlined 
                labelPlaceholder="کد ملی" 
                color="primary" 
                />
            </Grid>
            <Grid>
                <Input 
                underlined 
                labelPlaceholder="شماره موبایل" 
                color="secondary" 
                />
            </Grid>
            <Grid>
                <Input 
                underlined 
                labelPlaceholder="ایمیل" 
                color="success" 
                />
            </Grid>
            <Grid>
                <Input 
                underlined 
                labelPlaceholder="حوزه نویسندگی موردعلاقه" 
                color="warning" 
                />
            </Grid>
            <Grid>
                <Input 
                underlined 
                labelPlaceholder="میزان مطالعه روزانه شما" 
                color="error" 
                />
            </Grid>
        </Grid.Container>
    )
}

export default RegisterForm;