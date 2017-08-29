import React, { Component } from 'react';
import styled from 'styled-components';

import Bet from './Bet/index.jsx';

const BetsSection = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: grey;
  margin: 0 auto;
  text-align:center;
`;

const pArrowL = styled.div`
  width: 20%;
  display:inline;
  background-color: blue;
`;

const pArrowR = styled.div`
  width: 20%;
  text-align: right;
  background-color: blue;
`;

class RecentBets extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentWillMount() {
  }

  render() {
    return (
      <div className="pure-u-1-1">
        <BetsSection>
          <pArrowL><p>Left Arrow</p></pArrowL>
          <Bet bet={this.props.bets[this.props.bets.length-1]}/>
          <pArrowR><p>Right Arrow</p></pArrowR>
        </BetsSection>
      </div>
    );
  }
}

export default RecentBets;
