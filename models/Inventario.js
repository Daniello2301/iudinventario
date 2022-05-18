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
        type:  mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario',
        require: false
    },
    /* marca_id int not null, */
    marca:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Marca',
        require: true
    },
    /* tipo_id int not null, */
   tipo:{
       type:  mongoose.Schema.Types.ObjectId,
       ref: 'TipoEquipo',
       require: true
   },
    /*  estado_id int not null, */
    estadoId:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'EstadoEquipo',
        require: true
    }
},
{
    versionKey:false,
    timestamps: true
});

const Inventario = new mongoose.model('Inventario', InventaraioEschema);
module.exports = Inventario