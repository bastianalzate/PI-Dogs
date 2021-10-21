const { Router } = require("express");
const router = Router();
const { Dog, Temperamento } = require("../db");
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

            // concateno todo en un solo array
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
    // Destructuro los datos que me llegan por body
    const { nombre, alturaMax, alturaMin, pesoMax, pesoMin, edadMax, edadMin, imagen, temperamento } = req.body;
    try{
        // Creo el Dog
        const resultado = await Dog.create({
            nombre, alturaMax, alturaMin, pesoMax, pesoMin, edadMax, edadMin, imagen,
        })

        // Agrego los temperamentos que me llegan por body a la tabla intermedia, junto con el resultado que en este caso es la persona que se acabo de agregar a la base de datos
        for(let i = 0; i < temperamento.length; i++){
            resultado.addTemperamentos(await Temperamento.findOne({ // busco por nombre de temperamento y el que encuentre lo agrego a la tabla intermedia
                where: {
                    nombre: temperamento[i]
                }
            }))
            
        }
        
      
        res.send("ok");
    }
    // Si algo sale mal entrar aqui en el catch
    catch(err){
        console.log(err)
        res.send({error: err});
    }
})  


module.exports = router;