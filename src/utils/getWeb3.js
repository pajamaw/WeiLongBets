import Web3 from 'web3';

const getWeb3 = new Promise((resolve) => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', () => {
    let results;
    let web3;
    // var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)

    // so can't use the test net with meta mask so disable it
    // or at least just prevent this from happening in order to use the testrpc net
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider);

      results = {
        web3,
      };

      console.log('Injected web3 detected.');

      resolve(results);
      console.log(results);
    } else {
    // Fallback to localhost if no web3 injection.
      let provider = new Web3.providers.HttpProvider('http://localhost:8545');
      web3 = new Web3(provider);

      results = {
        web3,
      };

      console.log('No web3 instance injected, using Local web3.');
      resolve(results);
    }
  });
});

export default getWeb3;
