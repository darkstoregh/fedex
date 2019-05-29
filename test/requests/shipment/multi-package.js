/* eslint-disable import/prefer-default-export */
const date = new Date();
export const create = {
  RequestedShipment: {
    ShipTimestamp: new Date(date.getTime() + 24 * 60 * 60 * 1000).toISOString(),
    DropoffType: 'REGULAR_PICKUP',
    ServiceType: 'FEDEX_GROUND',
    PackagingType: 'YOUR_PACKAGING',
    Shipper: {
      Contact: {
        PersonName: 'Sender Name',
        CompanyName: 'WIDGETS INC',
        PhoneNumber: '8005551212',
      },
      Address: {
        StreetLines: ['123 DO NOT SHIP LANE'],
        City: 'COLLIERVILLE',
        StateOrProvinceCode: 'TN',
        PostalCode: '38017',
        CountryCode: 'US',
        Residential: 'false',
      },
    },
    Recipient: {
      Contact: {
        CompanyName: 'WIDGET STORE',
        PhoneNumber: '8005551212',
      },
      Address: {
        StreetLines: ['123 DO NOT SHIP LANE'],
        City: 'CINCINNATI',
        StateOrProvinceCode: 'OH',
        PostalCode: '45219',
        CountryCode: 'US',
      },
    },
    ShippingChargesPayment: {
      PaymentType: 'SENDER',
      Payor: {
        ResponsibleParty: {
          AccountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
        },
      },
    },
    LabelSpecification: {
      LabelFormatType: 'COMMON2D',
      ImageType: 'PDF',
      LabelStockType: 'PAPER_4X6',
    },
    RateRequestTypes: 'ACCOUNT',
    PackageCount: '3',
    RequestedPackageLineItems: {
      SequenceNumber: '1',
      InsuredValue: {
        Currency: 'USD',
        Amount: '100.00',
      },
      Weight: {
        Units: 'LB',
        Value: '10.00',
      },
      Dimensions: {
        Length: '15',
        Width: '10',
        Height: '10',
        Units: 'IN',
      },
      ItemDescription: 'BOX OF WIDGETS',
    },
  },
};
