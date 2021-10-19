import { 
    GET_ALL_DOGS, 
    GET_DOGS_FOR_NAME, 
    GET_DESCRIPTION,
    ORDER_ASC,
    ORDER_DES    
} 
from "../action-types/index";

// Estado inicial
const initialState = {
    allDogs: [],
    dogsForName: [],
    dogsFilter: [],
    dogDescription: {}
}


// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        // Obtener todos los dogs tanto de la api como la base de datos
        case GET_ALL_DOGS:
            return {
                ...state,
                allDogs: action.payload
            }

        case GET_DOGS_FOR_NAME:
            // obtener todos las razas que coincidan con el nombre escrito en el buscador
            return {
                ...state,
                dogsForName: state.allDogs.filter(dogName => {
                    if(dogName.nombre.includes(action.payload)) return dogName;
                })
            }

        case GET_DESCRIPTION:
            // obtener la descripcion de cada raza seleccionada
            return{
                ...state,
                dogDescription: state.allDogs.find(dog => dog.id == action.payload)
            }

        // --------------------------------------------------------------------------

        // case ORDER_ASC:
        //     return{
        //         ...state,
        //         dogsFilter: state.allDogs.sort()
        //     }

        // case ORDER_DES:
        //     return{
        //         ...state,
        //         dogsFilter: state.allDogs.reverse()
        //     }

            
        // // Modificar
        // case "ORDENAR_DES":
        //     const arrDes = state.dogs.map(dog => dog);
        //     arrDes.reverse()
        //     return{
        //         ...state, 
        //         dogs: arrDes
        //     }

        // case "ORDENAR_ASC":
        //     const arrAsc = state.dogs.map(dog => dog);
        //     arrAsc.sort()
        //     return{
        //         ...state, 
        //         dogs: arrAsc
        //     }
        default:
            return state;
    }
}


export default rootReducer;