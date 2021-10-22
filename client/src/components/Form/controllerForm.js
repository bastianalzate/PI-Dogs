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
        
    // validar si nombre no esta vacio
    if(input.nombre.length === 0){
        error.nombre = "Es requerido";
    }

    // validar si nombre no tiene numeros
    if(input.nombre.length !== 0){
        if(!/^[a-z A-Z,.'-]+$/.test(input.nombre)) {
            error.nombre = "Nombre no valido";
        }
    }
    
    // -------------------------------------------------------
    // Altura

    // validar que las alturas no sean numero 0 o inferiores
    if(input.alturaMax <= 0){
        error.alturaMax = "No puede ser igual o menor a 0";
    }
    if(input.alturaMin <= 0){
        error.alturaMin = "No puede ser igual o menor a 0";
    }

    // validar que las alturas nos sean iguales
    if(input.alturaMax === input.alturaMin){
        error.alturaMax = "Altura maxima no puede ser igual a altura minima";
        error.alturaMin = "Altura minima no puede ser igual a altura maxima";
    }

    // validar que altura minima no sea mayor a altura maxima
    if(input.alturaMin > input.alturaMax){
        error.alturaMin = "Altura minima no puede ser mayor que altura maxima";
        error.alturaMax = "Altura maxima no puede ser menor que altura minima";
    }


    // ------------------------------------------------------------------
    // Peso


    // validar que el peso no sean numero 0 o inferiores
    if(input.pesoMax <= 0){
        error.pesoMax = "No puede ser igual o menor a 0";
    }
    if(input.pesoMin <= 0){
        error.pesoMin = "No puede ser igual o menor a 0";
    }

    // validar que el peso no sea igual al otro
    if(input.pesoMax === input.pesoMin){
        error.pesoMax = "Peso maximo no puede ser igual a peso minimo";
        error.pesoMin = "Peso minimo no puede ser igual a peso maximo";
    }

    // validar que peso minimo no sea mayor a peso maximo
    if(input.pesoMin > input.pesoMax){
        error.pesoMin = "Peso minimo no puede ser mayor que peso maximo";
        error.pesoMax = "Peso maximo no puede ser menor que peso minimo";
    }

    // ------------------------------------------------------------
    // Edad

    // validar que la edad no sean numero 0 o inferior
    if(input.edadMax <= 0){
        error.edadMax = "No puede ser igual o menor a 0";
    }
    if(input.edadMin <= 0){
        error.edadMin = "No puede ser igual o menor a 0";
    }

    // validar que las edades no sean iguales
    if(input.edadMax === input.edadMin){
        error.edadMax = "Edad maxima no puede ser igual a edad minima";
        error.edadMin = "Edad minima no puede ser igual a edad maxima";
    }

    // validar que la edad minima no sea mayor a edad maxima
    if(input.edadMax < input.edadMin){
        error.edadMax = "Edad maxima no puede ser menor a edad minima";
        error.edadMin = "Edad minima no puede ser mayor a edad maxima";
    }


    return error;
}