import React from 'react';
import { shallow } from 'enzyme';
import BetList from '../../../App/BetList/index.jsx';
import Bet from '../../../App/RecentBets/Bet/index.jsx';
import testBets from '../../../App/testBets.js';

describe(BetList, () => {
  it('renders without crashing with props', () => {
    shallow(<BetList bets={testBets} />);
  });
  it('contains one child component', () => {
    const wrapper = shallow(<BetList bets={testBets} />);
    expect(wrapper.contains(<Bet />));
  });
});
