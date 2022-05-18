//Import dependencies to use
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const dotenv = require('dotenv').config();


//Import mongo connection
const { mongoConn } = require('./database/config-database-connection') 

// Startup conecction
const Conn = mongoConn();

// Initialize express app
const app = express();

// Configure permissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

//Setup server port
const PORT = process.env.PORT || 3000;

//Launcho app in the server specified
app.listen(PORT, () => {
    console.log("APP sunin in port: " + PORT);
});


//Set message for default URL
app.get('/', (req, res) => {
    res.send("Hello Wolrd, this is Home Page in App full-Stack");
    console.log("Hello Wolrd, this is Home Page in App full-Stack")
} );

//Import routes from API
const tiposRouter = require('./routes/tipo-equipo-router');
const estadosRouter = require('./routes/estado-equipo-router');
const marcaRouter = require('./routes/marca-router');
const usuariosRouter = require('./routes/usuarios-router');
const inventarioRouter = require('./routes/inventarios-router');

//Middleware
app.use(express.json());
//Use routes with express fo TiposEquipos
app.use('/api', tiposRouter);

// Use routes of Estados Equipos
app.use('/api', estadosRouter)

//Use routes of Marca
app.use('/api', marcaRouter);

// Use route of Usaurios
app.use('/api', usuariosRouter);

//Use router of Inventarios
app.use('/api', inventarioRouter);