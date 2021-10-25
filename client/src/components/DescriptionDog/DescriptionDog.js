import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDescription, getDogsForName } from "../../actions/actions";

const DescriptionDog = ({match}) => {
    const dispatch = useDispatch();
    const id = match.params.id;
    const dogDescription =  useSelector(state => state.dogDescription);

    useEffect(() => {
        dispatch(getDescription(id))
    },[])
    // const { id } = useParams();
    // const dispatch = useDispatch(); 

    // useEffect(() => {
    //     dispatch(getDescription(id))
    // },[])
    
    // const { dogDescription } = useSelector(state => state)




    const {nombre, imagen, pesoMax, pesoMin, alturaMax, alturaMin, temperamento, edadMax, edadMin} = dogDescription;
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",")

    return(
        <div>
            <img src={imagen} width="220px" height="220px"/>
            <h2>{nombre}</h2>
            <br/>
            <h2>Peso</h2>
            <span>Min: {pesoMin}</span>
            <span>Max: {pesoMax}</span>
            <br/>
            <h2>Altura</h2>
            <span>Min: {alturaMin}</span>
            <span>Max: {alturaMax}</span>
            <br/>
            <h2>Edad</h2>
            <span>Min: {edadMin}</span>
            <span>Max: {edadMax}</span>
            <br/>
            <div>
                {
                    temperamentoTemp.map(temperamento => <div><span>{temperamento}</span></div>)
                }
            </div>
        </div>
    )
}

export default DescriptionDog;