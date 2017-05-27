'use strict';

var parseLatLong = require('parse-coordinates');

function isLatLong(latLong){
  var coords = parseLatLong(latLong);
  
  if(coords && coords.length == 2) {
    return true;
  }
  return false;
}

module.exports = isLatLong;