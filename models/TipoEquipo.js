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
    }
},
{
    versionKey:false,
    timestamps: true
}); 

module.exports = mongoose.model('TipoEquipo', TipoEquipoEschema);

