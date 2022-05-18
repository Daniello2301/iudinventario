const mongoose = require('mongoose');

const InventaraioEschema = mongoose.Schema({

    serial:{
        type: String,
        required: true,
        unique: true
    },
    modelo: {
        type: String,
        required: true
    },
    descripcion: { 
        type: String, 
        required: true
    },
    foto:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    fechaCompra:{
        type: Date,
        required: true
    },
    estado: {
        type: String, 
        required: true, 
        enum: ['Activo', 'Inactivo']
    },
    /* usuario_id int not null, */
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: false
    },
    /* marca_id int not null, */
    marca:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Marca',
        require: true
    },
    /* tipo_id int not null, */
   tipo:{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'TipoEquipo',
       require: true
   },
    /*  estado_id int not null, */
    estado:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        require: true
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

const Inventario = module.exports =mongoose.model('Inventario', InventaraioEschema);

module.exports.get = (callback, limit) => {
    Inventario.find(callback).limit(limit);
};