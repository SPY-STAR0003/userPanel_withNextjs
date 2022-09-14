import HomeContent from "./homeContent";
import Navbar from "../publicComponents/navbar";
import SocialNetworks from "./../publicComponents/socialNetworks";

const Home = () => {

    return (
        <div className={""}>
            <Navbar
                color={"white"}
                isFixed={true}
            />
            <HomeContent />
            <SocialNetworks
                isAbsolute={true}
                classes={""}
            />
        </div>
    )
}

export default Home;