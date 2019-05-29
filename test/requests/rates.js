/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/prefer-default-export
export const get = {
  ReturnTransitAndCommit: true,
  RequestedShipment: {
    DropoffType: 'REGULAR_PICKUP',
    ServiceType: 'FEDEX_GROUND',
    PackagingType: 'YOUR_PACKAGING',
    Shipper: {
      Contact: {
        PersonName: 'Mr. Test',
        CompanyName: 'Widgets Inc.',
        PhoneNumber: '9015551212',
      },
      Address: {
        StreetLines: ['1234 DO NOT SHIP LANE'],
        City: 'COLLIERVILLE',
        StateOrProvinceCode: 'TN',
        PostalCode: '38017',
        CountryCode: 'US',
      },
    },
    Recipient: {
      Contact: {
        PersonName: 'RECIPIENT',
        CompanyName: 'RECIPIENT',
        PhoneNumber: '9015551212',
      },
      Address: {
        StreetLines: '1234 DO NOT SHIP LANE',
        City: 'LOS ANGELES',
        StateOrProvinceCode: 'CA',
        PostalCode: '90028',
        CountryCode: 'US',
        Residential: false,
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
    PackageCount: '1',
    RequestedPackageLineItems: {
      SequenceNumber: 1,
      GroupPackageCount: 1,
      Weight: {
        Units: 'LB',
        Value: '50.0',
      },
      Dimensions: {
        Length: 108,
        Width: 5,
        Height: 5,
        Units: 'IN',
      },
      SpecialServicesRequested: [
        {
          SpecialServiceTypes: 'COD',
          CodDetail: {
            CodCollectionAmount: {
              Currency: 'USD',
              Amount: 1,
            },
            AddTransportationChargesDetail: {
              RateTypeBasis: 'ACCOUNT',
              ChargeBasis: 'COD_SURCHARGE',
              ChargeBasisLevel: 'CURRENT_PACKAGE',
            },
            CollectionType: 'ANY',
          },
          SignatureOptionDetail: {
            OptionType: 'ADULT',
          },
        },
      ],
    },
  },
};
