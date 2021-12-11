const express = require('express');
const router = express();
const dogs = require("./dogsRoute");
const temperamento = require("./temperamentRoute");




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogs)
router.use("/temperament", temperamento)




module.exports = router;
