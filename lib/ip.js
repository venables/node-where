'use strict';

var _ = require('lodash');
var ResultBuilder = require('./result-builder');

function IP(ip) {
  this.ip = ip;
  this.url = 'http://freegeoip.net/json/' + this.ip;
}

_.extend(IP.prototype, {
  buildResult: ResultBuilder._buildIpResult,
});

module.exports = IP;
