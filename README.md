# node-where

A basic geolocation library for node.js.

## Installation

```
npm install node-where --save
```

## Usage

Where can search by Postal Address or IP Address:

### Search by Postal Address:

```javascript
where.is('4 yawkey way boston ma', function(err, result) {
  if (result) {
    console.log('Address: ' + result.address);
    console.log('Street Number: ' + result.street_number);
    console.log('Street: ' + result.street);
    console.log('City: ' + result.city);
    console.log('State: ' + result.state);
    console.log('Zip: ' + result.postal_code);
    console.log('Country: ' + result.country);
    console.log('Lat: ' + result.lat);
    console.log('Lng: ' + result.lng);
  }
});
```

### Search by IP Address:

```javascript
where.is('173.194.33.104', function(err, result) {
  if (result) {
    // ...
  }
});
```

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
