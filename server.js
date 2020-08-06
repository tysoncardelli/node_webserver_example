const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers')
const port = process.env.PORT || 3000;


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
app.listen(port, ()=>{~
    console.log(`Escuchando peticiiones en el puerto ${ port }`)
})
