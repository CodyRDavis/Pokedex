//EXPRESS SERVER DEPENDENCIES
const express = require('express');
const PORT = 3000; //add the app stuff for deployment
const app = express();
const htmlRoutes = require('./app/routes/htmlRoutes');
const apiRoutes = require('./app/routes/apiRoutes');

//ROUTES
app.use('/api', apiRoutes);
app.use(htmlRoutes);

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


app.listen(PORT, function(){
    console.log("SERVER STARTED");
    console.log("SERVER LISTENING PORT: ", PORT);
});