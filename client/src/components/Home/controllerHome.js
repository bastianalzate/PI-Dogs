export const paginacion = (dogsForName, orden) => {
    let resultado = [];
    let newArray = [];
    let indice = 0;

    if(orden){
        switch(orden){
            case "ASC":
                dogsForName.sort()
                break;
            case "DES":
                dogsForName.reverse()
                break;
            case "PESO_MIN":
                dogsForName.sort((a, b) => a - b)
                break;
            case "PESO_MAX":
                dogsForName.sort((a, b) => b - a)
                break;
        }
    }

    for(let i = 0; i < dogsForName.length; i++){

        if(dogsForName.length < 8){
            const ultimoIndice = dogsForName.length - 1;

            if(i === ultimoIndice){
                newArray.push(dogsForName[i])
                resultado.push(newArray)
                newArray = [];
                indice = 0;
            }else{
                newArray.push(dogsForName[i])
                indice++;
            }

        }else if( dogsForName.length >= 8){
            const ultimoIndice = dogsForName.length - 1;

            if(indice === 8){
                resultado.push(newArray)
                newArray = [];
                indice = 0;
            }else{
                newArray.push(dogsForName[i])
                indice++;
                
            }
        }
    }
    return resultado;
}