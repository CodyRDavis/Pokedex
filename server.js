//SERVER DEPENDENCIES
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//HANDLEBAR DEPENDENCIES AND INITILIZATION
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(express.static("public"));
app.use(require('./controllers/routes'));

//INTILIZING SERVER
app.listen(PORT, function() {
  console.log("SERVER ONLINE:" + PORT);
});
