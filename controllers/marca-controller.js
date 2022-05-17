const Marca = require('../models/Marca');


exports.findAll = (req, res) => {
     
    Marca.find( (err, marca) => {
        if(err)return err.status(500).send(err.message);
    
    console.log("Get/marcas");
    res.status(200).jsonp(marca);
    });
};


exports.getById = (req, res) => {

    Marca.findById(req.params.id, (err, marca) => {
        if(err) return res.send(500, err.message);
    
    console.log("Get/marca/", req.params.id);
    res.status(200).jsonp(marca)
    });
};


exports.create = async (req, res) => {
    console.log("POST/marcas");
    console.log(req.body);

    const marca = new Marca({
        nombre: req.body.nombre,
        estado: req.body.estado,
        fechaCreacion: Date.now(),
        fechaActualizcion: Date.now()
    });

    await marca.save( (err, marca) => {
        if(err) return res.send(500, err.message)
    
    res.status(200).jsonp(marca)
    });
};


exports.update =  (req, res) => {

    Marca.findById(req.params.id, (err, marca) => {
        if(err) return res.send(500, err.message);

        marca.nombre = req.body.nombre;
        marca.estado = req.body.estado;
        marca.fechaCreacion = req.body.fechaCreacion;
        marca.fechaActualizcion = req.body.fechaActualizcion;

        marca.save( (err) => {
            if(err) return res.status(500).send(err.message);
        
        res.status(200).jsonp(marca);
        });
    });
};


exports.deleteById = (req, res) => {
    Marca.findById(req.params.id, (err, marca) => {
        if(err) return res.status(404).send(err.message);

        marca.remove( (err) => {
          if(err) return res.status(500).send(err.message);
          
        
        res.status(202).send();
        });
    });
};