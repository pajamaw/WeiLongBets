import React, { Component } from 'react';
import contract from 'truffle-contract';
import SimpleStorageContract from '../../../build/contracts/SimpleStorage.json';
import getWeb3 from '../../utils/getWeb3';
// import './css/oswald.css'
// import './css/open-sans.css'
import '../../css/pure-min.css';
import { H1, H2, Main, Nav, NavA } from './style.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      storageValue: 1,
      web3: null,
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
        return simpleStorageInstance.set(6, { from: accounts[0] });
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
              <H1>Good to Go!</H1>
              <p>Your Truffle Box is installed and ready.</p>
              <H2>Smart Contract Example</H2>
              <p>If your contracts compiled and migrated successfully,
                below will show a stored value of 5 (by default).</p>
              <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
              <p>The stored value is: {this.state.storageValue}</p>
            </div>
          </div>
        </Main>
      </div>
    );
  }
}

export default App;
