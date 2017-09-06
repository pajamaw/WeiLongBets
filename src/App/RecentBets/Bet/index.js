import React, { Component } from 'react';

class Bet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accordioned: false,
    };
  }
  render() {
    let { bet } = this.props;
    let { Description } = bet;
    return (
      <div className="pure-u-1-1">
        <p>{Description}</p>
      </div>
    );
  }
}

export default Bet;
