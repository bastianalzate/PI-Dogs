import { GET_ALL_DOG, GET_DESCRIPTION } from "../action-types/index";

const initialState = {
    dogs: [],
    dogDescription: {}
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_DESCRIPTION":
            return{
                ...state,
                dogDescription: state.dogs.find(dog => parseInt(dog.id) === parseInt(action.payload))
            }
        case "enviar":
            return {
                ...state,
                dogs: action.payload
            }
        default:
            return state;
    }
}


export default rootReducer;