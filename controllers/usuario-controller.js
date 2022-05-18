const Usuario = require('../models/Usuario');


exports.getAll = ( req, res ) => {

    Usuario.find( (err, usuarios) => {
        if(err) return res.status(404).send(err.message);

        console.log("GET/usuarios")
        res.status(200).jsonp(usuarios);
    });
};




exports.getById = (req, res) => {

    Usuario.findById(req.params.id, (err, usuario) => {
        if(err) return res.status(404, err.message);

    console.log("GET/usuarios/", req.params.id);
    res.status(201).jsonp(usuario);
    });
};




exports.create = async(req, res) => {
    console.log("POST/usuario");
    console.log(req.body);

    const usuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        contrasena: req.body.contrasena,
        estado: req.body.estado,
    });

    await usuario.save( (err, usuario) => {
        if(err) res.status(500).send(err.message);

        res.status(200).jsonp(usuario);
    });
};



exports.update = ( req, res ) => {

    Usuario.findById(req.params.id, (err, usuario) => {
        if(err) res.status(404).send(err.message);

        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.contrasena = req.body.contrasena;
        usuario.estado = req.body.estado;
        
        console.log("PUT/usuarios/", req.params.id)
        usuario.save( (err) => {
            if(err) return  res.send(500, err.message);

            res.status(201).jsonp(usuario);
        });
        console.log(usuario)
    });
};


exports.deleteById = ( req, res ) => {
    Usuario.findById(req.params.id, (err, usuario) => {
        if(err) return res.status(404).send(err.message);

        usuario.remove( (err) => {
            if(err) return res.status(500).send(err.message);

            console.log("DELETE/usuarios/", req.params.id);
            res.status(202).send();
        });
    });
};