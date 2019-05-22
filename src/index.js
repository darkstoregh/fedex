import path from 'path';
import _ from 'lodash';
import { createClient } from 'soap';
import debug from 'debug';

import { serviceTypes, SO } from './serviceTypes';

const logger = debug('fedex');

export default class FedExAPI {
  constructor({ account_number, endpoint, environment, meter_number, key, password, isProduction }) {
    this.account_number = account_number;
    this.endpoint = endpoint;
    this.endpoint = this.isProduction ? 'https://ws.fedex.com' : 'https://wsbeta.fedex.com';
    this.environment = environment === 'production';
    this.isProduction = isProduction;
    this.key = key;
    this.meter_number = meter_number;
    this.password = password;
    this.serviceTypes = serviceTypes;
    this.SigningOptions = SO;
  }

  addressvalidation(params, cb) {
    const resource = {
      version: {
        ServiceId: 'aval',
        Major: 4,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'addressValidation', 'AddressValidationService_v4.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  availability(params, cb) {
    const resource = {
      version: {
        ServiceId: 'vacs',
        Major: 6,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(
      params,
      'serviceAvailability',
      'ValidationAvailabilityAndCommitmentService_v6.wsdl',
      resource,
      (err, res) => {
        return cb(err, res);
      },
    );
  }

  cancelPickup(params, cb) {
    const resource = {
      version: {
        ServiceId: 'disp',
        Major: 13,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'cancelPickup', 'PickupService_v13.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  pickup(params, cb) {
    const resource = {
      version: {
        ServiceId: 'disp',
        Major: 13,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'createPickup', 'PickupService_v13.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  pickupAvailability(params, cb) {
    const resource = {
      version: {
        ServiceId: 'disp',
        Major: 13,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'getPickupAvailability', 'PickupService_v13.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  rates(params, cb) {
    const resource = {
      version: {
        ServiceId: 'crs',
        Major: 20,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'getRates', 'RateService_v20.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  freight_rates(params, cb) {
    const resource = {
      version: {
        ServiceId: 'crs',
        Major: 20,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'getRates', 'RateService_v20.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  ship(params, cb) {
    const resource = {
      version: {
        ServiceId: 'ship',
        Major: 19,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'processShipment', 'ShipService_v19.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  deleteshipment(params, cb) {
    const resource = {
      version: {
        ServiceId: 'ship',
        Major: 19,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'deleteShipment', 'ShipService_v19.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  track(params, cb) {
    const resource = {
      version: {
        ServiceId: 'trck',
        Major: 12,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'track', 'TrackService_v12.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  smartpostclose(params, cb) {
    const resource = {
      version: {
        ServiceId: 'clos',
        Major: 4,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'smartPostClose', 'CloseService_v4.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  groundclose(params, cb) {
    const resource = {
      version: {
        ServiceId: 'clos',
        Major: 4,
        Intermediate: 0,
        Minor: 0,
      },
    };

    this._request(params, 'groundClose', 'CloseService_v4.wsdl', resource, (err, res) => {
      return cb(err, res);
    });
  }

  serviceOptions(service, cb) {
    if (!this.serviceTypes[service]) {
      return cb([{ error: 'service not found' }], null);
    }

    return cb(null, this.serviceTypes[service].options);
  }

  serviceDescription(service, cb) {
    if (!this.serviceTypes[service]) {
      return cb([{ error: 'service not found' }], null);
    }

    return cb(null, this.serviceTypes[service].description);
  }

  signatureOptionDescription(code, cb) {
    const serviceOption = _.find(this.SigningOptions.list, o => {
      return o.code === code;
    });

    if (!serviceOption) {
      return cb([{ error: 'signature option not found' }], null);
    }

    return cb(null, serviceOption.name);
  }

  _request(data, fn, wsdl, options, cb) {
    createClient(
      path.join(__dirname, 'wsdl', wsdl),
      {
        endpoint: `${this.endpoint}/web-services`,
      },
      (err, client) => {
        if (err) {
          return cb(err, null);
        }

        const params = this._generateAuthentication(data, options);

        return client[fn](params, (error, result) => {
          if (error) {
            try {
              return cb(error.root.Envelope.Body.Fault, null);
            } catch (e) {
              logger('error: %o', error);
              return cb(error, null);
            }
          }

          logger('%O', client.lastRequest);
          return cb(err, result);
        });
      },
    );
  }

  _generateAuthentication(data, options) {
    const params = {
      WebAuthenticationDetail: {
        UserCredential: {
          Key: this.key,
          Password: this.password,
        },
      },
      ClientDetail: {
        AccountNumber: this.account_number,
        MeterNumber: this.meter_number,
      },
    };

    if (options && options.version) {
      params.Version = {
        ServiceId: options.version.ServiceId,
        Major: options.version.Major,
        Intermediate: options.version.Intermediate,
        Minor: options.version.Minor,
      };
    }

    return _.extend(params, data);
  }
}
