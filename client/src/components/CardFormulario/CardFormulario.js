import React, { useState } from "react";
// Modulos externos
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

// Modulos internos
import Editar from "../../assets/img/editar.png"

// Estilos
import s from "./CardFormulario.module.css";

const CardFormulario = ({ id, nombre, pesoMax, pesoMin, temperamento, imagen, colorFondo, mostrarLista}) => {
    const dispatch = useDispatch()

    return(
        <div className={s.CardDog} style={colorFondo ? {backgroundColor: colorFondo, color: "white"} : {backgroundColor: "black", color: "white"}}>

            <div className={s.Botones}>
                <div className={s.Boton__VistaPrevia}>
                    <button onClick={() => mostrarLista()}><img src={Editar}/></button>
                </div>
            </div>

            <div className={s.CardContainerImg} >
                <img src={imagen} alt="Ingresa una Img..." />
            </div>

            <div className={s.Container__Nombre__Temperamentos}>
                <div className={s.Nombre}>
                    <span>{nombre}</span>
                </div>
                <div className={s.Temperamentos}>
                    {temperamento?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento}><span>{temp}</span></div>
                        }
                    })}
                </div>
            </div>


            <div className={s.CardTextPeso}>
                <span className={s.TituloPeso}>Peso:</span>
                <span className={s.Text}>Min: {pesoMin} Kg</span>
                <span className={s.Text}>Max: {pesoMax} Kg</span>
            </div>

        </div>
    )
}

export default CardFormulario;