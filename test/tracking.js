import { test } from './test';
import { trackingExpressGroundDelivered } from './requests';

test('Tracking shipment', 'it should GET tracking', 'track', trackingExpressGroundDelivered.get);
