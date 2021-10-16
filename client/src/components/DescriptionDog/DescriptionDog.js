import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DescriptionDog = () => {

    
    const dogDescription = useSelector(state => state.dogDescription)
    const { nombre, imagen, peso, altura, temperamento, edad} = dogDescription;
    const pesoTemp = peso.metric.split("-");
    const alturaTemp = altura.metric.split("-");
    const temperamentoTemp = !temperamento ? ["N/A"] : temperamento.split(",")
    const edadTemp = edad.slice(0, 7).split("-");
    console.log(dogDescription);

    return(
        <div>
            <img src={imagen.url} width="220px" height="220px"/>
            <h2>{nombre}</h2>
            <br/>
            <h2>Peso</h2>
            <span>Min: {pesoTemp[0]}</span>
            <span>Max: {pesoTemp[1]}</span>
            <br/>
            <h2>Altura</h2>
            <span>Min: {alturaTemp[0]}</span>
            <span>Max: {alturaTemp[1]}</span>
            <br/>
            <h2>Edad</h2>
            <span>Min: {edadTemp[0]}</span>
            <span>Max: {edadTemp[1]}</span>
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