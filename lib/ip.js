'use strict';

var _ = require('lodash');
var Result = require('./result');

function IP(ip) {
  this.ip = ip;
  this.url = 'http://freegeoip.net/json/' + this.ip;
}

_.extend(IP.prototype, {
  buildResult: function(body) {
    body = body || {};

    return new Result({
      countryCode: body.country_code,
      country: body.country_name,
      regionCode: body.region_code,
      region: body.region_name,
      city: body.city,
      postalCode: body.zip_code,
      lat: body.latitude,
      lng: body.longitude
    });
  }
});

module.exports = IP;
