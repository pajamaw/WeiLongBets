pragma solidity ^0.4.2;
import "./Bet.sol";

contract WeiLongBets {
    uint numberOfBets = 0;

    address[] public bets;
    address admin;

    function WeiLongBets() public { admin = msg.sender;}
    // you can't return structs
    function getBetsCount() public constant returns(uint){
        return numberOfBets;
    }

    function createBet(bytes32 _description, uint _price, uint _startdate, uint _exdate) public returns(address) {
        address newBet = new Bet(_description, msg.sender, _price, _startdate, _exdate);
        numberOfBets++;
        bets.push(newBet);
        return newBet;
    }

    function getBet(uint i) public constant returns(bytes32 descript, address creator, address challenger, uint price, uint startdate, uint exdate, bool activeBet, bool awaitingVerdict, bool comp, bool forfeitFor, bool forfeitAgainst, uint votesFor, uint votesAgainst) {
        Bet betCon = Bet(bets[i]);
        return (betCon.descript(), betCon.creator(), betCon.challenger(), betCon.price(), betCon.startdate(), betCon.exdate(), betCon.activeBet(), betCon.awaitingVerdict(), betCon.comp(), betCon.forfeitFor(), betCon.forfeitAgainst(), betCon.votesFor(), betCon.votesAgainst());
    }

    function addBetChallenger(address _addr) public returns(bool){
        Bet(_addr).addChallenger(msg.sender);
        return true;
    }

}
