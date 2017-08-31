import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App/index.jsx';
import RecentBets from '../../App/RecentBets/index.jsx';
import BetList from '../../App/BetList/index.jsx';

describe(App, () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('contains two child components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<RecentBets />));
    expect(wrapper.contains(<BetList />));
  });
});
