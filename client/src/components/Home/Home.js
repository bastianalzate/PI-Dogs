import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginacion } from "./controllerHome";
import { ordenarAsc, ordenarDes, desdeApi, desdeDb, desdeTodos, ordenarPesoMin, ordenarPesoMax, filtrarTemperament, getDescription } from "../../actions/actions";
import CardDog from "../CardDog/CardDog";
import SearchBar from "../SearchBar/SearchBar";
import Linkedin from "../../assets/otherImg/linkedin.png";
import Github from "../../assets/otherImg/github.png";
import Filtrar from "../../assets/img/filtrar.png";
import Agregar from "../../assets/img/crearWhite.png";
import s from "./Home.module.css";
import n from "./HomeNocturne.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [count, setCount] = useState(0);
    const [filtrar, setFiltrar] = useState(false);
    const [vistaPrevia, setVistaPrevia] = useState(false);
    let { dogsFilter, temperaments, allDogs, dogDescription, modeNocturne } = useSelector((state) => state);
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

    const verVistaPrevia = (id) => {
        setVistaPrevia(!vistaPrevia);
        dispatch(getDescription(id))
    }
  
    // asignacion y llamado a la funcion de paginacion
    const resultado = paginacion(dogsFilter, count)
    
   
    



    return(
        <div className={ modeNocturne ? `${n.Home}` : `${s.Home}`} >

            {
                filtrar &&
                <div className={s.Filtrar__Ventana}>
                    <div className={s.Ventana}>
                        <div className={s.Boton}>
                            <button onClick={() => setFiltrar(!filtrar)}>X</button>
                        </div>
                        <div className={s.Container__Filtrado__Ordenamiento}>
                            <div className={s.Filtrado}>
                                <div className={s.Titulo__Filtrado}>
                                    <span>Filtrar por</span>
                                </div>
                                <div className={s.Opciones__Filtrado}>
                                    <button name="api" onClick={handleOnClick}>API</button>
                                    <button name="db" onClick={handleOnClick}>DB</button>
                                </div>
                                <div className={s.Titulo__Filtrado__Segundario}>
                                    <span>O</span>
                                </div>
                                <div className={s.Temperamentos}>
                                    <span>Temperamento:</span>
                                    <select onChange={handleOnChange}>
                                        {
                                            temperaments.map(temp => <option >{temp.nombre}</option>)
                                        }
                                    </select>
                                </div>
                            </div>


                            <div className={s.Ordenamiento}>
                                <div className={s.Titulo__Ordenamiento}>
                                    <span>Ordenar por</span>
                                </div>
                                <div className={s.Opciones__Ordenamiento}>
                                    <button name="asc" onClick={handleOnClick}>A - Z</button>
                                    <button name="des" onClick={handleOnClick}>Z - A</button>
                                </div>
                                <div className={s.Titulo__Ordenamiento__Segundario}>
                                    <span>O</span>
                                </div>
                                <div className={s.Opciones__Ordenamiento}>
                                    <button name="pesoMin" onClick={handleOnClick}>Peso Menor</button>
                                    <button name="pesoMax" onClick={handleOnClick}>Peso Mayor</button>
                                </div>
                            </div>

                        </div>
                        <div className={s.Buscador}>
                            <SearchBar />
                        </div>
                    </div> 
                </div>
            }

            {
                vistaPrevia && 
                <div className={s.Filtrar__Ventana}>
                    <div className={s.Ventana__VistaPrevia}>
                        <div className={s.Boton}>
                            <button onClick={() => setVistaPrevia(!vistaPrevia)}>X</button>
                        </div>
                        <div className={s.Imagen__VistaPrevia}>
                            <img src={dogDescription.imagen}/>
                        </div>
                        <div className={s.Nombre__VistaPrevia}>
                            <span>{dogDescription.nombre}</span>
                        </div>
                        <div className={s.Temperamentos__VistaPrevia}>
                            {
                                dogDescription.temperamento.split(",")?.map(temp => <div><span>{temp}</span></div>)
                            }
                        </div>
                        <div className={s.Otros__VistaPrevia}>
                            <div>
                                <span className={s.Nombre__Otros}>Altura</span>
                                <br/>
                                <span>Max: {dogDescription.alturaMax} Cm</span>
                                <br/>
                                <span>Min: {dogDescription.alturaMin} Cm</span>
                            </div>
                            <div>
                                <span className={s.Nombre__Otros}>Peso</span>
                                <br/>
                                <span>Max: {dogDescription.pesoMax} Kg</span>
                                <br/>
                                <span>Min: {dogDescription.pesoMin} Kg</span>
                            </div>
                            <div>
                                <span className={s.Nombre__Otros}>Edad</span>
                                <br/>
                                <span>Max: {dogDescription.edadMin} Años</span>
                                <br/>
                                <span>Min: {dogDescription.edadMax} Años</span>
                            </div>
                        </div>
                    </div> 
                </div>
                
            }

            <div className={s.Home__Container}>
                <div className={s.Home__Bienvenida}>
                    <div className={s.Encabezado}>
                        <div>
                            <h1>PI Dogs Soy Henry</h1>
                            <p>
                                Es un proyecto desarrollado para el Bootcamp de Soy Henry.
                            </p>
                            <NavLink to="/crear-dog">
                                <button><img src={Agregar} width="26px" height="26px" />Crear Dog</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.Container__Imagenes}>
                        <div className={s.Titulo__Imagenes}>
                            <span>Mis redes</span>
                        </div>
                        <div className={s.Imagenes}>
                            <img src={Github} />
                            <img src={Linkedin} />
                        </div>
                    </div>
                </div>
                
                <div className={modeNocturne ? `${n.Container__Filtrado}` : `${s.Container__Filtrado}`}>
                    <div className={modeNocturne ? `${n.Titulo__Paginas}` : `${s.Titulo__Paginas}`}>
                        <h3>Dogs</h3>
                    </div>
                    <div className={modeNocturne ? `${n.Container__Filtrado2}` : `${s.Container__Filtrado2}`}>
                        <button onClick={() => setFiltrar(!filtrar)}>Filtrar<img src={Filtrar}/></button>
                    </div>
                </div>
            </div>

            <div className={modeNocturne ? `${n.Home__ContainerCards}` : `${s.Home__ContainerCards}`}>
                {
                    dogsFilter && resultado.length > 0 ?
                    resultado[count]?.map((dog) => {
                        return <CardDog {...dog} verVistaPrevia={verVistaPrevia}/>
                    })
                    : 
                    <div className={s.NoExiste}>
                        <h1>No existe el dog buscado!</h1>
                    </div>
                }
            </div>

            <div className={modeNocturne ? `${n.Paginado}` : `${s.Paginado}`}>
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


