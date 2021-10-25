import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginacion } from "./controllerHome";
import { ordenarAsc, ordenarDes, desdeApi, desdeDb, desdeTodos, ordenarPesoMin, ordenarPesoMax, filtrarTemperament } from "../../actions/actions";
import CardDog from "../CardDog/CardDog";
import s from "./Home.module.css";

const Home = () => {
    const [count, setCount] = useState(0);
    const [filtrar, setFiltrar] = useState(false);
    const [ordenar, setOrdenar] = useState(false);
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
    const resultado = paginacion(dogsFilter, count)
    console.log(resultado)


    return(
        <div className={s.Home}>
            <div className={s.Home__Container}>
                <div className={s.Home__Bienvenida}>
                    <div>
                        <h1>Buscador</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                        </p>
                    </div>
                    <div>
                        <h1>imagen</h1>
                    </div>
                </div>
                
                <div className={s.Container__Filtrado__Ordenamiento}>

                    <div className={s.Container__Filtrado}>
                        <div>
                            <button onClick={() => setFiltrar(!filtrar)}>Filtrar</button>
                        </div>
                        {
                            filtrar &&
                            <div className={s.Filtrado}>
                                <span>Filtrar por:</span>
                                <br/>
                                <button name="api" onClick={handleOnClick}>API</button>
                                <button name="db" onClick={handleOnClick}>DB</button>
                                <button name="todos" onClick={handleOnClick}>Todos</button>
                                <br/>
                                <span>O por</span>
                                <br/>
                                <label>
                                    Temperamento:
                                    <br/> 
                                    <select onChange={handleOnChange}>
                                        {
                                            temperaments.map(temp => <option >{temp.nombre}</option>)
                                        }
                                    </select>
                                </label>
                            </div>
                        }
                    </div>


                    <div className={s.Container__Ordenamiento}>
                        <div>
                            <button onClick={() => setOrdenar(!ordenar)}>Ordenar</button>
                        </div>
                        {
                            ordenar &&
                            <div>
                                <span>Ordenar por: </span>
                                <br/>
                                <div>
                                    <label>Nombre:
                                        <br/>
                                        <button name="asc" onClick={handleOnClick}>A - Z</button>
                                        <button name="des" onClick={handleOnClick}>Z - A</button>
                                    </label>
                                </div>
                                <div>
                                    <span>O por</span>
                                </div>
                                <div>
                                    <label>Peso:
                                        <br/>
                                        <button name="pesoMin" onClick={handleOnClick}>Menor</button>
                                        <button name="pesoMax" onClick={handleOnClick}>Mayor</button>
                                    </label>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>

            


            <div className={s.Paginado}>
                <div className={s.Paginado__Prev}>
                    {count > 0 && <button onClick={decrementar}>{"<"}</button>}
                </div>
                <div className={s.Paginado__Next}>
                    {count >= 0 && count < resultado.length - 1 && <button onClick={incrementar}>{">"}</button>}
                </div>
            </div>

            <div className={s.Home__ContainerCards}>
                {
                    dogsFilter ? 
                    resultado[count]?.map((dog) => {
                        return <CardDog {...dog}/>
                    })
                    : 
                    <h1>No existe lo buscado</h1>
                }
            </div>

            <div className={s.Paginado}>
                <div className={s.Paginado__Prev}>
                    {count > 0 && <button onClick={decrementar}>{"<"}</button>}
                </div>
                <div className={s.Paginado__Next}>
                    {count >= 0 && count < resultado.length - 1 && <button onClick={incrementar}>{">"}</button>}
                </div>
            </div>

        </div>
    )
}

export default Home;


