import React from 'react';
import {render} from '@testing-library/react-native';

import {Dashboard} from './dashboard';

describe('dashboard', () => {
  it('has text "dashboard"', () => {
    const {getByText} = render(<Dashboard />);

    expect(getByText('Dashboard')).not.toBeNull();
  });
});
