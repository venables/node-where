'use strict';

var expect = require('chai').expect;
var where = require('../');

describe('where.is', function() {

  it('returns an empty Result if given no address', function(done) {
    var result = where.is(null, function(err, result) {
      expect(err).to.equal(null);
      expect(result.get('address')).to.equal(undefined);
      expect(result.get('streetNumber')).to.equal(undefined);
      expect(result.get('streetAddress')).to.equal(undefined);
      expect(result.get('street')).to.equal(undefined);
      expect(result.get('city')).to.equal(undefined);
      expect(result.get('region')).to.equal(undefined);
      expect(result.get('regionCode')).to.equal(undefined);
      expect(result.get('postalCode')).to.equal(undefined);
      expect(result.get('country')).to.equal(undefined);
      expect(result.get('countryCode')).to.equal(undefined);
      expect(result.get('lat')).to.equal(undefined);
      expect(result.get('lng')).to.equal(undefined);
      done();
    });
  });

  it('geolocates an IPv4 address', function(done) {
    var result = where.is('173.194.33.104', function(err, result) {
      expect(err).to.equal(null);
      expect(result.get('address')).to.equal('Mountain View, CA, 94043, US');
      expect(result.get('streetNumber')).to.equal(undefined);
      expect(result.get('street')).to.equal(undefined);
      expect(result.get('streetAddress')).to.equal(undefined);
      expect(result.get('city')).to.equal('Mountain View');
      expect(result.get('region')).to.equal('California');
      expect(result.get('regionCode')).to.equal('CA');
      expect(result.get('postalCode')).to.equal('94043');
      expect(result.get('country')).to.equal('United States');
      expect(result.get('countryCode')).to.equal('US');
      expect(result.get('lat')).to.equal(37.4192);
      expect(result.get('lng')).to.equal(-122.0574);
      done();
    });
  });

  it('geolocates a postal address', function(done) {
    var result = where.is('4 yawkey way boston ma', function(err, result) {
      expect(err).to.equal(null);
      expect(result.get('address')).to.equal('4 Yawkey Way, Boston, MA, 02215, US');
      expect(result.get('streetNumber')).to.equal('4');
      expect(result.get('street')).to.equal('Yawkey Way');
      expect(result.get('streetAddress')).to.equal('4 Yawkey Way');
      expect(result.get('city')).to.equal('Boston');
      expect(result.get('region')).to.equal('Massachusetts');
      expect(result.get('regionCode')).to.equal('MA');
      expect(result.get('postalCode')).to.equal('02215');
      expect(result.get('country')).to.equal('United States');
      expect(result.get('countryCode')).to.equal('US');
      expect(result.get('lat')).to.equal(42.34584359999999);
      expect(result.get('lng')).to.equal(-71.09878189999999);
      done();
    });
  });

  it('geolocates a landmark', function(done) {
    var result = where.is('Fenway Park', function(err, result) {
      expect(err).to.equal(null);
      expect(result.get('address')).to.equal('4 Yawkey Way, Boston, MA, 02215, US');
      expect(result.get('streetNumber')).to.equal('4');
      expect(result.get('street')).to.equal('Yawkey Way');
      expect(result.get('streetAddress')).to.equal('4 Yawkey Way');
      expect(result.get('city')).to.equal('Boston');
      expect(result.get('region')).to.equal('Massachusetts');
      expect(result.get('regionCode')).to.equal('MA');
      expect(result.get('postalCode')).to.equal('02215');
      expect(result.get('country')).to.equal('United States');
      expect(result.get('countryCode')).to.equal('US');
      expect(result.get('lat')).to.equal(42.3466764);
      expect(result.get('lng')).to.equal(-71.0972178);
      done();
    });
  });
});
