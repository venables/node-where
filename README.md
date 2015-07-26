# node-where

[![Dependency Status](https://david-dm.org/venables/node-where.png)](https://david-dm.org/venables/node-where)

A basic geolocation library for node.js.

Uses [freegeoip.net](http://freegeoip.net) and the [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro)

## Installation

```
npm install node-where --save
```

## Usage

Where can search by Postal Address, landmark or IP Address:

### Search by Postal Address:

```javascript
var where = require('node-where');

where.is('4 yawkey way boston ma', function(err, result) {
  if (result) {
    console.log('Address: ' + result.get('address'));
    console.log('Street Number: ' + result.get('streetNumber'));
    console.log('Street: ' + result.get('street'));
    console.log('Full Street: ' + result.get('streetAddress'));
    console.log('City: ' + result.get('city'));
    console.log('State / Region: ' + result.get('region'));
    console.log('State / Region Code: ' + result.get('regionCode'));
    console.log('Zip: ' + result.get('postalCode'));
    console.log('Country: ' + result.get('country'));
    console.log('Country Code: ' + result.get('countryCode'));
    console.log('Lat: ' + result.get('lat'));
    console.log('Lng: ' + result.get('lng'));
  }
});
```

### Search by Landmark:

```javascript
var where = require('node-where');

where.is('Fenway Park', function(err, result) {
  if (result) {
    // Same result as address search
    // ...
  }
});
```


### Search by IP Address (both IPv4 and IPv6):

```javascript
var where = require('node-where');

where.is('173.194.33.104', function(err, result) {
  if (result) {
    console.log('City: ' + result.get('city'));
    console.log('State / Region: ' + result.get('region'));
    console.log('State / Region Code: ' + result.get('regionCode'));
    console.log('Zip: ' + result.get('postalCode'));
    console.log('Country: ' + result.get('country'));
    console.log('Country Code: ' + result.get('countryCode'));
    console.log('Lat: ' + result.get('lat'));
    console.log('Lng: ' + result.get('lng'));
  }
});
```

NOTE: IP address lookups do not include any street address information.

## Usage as Express middleware:

```javascript
var where = require('node-where');

app.use(function(req, res, next) {
  where.is(req.ip, function(err, result) {
    req.geoip = result;
    next();
  });
});
```

## Testing

Run the spec suite by running:

```
npm test
```
