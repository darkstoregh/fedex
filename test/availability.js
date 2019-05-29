import { test } from './test';
import { availability } from './requests';

test('Get availability', 'it should GET availability', 'availability', availability.get);
