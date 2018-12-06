const express = require ('express');
const router = express.Router();

router.get('/pokemon', function(req, res){
    res.send(true);
});
router.post('/pokemon', function (req, res){
    res.send(true);
});

module.exports = router;