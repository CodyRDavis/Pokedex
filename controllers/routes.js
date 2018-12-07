var express = require("express");

var router = express.Router();

var con = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  con.query("SELECT * FROM pokemon", function(err, result){
    if (err) throw err;
    console.log(result);
    res.render('List',{pokemon: result});
  })
});

router.post("/api/pokemon", function(req, res) {
  console.log(req.body);
  con.query("INSERT INTO pokemon (pokeNumber, pokeName) VALUES (?, ?)", [req.body.pokeNumber, req.body.pokeName], function(err, result){
    if (err) throw err;
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/api/pokemon/:id', function(req,res){
  const id = req.params.id;
  con.query("UPDATE pokemon SET pokeCaught = ? WHERE id = ?", [true, id], function(err, result){
    res.status(200).end();
  });
})

// Export routes for server.js to use.
module.exports = router;
