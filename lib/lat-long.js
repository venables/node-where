'use strict';

var _ = require('lodash');
var ResultBuilder = require('./result-builder');

function LatLong(latLong) {
  this.latLong = latLong;
  this.url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + encodeURIComponent(this.latLong);
}

_.extend(LatLong.prototype, {
  buildResult: ResultBuilder._buildAddressResult,
});

module.exports = LatLong;
