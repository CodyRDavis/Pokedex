//EXPRESS SERVER DEPENDENCIES
const express = require('express');
const PORT = 3000; //add the app stuff for deployment
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//HANDLEBARS
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "home"}));
app.set("view engine", "handlebars");

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

//ROUTING
    //API
app.get('/api/pokemon', function(req,res){
    connection.query("SELECT * FROM pokemon", function(err, data){
        if (err) throw err;
        console.log(data);
        res.send(data);
    })
});

app.post('/api/pokemon', function (req, res){
    sqlString = "INSERT INTO pokemon (pkmnNumber, pkmnName, pkmnCaught) VALUE(?, ?, false)";
    connection.query(sqlString, [req.body.number, req.body.name], function(err, result){
        if (err) throw err;
        console.log(result);

        res.redirect('/');
    });
})

app.get('/api/caught', function (req, res){
    connection.query("SELECT * FROM pokemon WHERE pkmnCaught = true", function(err, data){
        if (err) throw err;
        //console.log(data);
        res.send(data);
    })
});

app.get('/api/need', function (req, res){
    connection.query("SELECT * FROM pokemon WHERE pkmnCaught = false", function(err, data){
        if (err) throw err;
        //console.log(data);
        res.send(data);
    })
})

//ROUTING
    //HTML
app.get('*', function (req, res){
    connection.query("SELECT * FROM pokemon", function(err, data){
        if(err) throw err;
        //console.log(data);
        res.render('pokemonList', {pokemon: data})
    })
})

app.listen(PORT, function(){
    console.log("SERVER STARTED");
    console.log("SERVER LISTENING PORT: ", PORT);
});