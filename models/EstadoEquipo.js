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
    }
},
{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model('EstadoEquipo', EstadoEquipoEschema);