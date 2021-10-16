import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordenarDes, ordenarAsc } from "../../actions/actions";
import CardDog from "../CardDog/CardDog";
import CardNew from "../CardNew/CardNew";
import s from "./Home.module.css";

const Home = () => {
    const dogs = useSelector((state) => state.dogs);
    const[pag, setPag] = useState({
        count: 0
    });
    const [dogsTest, setDogsTest] = useState({
        dogs: dogs
    })
    const[caso, setCaso] = useState("");
    const dispatch = useDispatch();

    // useEffect(() => {
    //     setDogsTest({
    //         dogs: resultado[pag.count]
    //     })
    // },[dogsTest.dogs])
    

    // const validarCaso = (dogs, caso) => {
    //     switch(caso){
    //         case "des":
    //             dogs.reverse();
    //             setCaso("");
    //             return dogs;
    //         default:
    //             return dogs;
    //     }
    // }

    
    const paginacion = () => {
        const resultado = [];
        var newArray = [];
        var indice = 0;

        for(let i = 0; i < dogs.length; i++){
            if(indice === 8){
                resultado.push(newArray)
                newArray = [];
                indice = 0;
                continue;
            }else{
                newArray.push(dogs[i])
                indice++;
            }
        }
        return resultado;
    }
    
    const handleOnClick = (e) => {
        // validarCaso(dogs, e.tar)
    }
    
    

    const nextButton = () => {
        setPag({
            count: pag.count+1
        })
    }

    const prevButton = () => {
        setPag({
            count: pag.count-1
        })
    }

    const resultado = paginacion(dogs)
    console.log(resultado)

    return(
        <div className={s.Home}>
            <div className={s.Home__Container}>
                <h1>Buscador</h1>
                <div className={s.Home__Container__Ordenamiento}>
                    <div>
                        <span>Filtrar por:</span>
                        <br/>
                        <select>
                            <option></option>
                            <option>API</option>
                            <option>Base de datos</option>
                        </select>
                    </div>
                    <div>
                        <span>Ordenar: </span>
                        <br/>
                        <button onClick={() => dispatch(ordenarDes())}>Des</button>
                        <button onClick={() => dispatch(ordenarAsc())}>Asc</button>
                        {/* <select>
                            <option></option>
                            <option>A - Z</option>
                            <option onClick={() => dispatch(ordenarDes())}>Z - A</option>
                            <option>Peso Menor</option>
                            <option>Peso Mayor</option>
                        </select> */}
                    </div>
                    <div>
                        <input type="text" placeholder="Buscar por temperamento"/>
                    </div>
                </div>
            </div>
            <div>
                {pag.count > 0 && <button onClick={prevButton}>Prev</button>}
                {pag.count >= 0 && pag.count < resultado.length - 1 && <button onClick={nextButton}>Next</button>}
            </div>
            <div className={s.Home__ContainerCards}>
                <CardNew />
                {
                    resultado[pag.count]?.map((dog) => {
                        return <CardDog {...dog}/>
                    })
                }
            </div>
            <div>
                {pag.count > 0 && <button onClick={prevButton}>Prev</button>}
                {pag.count >= 0 && pag.count < resultado.length - 1 && <button onClick={nextButton}>Next</button>}
                
            </div>
        </div>
    )
}

export default Home;


// quiero una funcion que sume
// necesito 2 parametros
// que los parametros sean numeros
// guardar el resultado en una variables
// retornar el resulta

function sumar(parametro1, parametro2){
    if(typeof(parametro1) === "number" && typeof(parametro2) === "number"){
        const resultado = parametro1 + parametro2;
        return resultado
    }
}