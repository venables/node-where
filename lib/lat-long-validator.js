'use strict';

var parseLatLong = require('parse-coordinates');

function isLatLong(latLong){
  (parseLatLong(latLong)) ? true: false;
}

module.exports = isLatLong;
