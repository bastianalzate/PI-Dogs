import React from "react";
import { NavLink } from "react-router-dom";
import s from "./CardNew.module.css";

const CardNew = () => {
    return(
        <NavLink to="/crear-dog">
            <div className={s.CardNew}>
                <h2>Crear Dog</h2>
            </div>
        </NavLink>
    )
}

export default CardNew;