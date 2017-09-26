pragma solidity ^0.4.2;

contract WeiLongBets {

    struct Bet {
        string description;
        address creator;
        address challenger;
        uint startdate;
        uint exdate;
        bool active;
        bool waitingForChallenger;
        bool awaitingVerdict;
        bool complete;
        bool forfeitFor;
        bool forfeitAgainst;
        uint votesFor;
        uint votesAgainst;
    }

    address admin;
    mapping(address => Bet) bets;

    function WeiLongBets(){

    }

    function getBet(){

    }

    function addChallenger(){

    }

    function forfeit(){

    }

    function addVotes(){

    }

}
