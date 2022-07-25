import HomeContent from "./homeContent";
import Navbar from "../publicComponents/navbar";
import SocialNetworks from "./SocialNetworks";

const Home = () => {

    return (
        <div className={"homePage flexRight relative"}>
            <Navbar
                color={"white"}
                isFixed={"true"}
            />
            <HomeContent />
            <SocialNetworks />
        </div>
    )
}

export default Home;