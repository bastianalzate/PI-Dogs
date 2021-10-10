import React from "react";
import DogHeader from "../../assets/img/dogHeader.jpg"
import s from "./Home.module.css";

const Home = () => {
    return(
        <div className={s.Home}>
            <div className={s.Home__Header}>
                <div className={s.Home__Header__Text}>

                </div>
                <div className={s.Home__Header__Image}>
                    <img src={DogHeader} />
                </div>
            </div>
        </div>
    )
}

export default Home;