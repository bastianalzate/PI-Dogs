// Modulos externos
import React from "react";

// Imagenes
import Linkedin from "../../assets/otherImg/linkedin.png";
import Github from "../../assets/otherImg/github.png";

// Estilos
import s from "./Footer.module.css";


const Footer = () => {
    return(
        <div className={s.Footer__Container}>
            
            <div className={s.Redes__Sociales}>
                <div >
                    <a href="https://github.com/bastianalzate" target="_blank">
                        <img src={Github} width="32px" height="32px"/>
                    </a>
                    <a href="https://www.linkedin.com/in/bastianalzate/"  target="_blank">
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