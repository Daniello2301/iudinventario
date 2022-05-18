const {Inventario} = require('../models/Inventario');


exports.getAll = ( req, res ) => {

    Inventario.finf( (err, inventarios) => {
        if(err) return res.status(404).send(err.message);
        
        console.log("GET/inventarios")
        res.status(200).jsonp(inventarios);
    });
};


exports.getById = async ( req, res ) => {
    
    await Inventario.findById(req.params.id, (err, inventario) => {
        if(err) return res.status(404).send(err.message);

        console.log("GET/inventarios/", req.params.id);
        res.status(201).jsonp(inventario);
    });
};


exports.create = async( req, res ) => {

    console.log("POST/incentarios");
    console.log(req.body);

    let inventario = 
};