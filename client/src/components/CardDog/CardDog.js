import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./CardDog.module.css"
import { useDispatch } from "react-redux";
import { getDescription } from "../../actions/actions";

const CardDog = ({nombre, peso, id, temperamento, imagen}) => {
    const pesoTemp = peso.metric.split("-")
    const[color, setColor] = useState(false);
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",")
    const dispatch = useDispatch()

    return(
        <div className={s.CardDog} key={id}>
            <div className={s.CardContainerTemperamento}>
                <div className={s.CardTemperamento}>
                    {temperamentoTemp?.map((temp, index) => {
                        if(index < 6){
                            return <div className={s.divTemperamento}><span>{temp}</span></div>
                        }
                    })}
                </div>
                <div>
                    <button>O</button>
                </div>
            </div>

            
            <div className={s.CardContainerImg} >
                <NavLink to={`/dog-description/${id}`} className={s.NavLinkContainer} >     
                    <img src={imagen.url} onClick={() => dispatch(getDescription(id))}/>
                </NavLink>
            </div>
            
            <div className={s.CardText}>
                <div className={s.CardTextName}>
                    <h2>{nombre}</h2>
                </div>
                <div className={s.CardTextPeso}>
                    <h2>Peso</h2>
                    <span>Min:{pesoTemp[0]}</span>
                    <span>Max:{pesoTemp[1]}</span>
                </div>
            </div>
        </div>
    )
}

export default CardDog;