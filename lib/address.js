'use strict';

var _ = require('lodash');
var ResultBuilder = require('./result-builder');

function Address(address) {
  this.address = address;
  this.url = 'http://maps.googleapis.com/maps/api/geocode/json?sensor=false&address=' + encodeURIComponent(this.address);
}

_.extend(Address.prototype, {
  buildResult: ResultBuilder._buildAddressResult,
});

module.exports = Address;
