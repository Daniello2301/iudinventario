const mongoose = require('mongoose');

const TipoEquipoEschema = mongoose.Schema({

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

const TipoEquipo = module.exports = mongoose.model('TipoEquipo', TipoEquipoEschema);

module.exports.get = (callback, limit) => {
    TipoEquipo.find(callback).limit(limit);
};
