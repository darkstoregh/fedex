import { test } from './test';
import { address } from './requests';

test('Get address validation', 'it should GET address validation', 'addressvalidation', address.get);
