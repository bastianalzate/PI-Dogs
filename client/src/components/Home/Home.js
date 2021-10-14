import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardDog from "../CardDog/CardDog";
import CardNew from "../CardNew/CardNew";
import s from "./Home.module.css";

const Home = () => {
    const dogs = useSelector((state) => state.dogs);
    const [pag, setPag] = useState({
        count: 0
    });
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


    return(
        <div className={s.Home}>
            <div className={s.Home__Container}>
                <h1>Buscador</h1>
                <div className={s.Home__Container__Ordenamiento}>
                    <div>
                        <span>Filtro</span>
                        
                    </div>
                    <div>
                        <span>Ordenamiento</span>
                    </div>
                    <div>
                        Busqueda
                    </div>
                </div>
            </div>
            <div>
                <button onClick={prevButton}>Prev</button>
                <button onClick={nextButton}>Next</button>
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
                <button onClick={prevButton}>Prev</button>
                <button onClick={nextButton}>Next</button>
            </div>
        </div>
    )
}

export default Home;