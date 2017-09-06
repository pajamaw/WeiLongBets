import React, { Component } from 'react';
import contract from 'truffle-contract';
import SimpleStorageContract from '../../build/contracts/SimpleStorage.json';
import getWeb3 from '../utils/getWeb3';

import handShake from '../images/clipart-free-handshake-5.jpg';
import RecentBets from './RecentBets/index.jsx';
import BetList from './BetList/index.jsx';
import AddBet from './AddBet/index.jsx';

import '../css/pure-min.css';
import { P, Img, H1, H2, H3, Main, Nav, NavA } from './style.jsx';

import testBets from './testBets.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storageValue: 1,
      web3: null,
      pending: false,
      calling: false,
      allBets: testBets,
    };
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
  instantiateContract() {
    console.log(this.state);
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */
    const simpleStorage = contract(SimpleStorageContract);
    let simpleStorageInstance;
    simpleStorage.setProvider(this.state.web3.currentProvider);
    // Declaring this for later so we can chain functions on SimpleStorage.
    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance;
        console.log(simpleStorageInstance);
        console.log(accounts);
        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(1, { from: accounts[0] });
      }).then((result) => {
        console.log(result);
        // Get the value from the contract to prove it worked.
        // get doesn't receive an argument
        return simpleStorageInstance.get.call();
      }).then((result) => (
        // Update state with the result.
        this.setState({ storageValue: result.c[0] })
      ));
    });
  }

  render() {
    return (
      <div className="App">
        <Nav>
          <NavA>Truffle Box</NavA>
        </Nav>

        <Main>
          <div className="pure-g">
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
              <P>Try changing the value stored on <strong>line 59</strong> of App.js.</P>
              <P>The stored value is: {this.state.storageValue} this
               value was retreived from the blockchain</P>
            </div>
            <RecentBets bets={this.state.allBets} />
            <BetList bets={this.state.allBets} />
            <AddBet />
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
