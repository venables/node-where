'use strict';

var isIP = require('validator').isIP;
var isLatLong = require('parse-coordinates');
var Address = require('./lib/address');
var LatLong = require('./lib/lat-long');
var IP = require('./lib/ip');
var request = require('request');
var Result = require('./lib/result');

/*
 * callback: fn(err, result);
 */
var is = function(ipOrAddress, callback) {
  var locator;
  var opts;

  if (!ipOrAddress) {
    return callback(null, new Result());
  } else if (isIP(ipOrAddress)) {
    locator = new IP(ipOrAddress);
  } else if(isLatLong(ipOrAddress)) {
    locator = new LatLong(ipOrAddress);
  } else {
    locator = new Address(ipOrAddress);
  }

  opts = {
    method: 'GET',
    url: locator.url,
    json: true
  };

  request(opts, function(err, res, body) {
    if (err) {
      return callback(err);
    }

    callback(null, locator.buildResult(body));
  });
};

module.exports = {
  is: is
};
