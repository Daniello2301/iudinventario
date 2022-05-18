const EstadoEquipo = require('../models/EstadoEquipo');

// Get all tipos
exports.findAll = (req, res) =>{

    EstadoEquipo.find( (err, estadosEquipo) => {
        if (err){
            return res.send(500, err.message);
        }        
        console.log("GET /estadosEquipo");
        res.status(200).jsonp(estadosEquipo);
      });
};


// Get TipoEquipo By Id
exports.getById = (req, res) => {

    EstadoEquipo.findById(req.params.id, (err, estadoEquipo) =>{
        if(err)
            return res.send(500, err.message);
        
        console.log("GET/TipoEquipo/" + req.params.id );
        res.status(200).jsonp(estadoEquipo)
    })
};

// Create TipoEquipo
exports.create = async(req, res) => {

    console.log("POST new TipoEquipo");
    console.log(req.body);

    const estadoEquipo = new EstadoEquipo({
        nombre: req.body.nombre,
        estado: req.body.estado
    });

   await estadoEquipo.save( (err, estadoEquipo) => {
        if(err)
            return res.status(500).send(err.message);
        
        res.status(200).jsonp(estadoEquipo);
    });
};


// UPDATE tipo Equipo
exports.update = (req, res) => {

    EstadoEquipo.findById(req.params.id, (err, estadoEquipo) => {

        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado

        estadoEquipo.save( (err) => {
            if(err)
                return res.status(500).send(err.message);
            
        res.status(200).json(estadoEquipo);
    //console.log(stringFy.json(tipoEquipo))
        });
    });
};


// DElETE tipoEquipo By Id
exports.deleteById =  (req, res) => {
    EstadoEquipo.findById(req.params.id, (err, estadoEquipo) => {
        if(err)
            return res.status(404)
                    .send(err.message)

        estadoEquipo.remove( (err) => {
            if(err)
                return res.status(500)
                        .send(err.message);
            
        res.status(202)
                .send()
        })
    });
};