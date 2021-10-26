import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./CardDog.module.css"
import { useDispatch } from "react-redux";
import { getDescription, addFavorites } from "../../actions/actions";

const CardDog = ({ id, nombre, pesoMax, pesoMin, temperamento, imagen, proviene, colorFondo, verVistaPrevia}) => {
    const [mouseHover, setMouseHover] = useState(false);
    const [colorFavorito, setColorFavorito] = useState(false);
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",") // Valido si no vienen datos aplico un N/A, de lo contrario spliteo el string que me llega
    const dispatch = useDispatch()


    const handleOnClick = () => {
        dispatch(addFavorites({
            id, nombre, pesoMax, pesoMin, temperamento, imagen, proviene, colorFondo
        }))
        setColorFavorito(!colorFavorito)
    }

    const handleOnMouse = () => {
        setMouseHover(!mouseHover)
    }

    return(
        //Card container
        <div onMouseEnter={handleOnMouse} onMouseLeave={handleOnMouse} className={s.CardDog} style={colorFondo ? {backgroundColor: colorFondo, color: "white"} : {backgroundColor: "black", color: "white"}}>

            <div className={s.CardContainerTemperamento}>
                <div className={s.CardTemperamento}>
                    {temperamentoTemp?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento}><span>{temp}</span></div>
                        }
                    })}
                </div>
                <div>
                    <button onClick={() => verVistaPrevia(id)}>View</button>
                </div>
            </div>

            
            <div className={s.CardContainerImg} >
                <NavLink to={`/dog-description/${id}`} className={s.NavLinkContainer} >     
                    <img src={imagen} alt="Ingresa una Img..." onClick={() => dispatch(getDescription(id))}/>
                </NavLink>
            </div>
            
            <div className={s.CardText}>
                <div className={s.CardTextName}>
                    <h2>{nombre}</h2>
                    {
                        mouseHover && <button onClick={handleOnClick}>Fav</button>
                    }
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

export default CardDog;