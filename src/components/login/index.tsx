
// libraries
import MyInput from "../global/elements/form/input";

const Login = () => {
    return (
        <main className="loginPage">
            <MyInput
                name={"login"} 
                placeholder="Default" 
            />
            <MyInput
                name={"login"} 
                placeholder="Primary"  
            />
            <MyInput
                name={"login"} 
                placeholder="Secondary"  
            />
            <MyInput
                name={"login"} 
                placeholder="Success"  
            />
            <MyInput
                name={"login"} 
                placeholder="Warning"  
            />
            <MyInput
                name={"login"} 
                placeholder="Error"  
            />
        </main>
    )
}

export default Login;