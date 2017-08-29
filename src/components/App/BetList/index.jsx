import React, { Component } from 'react';
import Bet from '../RecentBets/Bet/index.jsx';

class BetList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const allBets = this.props.bets.map((bet) => (
      <li><Bet bet={bet} /></li>
    ));
    return (
      <div className="pure-u-1-1">
        <ul>
          {allBets}
        </ul>
      </div>
    );
  }
}

export default BetList;
