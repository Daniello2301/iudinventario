const Inventario = require('../models/Inventario');


exports.getAll = ( req, res ) => {

    Inventario.find( (err, inventarios) => {
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


exports.create = async (  req, res ) => {

    console.log("POST/incentarios");
    console.log(req.body);

    const inventario = new Inventario({
        serial: req.body.serial,
        modelo: req.body.modelo,
        descripcion: req.body.descripcion,
        foto: req.body.foto,
        precio: req.body.precio,
        fechaCompra: Date.now(),
        estado: req.body.estado,
        usuario: req.body.usuario,
        marca: req.body.marca,
        tipo: req.body.tipo,
        estadoId: req.body.estadoId
    });

    await inventario.save( (err, inventario) => {
        if(err) return res.status(500).send(err.message);
       
        res.status(200).jsonp(inventario);
    });
};


exports.update = ( req, res ) => {

    Inventario.findById(req.params.id, (err, inventario) => {
        if(err) return res.status(404).send(err.message);

        inventario.serial = req.body.serial;
        inventario.modelo = req.body.modelo;
        inventario.descripcion = req.body.descripcion;
        inventario.foto = req.body.foto;
        inventario.precio = req.body.precio;
        inventario.fechaCompra = req.body.fechaCompra;
        inventario.estado = req.body.estado;
        inventario.usuario = req.body.usuario;
        inventario.marca = req.body.marca;
        inventario.tipo = req.body.tipo;
        inventario.estadoId = req.body.estadoId;

        console.log("PUT/inventario/", req.params.id);
        inventario.save( (err) => {
            if(err) return res.status(500, err.message);

            res.status(201).send(inventario);
        });
        console.log(inventario)
    });
};


exports.deleteById = ( req, res ) => {
    Inventario.findById( req.params.id, (err, inventario) => {
        if(err) return res.status(404).send(err.message);

        inventario.remove( (err) => {
            if(err) res.status(500).send(err.message);

            console.log("DELETE/inventarios/", req.params.id)
            res.status(201).send();
        });

        console.log("Remove data successfull!")
    });
}; 

exports.filterUserActive = async ( err, res ) => {

    const response = await Inventario.aggregate([
        {
            $lookup:  {
                from: "Usuario",
                localField: "usuario",
                foreignField: "_id",
                as: "usuarioActivo"
             },
        }
    ]);
    if(err) return res.status(500).send(err.message);

    console.log(response);
    res.status(201).jsonp(response);
};