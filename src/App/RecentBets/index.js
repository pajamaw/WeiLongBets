import React, { Component } from 'react';
import styled from 'styled-components';
import Bet from './Bet/';
import RaisedButton from 'material-ui/RaisedButton';

const BetsSection = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  background-color: #FFF;
  margin: 0 auto;
  text-align:center;
  max-height:100%;
`;

const ArrowL = styled.div`
  width: 20%;
  margin-top: 5%;
`;

const ArrowR = styled.div`
  width: 20%;
  margin-top: 5%;
`;

const Arrow = ({ onClickHandler, text, dis }) => (
  <RaisedButton label={text} disabled={dis} onClick={() => onClickHandler()} />
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

  componentWillReceiveProps(nextProps) {
    // in order to update the RecentBets list after a bet is updated
    if (this.props.bets !== nextProps.bets) {
      this.setState({
        currentBetIndex: nextProps.bets.length - 1,
      });
    }
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
