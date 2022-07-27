import HomeContent from "./homeContent";
import Navbar from "../publicComponents/navbar";
import SocialNetworks from "./../publicComponents/SocialNetworks";

const Home = () => {

    return (
        <div className={"homePage flexRight relative"}>
            <Navbar
                color={"white"}
                isFixed={true}
            />
            <HomeContent />
            <SocialNetworks
                isAbsolute={true}
                classes={"flexLeft"}
            />
        </div>
    )
}

export default Home;