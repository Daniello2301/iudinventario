const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Mongo URI
const URI = process.env.URI

//Create connection in DB
const mongoConn = async() =>
{
    console.log("Connecting to full-Stack Colletion in mongo DB...")
    try 
    {
        await mongoose.connect(URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })  

    console.log("Connection Successfull!!")  
    } catch (error) 
    {
        console.log("Error in connection with mongoDB")
        throw new Error("Error in mongoDB! :(")
    }
}

module.exports = {
    mongoConn
}