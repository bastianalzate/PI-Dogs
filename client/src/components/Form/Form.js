import React, { useEffect, useState } from "react";
import axios from "axios";
import s from "./Form.module.css";

const Form = () => {
    const [input, setInput] = useState({ // Coloque todos los estados en texto para evitar que al usar ClearState quede el placeholder con el valor de 0 y muestre el mensaje
        nombre: "",
        alturaMax: "",
        alturaMin: "",
        pesoMax: "",
        pesoMin: "",
        edadMax: "",
        edadMin: "",
        imagen: ""
    })
    const [error, setError] = useState({})

    const clearState = () => {
        setInput({
            nombre: "",
            alturaMax: "",
            alturaMin: "",
            pesoMax: "",
            pesoMin: "",
            edadMax: "",
            edadMin: "",
            imagen: ""
        })
    }

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setError(validarError({
            ...input,
            [e.target.name]: e.target.value
        }))
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        sendData();
        clearState();
    }

    const sendData = async () => {
        const respuesta = await axios.post("http://localhost:3001/dogs",{
            nombre: input.nombre,
            alturaMax: input.alturaMax,
            alturaMin: input.alturaMin,
            pesoMax: input.pesoMax,
            pesoMin: input.pesoMin,
            edadMax: input.edadMax,
            edadMin: input.edadMin,
            imagen: input.imagen
        })
        return respuesta;
    }


    const validarError = (input) => {
        let error = {}
            
        if(input.nombre.length !== 0){
            if(!/^[a-z A-Z,.'-]+$/.test(input.nombre)) {
            
                error.nombre = "Nombre no valido";
            }
        }
        
        
        if(input.alturaMin > input.alturaMax){
            
            error.alturaMin = "Altura minima no puede ser mayor que altura maxima";
            error.alturaMax = "Altura maxima no puede ser menor que altura minima";
        }

        if(input.pesoMin > input.pesoMax){
            
            error.pesoMin = "Peso minimo no puede ser mayor que peso maximo";
            error.pesoMax = "Peso maximo no puede ser menor que peso minimo";
        }

        if(input.edad < 0 || input.edad > 100 ){
            error.edad = "Edad no valida"
        }


        return error;
    }


    
    return(
        <div className={s.Form}>   
            <div className={s.Form__Formulario}>
                <form onSubmit={handleOnSubmit}>
                    <div id={s.Titulo}>
                        <h2>Crear Dog</h2>
                    </div>
                    <div id={s.Raza}>
                        <input name="nombre" value={input.nombre} onChange={handleOnChange} type="text" placeholder="Nombre..."/>
                        {error.nombre && <p>{error.nombre}</p>}
                    </div>
                    <div id={s.Altura}>
                        <div>
                            <input name="alturaMax" value={input.alturaMax} onChange={handleOnChange} type="number" placeholder="Altura Maxima..."/>
                            {error.alturaMax && <p>{error.alturaMax}</p>}
                        </div>
                        <div>
                            <input name="alturaMin" value={input.alturaMin} onChange={handleOnChange} type="number" placeholder="Altura Minima..."/>
                            <br/>
                            {error.alturaMin && <p>{error.alturaMin}</p>}
                        </div>
                    </div>
                    <div id={s.Peso}>
                        <div>
                            <input name="pesoMax" value={input.pesoMax} onChange={handleOnChange} type="number" placeholder="Peso Maximo..."/>
                            {error.pesoMax && <p>{error.pesoMax}</p>}
                        </div>
                        <div>
                            <input name="pesoMin" value={input.pesoMin} onChange={handleOnChange} type="number" placeholder="Peso Minimo..."/>
                            {error.pesoMin && <p>{error.pesoMin}</p>}
                        </div>
                    </div>
                    <div id={s.Edad}>
                        <div>
                            <input name="edadMax" value={input.edadMax} onChange={handleOnChange} type="number" placeholder="Edad Maxima..."/>
                            {error.edadMax && <p>{error.edadMax}</p>}
                        </div>
                        <div>
                            <input name="edadMin" value={input.edadMin} onChange={handleOnChange} type="number" placeholder="Edad Minima..."/>
                            {error.edadMin && <p>{error.edadMin}</p>}
                        </div>
                    </div>
                    <div>
                        <input name="imagen" value={input.imagen} onChange={handleOnChange} type="text" placeholder="Ingrese la ruta de una imagen..."/>
                    </div>
                    <div id={s.Select}>
                        <select>
                            <option>Ninguno</option>
                            <option>Opcion 1</option>
                            <option>Opcion 2</option>
                            <option>Opcion 3</option>
                        </select>
                    </div>
                    <div id={s.Submit}>
                        <button type="submit">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;