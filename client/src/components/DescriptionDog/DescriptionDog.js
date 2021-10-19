import React from "react";
import { useSelector } from "react-redux";

const DescriptionDog = () => {
    const dogDescription = useSelector(state => state.dogDescription)
    const { nombre, imagen, pesoMax, pesoMin, alturaMax, alturaMin, temperamento, edadMax, edadMin} = dogDescription;
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