import React from 'react';
import { shallow } from 'enzyme';
import RecentBets from '../../../App/RecentBets/index.jsx';
import Bet from '../../../App/RecentBets/Bet/index.jsx';
import testBets from '../../../App/testBets.js';

describe(RecentBets, () => {
  it('renders without crashing with props', () => {
    shallow(<RecentBets bets={testBets} />);
  });
  it('contains one child component', () => {
    const wrapper = shallow(<RecentBets bets={testBets} />);
    expect(wrapper.contains(<Bet />));
  });
});
