"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _lodash = _interopRequireDefault(require("lodash"));

var _soap = require("soap");

var _debug = _interopRequireDefault(require("debug"));

var _serviceTypes = require("./serviceTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var log = (0, _debug["default"])('fedex');
log.request = (0, _debug["default"])('fedex:request');
log.response = (0, _debug["default"])('fedex:response');

var FedExAPI =
/*#__PURE__*/
function () {
  function FedExAPI(_ref) {
    var account_number = _ref.account_number,
        environment = _ref.environment,
        meter_number = _ref.meter_number,
        key = _ref.key,
        password = _ref.password,
        isProduction = _ref.isProduction;

    _classCallCheck(this, FedExAPI);

    this.account_number = account_number;
    this.endpoint = environment === 'production' ? 'https://ws.fedex.com' : 'https://wsbeta.fedex.com';
    this.environment = environment === 'production';
    this.isProduction = isProduction;
    this.key = key;
    this.meter_number = meter_number;
    this.password = password;
    this.serviceTypes = _serviceTypes.serviceTypes;
    this.SigningOptions = _serviceTypes.SO;
  }

  _createClass(FedExAPI, [{
    key: "addressvalidation",
    value: function addressvalidation(params, cb) {
      var resource = {
        version: {
          ServiceId: 'aval',
          Major: 4,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'addressValidation', 'AddressValidationService_v4.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "availability",
    value: function availability(params, cb) {
      var resource = {
        version: {
          ServiceId: 'vacs',
          Major: 6,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'serviceAvailability', 'ValidationAvailabilityAndCommitmentService_v6.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "cancelPickup",
    value: function cancelPickup(params, cb) {
      var resource = {
        version: {
          ServiceId: 'disp',
          Major: 13,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'cancelPickup', 'PickupService_v13.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "pickup",
    value: function pickup(params, cb) {
      var resource = {
        version: {
          ServiceId: 'disp',
          Major: 13,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'createPickup', 'PickupService_v13.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "pickupAvailability",
    value: function pickupAvailability(params, cb) {
      var resource = {
        version: {
          ServiceId: 'disp',
          Major: 13,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'getPickupAvailability', 'PickupService_v13.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "rates",
    value: function rates(params, cb) {
      var resource = {
        version: {
          ServiceId: 'crs',
          Major: 20,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'getRates', 'RateService_v20.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "freight_rates",
    value: function freight_rates(params, cb) {
      var resource = {
        version: {
          ServiceId: 'crs',
          Major: 20,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'getRates', 'RateService_v20.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "ship",
    value: function ship(params, cb) {
      var resource = {
        version: {
          ServiceId: 'ship',
          Major: 19,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'processShipment', 'ShipService_v19.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "deleteshipment",
    value: function deleteshipment(params, cb) {
      var resource = {
        version: {
          ServiceId: 'ship',
          Major: 19,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'deleteShipment', 'ShipService_v19.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "track",
    value: function track(params, cb) {
      var resource = {
        version: {
          ServiceId: 'trck',
          Major: 12,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'track', 'TrackService_v12.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "smartpostclose",
    value: function smartpostclose(params, cb) {
      var resource = {
        version: {
          ServiceId: 'clos',
          Major: 4,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'smartPostClose', 'CloseService_v4.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "groundclose",
    value: function groundclose(params, cb) {
      var resource = {
        version: {
          ServiceId: 'clos',
          Major: 4,
          Intermediate: 0,
          Minor: 0
        }
      };

      this._request(params, 'groundClose', 'CloseService_v4.wsdl', resource, function (err, res) {
        return cb(err, res);
      });
    }
  }, {
    key: "serviceOptions",
    value: function serviceOptions(service, cb) {
      if (!this.serviceTypes[service]) {
        return cb([{
          error: 'service not found'
        }], null);
      }

      return cb(null, this.serviceTypes[service].options);
    }
  }, {
    key: "serviceDescription",
    value: function serviceDescription(service, cb) {
      if (!this.serviceTypes[service]) {
        return cb([{
          error: 'service not found'
        }], null);
      }

      return cb(null, this.serviceTypes[service].description);
    }
  }, {
    key: "signatureOptionDescription",
    value: function signatureOptionDescription(code, cb) {
      var serviceOption = _lodash["default"].find(this.SigningOptions.list, function (o) {
        return o.code === code;
      });

      if (!serviceOption) {
        return cb([{
          error: 'signature option not found'
        }], null);
      }

      return cb(null, serviceOption.name);
    }
  }, {
    key: "_request",
    value: function _request(data, fn, wsdl, options, cb) {
      var _this = this;

      (0, _soap.createClient)(_path["default"].join(__dirname, 'wsdl', wsdl), {
        endpoint: "".concat(this.endpoint, "/web-services")
      }, function (err, client) {
        if (err) {
          return cb(err, null);
        }

        var params = _this._generateAuthentication(data, options);

        return client[fn](params, function (error, result) {
          if (error) {
            try {
              return cb(error.root.Envelope.Body.Fault, null);
            } catch (e) {
              log('error: %o', error);
              return cb(error, null);
            }
          }

          log('%O', client.lastRequest);
          return cb(err, result);
        });
      });
    }
  }, {
    key: "_generateAuthentication",
    value: function _generateAuthentication(data, options) {
      var params = {
        WebAuthenticationDetail: {
          UserCredential: {
            Key: this.key,
            Password: this.password
          }
        },
        ClientDetail: {
          AccountNumber: this.account_number,
          MeterNumber: this.meter_number
        }
      };

      if (options && options.version) {
        params.Version = {
          ServiceId: options.version.ServiceId,
          Major: options.version.Major,
          Intermediate: options.version.Intermediate,
          Minor: options.version.Minor
        };
      }

      return _lodash["default"].extend(params, data);
    }
  }]);

  return FedExAPI;
}();

exports["default"] = FedExAPI;
//# sourceMappingURL=index.js.map