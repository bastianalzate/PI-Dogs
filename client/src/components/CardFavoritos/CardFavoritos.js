// Modulos externos
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

// Modulos internos
import { removeFavorites } from "../../actions/actions";
import { getDescription } from "../../actions/actions";

// Imagenes
import Eliminar from "../../assets/img/eliminar.png";
import EliminarHover from "../../assets/img/eliminarHover.png";

// Estilos
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
        <div className={s.CardDog} key={id} style={colorFondo ? {backgroundColor: colorFondo, color: "white"} : {backgroundColor: "black", color: "white"}}>

            <div className={s.Botones}>
                <div className={s.Boton__VistaPrevia}>
                    <button onClick={() => dispatch(removeFavorites(id))} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>{mouseEnter ? <img src={EliminarHover} width="20px" height="20px" /> : <img src={Eliminar} width="20px" height="20px" />}</button>
                </div>
            </div>

            <div className={s.CardContainerImg} >
                <NavLink to={`/dog-description/${id}`} className={s.NavLinkContainer} >     
                    <img src={imagen} alt="Ingresa una Img..." onClick={() => dispatch(getDescription(id))}/>
                </NavLink>
            </div>

            <div className={s.Container__Nombre__Temperamentos}>
                <div className={s.Nombre}>
                    <span>{nombre}</span>
                </div>
                <div className={s.Temperamentos}>
                    {temperamentoTemp?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento} key={index}><span>{temp}</span></div>
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

export default CardFavoritos;