const axios = require("axios");
const { Op } = require("sequelize");
const { Dog } = require("../db");

const getDogsApi = async () => {
    const consulta = await axios(`https://api.thedogapi.com/v1/breeds?api_key=49230131-922d-4250-b24a-41110a8c9dd2`)
    const listaDogs = await consulta.data.map(dog => {
        return {
            id: dog.id,
            peso: dog.weight,
            altura: dog.height,
            nombre: dog.name.toLowerCase(),
            temperamento: dog.temperament,
            imagen: dog.image,
            edad: dog.life_span,
            proviene: "api"
        }
    })

    return listaDogs;
}

const getNameDogDBQuery = async (nombre) => {
    const consulta = await axios(`https://api.thedogapi.com/v1/breeds?api_key=49230131-922d-4250-b24a-41110a8c9dd2`)
    const filtroDeDogs = await consulta.data.filter(dog => {
        if(dog.name.toLowerCase().includes(nombre.toLowerCase())){
            return {
                id: dog.id,
                peso: dog.weight,
                altura: dog.height,
                nombre: dog.name.toLowerCase(),
                temperamento: dog.temperament,
                imagen: dog.image
            }
        }
    })

    const listaFinalDeDogs = filtroDeDogs.map(dog => {
        return {
            id: dog.id,
            nombre: dog.name,
            altura: dog.height,
            peso: dog.weight,
            temperamento: dog.temperament,
            imagen: dog.image
        }
    })


    return listaFinalDeDogs;
}

const getAllDogDBQuery = async (nombre) => {
    const resultado = await Dog.findAll({
        where: {
            nombre: {
                [Op.substring]: nombre
            }
        }
    })
    return resultado;
}

module.exports = {
    getDogsApi,
    getAllDogDBQuery,
    getNameDogDBQuery
}