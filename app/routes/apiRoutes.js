const express = require ('express');
const router = express.Router();

//mySQL DEPENDENCIES
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Socorro!3401",
    database: "pokedex_db"
});

//INTITLIZING MYSQL CONNECTION
connection.connect(function(err){
    if(err){
        console.log("SERVER: ERROR CONNECTING TO DATABASE "+ err.stack);
        return;
    }
    console.log("SERVER: CONNECTED TO DATABASE - Connection: " + connection.threadId);
})

router.get('/pokemon', function(req, res){
    connection.query("SELECT * FROM caughtPokemon", function (err, data){
        if (err) throw err;
        console.log(data);
        res.send(data);
    }) 
});
router.post('/pokemon', function (req, res){
    res.send(true);
});

module.exports = router;