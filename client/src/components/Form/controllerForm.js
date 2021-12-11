import axios from "axios";

export const sendData = async (input) => {
    if(!input.imagen || !input.imagen.includes("http") || input.imagen.length < 6){
        input.imagen = "https://wallpaperaccess.com/full/3845801.jpg";
    }

    const respuesta = await axios.post("http://localhost:3001/dogs",{
        nombre: input.nombre,
        alturaMax: input.alturaMax,
        alturaMin: input.alturaMin,
        pesoMax: input.pesoMax,
        pesoMin: input.pesoMin,
        edadMax: input.edadMax,
        edadMin: input.edadMin,
        imagen: input.imagen,
        temperamento: input.temperamento, 
        colorFondo: input.colorFondo
    })
    
    return respuesta;
}


export const validarError = (input) => {
    let error = {}
        
    // validar si nombre no esta vacio
    if(input.nombre.length === 0){
        error.nombre = "Es requerido";
    }

    if(input.nombre.length > 0 && input.nombre.length < 5){
        error.nombre = "No puede tener menos de 5 caracteres";
    }

    // validar si nombre no tiene numeros
    if(input.nombre.length !== 0){
        if(!/^[a-z A-Z,.'-]+$/.test(input.nombre)) {
            error.nombre = "Nombre no valido";
        }
    }
    
    // -------------------------------------------------------
    // Altura
    if(!input.alturaMax){
        error.alturaMax = "Es requerido";
    }

    if(!input.alturaMin){
        error.alturaMin = "Es requerido"
    }


    // validar que las alturas no sean numero 0 o inferiores
    if(parseInt(input.alturaMax) <= 0){
        error.alturaMax = "No puede ser igual o menor a 0";
    }
    if(parseInt(input.alturaMin) <= 0){
        error.alturaMin = "No puede ser igual o menor a 0";
    }

    // validar que las alturas nos sean iguales
    if(parseInt(input.alturaMax) > 0 && parseInt(input.alturaMin) > 0 && parseInt(input.alturaMax) === parseInt(input.alturaMin)){
        error.alturaMax = "Altura maxima no puede ser igual a altura minima";
        error.alturaMin = "Altura minima no puede ser igual a altura maxima";
    }

    // validar que altura minima no sea mayor a altura maxima
    if(parseInt(input.alturaMin) > parseInt(input.alturaMax)){
        error.alturaMin = "Altura minima no puede ser mayor que altura maxima";
        error.alturaMax = "Altura maxima no puede ser menor que altura minima";
    }


    // ------------------------------------------------------------------
    // Peso

    if(!input.pesoMax){
        error.pesoMax = "Es requerido";
    }

    if(!input.pesoMin){
        error.pesoMin = "Es requerido"
    }


    // validar que el peso no sean numero 0 o inferiores
    if(parseInt(input.pesoMax) <= 0){
        error.pesoMax = "No puede ser igual o menor a 0";
    }
    if(parseInt(input.pesoMin) <= 0){
        error.pesoMin = "No puede ser igual o menor a 0";
    }

    // validar que el peso no sea igual al otro
    if(parseInt(input.pesoMax) === parseInt(input.pesoMin)){
        error.pesoMax = "Peso maximo no puede ser igual a peso minimo";
        error.pesoMin = "Peso minimo no puede ser igual a peso maximo";
    }

    // validar que peso minimo no sea mayor a peso maximo
    if(parseInt(input.pesoMin) > parseInt(input.pesoMax)){
        error.pesoMin = "Peso minimo no puede ser mayor que peso maximo";
        error.pesoMax = "Peso maximo no puede ser menor que peso minimo";
    }

    // ------------------------------------------------------------
    // Edad
    if(!input.edadMax){
        error.edadMax = "Es requerido";
    }

    if(!input.edadMin){
        error.edadMin = "Es requerido"
    }

    // validar que la edad no sean numero 0 o inferior
    if(parseInt(input.edadMax) <= 0){
        error.edadMax = "No puede ser igual o menor a 0";
    }
    if(parseInt(input.edadMin) <= 0){
        error.edadMin = "No puede ser igual o menor a 0";
    }

    // validar que las edades no sean iguales
    if(parseInt(input.edadMax) === parseInt(input.edadMin)){
        error.edadMax = "Edad maxima no puede ser igual a edad minima";
        error.edadMin = "Edad minima no puede ser igual a edad maxima";
    }

    // validar que la edad minima no sea mayor a edad maxima
    if(parseInt(input.edadMax) < parseInt(input.edadMin)){
        error.edadMax = "Edad maxima no puede ser menor a edad minima";
        error.edadMin = "Edad minima no puede ser mayor a edad maxima";
    }


    return error;
}