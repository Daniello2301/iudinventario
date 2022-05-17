const marcaRouter = require('express').Router();

const marcaController = require('../controllers/marca-controller');


marcaRouter.route('/marcas')
        .get(marcaController.findAll)
        .post(marcaController.create);

marcaRouter.route('/marcas/:id')
    .get(marcaController.getById)
    .patch(marcaController.update)
    .put(marcaController.update)
    .delete(marcaController.deleteById);


module.exports = marcaRouter;

