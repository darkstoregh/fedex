/* eslint-disable import/prefer-default-export */
export const deleteShipment = {
  TrackingId: {
    TrackingIdType: 'GROUND', // EXPRESS || FEDEX || GROUND || USPS
    TrackingNumber: '123456789012',
  },
  DeletionControl: 'DELETE_ALL_PACKAGES', // or DELETE_ONE_PACKAGE or LEGACY
};
