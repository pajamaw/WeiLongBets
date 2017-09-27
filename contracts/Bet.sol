pragma solidity ^0.4.2;

contract Bet {
    bytes32 public descript;
    address public creator;
    address public challenger;
    uint public price;
    uint public startdate;
    uint public exdate;
    bool public activeBet = false;
    bool public waitingForChallenger = false;
    bool public awaitingVerdict = false;
    bool public comp = false;
    bool public forfeitFor = false;
    bool public forfeitAgainst = false;
    uint public votesFor = 0;
    uint public votesAgainst = 0;

    function Bet(bytes32 _description, address _creator, uint _price, uint _startdate, uint _exdate) public {
        descript = _description;
        creator = _creator;
        price = _price;
        startdate = _startdate;
        exdate = _exdate;
        activeBet = false;
        waitingForChallenger = true;
    }

    function addChallenger(address _sender) public returns(bool){
        challenger = _sender;
        activeBet = true;
        waitingForChallenger = false;
        return true;
    }
}
