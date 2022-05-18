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
    }
},
{
    versionKey:false,
    timestamps: true
});

module.exports = mongoose.model('Usuario', UsuarioEschema);
