import { test } from './test';
import { close } from './requests';

// test('Close ground shipment', 'it should close ground shipment', 'groundclose', close.ground);

test('Close smart shipment', 'it should smart ground shipment', 'smartpostclose', close.smart);
