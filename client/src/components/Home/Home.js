import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginacion } from "./controllerHome";
import { ordenarAsc, ordenarDes, desdeApi, desdeDb, desdeTodos, ordenarPesoMin, ordenarPesoMax, filtrarTemperament, getAllDogs } from "../../actions/actions";
import CardDog from "../CardDog/CardDog";
import s from "./Home.module.css";

const Home = () => {
    let [count, setCount] = useState(0);
    let { dogsFilter, temperaments } = useSelector((state) => state);
    const dispatch = useDispatch();

    // funciones de los estados internos del componente
    const nextButton = () => {
        setCount(++count)
    }

    const prevButton = () => {
        setCount(--count)
    }

    // asignacion y llamado a la funcion de paginacion
    const resultado = paginacion(dogsFilter)


    return(
        <div className={s.Home}>
            <div className={s.Home__Container}>
                <h1>Buscador</h1>
                <div className={s.Home__Container__Ordenamiento}>
                    <div>
                        <span>Filtrar por:</span>
                        <br/>
                        <button onClick={() => dispatch(desdeApi())}>API</button>
                        <button onClick={() => dispatch(desdeDb())}>DB</button>
                        <button onClick={() => dispatch(desdeTodos())}>Todos</button>
                        <select onChange={(e) => dispatch(filtrarTemperament(e.target.value))}>
                            {
                                temperaments.map(temp => <option >{temp.nombre}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <span>Ordenar: </span>
                        <br/>
                        <button onClick={() => dispatch(ordenarDes())}>Des</button>
                        <button onClick={() => dispatch(ordenarAsc())}>Asc</button>
                        <button onClick={() => dispatch(ordenarPesoMin())}>Peso menor</button>
                        <button onClick={() => dispatch(ordenarPesoMax())}>Peso mayor</button>
                        
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
                    dogsFilter ? 
                    resultado[count]?.map((dog) => {
                        return <CardDog {...dog}/>
                    })
                    : 
                    <h1>No existe lo buscado</h1>
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


