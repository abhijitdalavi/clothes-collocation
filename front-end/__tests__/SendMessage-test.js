/**
 * @format
 */

import 'react-native';
import React from 'react';
import SendMessage from '../src/js/SendMessage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<SendMessage />);
});