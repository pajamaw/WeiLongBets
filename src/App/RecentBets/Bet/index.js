import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const titleStyle = {
  "fontWeight": "bold",
};

const containerStyle = {
  "margin": "2%",
}

class Bet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accordioned: false,
    };
  }
  render() {
    let Description;
    let Title;
    let { bet } = this.props;
    Description = bet ? bet.Description : null;
    Title = bet ? bet.Title : null;
    return (
      <Paper style={containerStyle} zDepth={3}>
        <Card>
          <CardHeader
            title={Title}
            subtitle=""
            actAsExpander={true}
            style={titleStyle}
            showExpandableButton={true}
          />
          <CardActions>
            <FlatButton style={titleStyle} label="Accept Bet" />
            <FlatButton style={titleStyle} label="Forfeit Bet" />
            <FlatButton style={titleStyle} label="Vote For" />
            <FlatButton style={titleStyle} label="Vote Against" />
            <FlatButton style={titleStyle} label="Accept Winnings" />
          </CardActions>
          <CardText expandable={true}>
            {Description}
          </CardText>
        </Card>
      </Paper>
    );
  }
}

export default Bet;
