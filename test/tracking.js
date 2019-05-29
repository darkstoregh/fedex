// eslint-disable-next-line import/no-extraneous-dependencies
import chai from 'chai';
import { test } from './test';
import {
  trackingExpressGroundArrivedAtFedex,
  trackingExpressGroundDelivered,
  trackingExpressGroundSentToFedex,
  trackingExpressGroundTendered,
  trackingExpressGroundArrivedAtSortFacility,
  trackingExpressGroundDepartedFedex,
  trackingExpressGroundOnVehicleForDelivery,
  trackingExpressGroundPickedUp,
} from './requests';

chai.should();

test(
  'Tracking shipment',
  'should GET tracking for delivered packages',
  'track',
  trackingExpressGroundDelivered.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property('Description', 'Delivered');
  },
);

test(
  'Tracking shipment',
  'should GET tracking for sent to fedex packages',
  'track',
  trackingExpressGroundSentToFedex.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property(
      'Description',
      'Shipment information sent to FedEx',
    );
  },
);

test(
  'Tracking shipment',
  'should GET tracking for tendered packages',
  'track',
  trackingExpressGroundTendered.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property('Description', 'At Pickup');
  },
);

test(
  'Tracking shipment',
  'should GET tracking for arrived at fedex packages',
  'track',
  trackingExpressGroundArrivedAtFedex.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property(
      'Description',
      'Arrived at FedEx location',
    );
  },
);

test(
  'Tracking shipment',
  'should GET tracking for arrived at sort facility packages',
  'track',
  trackingExpressGroundArrivedAtSortFacility.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXE');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property(
      'Description',
      'At destination sort facility',
    );
  },
);

test(
  'Tracking shipment',
  'should GET tracking for departed fedex packages',
  'track',
  trackingExpressGroundDepartedFedex.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property(
      'Description',
      'Departed FedEx location',
    );
  },
);

test(
  'Tracking shipment',
  'should GET tracking for on vehiclce for delivery fedex packages',
  'track',
  trackingExpressGroundOnVehicleForDelivery.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property(
      'Description',
      'On FedEx vehicle for delivery',
    );
  },
);

test(
  'Tracking shipment',
  'should GET tracking for on vehiclce for delivery fedex packages',
  'track',
  trackingExpressGroundPickedUp.get,
  res => {
    res.should.have.property('HighestSeverity', 'SUCCESS');
    res.should.have.property('CompletedTrackDetails');
    res.CompletedTrackDetails.should.be.a('Array');
    res.CompletedTrackDetails[0].should.have.property('HighestSeverity', 'SUCCESS');
    res.CompletedTrackDetails[0].should.have.property('TrackDetails');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('TrackingNumber');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('CarrierCode', 'FDXG');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('PackageCount', '1');
    res.CompletedTrackDetails[0].TrackDetails[0].should.have.property('StatusDetail');
    res.CompletedTrackDetails[0].TrackDetails[0].StatusDetail.should.have.property('Description', 'Picked up');
  },
);
