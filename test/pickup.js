import { test } from './test';
import { pickup } from './requests';

test('Get pickup availability', 'it should close ground shipment', 'pickupAvailability', pickup.availability);

// TODO: fix below tests

// test('Create pickup', 'it should POST pickup', 'pickup', pickup.create);

// test('Delete pickup', 'it should DELETE pickup', 'cancelPickup', pickup.deletePickup);
