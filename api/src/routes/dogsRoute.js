const { Router } = require("express");
const router = Router();
const { Dog } = require("../db");
const { 
    getDogsForNameDb,
    getDogsForNameApi,
    getAllDogsApi,
    getAllDogsDb
} = require("../controllers/dogsControllers");


// Get a /dogs
router.get("/", async (req, res) => {
    // valido si me llega un nombre por parametro
    if(req.query.nombre){ 
        const { nombre } = req.query;
        try{
            const getDogForNameAp = await getDogsForNameApi(nombre);
            const getDogForName = await getDogsForNameDb(nombre);
            const respuestaConcatenada = getDogForName.concat(getDogForNameAp);

            res.status(200).json({data: respuestaConcatenada});
        }
        // Si algo sale mal entrar aqui en el catch
        catch(err){
            console.log(err)
            res.send({error: err})
        }
     }
     else{
         // Si no pasan un nombre automaticamente aplicara un traer todo
        try{
            const getAllDogsAp = await getAllDogsApi();
            const getAllDogs = await getAllDogsDb();
            const respuestaConcatenada = getAllDogs.concat(getAllDogsAp);

            res.status(200).send(respuestaConcatenada);
        }
        // Si algo sale mal entrar aqui en el catch
        catch(err){
            console.log(err)
            res.send({error: err})
        }
    }
    
})


// Post a /dogs
router.post("/", async (req, res) => {
    const { nombre, alturaMax, alturaMin, pesoMax, pesoMin, edadMax, edadMin, imagen } = req.body;
    try{
        const resultado = await Dog.create({
            nombre, alturaMax, alturaMin, pesoMax, pesoMin, edadMax, edadMin, imagen,
        })
        
        res.send(resultado);
    }
    // Si algo sale mal entrar aqui en el catch
    catch(err){
        res.send({error: err});
    }
})  


module.exports = router;