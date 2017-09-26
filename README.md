# WeiLongBet

Purpose of this is to use the Truffle suite with React to create an interesting Solidity App that also integrates
Browser plugins like MetaMask or Mist that allow anyone to interact with Dapps (apps that utilize the ethereum blockchain as a backend of sorts)

## Roadmap

### Solidity

#### Contracts
  - Bet
    - Variables we'll need (check)
      * Description string?
      * Better addr
      * Challenger addr
      * StartDate UTc ? (i've heard that UTC dates are a bit tricky due to the fact that miners can alter them within the blocks...so might have to rethink this)
      * ExpirationDate Utc?
      * Active bool
      * WaitingForChallenger bool (3 days to wait for someone to begin)
      * AwaitingVerdict bool
      * Complete bool
      * ForfeitFor
      * ForfeitAgainst
      * escrow addr (not sure on this one)
      * of votes for mapping?
      * of votes against mapping?
    - Functions I'll need
      * Create Bet (IP)
        - With Description
        - with better addr
        - with sum to match
        - start and end dates
        - make active & waitingforchallenger
      * get bet
      * add Challenger
        - add payment
      * Forfeit
      * AddVotes
        - ensure that the challenger and better can't vote for themselves and that everyone can only vote once
      * EditBet/deletebet ? (maybe within the 3 days?)
      * Event to wait for expiration dates

#### React
  - Components
    - App (check)
      * Outer container
      * Will I need to be maintaining state if I just check immediately to see if they have a client?
    - Rotating Latest Bet Block (check)
    - list of Bets (check)
    - individual bet (chceck)
    - Sidebar that pops out to show all current bets(changed)

#### To integrate
 - Metamask
 - testing (check`)

#### Ideas that need to be hashed out a bit more....
  - Until there's a way to unconditionally verify if bets won or lost we'll have to rely upon anonymous votes from the public as well as the loser to see the battle and just decide to forfeit
