import React from 'react';
import { shallow } from 'enzyme';
import Bet from '../../../../App/RecentBets/Bet/index.jsx';
import testBets from '../../../../App/testBets.js';

describe(Bet, () => {
  it('renders without crashing with props', () => {
    shallow(<Bet bet={testBets[0]} />);
  });
});
