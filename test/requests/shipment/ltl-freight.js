/* eslint-disable import/prefer-default-export */
const date = new Date();
export const create = {
  RequestedShipment: {
    ShipTimestamp: new Date(date.getTime() + 24 * 60 * 60 * 1000).toISOString(),
    DropoffType: 'REGULAR_PICKUP',
    ServiceType: 'FEDEX_FREIGHT_ECONOMY',
    PackagingType: 'YOUR_PACKAGING',
    Shipper: {
      AccountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
      Contact: {
        PersonName: 'JOE SHIPPER',
        CompanyName: 'WIDGETS INC',
        PhoneNumber: '8005551212',
      },
      Address: {
        StreetLines: ['1202 CHALET LN', 'DO NOT DELETE - TEST ACCOUNT'],
        City: 'HARRISON',
        StateOrProvinceCode: 'AR',
        PostalCode: '72601',
        CountryCode: 'US',
      },
    },
    Recipient: {
      Contact: {
        PersonName: 'JOE RECIPIENT',
        CompanyName: 'COMPANY',
        PhoneNumber: '8005551212',
      },
      Address: {
        StreetLines: ['123 MAIN STREET'],
        City: 'LOS ANGELES',
        StateOrProvinceCode: 'CA',
        PostalCode: '90028',
        CountryCode: 'US',
        Residential: 'false',
      },
    },
    ShippingChargesPayment: {
      PaymentType: 'RECIPIENT',
      Payor: {
        ResponsibleParty: {
          AccountNumber: process.env.FEDEX_ACCOUNT_NUMBER,
          Contact: {},
          Address: {
            CountryCode: 'US',
          },
        },
      },
    },
    // SpecialServicesRequested: null,
    FreightShipmentDetail: {
      FedExFreightAccountNumber: process.env.FEDEX_CUSTOMER_ACCOUNT_NUMBER,
      FedExFreightBillingContactAndAddress: {
        Contact: {
          PersonName: 'SHIPPER BOB',
          CompanyName: 'ACME WIDGETS',
          PhoneNumber: '8005551212',
        },
        Address: {
          StreetLines: ['1202 CHALET LN', 'DO NOT DELETE - TEST ACCOUNT'],
          City: 'HARRISON',
          StateOrProvinceCode: 'AR',
          PostalCode: '72601',
          CountryCode: 'US',
        },
      },
      Role: 'SHIPPER',
      CollectTermsType: 'STANDARD',
      DeclaredValuePerUnit: {
        Currency: 'USD',
        Amount: '1000.00',
      },
      DeclaredValueUnits: '2',
      TotalHandlingUnits: '2',
      PalletWeight: {
        Units: 'LB',
        Value: '500',
      },
      ShipmentDimensions: {
        Length: '60',
        Width: '15',
        Height: '15',
        Units: 'IN',
      },
      LineItems: [
        {
          FreightClass: 'CLASS_050',
          HandlingUnits: '2',
          Packaging: 'PALLET',
          Pieces: '1',
          PurchaseOrderNumber: '1',
          Description: 'TEST FREIGHT SHIPMENT',
          Weight: {
            Units: 'LB',
            Value: '500',
          },
          Dimensions: {
            Length: ['60'],
            Width: ['15'],
            Height: ['15'],
            Units: ['IN'],
          },
        },
      ],
    },
    LabelSpecification: {
      LabelFormatType: 'FEDEX_FREIGHT_STRAIGHT_BILL_OF_LADING',
      ImageType: 'PDF',
      LabelStockType: 'PAPER_LETTER',
    },
    RateRequestTypes: 'ACCOUNT',
    PackageCount: '1',
    RequestedPackageLineItems: {
      SequenceNumber: '1',
      GroupNumber: '1',
      GroupPackageCount: '1',
      InsuredValue: {
        Currency: 'USD',
        Amount: '2000.00',
      },
      Weight: {
        Units: 'LB',
        Value: '500',
      },
      Dimensions: {
        Length: '60',
        Width: '15',
        Height: '15',
        Units: 'IN',
      },
      PhysicalPackaging: 'PALLET',
    },
  },
};
