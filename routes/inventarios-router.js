const inventarioRouter = require('express').Router();

const inventarioController = require('../controllers/inventario-controller');


inventarioRouter.route('/inventarios')
        .get(inventarioController.getAll)
        .post(inventarioController.create);

inventarioRouter.route('/inventarios/:id')
        .get(inventarioController.getById)
        .patch(inventarioController.update)
        .put(inventarioController.update)
        .delete(inventarioController.deleteById)

inventarioRouter.route('/inventariosUsuarioActivo')
        .get(inventarioController.filterUserActive);

module.exports = inventarioRouter;


