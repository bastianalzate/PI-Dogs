import axios from "axios";

export const sendData = async (input) => {
    const respuesta = await axios.post("http://localhost:3001/dogs",{
        nombre: input.nombre,
        alturaMax: input.alturaMax,
        alturaMin: input.alturaMin,
        pesoMax: input.pesoMax,
        pesoMin: input.pesoMin,
        edadMax: input.edadMax,
        edadMin: input.edadMin,
        imagen: input.imagen,
        temperamento: input.temperamento
    })
    
    return respuesta;
}


export const validarError = (input) => {
    let error = {}
        
    if(input.nombre.length !== 0){
        if(!/^[a-z A-Z,.'-]+$/.test(input.nombre)) {
        
            error.nombre = "Nombre no valido";
        }
    }
    
    
    if(input.alturaMin > input.alturaMax){
        
        error.alturaMin = "Altura minima no puede ser mayor que altura maxima";
        error.alturaMax = "Altura maxima no puede ser menor que altura minima";
    }

    if(input.pesoMin > input.pesoMax){
        
        error.pesoMin = "Peso minimo no puede ser mayor que peso maximo";
        error.pesoMax = "Peso maximo no puede ser menor que peso minimo";
    }

    if(input.edad < 0 || input.edad > 100 ){
        error.edad = "Edad no valida"
    }


    return error;
}