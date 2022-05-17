const mongoose = require('mongoose');

const EstadoEquipoEschema = mongoose.Schema({

    nombre: { 
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

const EstadoEquipo = module.exports = mongoose.model('EstadoEquipo', EstadoEquipoEschema);

module.exports.get = (callback, limit) => {
    EstadoEquipo.find(callback).limit(limit);
};