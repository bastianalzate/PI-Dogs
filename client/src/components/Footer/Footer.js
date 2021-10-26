import React from "react";
import { NavLink } from "react-router-dom";
import Linkedin from "../../assets/otherImg/linkedin.png";
import Github from "../../assets/otherImg/github.png";
import s from "./Footer.module.css";


const Footer = () => {
    return(
        <div className={s.Footer__Container}>
            
            <div className={s.Redes__Sociales}>
                <div >
                    <a href="#">
                        <img src={Github} width="32px" height="32px"/>
                    </a>
                    <a href="#">
                        <img src={Linkedin} width="32px" height="32px"/>
                    </a> 
                </div>
            </div>
            <div className={s.Copy}>
                <span>Desarrollado por Bastian Alzate © 2021</span>
            </div>
        </div>
    )
}

export default Footer;