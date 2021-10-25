import React, { useEffect, useState } from "react";
import s from "./Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendData, validarError } from "./controllerForm";
import { useHistory } from "react-router";
import { getAllDogs } from "../../actions/actions";
import Validate from "../../assets/other/check.png"
import CardFormulario from "../CardFormulario/CardFormulario";
import ListaTemperamentos from "../ListaTemperamentos/ListaTemperamentos";

const Form = () => {
    const [editarLista, setEditarLista] = useState(false);
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
        temperamento: [],
        colorFondo: ""
    })
    const [error, setError] = useState({
        nombre: "Es requerido",
        alturaMin: "Es requerido",
        alturaMax: "Es requerido",
    })
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
            temperamento: [],
            colorFondo: ""
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


    const agregarTemperamento = (e) => {
        const encontrado = input.temperamento.find(temp => temp === e.target.value)
        if(!encontrado){
            setInput({
                ...input,
                temperamento: [...input.temperamento, e.target.value]
            })
        }
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


    const eliminarTemperamento = (tempe) => {
        const arrayAux = input.temperamento.filter(temp => temp !== tempe)
        setInput({
            ...input,
            temperamento: arrayAux
        })
    }


    const mostrarLista = () => {
        setEditarLista(!editarLista)
    }
    
    return(
        <div className={s.Form}> 
            

            {/*Inicio del formulario*/}  
            <div className={s.Form__Formulario}>
                <form onSubmit={handleOnSubmit}>
                    {/* <div id={s.Titulo}>
                        <h2>Crear Dog</h2>
                    </div>
                    <hr/> */}
                    <div className={s.Raza}>
                        <div className={s.Titulo__Raza}>
                            <span>Raza</span>
                        </div>
                        <div className={s.Container__Raza}>
                            <label>Nombre:</label>
                            <input name="nombre" value={input.nombre} onChange={handleOnChange} type="text" placeholder="Nombre..."  style={error.nombre && {border: "1px solid red"}}/> {!error.nombre && <span><img src={Validate} /></span>}
                        </div>
                        {error.nombre && <div className={s.Container__Error}><span>{error.nombre}</span></div>}
                    </div>
                    <hr/>
                    {
                        !error.nombre &&
                        <div className={s.Altura}>
                            <div className={s.Titulo__Altura}>
                                <span>Altura</span>
                            </div>
                            <div className={s.Container__Alturas}>
                                <div className={s.AlturaMax}>
                                    <label>Max:</label>
                                    <input name="alturaMax" value={input.alturaMax} onChange={handleOnChange} type="number" placeholder="Altura Maxima..." style={error.alturaMax && {border: "1px solid red"}}/>
                                    {error.alturaMax && <div className={s.Container__Error}><span>{error.alturaMax}</span></div>}
                                </div>
                                <div className={s.AlturaMin}>
                                    <label>Min:</label>
                                    <input name="alturaMin" value={input.alturaMin} onChange={handleOnChange} type="number" placeholder="Altura Minima..." style={error.alturaMin && {border: "1px solid red"}}/>
                                    {error.alturaMin && <div className={s.Container__Error}><span>{error.alturaMin}</span></div>}
                                </div>
                            </div>
                            <hr/>
                        </div>
                    }
                    
                    {
                        !error.nombre && !error.alturaMax && !error.alturaMin &&
                        <div className={s.Peso}>
                            <div className={s.Titulo__Peso}>
                                <span>Peso</span>
                            </div>
                            <div className={s.Container__Peso}>
                                <div className={s.PesoMax}>
                                    <label>Max:</label>
                                    <input name="pesoMax" value={input.pesoMax} onChange={handleOnChange} type="number" placeholder="Peso Maximo..." style={error.pesoMax && {border: "1px solid red"}}/>
                                    {error.pesoMax && <div className={s.Container__Error}><span>{error.pesoMax}</span></div>}
                                </div>
                                <div className={s.PesoMin}>
                                    <label>Min:</label>
                                    <input name="pesoMin" value={input.pesoMin} onChange={handleOnChange} type="number" placeholder="Peso Minimo..." style={error.pesoMin && {border: "1px solid red"}}/>
                                    {error.pesoMin && <div className={s.Container__Error}><span>{error.pesoMin}</span></div>}
                                </div>
                            </div>
                            <hr/>
                        </div>
                    }
                    
                    {
                        !error.nombre && !error.alturaMax && !error.alturaMin && !error.pesoMin && !error.pesoMax &&
                        <div className={s.Edad}>
                            <div className={s.Titulo__Edad}>
                                <span>Edad</span>
                            </div>
                            <div className={s.Container__Edad}>
                                <div className={s.EdadMax}>
                                    <label>Max:</label>
                                    <input name="edadMax" value={input.edadMax} onChange={handleOnChange} type="number" placeholder="Edad Maxima..." style={error.edadMax && {border: "1px solid red"}}/>
                                    {error.edadMax && <div className={s.Container__Error}><span>{error.edadMax}</span></div>}
                                </div>
                                <div className={s.EdadMin}>
                                    <label>Min:</label>
                                    <input name="edadMin" value={input.edadMin} onChange={handleOnChange} type="number" placeholder="Edad Minima..." style={error.edadMin && {border: "1px solid red"}}/>
                                    {error.edadMin && <div className={s.Container__Error}><span>{error.edadMin}</span></div>}
                                </div>
                            </div>
                            <hr/>
                        </div>
                    }
                    
                    {
                        !error.nombre && !error.alturaMax && !error.alturaMin && !error.pesoMin && !error.pesoMax && !error.edadMax && !error.edadMin &&
                        <div className={s.Imagen}>
                            <div className={s.Titulo__Imagen}>
                                <span>Imagen</span>
                            </div>
                            <div className={s.Container__Imagen}>
                                <label>Url:</label>
                                <input name="imagen" value={input.imagen} onChange={handleOnChange} type="text" placeholder="Ingrese la ruta de una imagen..."/>
                            </div>
                            <hr/>
                        </div>
                    }
                    
                    {
                        !error.nombre && !error.alturaMax && !error.alturaMin && !error.pesoMin && !error.pesoMax && !error.edadMax && !error.edadMin && 
                        <div className={s.Temperamentos}>
                            <label>Temperamentos:</label>
                            <select onChange={agregarTemperamento}>
                                {
                                    temperaments.map(temp => <option >{temp.nombre}</option>)
                                }
                            </select>
                            <label>Color:</label>
                            <input onChange={handleOnChange} name="colorFondo" type="color" />
                            <hr/>
                        </div>
                    }

                    {
                        !error.nombre && !error.alturaMax && !error.alturaMin && !error.pesoMin && !error.pesoMax && !error.edadMax && !error.edadMin && 
                        <div className={s.Boton__Enviar}>
                            {
                                !error ? 
                                <button disabled type="submit">Completa todo</button> :
                                <button type="submit">Crear</button>
                            }
                        </div>
                    }
                </form>
            </div> {/* Fin del formulario */}


            {/* Tarjeta de vista previa */}
            <div className={s.Card__Formulario}>
                <div className={s.Card}>
                    <CardFormulario {...input} mostrarLista={mostrarLista}/>
                </div>
                <div className={s.Lista__Temperamentos}>
                    {
                        editarLista && input.temperamento?.map(tempe => <ListaTemperamentos temperamento={tempe} eliminarTemperamento={eliminarTemperamento}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Form;