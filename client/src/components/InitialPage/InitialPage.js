import React from "react";
import Linkedin from "../../../src/assets/otherImg/linkedin.png";
import Github from "../../../src/assets/otherImg/github.png";
import Huella from "../../../src/assets/otherImg/huella.png";
import Adoptar from "../../../src/assets/otherImg/adoptar.png";
import s from "./InitialPage.module.css";

const InitialPage = () => {
    return(
        <div className={s.InitialPage}>
            <div className={s.InitialPage__Presentacion}>
                <h1>PI Dog</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className={s.InitialPage__Presentacion__Botones}>
                    <button id={s.BotonUno}><img src={Huella} />Ver</button>
                    <button id={s.BotonDos}><img src={Adoptar} />Adoptar</button>
                </div>
            </div>
            <div className={s.InitialPage__LineaBaja}>
                <div className={s.InitialPage__LineaBaja__Botones}>
                    <button className={s.BotonPrev}>{"<"}</button>
                    <button className={s.BotonNext}>{">"}</button> 
                </div>
                <div className={s.InitialPage__LineaBaja__Social}>
                    <a href="#">
                        <img src={Github} />
                    </a>
                    <a href="#">
                        <img src={Linkedin} />
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default InitialPage;