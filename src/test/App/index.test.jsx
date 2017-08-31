import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App/index.jsx';

it('renders without crashing', () => {
  shallow(<App />);
});
