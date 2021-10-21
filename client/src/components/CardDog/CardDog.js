import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./CardDog.module.css"
import { useDispatch } from "react-redux";
import { getDescription, addFavorites } from "../../actions/actions";

const CardDog = ({ id, nombre, pesoMax, pesoMin, temperamento, imagen, proviene}) => {
    const[color, setColor] = useState(false);
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",") // Valido si no vienen datos aplico un N/A, de lo contrario spliteo el string que me llega
    const dispatch = useDispatch()


    const handleOnClick = () => {
        dispatch(addFavorites({
            id, nombre, pesoMax, pesoMin, temperamento, imagen, proviene
        }))
        setColor(!color)
    }

    return(
        //Card container
        <div className={s.CardDog} style={color ? {backgroundColor: "purple", color: "white"} :{backgroundColor: "black", color: "white"}}>

            <div className={s.CardContainerTemperamento}>
                <div className={s.CardTemperamento}>
                    {temperamentoTemp?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento}><span>{temp}</span></div>
                        }
                    })}
                </div>
                <div>
                    <button onClick={handleOnClick}>Fav</button>
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