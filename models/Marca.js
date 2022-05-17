const mongoose = require('mongoose');

const MarcaEschema = mongoose.Schema({

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

const Marca = module.exports = mongoose.model('Marca', MarcaEschema);

module.exports.get = (callback, limit) => {
    Marca.find(callback).limit(limit);
};