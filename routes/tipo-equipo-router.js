const tiposRouter = require('express').Router();

//Set 
tiposRouter.get('/', (req, res) => {
    res.json({
        status: "API its working ",
        message: "Welcom to route from Tipos Equipos"
    });
});

// Import all methos from controllers
const tipoController = require('../controllers/tipo-equipos-controller')

// Add route to methos using default URL
tiposRouter.route('/tipos')
        .get(tipoController.findAll)
        .post(tipoController.create);



// Add route to methos usin id
tiposRouter.route('/tipos/:id')
            .get(tipoController.getById)
            .patch(tipoController.update)
            .put(tipoController.update)
            .delete(tipoController.deleteById);

// Exporrt module router

module.exports = tiposRouter;