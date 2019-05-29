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
    SpecialServicesRequested: {
      SpecialServiceTypes: 'EVENT_NOTIFICATION',
      EventNotificationDetail: {
        AggregationType: 'PER_SHIPMENT',
        PersonalMessage: 'personal message',
        EventNotifications: {
          Role: 'SHIPPER',
          Events: 'ON_SHIPMENT',
          NotificationDetail: {
            NotificationType: 'EMAIL',
            EmailDetail: {
              EmailAddress: 'vincent.tellier@machool.com',
              Name: 'Vincent Tellier',
            },
            Localization: {
              LanguageCode: 'en',
              // LocaleCode: 'US'
            },
          },
          FormatSpecification: {
            Type: 'HTML',
          },
        },
      },
    },
    LabelSpecification: {
      LabelFormatType: 'COMMON2D',
      ImageType: 'PDF',
      LabelStockType: 'PAPER_LETTER',
      LabelPrintingOrientation: 'BOTTOM_EDGE_OF_TEXT_FIRST',
    },
    RateRequestTypes: 'ACCOUNT',
    PackageCount: '1',
    RequestedPackageLineItems: {
      SequenceNumber: '1',
      Weight: {
        Units: 'LB',
        Value: '11.0',
      },
    },
  },
};
