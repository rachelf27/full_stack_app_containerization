const path = require('path');
const UserInfo = require('../models/home_page.models');

exports.index = function (req, res) {
    res.sendFile(path.resolve('views/home_page.html'));
};

exports.create = function (req, res) {
    var newUserInfo = new UserInfo(req.body);
    console.log(req.body);
    newUserInfo.save(function (err) {
        if(err) {
            res.status(400).send('Unable to save info to database');
        }
        else {
            res.redirect('/views/getinfo');
        }
    });
};

exports.list = function (req, res) {
    UserInfo.find({}).exec(function (err, info) {
        if (err) {
            return res.send(500, err);
        }
        res.render('getinfo', {
            userinfo: userinfo
        });
    });
};