
// schemas
import { elphebet } from "../../../schemas/asideFiltering";

const CheckElphebet = () => {

    return (
        <section className="elphebetFiltering mt-3">
            <header>
                <h5> فهرست الفبـــــایی </h5> 
            </header>
            <main className="flexCenter flexWrap letter">
                {
                    elphebet.map((letter , index) => (
                        <span key={index} className="letter flexCenter fs-8 backGray" >
                            {letter}
                        </span>
                    ))
                }
            </main>
        </section>
    )
}

export default CheckElphebet;