import React, { Component } from 'react';

class Bet extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }
  componentWillMount() {
  }
  render() {
    let bet = this.props.bet;
    let { Description } = bet;
    return (
      <div className="pure-u-1-1">
        <p>{console.log(bet)}</p>
        <p>{Description}</p>

      </div>
    );
  }
}

export default Bet;
