var controller = require('./controllers');
var router = require('express').Router();
var express = require('express');

//Connect controller methods to their corresponding routes
//router.use(express.json());

router.get('/messages', controller.messages.get);

router.post('/messages', controller.messages.post);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);


module.exports = router;

