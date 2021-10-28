import React from "react";
import Linkedin from "../../../src/assets/otherImg/linkedin.png";
import Github from "../../../src/assets/otherImg/github.png";
import Huella from "../../../src/assets/otherImg/huella.png";
import Adoptar from "../../../src/assets/otherImg/adoptar.png";
import s from "./InitialPage.module.css";
import { NavLink } from "react-router-dom";

const InitialPage = () => {
    return(
        <div className={s.InitialPage}>
            <div className={s.InitialPage__Presentacion}>
                <h1>PI Dogs Soy Henry</h1>
                <p>
                    En PI Dogs Soy Henry, puedes desde ver que razas de perros existen hasta agregar tu propio "PI Dog"
                </p>
                <div className={s.InitialPage__Presentacion__Botones}>
                    <NavLink to="/home">
                        <button id={s.BotonUno}><img src={Huella} />Ver</button>
                    </NavLink>
                    <NavLink to="/adoptar">
                        <button id={s.BotonDos}><img src={Adoptar} />Adoptar</button>
                    </NavLink>
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