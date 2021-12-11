import React from "react";
import Logo from "../../assets/img/dog.png";
import { NavLink } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
    return(
        <div className={s.Container}>
            <div className={s.NotFound}>
                <div className={s.Logo}>
                    <div className={s.Logo__Titulo}>
                        <NavLink to="/">
                            <img src={Logo} />
                        </NavLink>
                    </div>
                </div>
                <div className={s.Error}>
                    <span>404</span>
                </div>
                <div className={s.Mensaje}>
                    <div>
                        <span>La pagina que buscas no existe, Te invitamos a que hagas Click en alguno de estos botones para continuar disfrutando de nuestro sitio.</span>
                    </div>
                </div>
                <div className={s.Botones}>
                    <div>
                        <NavLink to="/home">
                            <button className={s.BotonHome}>Home</button>
                        </NavLink>
                        <NavLink to="/crear-dog">
                            <button className={s.BotonCrearDog}>Crear Dog</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;