import React, { Component } from 'react';
import SimpleStorageContract from '../../../../../build/contracts/SimpleStorage.json';
import styled from 'styled-components';

const pArrowL = styled.p`
  text-align: left;
`;

const pArrowR = styled.p`
  text-align: right;
`;

class Bet extends Component {
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
      <a><pArrowL>ArrowLeft</pArrowL></a>
          <p> container for bet </p>
      <a><pArrowR>ArrowRight</pArrowR></a>

      </div>
    );
  }
}

export default Bet;
