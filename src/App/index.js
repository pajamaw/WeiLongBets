import React, { Component } from 'react';
import contract from 'truffle-contract';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';

import WeiLongBetsContract from '../../build/contracts/WeiLongBets.json';
import getWeb3 from '../utils/getWeb3';
import handShake from '../images/clipart-free-handshake-5.jpg';
import RecentBets from './RecentBets';
import BetList from './BetList';
import AddBet from './AddBet';
import '../css/pure-min.css';
import { P, Img, H1, H2, H3, Main, Nav, NavA } from './style.js';

import testBets from './testBets.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      pending: false,
      calling: false,
      numberOfBets: 0,
      allBets: ['item'],
      open: false,
      contractInstance: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBetCount = this.getBetCount.bind(this);
    this.collectBets = this.collectBets.bind(this);
  }
  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3.then(results => {
      console.log(results);
      this.setState({
        web3: results.web3,
      });
      // Instantiate contract once web3 provided.
       this.instantiateContract();
    }).catch((err) => {
      console.log(err);
      console.log('Error finding web3.');
    });
  }
  getBetCount(con) {
    con.getBetsCount.call().then((number) => {
      this.setState({
        numberOfBets: number,
      });
    });
  }
  collectBets(cont) {
    let i = 0;
    let arr = [];
    while (i < this.state.numberOfBets) {
      let contractObj = {};
      cont.getBet.call(i).then((contr) => {
        contractObj.Description = contr.descript;
        contractObj.creator = contr.creator;
        contractObj.challenger = contr.challenger;
        contractObj.price = contr.price;
        contractObj.startdate = contr.startdate;
        contractObj.exdate = contr.exdate;
        contractObj.activeBet = contr.activeBet;
        contractObj.awaitingVerdict = contr.awaitingVerdict;
        contractObj.comp = contr.comp;
        contractObj.forfeitFor = contr.forfeitFor;
        contractObj.forfeitAgainst = contr.forfeitAgainst;
        contractObj.votesFor = contr.votesFor;
        contractObj.votesAgainst = contr.votesAgainst;
        arr.push(contractObj);
      });
      i++;
    }
    this.setState({
      allBets: arr,
    });
  }
  instantiateContract() {
    return new Promise((res, rej) => {
      console.log(this.state);
      let weiLongBetsInstance;
      const weiLongBets = contract(WeiLongBetsContract);
      weiLongBets.setProvider(this.state.web3.currentProvider);
      // Declaring this for later so we can chain functions on SimpleStorage.
      // Get accounts.
      this.state.web3.eth.getAccounts((error, accounts) => {
        weiLongBets.deployed().then((instance) => {
          weiLongBetsInstance = instance;
          this.setState({
            contractInstance: instance,
          });
          console.log(instance);
          console.log('what', this.state.contractInstance);
          return weiLongBetsInstance;
        }).then((wei) => {
          this.getBetCount(wei);
          this.collectBets(wei);
          console.log(this.state);
        });
      });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    let betPropertiesFromForm = e.target.elements;
    let newBet = {
      Title: betPropertiesFromForm.title.value,
      Duration: betPropertiesFromForm.duration.value,
      Description: betPropertiesFromForm.description.value,
      Wager: betPropertiesFromForm.wager.value,
      Category: betPropertiesFromForm.category.value,
    };

    this.setState(prevState => ({
      allBets: [...prevState.allBets, newBet],
      open: false,
    }));
    e.target.reset();
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="App">
        <AppBar
          title="WeiLongBets"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Main>
          <button onClick={() => this.handleToggle()}>
            Add Bet
          </button>
          <div className="pure-u-1-1">
            <Img
              src={handShake}
              alt="OldtimeyHandshake"
            />
            <H1>Wei Long Bets</H1>
            <H3>/weɪ lɔŋ bets/</H3>
          </div>
          <div className="pure-u-1-1">
            <H2>Description</H2>
            <P>Down here well have a verification of the code linking with the source code</P>
          </div>
          <RecentBets bets={this.state.allBets} />
          <BetList bets={this.state.allBets} />
          <Drawer openSecondary={true} open={this.state.open}>
            <AddBet handleSubmit={this.handleSubmit} />
          </Drawer>
        </Main>
      </div>
    );
  }
}

export default App;
