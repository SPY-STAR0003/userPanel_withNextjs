// next & react
import { useState, useMemo } from 'react';


const CheckElphebet = () => {

    const elphebet = ["ا","ب","پ","ت","ث","ج","چ","ح","خ","د","ذ","ر","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ه","ی"]

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