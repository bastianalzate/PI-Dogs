import axios from "axios";
import { CREATE_DOG, GET_ALL_DOG, GET_DESCRIPTION } from "../action-types/index";


export const getDescription = (id) => {
    return {
        type: "GET_DESCRIPTION",
        payload: id
    }
}



export const getDogs = (name) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/dogs?nombre=${name}`)
        .then(response => response.json())
        .then(resultado => {
            console.log("este es el resultado",resultado.data)
            dispatch({type: "enviar", payload: resultado.data})
        })
        .catch(err => console.log(err))
    }
}


export const ordenarDes = () => {
    return { 
        type: "ORDENAR_DES"
    }
}

export const ordenarAsc = () => {
    return { 
        type: "ORDENAR_ASC"
    }
}
