import React, { Component } from 'react';
import styled from 'styled-components';

import Bet from './Bet/index.jsx';

const BetsSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
  text-align: center;
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
          <Bet />
        </BetsSection>
      </div>
    );
  }
}

export default RecentBets;
