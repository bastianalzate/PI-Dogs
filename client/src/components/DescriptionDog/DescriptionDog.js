import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDescription, getDogsForName } from "../../actions/actions";
import { NavLink } from "react-router-dom";
import s from "./DescriptionDog.module.css";

const DescriptionDog = ({match}) => {
    const dispatch = useDispatch();
    const id = match.params.id;
    const dogDescription =  useSelector(state => state.dogDescription);

    useEffect(() => {
        dispatch(getDescription(id))
    },[])
    
    const {nombre, imagen, pesoMax, pesoMin, alturaMax, alturaMin, temperamento, edadMax, edadMin} = dogDescription;
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",")

    return(
        <div className={s.Container} >
            <div className={s.DescriptionDog}>
                <div className={s.Home}>
                    <NavLink to="/home">
                        <button>Home</button>
                    </NavLink>
                </div>
                <div className={s.Container__Description}>
                    <div className={s.Imagen}>
                        <img src={imagen} width="220px" height="220px"/>
                    </div>
                    <div className={s.Nombre}>
                        <h2>{nombre}</h2>
                        <div className={s.Temperamento}>
                            {
                                temperamentoTemp.map(temperamento => <div><span>{temperamento}</span></div>)
                            }
                        </div>
                    </div>
                    <div className={s.Otros}>
                        <br/>
                        <h2>Peso</h2>
                        <span>Min: {pesoMin}Kg,</span>
                        <span> Max: {pesoMax}Kg</span>
                        <br/>
                        <h2>Altura</h2>
                        <span>Min: {alturaMin}Cm,</span>
                        <span> Max: {alturaMax}Cm</span>
                        <br/>
                        <h2>Edad</h2>
                        <span>Min: {edadMin} Años,</span>
                        <span> Max: {edadMax} Años</span>
                        <br/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DescriptionDog;