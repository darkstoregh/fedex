# fedex

## Notes

This module is a riff off of the original [node-shipping-fedex](https://www.npmjs.com/package/node-shipping-fedex), which is no longer maintained and the repo has been lost to time: [github](https://github.com/vtllr/node-shipping-fedex#readme).

`fedex` is a refactor from typescript back to js and adds additional behavior not available in the original module. Thanks to [@vtllr](https://www.npmjs.com/~vtllr) for the original code.

## Install

```
npm i fedex
```

## Usage

### Init

```js
import FedExAPI from 'fedex';

const fedex = new FedExAPI({
  environment: 'sandbox', // or production
  debug: true,
  key: '',
  password: '',
  account_number: '',
  meter_number: '',
});
```

### Address validation

See params [here](test/utils/address.ts)

```js
fedex.addressvalidation(params, cb);
```

### Availability

See params [here](test/utils/availability.ts)

```js
fedex.availability(params, cb);
```

### Close

See params [here](test/utils/close.ts)

```js
// Close ground shipment
fedex.groundclose(params, cb);

// Close smart shipment
fedex.smartpostclose(params, cb);
```

### Pick up

See params [here](test/utils/pickup.ts)

```js
// Get pickup availability
fedex.pickupAvailability(params, cb);

// Create pickup
fedex.smartpostclose(params, cb);

// Delete pickup
fedex.cancelPickup(params, cb);
```

### Rates

See params [here](test/utils/rates.ts)

```js
fedex.rates(params, cb);
```

### Shipment

See params [here](test/utils/shipment.ts)

```js
// Create shipment
fedex.ship(params, cb);

// Delete shipment
fedex.deleteshipment(params, cb);
```

### Tracking

See params [here](test/utils/tracking.ts)

```js
fedex.track(params, cb);
```

## Links

[Official FedEx documentation](http://www.fedex.com/us/web-services/)
