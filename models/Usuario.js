const mongoose = require('mongoose');

const UsuarioEschema = mongoose.Schema({

    nombre: { 
        type: String, 
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    contrasena:{
        type: String,
        required: true
    },
    estado: {
        type: String, 
        required: true, 
        enum: ['Activo', 'Inactivo']
    },
    fechaCreacion:{
        type: Date,
        required: true
    },
    fechaActualizcion:{
        type: Date,
        required: true
    }
});

const Usuario = module.exports = mongoose.model('Usuario', UsuarioEschema);

module.exports.get = (callback, limit) => {
    Usuario.find(callback).limit(limit);
};