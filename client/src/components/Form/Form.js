import React, { useEffect, useState } from "react";
import s from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendData, validarError } from "./controllerForm";
import CardDog from "../CardDog/CardDog";
import { useHistory } from "react-router";
import { getAllDogs } from "../../actions/actions";

const Form = () => {
    const history = useHistory();
    const dispatch = useDispatch(); 
    const [input, setInput] = useState({ // Coloque todos los estados en texto para evitar que al usar ClearState quede el placeholder con el valor de 0 y muestre el mensaje
        nombre: "",
        alturaMax: "",
        alturaMin: "",
        pesoMax: "",
        pesoMin: "",
        edadMax: "",
        edadMin: "",
        imagen: "",
        temperamento: []
    })
    const [error, setError] = useState({})
    const { temperaments } = useSelector(state => state)

    const clearState = () => {
        setInput({
            nombre: "",
            alturaMax: "",
            alturaMin: "",
            pesoMax: "",
            pesoMin: "",
            edadMax: "",
            edadMin: "",
            imagen: "",
            temperamento: []
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
        if(error.nombre || error.alturaMin || error.alturaMax || error.pesoMax || error.pesoMin || error.edadMax || error.edadMin){
            alert("Faltan campos por llenar")
        }else{
            sendData(input);
            alert("Dog creado exitosamente!")
            clearState();
            dispatch(getAllDogs()) // dispacho a getAllDog para que me aparezcan los cambios en el home
            history.push("/home")
        }
    }
    
    return(
        <div className={s.Form}> 
            

            {/*Inicio del formulario*/}  
            <div className={s.Form__Formulario}>
                <form onSubmit={handleOnSubmit}>
                    {/* <div id={s.Titulo}>
                        <h2>Crear Dog</h2>
                    </div> */}
                    <div id={s.Raza}>
                        <label>Nombre:</label>
                        <br/>
                        <input name="nombre" value={input.nombre} onChange={handleOnChange} type="text" placeholder="Nombre..."/>
                        {error.nombre && <p>{error.nombre}</p>}
                    </div>
                    <div id={s.Altura}>
                        <div>
                            <label>Altura Max:</label>
                            <br/>
                            <input name="alturaMax" value={input.alturaMax} onChange={handleOnChange} type="number" placeholder="Altura Maxima..."/>
                            {error.alturaMax && <p>{error.alturaMax}</p>}
                        </div>
                        <div>
                            <label>Altura Min:</label>
                            <br/>
                            <input name="alturaMin" value={input.alturaMin} onChange={handleOnChange} type="number" placeholder="Altura Minima..."/>
                            <br/>
                            {error.alturaMin && <p>{error.alturaMin}</p>}
                        </div>
                    </div>
                    <div id={s.Peso}>
                        <div>
                            <label>Peso Max:</label>
                            <br/>
                            <input name="pesoMax" value={input.pesoMax} onChange={handleOnChange} type="number" placeholder="Peso Maximo..."/>
                            {error.pesoMax && <p>{error.pesoMax}</p>}
                        </div>
                        <div>
                            <label>Peso Min:</label>
                            <br/>
                            <input name="pesoMin" value={input.pesoMin} onChange={handleOnChange} type="number" placeholder="Peso Minimo..."/>
                            {error.pesoMin && <p>{error.pesoMin}</p>}
                        </div>
                    </div>
                    <div id={s.Edad}>
                        <div>
                            <label>Edad Max:</label>
                            <br/>
                            <input name="edadMax" value={input.edadMax} onChange={handleOnChange} type="number" placeholder="Edad Maxima..."/>
                            {error.edadMax && <p>{error.edadMax}</p>}
                        </div>
                        <div>
                            <label>Edad Min:</label>
                            <br/>
                            <input name="edadMin" value={input.edadMin} onChange={handleOnChange} type="number" placeholder="Edad Minima..."/>
                            {error.edadMin && <p>{error.edadMin}</p>}
                        </div>
                    </div>
                    <div>
                        <label>Imagen:</label>
                        <br/>   
                        <input name="imagen" value={input.imagen} onChange={handleOnChange} type="text" placeholder="Ingrese la ruta de una imagen..."/>
                    </div>
                    <div id={s.Select}>
                        <label>Temperamentos:</label>
                        <br/>
                        <select onChange={(e) => setInput({
                            ...input,
                            temperamento: [...input.temperamento, e.target.value]
                        })}>
                            {
                                temperaments.map(temp => <option >{temp.nombre}</option>)
                            }
                        </select>
                    </div>
                    <div id={s.Submit}>
                        <button type="submit">Crear</button>
                    </div>
                </form>

                {/* Tarjeta de vista previa */}
                {/* <div className={s.CardPreview}>
                    <CardDog 
                        nombre={input.nombre}
                        alturaMax={input.alturaMax}
                        alturaMin={input.alturaMin}
                        pesoMax={input.pesoMax}
                        pesoMin={input.pesoMin}
                        edadMax={input.edadMax}
                        edadMin={input.edadMin}
                        imagen={input.imagen}
                        temperamento={input.temperamento.join(",")} 
                    />
                </div> */}
            </div>
        </div>
    )
}

export default Form;