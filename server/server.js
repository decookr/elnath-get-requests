var express = require('express');
var bodyParser = require('body-parser');
var reallyGreat = require('./routes/really-great');
var quotes = require('./routes/quotes');
var app = express();
var port = 5000;

console.log('starting up the server');

app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/great', reallyGreat);

//we want /quote/random will res.send a random quote
//we want /quote/first will res.send the first quote
//we want /quote will res.send "you can find quotes on /quote/random or /quote/first"
app.use('/quote', quotes);//app.use chomps the /quote, finds get request on quotes.js

app.use('/dinosaur', function(req,res){ //app.use is a catch all - will do get, post, put, and delete
    res.send('Roar!');
})

app.listen(port, function(){
    console.log('listening on port', port);
});
