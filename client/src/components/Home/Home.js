import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginacion } from "./controllerHome";
import CardDog from "../CardDog/CardDog";
import CardNew from "../CardNew/CardNew";
import s from "./Home.module.css";

const Home = () => {
    let [count, setCount] = useState(0);
    let [proviene, setProviene] = useState("");
    let [orden, setOrden] = useState("");
    let {dogsForName, allDogs} = useSelector((state) => state);


    //Valido los filtros
    if(proviene === ""){
        // validar si dogsForName viene vacio y en caso que venga vacio asignarle el valor de allDogs
        if(dogsForName.length === 0){
            dogsForName = allDogs;
        }
    }else{
        // Validar que tipo de filtro hacer
        switch(proviene){
            case "API":
                dogsForName = allDogs.filter(dog => dog.proviene === "API")
                break;
            case "DB":
                dogsForName = allDogs.filter(dog => dog.proviene === "DB")
                break;
            case "TODOS":
                dogsForName = allDogs;
                break;
            default: 
                dogsForName = allDogs;
        }
    }

    // funciones de los estados internos del componente
    const nextButton = () => {
        setCount(++count)
    }

    const prevButton = () => {
        setCount(--count)
    }

    const desdeApi = () => {
        setProviene("API")
    }

    const desdeDb = () => {
        setProviene("DB")
    }
    
    const desdeTodos = () => {
        setProviene("TODOS")
    }

    const ordenarAsc = () => {
        setOrden("ASC")
    }

    const ordenarDes = () => {
        setOrden("DES")
    }

    const ordenarPesoMin = () => {
        setOrden("PESO_MIN")
    }
    
    const ordenarPesoMax = () => {
        setOrden("PESO_MAX")
    }
    

    
    // asignacion y llamado a la funcion de paginacion
    const resultado = paginacion(dogsForName, orden)

    return(
        <div className={s.Home}>
            <div className={s.Home__Container}>
                <h1>Buscador</h1>
                <div className={s.Home__Container__Ordenamiento}>
                    <div>
                        <span>Filtrar por:</span>
                        <br/>
                        <button onClick={desdeApi}>API</button>
                        <button onClick={desdeDb}>DB</button>
                        <button onClick={desdeTodos}>Todos</button>
                    </div>
                    <div>
                        <span>Ordenar: </span>
                        <br/>
                        <button onClick={ordenarDes}>Des</button>
                        <button onClick={ordenarAsc}>Asc</button>
                        <button onClick={ordenarPesoMin}>Peso menor</button>
                        <button onClick={ordenarPesoMax}>Peso mayor</button>
                        
                    </div>
                    <div>
                        <input type="text" placeholder="Buscar por temperamento"/>
                    </div>
                </div>
            </div>


            <div>
                {count > 0 && <button onClick={prevButton}>Prev</button>}
                {count >= 0 && count < resultado.length - 1 && <button onClick={nextButton}>Next</button>}
            </div>
            <div className={s.Home__ContainerCards}>
                {/* <CardNew /> */}
                {
                    dogsForName ? 
                    resultado[count]?.map((dog) => {
                        return <CardDog {...dog}/>
                    })
                    :
                    null
                }
            </div>
            <div>
                {count > 0 && <button onClick={prevButton}>Prev</button>}
                {count >= 0 && count < resultado.length - 1 && <button onClick={nextButton}>Next</button>}
                
            </div>
        </div>
    )
}

export default Home;


