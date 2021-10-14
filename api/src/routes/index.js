const express = require('express');
const router = express();
const dogs = require("./dogsRoute");




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogs)




module.exports = router;
