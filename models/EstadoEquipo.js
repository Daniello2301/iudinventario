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

const EstadoEquipo = model('TipoEquipo', EstadoEquipoEschema);

module.exports = EstadoEquipo;