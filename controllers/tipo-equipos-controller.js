const TipoEquipo = require('../models/TipoEquipo')


// Get all tipos
exports.findAll = (req, res) =>{

    TipoEquipo.find( (err, tipoEquipo) => {
        if (err){
            return res.send(500, err.message);
        }        
        console.log("GET /tiposEquipo");
        res.status(200).jsonp(tipoEquipo);
      });
};


// Get TipoEquipo By Id
exports.getById = (req, res) => {

     TipoEquipo.findById(req.params.id, (err, tipoEquipo) =>{
        if(err)
            return res.send(500, err.message);
        
        console.log("GET/TipoEquipo/" + req.params.id );
        res.status(200).jsonp(tipoEquipo)
    })
};

// Create TipoEquipo
exports.create = async(req, res) => {

    console.log("POST new TipoEquipo");
    console.log(req.body);

    const tipoEquipo = new TipoEquipo({
        nombre: req.body.nombre,
        estado: req.body.estado,
        fechaCreacion: Date.now(),
        fechaActualizcion: Date.now()
    });

   await tipoEquipo.save( (err, tipoEquipo) => {
        if(err)
            return res.status(500).send(err.message);
        
        res.status(200).jsonp(tipoEquipo);
    });
};


// UPDATE tipo Equipo
exports.update = (req, res) => {

    TipoEquipo.findById(req.params.id, (err, tipoEquipo) => {

        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion = req.body.fechaCreacion;
        tipoEquipo.fechaActualizcion = req.body.fechaActualizcion;

        tipoEquipo.save( (err) => {
            if(err)
                return res.status(500).send(err.message);
            
        res.status(200).json(tipoEquipo);
    //console.log(stringFy.json(tipoEquipo))
        });
    });
};


// DElETE tipoEquipo By Id
exports.deleteById =  (req, res) => {
    TipoEquipo.findById(req.params.id, (err, tipoEquipo) => {
        if(err)
            return res.status(404)
                    .send(err.message)

        tipoEquipo.remove( (err) => {
            if(err)
                return res.status(500)
                        .send(err.message);
            
        res.status(202)
                .send()
        })
    });
};