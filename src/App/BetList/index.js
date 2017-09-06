import React from 'react';
import Bet from '../RecentBets/Bet/';

const allBets = betCollection => betCollection.map((bet) => (
  <li><Bet bet={bet} /></li>
));

const BetList = ({ bets }) => (
  <div className="pure-u-1-1">
    <ul>
      {allBets(bets)}
    </ul>
  </div>
);

export default BetList;
