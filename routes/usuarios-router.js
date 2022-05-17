const usuarioRouter = require('express').Router();


const usuarioController = require('../controllers/usuario-controller');


usuarioRouter.route('/usuarios')
    .get(usuarioController.getAll)
    .post(usuarioController.create);


usuarioRouter.route('/usuarios/:id')
    .get(usuarioController.getById)
    .patch(usuarioController.update)
    .put(usuarioController.update)
    .delete(usuarioController.deleteById);

module.exports = usuarioRouter;