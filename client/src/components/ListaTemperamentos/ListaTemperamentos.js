import React from "react";
import s from "./ListaTemperamentos.module.css";

const ListaTemperamentos = ({temperamento, eliminarTemperamento}) => {
    return(
        <div className={s.Lista__Temperamentos}>
            <span>{temperamento}</span>
            <button onClick={() => eliminarTemperamento(temperamento)}>X</button>
        </div>
    )
}

export default ListaTemperamentos;