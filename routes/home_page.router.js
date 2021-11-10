const express = require('express');
const router = express.Router();
const info = require('../controllers/home_page.controllers');

router.get('/', function(req, res){
    info.index(req, res);
});

router.post('/addinfo', function(req, res){
    info.create(req, res);
});

router.get('/getinfo', function(req, res){
    info.list(req, res);
});

module.exports = router;
