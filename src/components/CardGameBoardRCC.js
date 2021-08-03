import React, { Component } from "react";
import { createDeckAndDraw } from "./api";
import Confetti from 'react-confetti'

let i = 0;
export default class CardGameBoardRCC extends Component {
  state = {
    currentCard1: [],
    currentCard2: [],
    deckId: null,
    cards: [],
    cards2: [],
    discardPile1: [],
    discardPile2: [],
	player1CardsRemaining: '',
	player2CardsRemaining: '',
	player1Score: 0,
	player2Score: 0,
	playerHasWon: false,

    // viewCards: false,

  };
  async componentDidMount() {
    const { cards, cards2, deckId } = await createDeckAndDraw();
    this.setState({
      deckId,
      cards: cards,
      cards2: cards2,
      currentCard1: cards[0],
      currentCard2: cards2[0],
	  player1CardsRemaining: cards.length,
	  player2CardsRemaining: cards2.length
    });
  }

  compareCardValues = (player1Card, player2Card) => {

    const cardValues = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "JACK",
      "QUEEN",
      "KING",
      "ACE",
      "JOKER",
    ];


    const player1CardValueIndex = cardValues.indexOf(player1Card.value);


    const player2CardValueIndex = cardValues.indexOf(player2Card.value);


    // logic for comparing values and pushing winner cards into discardpile.
    if (player1CardValueIndex > player2CardValueIndex) {
      this.state.discardPile1.push(player1Card, player2Card);
	  this.setState({
		  player1CardsRemaining: this.state.cards.length 
	  })
	  this.setState({
		player2CardsRemaining: this.state.cards2.length 
	})
      this.state.cards.splice(0, 1);
      this.state.cards2.splice(0, 1);


    } else if (player2CardValueIndex > player1CardValueIndex) {
      this.state.discardPile2.push(player2Card, player1Card);

	  this.setState({
		player2CardsRemaining: this.state.cards2.length 
	})
	this.setState({
		player1CardsRemaining: this.state.cards.length 
	})
      this.state.cards2.splice(0, 1);
      this.state.cards.splice(0, 1);

    }
    console.log(this.state.discardPile1, this.state.discardPile2);
    console.log(this.state.cards, this.state.cards2)



    // Tie cards
    if (player1CardValueIndex === player2CardValueIndex) {
      this.state.discardPile1.push(player1Card);
      this.state.cards.splice(0, 1);

      this.state.discardPile2.push(player2Card);
      this.state.cards2.splice(0, 1);

    }

    // reshuffle

	if (this.state.cards2.length <= 1 ){

	this.state.cards = [...this.state.discardPile1]
	this.setState({
		discardPile1: []
	})
	this.state.cards2 = [...this.state.discardPile2]
	this.setState({
		discardPile2: []
	})
}
else if (this.state.cards.length <= 1) {
	this.state.cards = [...this.state.discardPile1]
	this.setState({
		discardPile1: []
	})
	this.state.cards2 = [...this.state.discardPile2]
	this.setState({
		discardPile2: []
	})

}

  };

// winnerLogic = () => {
// 	if()
// }


  drawCard = () => {


    // this.setState({ viewCards: true });
    this.compareCardValues(this.state.cards[i], this.state.cards2[i]);
    this.setState({ currentCard1: this.state.cards[i], currentCard2: this.state.cards2[i] })


    // console.log(i)

    // this.compareCardValues(this.state.cards[i], this.state.cards2[i]);
    // this.setState({ currentCard1: this.state.cards[i], currentCard2: this.state.cards2[i] })


    // console.log(i)
    
	if (this.state.player2CardsRemaining >= 28){
		alert('Player 2 has won')
		this.setState({
			player2Score: this.state.player2Score + 1,
			playerHasWon: true

		})

	}
	else if (this.state.player1CardsRemaining >= 28){
		alert('Player 1 has won')
		this.setState({
			player1Score: this.state.player1Score + 1,
			playerHasWon: true
		})
	}

	else if (this.state.player1Score == 3){
		alert('Game over, player 1 won the game')
		window.location.reload();
	}

	else if(this.state.player2Score == 3){
		alert('Game over, player 2 won the game')
		window.location.reload();
	}
  };



async newCards() {
	const { cards, cards2, deckId } = await createDeckAndDraw();
    this.setState({
      deckId: deckId,
      cards: cards,
      cards2: cards2,
      currentCard1: cards[0],
      currentCard2: cards2[0],
	  player1CardsRemaining: cards.length,
	  player2CardsRemaining: cards2.length,
	  discardPile2: [],
	  discardPile1: [],
	  playerHasWon: false
    });
}

  render() {
    return (
      <div>
        {/* {this.state.viewCards ? <img src={this.state.currentCard1.image} alt="your card" /> : null}
        {this.state.viewCards ? <img src={this.state.currentCard2.image} alt="your card" /> : null} */}
		<center>
		<h3 className="scores-board">ScoreBoard</h3>
			<p className="scores">
				P1  <b>{this.state.player1Score}</b> : <b>{this.state.player2Score}</b>   P2
			</p>
		<div className="card-container">
		<div>
		<h6 className="card1-label">Player 1 Card Remaining: {this.state.player1CardsRemaining}</h6>
		<img className="back-card" src="https://opengameart.org/sites/default/files/card%20back%20red.png" alt="back-card" />
		<p className="card-label">Discard Pile Remaining: {this.state.discardPile1.length}</p>
		</div>

        <img className="card1" src={this.state.currentCard1.image} alt="your card" />
        <img className="card2" src={this.state.currentCard2.image} alt="your card" />
		<div>
		<h6 className="card2-label">Player 2 Card Remaining: {this.state.player2CardsRemaining}</h6>
		<img className="back-card" src="https://opengameart.org/sites/default/files/card%20back%20red.png" alt="back-card" />
		<p className="card-label">Discard Pile Remaining: {this.state.discardPile2.length}</p>
		</div>

		</div>
		</center>
		<center>
		{this.state.playerHasWon ? <button className="draw-btn" onClick={() => this.newCards()}>Continue Playing</button> : null}
		{this.state.playerHasWon ? <Confetti></Confetti> : null}
		
        <button className="draw-btn" onClick={this.drawCard}>Draw Card</button>
		<p className="game-footer"> Whichever player reaches more than 27 cards first will win the round</p>
		</center>
      </div>
    );
  }
}