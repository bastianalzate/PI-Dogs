import { 
    GET_ALL_DOGS, 
    GET_DESCRIPTION,
    GET_DOGS_FOR_NAME, 
    ORDER_ASC,
    ORDER_DES,
    DESDE_API,
    DESDE_DB,
    DESDE_TODOS,
    ORDER_PESO_MIN,
    ORDER_PESO_MAX,
    GET_ALL_TEMPERAMENT,
    FILTRAR_TEMPERAMENT,
    // ----------------------
    ADD_FAVORITES,
    REMOVE_FAVORITES,
    MODE_NOCTURNE,
 
} from "../action-types/index";



//Obtener

// Action para obtener datos desde el back el cual esta corriendo en el puerto 3001
export const getAllDogs = () => {
    //obtener todos los perros en /dogs por medio de un get
    return (dispatch) => {
        fetch("http://localhost:3001/dogs")
        .then(response => response.json())
        .then(response => {
            const mapeo = response.map(dog => {
                if(dog.proviene === "API"){
                    if(dog.pesoMax && dog.pesoMin) return dog;
                    else{
                        if(!dog.pesoMax && !dog.pesoMin){
                            return {
                                ...dog,
                                pesoMin: "N/A",
                                pesoMax: "N/A",
                            }
                        }

                        if(!dog.pesoMax){
                            return {
                                ...dog,
                                pesoMax: "N/A",
                            }
                        }else{
                            return {
                                ...dog,
                                pesoMin: "N/A",
                            }
                        }
                    }
                }

                else if(dog.proviene === "DB") { // Aplico logica extra a los que vienen de la DB ya que viene un objeto y quiero convertilo en un string
                    const temp = dog.temperamento.map(tempe => tempe.nombre)
                    return {
                        ...dog,
                        temperamento: temp.join(",")
                    }
                }
            })
            dispatch({type: GET_ALL_DOGS, payload: mapeo})
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


export const getAllTemperament = () => {
    // Obtengo todos los temperamentos de mi back
    return (dispatch) => {
        fetch("http://localhost:3001/temperament")
        .then(response => response.json())
        .then(response => {
            dispatch({type: GET_ALL_TEMPERAMENT, payload: response})
        })
    }
}

// -----------------------------------------
//Ordenamiento
export const ordenarAsc = () => {
    return {
        type: ORDER_ASC,
    }
}


export const ordenarDes = () => {
    return {
        type: ORDER_DES,
    }
}


export const ordenarPesoMin = () => {
    return {
        type: ORDER_PESO_MIN,
    }
}


export const ordenarPesoMax = () => {
    return {
        type: ORDER_PESO_MAX,
    }
}


// ------------------------------------------
// Filtrados

export const desdeApi = () => {
    return {
        type: DESDE_API,
    }
}


export const desdeDb = () => {
    return {
        type: DESDE_DB,
    }
}


export const desdeTodos = () => {
    return {
        type: DESDE_TODOS,
    }
}

export const filtrarTemperament = (temperamento) => {
    return {
        type: FILTRAR_TEMPERAMENT,
        payload: temperamento
    }
}


// ---------------------------------------------
// Funcionalidades extras agregada por mi

export const addFavorites = (id) => {
    return {
        type: ADD_FAVORITES,
        payload: id
    }
}

export const removeFavorites = (id) => {
    return {
        type: REMOVE_FAVORITES,
        payload: id
    }
}


export const cambiarModo = () => {
    return { 
        type: MODE_NOCTURNE,
    }
}
