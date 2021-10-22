
export const paginacion = (dogs) => {
    let resultado = [];
    let newArray = [];
    let indice = 0;

    // empiezo a recorrer el array que me pasan por parametro
    for(let i = 0; i < dogs.length; i++){
        
        // comprueba si la longitud del array que me pasan es menor a 8
        if(dogs.length < 8){
            //declaro el ultimo numero en la longitud del array
            const ultimoIndice = dogs.length - 1;

            //pregunto si el indice es igual al ultimo indice del array
            if(i === ultimoIndice){
                newArray.push(dogs[i]) // pusheo cada elemento del array a newArray
                resultado.push(newArray) // guardo en resultado el new array con los perros que tenga almacenado
                newArray = []; // limpio el newArray
                indice = 0; // reseto el indice
            }else{
                newArray.push(dogs[i]) // en caso que no sea i === ultimoIndice voy a ir guardando los valores en newArray
                indice++; // incremento el indice
            }

        }// si es mayor o igual a 8 entro en este else
        else if( dogs.length >= 8){

            if(indice === 8){
                resultado.push(newArray) // si el indice = 8, quiere decir que el newArray tiene 8 elementos lo que hago es guardar ese array con 8 valores en resultado y resetear el newArray y el indice para volver a iniciar las validaciones
                newArray = [];
                indice = 0;
            }else{
                newArray.push(dogs[i]) // guardo en newArray todos los dos hasta llegar a un maximo de 8
                indice++; // incremento el indice
                
            }
        }
    }


    return resultado;
}