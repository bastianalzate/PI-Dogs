const { Router } = require("express");

const router = Router();
const { Dog } = require("../db");
const { getDogsApi, getAllDogDBQuery, getNameDogDBQuery } = require("../controllers/dogsControllers");


router.get("/", async (req, res) => {
    if(req.query.nombre){
        const { nombre } = req.query;
        try{
            const busquedaDB = await getAllDogDBQuery(nombre);
            const busquedaApi = await getNameDogDBQuery(nombre);

            res.send({data: busquedaDB.concat(busquedaApi)})
        }catch(err){
            res.send({error: "no se encontro el nombre buscado"})
        }
     }else{
        try{
            const busquedaDB = await Dog.findAll();
            const busquedaApi = await getDogsApi();

            res.send({data: busquedaApi.concat(busquedaDB)})
        }catch(err){
            return res.send({error: "error con el get"})
        }
    }
    
})


router.post("/", async (req, res) => {
    const { nombre, alturaMax, alturaMin, pesoMax, pesoMin, edad } = req.body;
    try{
        const resultado = await Dog.create({
            nombre, alturaMax, alturaMin, pesoMax, pesoMin, edad
        })
        console.log(resultado.dataValues)
        res.send(resultado);
    }catch(err){
        res.send({error: err});
    }
})  


module.exports = router;