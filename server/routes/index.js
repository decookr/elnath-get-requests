var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
    console.log('you have arrived');    
    // if (1+1 ==2) {
    //     res.send({comment: 'the world is at peace'})
    // } else {
    //     res.send({comment: 'there is only chaos'});
    // }
    res.send('welcome home');
    // res.send('bobby');//can't have more than 1 res.send
});

module.exports = router;