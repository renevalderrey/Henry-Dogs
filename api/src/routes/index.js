const { Router } = require("express");
const routerDogs = require('./r_dogs');
const routerTemp =  require('./r_temperaments');
const routerPost = require('./r_post_dogs');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', routerDogs);
router.use('/temperaments', routerTemp);
router.use('/dog', routerPost);


module.exports = router;
