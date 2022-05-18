const TipoEquipo = require('../models/TipoEquipo')


// Get all tipos
exports.findAll = (req, res) =>{

    TipoEquipo.find( (err, tiposEquipo) => {
        if (err){
            return res.send(500, err.message);
        }        
        console.log("GET /tiposEquipo");
        res.status(200).jsonp(tiposEquipo);
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
        estado: req.body.estado
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

        if(err) return res.status(404).send(err.message);

        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;

        tipoEquipo.save( (err) => {
            if(err)
                return res.status(500).send(err.message);
            
        res.status(200).json(tipoEquipo);
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
