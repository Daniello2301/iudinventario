const estadosRouter = require('express').Router();

// Import controller

const estadoController = require('../controllers/estado-equipo-controller');


estadosRouter.route('/estados')
            .get(estadoController.findAll)
            .post(estadoController.create);

estadosRouter.route('/estados/:id')
            .get(estadoController.getById)
            .patch(estadoController.update)
            .put(estadoController.update)
            .delete(estadoController.deleteById);

module.exports = estadosRouter;