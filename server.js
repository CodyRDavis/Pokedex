//SERVER DEPENDENCIES
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

<<<<<<< HEAD
//PREP REQ.BODY
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
=======
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//HANDLEBARS
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "home"}));
app.set("view engine", "handlebars");
>>>>>>> 41c8b95f624301baa98ac86931e9b99b5d694d54

//HANDLEBAR DEPENDENCIES AND INITILIZATION
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(express.static("public"));
app.use(require('./controllers/routes'));

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

//INTILIZING SERVER
app.listen(PORT, function() {
  console.log("SERVER ONLINE:" + PORT);
});
