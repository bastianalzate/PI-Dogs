import { 
    GET_ALL_DOGS, 
    GET_DESCRIPTION,
    GET_DOGS_FOR_NAME, 
} from "../action-types/index";


// Action para obtener datos desde el back el cual esta corriendo en el puerto 3001
export const getAllDogs = () => {
    //obtener todos los perros en /dogs por medio de un get
    return (dispatch) => {
        fetch("http://localhost:3001/dogs")
        .then(response => response.json())
        .then(response => {
            dispatch({type: GET_ALL_DOGS, payload: response})
        })
        .catch(err => new Error(err))
    }   
}


export const getDogsForName = (nombre) => {
    //obtener todos los perros que coincidan con el nombre que pasamos por parametro
    return{
        type: GET_DOGS_FOR_NAME,
        payload: nombre
    }
}


export const getDescription = (id) => {
    // Enviar el id al reducere para crear la seccion de Description
    return {
        type: GET_DESCRIPTION,
        payload: id
    }
}



// export const ordenarAsc = () => {
//     return {
//         type: ORDER_ASC,
//     }
// }


// export const ordenarDes = () => {
//     return {
//         type: ORDER_DES,
//     }
// }















// ----------------------------------------------------------------



// export const getDogs = (name) => {
//     return (dispatch) => {
//         fetch(`http://localhost:3001/dogs?nombre=${name}`)
//         .then(response => response.json())
//         .then(resultado => {
//             console.log("este es el resultado",resultado.data)
//             dispatch({type: "OBTENER_POR_NOMBRE", payload: resultado.data})
//         })
//         .catch(err => console.log(err))
//     }
// }


// export const ordenarDes = () => {
//     return { 
//         type: "ORDENAR_DES"
//     }
// }

// export const ordenarAsc = () => {
//     return { 
//         type: "ORDENAR_ASC"
//     }
// }
