import React, { Component } from 'react';
import styled from 'styled-components';
import Bet from './Bet/';

const BetsSection = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: grey;
  margin: 0 auto;
  text-align:center;
`;

const ArrowL = styled.div`
  width: 20%;
  background-color: blue;
`;

const ArrowR = styled.div`
  width: 20%;
  background-color: blue;
`;

const Arrow = ({ onClickHandler, text, dis }) => (
  <button disabled={dis} onClick={() => onClickHandler()}>{text}</button>
);

class RecentBets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBetIndex: this.props.bets.length - 1,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    if (this.state.currentBetIndex !== this.props.bets.length - 1) {
      this.setState((prevState) => ({
        currentBetIndex: prevState.currentBetIndex + 1,
      }));
    }
  }

  decrement() {
    if (this.state.currentBetIndex !== 0) {
      this.setState((prevState) => ({
        currentBetIndex: prevState.currentBetIndex - 1,
      }));
    }
  }

  render() {
    let { bets } = this.props;
    let { currentBetIndex } = this.state;
    return (
      <div className="pure-u-1-1">
        <BetsSection>
          <ArrowL>
            <Arrow
              dis={this.state.currentBetIndex === 0}
              onClickHandler={this.decrement}
              text={String.fromCharCode(10508)}
            />
          </ArrowL>
          <Bet bet={bets[currentBetIndex]} />
          <ArrowR>
            <Arrow
              dis={this.state.currentBetIndex === this.props.bets.length - 1}
              onClickHandler={this.increment}
              text={String.fromCharCode(10509)}
            />
          </ArrowR>
        </BetsSection>
      </div>
    );
  }
}

export default RecentBets;
