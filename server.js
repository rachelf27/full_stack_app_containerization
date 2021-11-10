const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const info = require('./routes/home_page.router');

const PORT = process.env.PORT || 3000;

const HOST = '0.0.0.0';

app.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/meal_plans.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/home_page.html'));

});

app.get('/lowcarbdiet', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/low_carb_diet.html'));

});

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use('/info', info);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);