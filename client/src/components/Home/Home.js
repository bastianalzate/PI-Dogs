import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginacion } from "./controllerHome";
import { ordenarAsc, ordenarDes, desdeApi, desdeDb, desdeTodos, ordenarPesoMin, ordenarPesoMax, filtrarTemperament } from "../../actions/actions";
import CardDog from "../CardDog/CardDog";
import s from "./Home.module.css";

const Home = () => {
    const [count, setCount] = useState(0);
    let { dogsFilter, temperaments } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        dispatch(filtrarTemperament(e.target.value))
    }

    const incrementar = () => {
        setCount(count + 1);
    }

    const decrementar = () => {
        setCount(count - 1);
    }

    const handleOnClick = (e) => {
        // filtrados
        if(e.target.name === "api") dispatch(desdeApi());
        if(e.target.name === "db") dispatch(desdeDb());
        if(e.target.name === "todos") dispatch(desdeTodos());


        // ordenamiento
        if(e.target.name === "des") dispatch(ordenarDes());
        if(e.target.name === "asc") dispatch(ordenarAsc());
        if(e.target.name === "pesoMin") dispatch(ordenarPesoMin());
        if(e.target.name === "pesoMax") dispatch(ordenarPesoMax());
    
        //Seteo el count para que la paginacion quede en la pagina 1 despues de cada filtro o ordenamiento
        setCount(0)
    }

  

    // asignacion y llamado a la funcion de paginacion
    const resultado = paginacion(dogsFilter, setCount)
    


    return(
        <div className={s.Home}>
            <div className={s.Home__Container}>
                <h1>Buscador</h1>
                <div className={s.Home__Container__Ordenamiento}>
                    <div>
                        <span>Filtrar por:</span>
                        <br/>
                        <button name="api" onClick={handleOnClick}>API</button>
                        <button name="db" onClick={handleOnClick}>DB</button>
                        <button name="todos" onClick={handleOnClick}>Todos</button>
                        <select onChange={handleOnChange}>
                            {
                                temperaments.map(temp => <option >{temp.nombre}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <span>Ordenar: </span>
                        <br/>
                        <button name="des" onClick={handleOnClick}>Des</button>
                        <button name="asc" onClick={handleOnClick}>Asc</button>
                        <button name="pesoMin" onClick={handleOnClick}>Peso menor</button>
                        <button name="pesoMax" onClick={handleOnClick}>Peso mayor</button>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>


            <div>
                {count > 0 && <button onClick={decrementar}>Prev</button>}
                {count >= 0 && count < resultado.length - 1 && <button onClick={incrementar}>Next</button>}
            </div>
            <div className={s.Home__ContainerCards}>
                {/* <CardNew /> */}
                {
                    dogsFilter ? 
                    resultado[count]?.map((dog) => {
                        return <CardDog {...dog}/>
                    })
                    : 
                    <h1>No existe lo buscado</h1>
                }
            </div>
            <div>
                {count > 0 && <button onClick={() => dispatch(decrementar())}>Prev</button>}
                {count >= 0 && count < resultado.length - 1 && <button onClick={() => dispatch(incrementar())}>Next</button>}
            </div>
        </div>
    )
}

export default Home;


