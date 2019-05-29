import chai from 'chai';
import FedExAPI from '../src';
import {
  shipmentDelete,
  shipmentWithCOD,
  shipmentLTLFreight,
  shipmentMultiPackage,
  shipmentStandard,
} from './requests';
import handleError from './requests/handleError';
import { test } from './test';

chai.should();

describe('Create shipment', () => {
  const fedex = new FedExAPI({
    environment: process.env.FEDEX_ENV,
    debug: true,
    key: process.env.FEDEX_KEY,
    password: process.env.FEDEX_PASSWORD,
    account_number: process.env.FEDEX_ACCOUNT_NUMBER,
    meter_number: process.env.FEDEX_METER_NUMBER,
  });

  it('should POST an LTL shipment', done => {
    fedex.ship(shipmentLTLFreight.create, (err, res) => {
      if (err) return done(err);
      if (handleError(done, res)) return false;

      res.should.be.a('object');

      res.should.have.property('HighestSeverity', 'SUCCESS');
      res.should.have.property('CompletedShipmentDetail');
      res.CompletedShipmentDetail.should.have.property('UsDomestic', true);
      res.CompletedShipmentDetail.should.have.property('CarrierCode', 'FXFR');
      res.CompletedShipmentDetail.should.have.property('MasterTrackingId');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingIdType', 'FREIGHT');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingNumber');
      res.CompletedShipmentDetail.should.have.property('ShipmentDocuments');
      res.CompletedShipmentDetail.ShipmentDocuments.should.have.property('length', 1);
      res.CompletedShipmentDetail.ShipmentDocuments[0].should.have.property('Parts');
      res.CompletedShipmentDetail.ShipmentDocuments[0].Parts.should.have.property('length', 1);
      res.CompletedShipmentDetail.ShipmentDocuments[0].Parts[0].should.have.property('DocumentPartSequenceNumber', '1');
      res.CompletedShipmentDetail.ShipmentDocuments[0].Parts[0].should.have.property('Image');

      return done(err);
    });
  });
  it('should POST a multi-package shipment', done => {
    fedex.ship(shipmentMultiPackage.create, (err, res) => {
      if (err) return done(err);
      if (handleError(done, res)) return false;

      res.should.be.a('object');

      res.should.have.property('HighestSeverity', 'SUCCESS');
      res.should.have.property('CompletedShipmentDetail');
      res.CompletedShipmentDetail.should.have.property('UsDomestic', true);
      res.CompletedShipmentDetail.should.have.property('CarrierCode', 'FDXG');
      res.CompletedShipmentDetail.should.have.property('MasterTrackingId');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingIdType', 'FEDEX');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingNumber');

      res.CompletedShipmentDetail.should.have.property('CompletedPackageDetails');
      res.CompletedShipmentDetail.CompletedPackageDetails[0].should.have.property('Label');
      res.CompletedShipmentDetail.CompletedPackageDetails[0].Label.should.have.property('Type', 'OUTBOUND_LABEL');
      res.CompletedShipmentDetail.CompletedPackageDetails[0].Label.should.have.property('ImageType', 'PDF');
      res.CompletedShipmentDetail.CompletedPackageDetails[0].Label.should.have.property('Parts');
      res.CompletedShipmentDetail.CompletedPackageDetails[0].Label.Parts[0].should.have.property('Image');
      res.CompletedShipmentDetail.CompletedPackageDetails[0].Label.Parts[0].Image.should.be.a('string');

      return done(err);
    });
  });
  it('should POST an standard shipment', done => {
    fedex.ship(shipmentStandard.create, (err, res) => {
      if (err) return done(err);
      if (handleError(done, res)) return false;

      res.should.be.a('object');

      res.should.have.property('HighestSeverity', 'SUCCESS');
      res.should.have.property('CompletedShipmentDetail');
      res.CompletedShipmentDetail.should.have.property('UsDomestic', true);
      res.CompletedShipmentDetail.should.have.property('CarrierCode', 'FDXG');
      res.CompletedShipmentDetail.should.have.property('MasterTrackingId');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingIdType', 'FEDEX');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingNumber');
      res.CompletedShipmentDetail.should.have.property('ShipmentRating');
      res.CompletedShipmentDetail.ShipmentRating.should.have.property('ShipmentRateDetails');
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails.should.have.property('length', 1);
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails[0].should.have.property('TotalNetCharge');
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails[0].TotalNetCharge.should.have.property(
        'Currency',
        'USD',
      );
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails[0].TotalNetCharge.should.have.property(
        'Amount',
        '17.78',
      );

      return done(err);
    });
  });
  it('should POST a standard shipment with COD', done => {
    fedex.ship(shipmentWithCOD.create, (err, res) => {
      if (err) return done(err);
      if (handleError(done, res)) return false;

      res.should.be.a('object');

      res.should.have.property('HighestSeverity', 'SUCCESS');
      res.should.have.property('CompletedShipmentDetail');
      res.CompletedShipmentDetail.should.have.property('UsDomestic', true);
      res.CompletedShipmentDetail.should.have.property('CarrierCode', 'FDXG');
      res.CompletedShipmentDetail.should.have.property('MasterTrackingId');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingIdType', 'FEDEX');
      res.CompletedShipmentDetail.MasterTrackingId.should.have.property('TrackingNumber');
      res.CompletedShipmentDetail.should.have.property('ShipmentRating');
      res.CompletedShipmentDetail.ShipmentRating.should.have.property('ShipmentRateDetails');
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails.should.have.property('length', 1);
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails[0].should.have.property('TotalNetCharge');
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails[0].TotalNetCharge.should.have.property(
        'Currency',
        'USD',
      );
      res.CompletedShipmentDetail.ShipmentRating.ShipmentRateDetails[0].TotalNetCharge.should.have.property(
        'Amount',
        '153.92',
      );

      return done(err);
    });
  });
});

test('Delete shipment', 'it should DELETE shipment', 'deleteshipment', shipmentDelete.deleteShipment);
