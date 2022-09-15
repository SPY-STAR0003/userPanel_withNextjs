import HomeContent from "./content";
import Navbar from "../global/navbar";
import SocialNetworks from "../global/socialNetworks";

// assets
import HomeBackground from "./../../../public/images/pexels-jessica-lewis-creative-606541.jpg";

const Home : React.FC = () => {

    return (
        <div className={" relative lg:h-screen h-screen flex flex-col bg-cover bg-center bg-no-repeat bg-scroll"} style={{
            backgroundImage : `url(/images/bg-home-8.jpg)`
        }}>
            <Navbar
                isWhite={true}
                isFixed={true}
                logoSrc={"/images/logo.png"}
            />
            <HomeContent />
            <SocialNetworks
                isFixed={true}
                classes={""}
            />
        </div>
    )
}

export default Home;