import chai from 'chai';
import { rates } from './requests';
import { test } from './test';

chai.should();

test('Get rates', 'should GET rates', 'rates', rates.get, res => {
  res.should.have.property('HighestSeverity', 'SUCCESS');
  res.should.have.property('RateReplyDetails');
  res.RateReplyDetails.should.be.a('Array');
  res.RateReplyDetails[0].RatedShipmentDetails.should.be.a('Array');
  res.RateReplyDetails[0].RatedShipmentDetails[0].ShipmentRateDetail.should.have.property('TotalNetCharge');
  res.RateReplyDetails[0].RatedShipmentDetails[0].ShipmentRateDetail.TotalNetCharge.should.have.property(
    'Amount',
    '179.55',
  );
});

// TODO: add rates tests for additional shipment types
