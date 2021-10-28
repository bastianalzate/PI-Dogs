import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeFavorites } from "../../actions/actions";
import Eliminar from "../../assets/img/eliminar.png";
import EliminarHover from "../../assets/img/eliminarHover.png";
import s from "./CardFavoritos.module.css"


const CardFavoritos = ({ id, nombre, pesoMax, pesoMin, temperamento, imagen, colorFondo }) => {
    const [mouseEnter, setMouseEnter] = useState(false)
    const dispatch = useDispatch();
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",") // Valido si no vienen datos aplico un N/A, de lo contrario spliteo el string que me llega
   
    const handleOnMouseEnter = () => {
        setMouseEnter(true);
    }

    const handleOnMouseLeave = () => {
        setMouseEnter(false);
    }

    return(
        //Card container
        <div className={s.CardDog} style={colorFondo ? {backgroundColor: colorFondo, color: "white"} : {backgroundColor: "black", color: "white"}}>

            <div className={s.CardContainerTemperamento}>
                <div className={s.CardTemperamento}>
                    {temperamentoTemp?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento}><span>{temp}</span></div>
                        }
                    })}
                </div>
                <div>
                    <button onClick={() => dispatch(removeFavorites(id))} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>{mouseEnter ? <img src={EliminarHover} width="20px" height="20px" /> : <img src={Eliminar} width="20px" height="20px" />}</button>
                </div>
            </div>

            
            <div className={s.CardContainerImg} >
                <NavLink to={`/dog-description/${id}`} className={s.NavLinkContainer} >     
                    <img src={imagen} alt="Ingresa una Img..." />
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

export default CardFavoritos;