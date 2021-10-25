import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./CardFormulario.module.css";
import { NavLink } from "react-router-dom";

const CardFormulario = ({ id, nombre, pesoMax, pesoMin, temperamento, imagen, colorFondo, mostrarLista}) => {
    const dispatch = useDispatch()
    return(
        <div className={s.CardDog} style={colorFondo ? {backgroundColor: colorFondo, color: "white"} : {backgroundColor: "black", color: "white"}}>
            <div className={s.CardContainerTemperamento}>
                <div className={s.CardTemperamento}>
                    {temperamento?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento}><span>{temp}</span></div>
                        }
                    })}
                </div>
                <div>
                    <button onClick={() => mostrarLista()}>Editar</button>
                </div>
            </div>

            
            <div className={s.CardContainerImg} >
                <NavLink to={`/dog-description/${id}`} className={s.NavLinkContainer} >     
                    <img src={imagen} alt="Ingresa una Img..."/>
                </NavLink>
            </div>
            
            <div className={s.CardText}>
                <div className={s.CardTextName}>
                    <h2>{nombre}</h2>
                </div>
                <div className={s.CardTextPeso}>
                    <h2>Peso</h2>
                    <span>Min: {pesoMin} Kg</span>
                    <span>Max: {pesoMax} Kg</span>
                </div>
            </div>
        </div>
    )
}

export default CardFormulario;