"use strict";

var express = require('express');
var router = express.Router();

const aboutRoutes = require('./aboutRoutes');

aboutRoutes.set(router);

module.exports = router;