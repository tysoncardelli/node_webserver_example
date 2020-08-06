const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers')
 


// respond with "hello world" when a GET request is made to the homepage
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales', function (err) {});
app.set('view engine','hbs');



app.get('/', function(req, res) {
    

    res.render('home', {
        nombre: 'Tyson',
        ano: new Date().getFullYear()
    });
});

app.get('/about', function(req, res) {
    

    res.render('about', {
        nombre: 'Tyson',
        ano: new Date().getFullYear()
    });
});
app.listen(3000, ()=>{~
    console.log("Escuchando peticiiones en el puerto 3000")
})
