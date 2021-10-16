import { GET_ALL_DOG, GET_DESCRIPTION } from "../action-types/index";

const initialState = {
    dogs: [],
    dogDescription: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ORDENAR_DES":
            const arrDes = state.dogs.map(dog => dog);
            arrDes.reverse()
            return{
                ...state, 
                dogs: arrDes
            }
        case "ORDENAR_ASC":
            const arrAsc = state.dogs.map(dog => dog);
            arrAsc.sort()
            return{
                ...state, 
                dogs: arrAsc
            }
        case "GET_DESCRIPTION":
            return{
                ...state,
                dogDescription: state.dogs.find(dog => parseInt(dog.id) === parseInt(action.payload))
            }
        case "OBTENER_POR_NOMBRE":
            return {
                ...state,
                dogs: action.payload
            }
        default:
            return state;
    }
}


export default rootReducer;