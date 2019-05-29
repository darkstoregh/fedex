import chai from 'chai';
import FedExAPI from '../src';
import { rates } from './requests';

chai.should();

describe('Get rates', () => {
  const fedex = new FedExAPI({
    environment: process.env.FEDEX_ENV,
    debug: true,
    key: process.env.FEDEX_KEY,
    password: process.env.FEDEX_PASSWORD,
    account_number: process.env.FEDEX_ACCOUNT_NUMBER,
    meter_number: process.env.FEDEX_METER_NUMBER,
  });
  it('should GET rates', done => {
    /* expected return object shape:

      { HighestSeverity: 'SUCCESS',
        Notifications:
        [ { Severity: 'SUCCESS',
            Source: 'crs',
            Code: '0',
            Message: 'Request was successfully processed.',
            LocalizedMessage: 'Request was successfully processed.' } ],
        Version: { ServiceId: 'crs', Major: 20, Intermediate: 0, Minor: 0 },
        RateReplyDetails:
        [ { ServiceType: 'FEDEX_GROUND',
            PackagingType: 'YOUR_PACKAGING',
            CommitDetails: [Array],
            DestinationAirportId: 'YVR',
            IneligibleForMoneyBackGuarantee: false,
            TransitTime: 'ONE_DAY',
            SignatureOption: 'SERVICE_DEFAULT',
            ActualRateType: 'PAYOR_ACCOUNT_PACKAGE',
            RatedShipmentDetails: [Array] } ] }

    */
    fedex.rates(rates.get, (err, res) => {
      if (err) return done(err);

      res.should.be.a('object');
      res.should.have.property('HighestSeverity', 'SUCCESS');
      res.should.have.property('RateReplyDetails');
      res.RateReplyDetails.should.be.a('Array');

      // console.log(res.RateReplyDetails[0]);
      // console.log(res.RateReplyDetails[0].RatedShipmentDetails[0]);

      return done(err);
    });
  });
});
