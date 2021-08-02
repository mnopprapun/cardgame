<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component } from 'react'
import { createDeckAndDraw } from './api';
import Cards from './Cards'

let i = 0;
export default class CardGameBoardRCC extends Component {

	state = {
		currentCard1: {},
		currentCard2: {},
		viewCards: false,
		player1Score: 0,
		player2Score: 0
	}






	drawCard = () => {
		if (i === 0) {

			this.setState({ viewCards: true });
			this.compareCardValues(this.props.player1Cards[i], this.props.player2Cards[i]);
			this.setState({ currentCard1: this.props.player1Cards[i], currentCard2: this.props.player2Cards[i] })

			i++
			// console.log(i)

		} else if (i < this.props.player1Cards.length) {
			this.compareCardValues(this.props.player1Cards[i], this.props.player2Cards[i]);
			this.setState({ currentCard1: this.props.player1Cards[i], currentCard2: this.props.player2Cards[i] })


			i++
			// console.log(i)

		}
		else
			console.log('out of cards')



	}





	compareCardValues = (player1Card, player2Card) => {
		let player1Score = this.state.player1Score;
		let player2Score = this.state.player2Score;
		const cardValues = [
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'JACK',
			'QUEEN',
			'KING',
			'ACE',
			'JOKER'
		];
=======
import React, { Component } from "react";
import { createDeckAndDraw } from "./api";

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
	player2CardsRemaining: ''

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

>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0

    } else if (player2CardValueIndex > player1CardValueIndex) {
      this.state.discardPile2.push(player2Card, player1Card);

<<<<<<< HEAD
<<<<<<< HEAD
		// const previousCardValueIndex = cardValues.indexOf(previousCardValue);
		const player1CardValueIndex = cardValues.indexOf(player1Card.value);


		const player2CardValueIndex = cardValues.indexOf(player2Card.value);
=======
      this.state.cards2.splice(0, 1);
      this.state.cards.splice(0, 1);
=======
>>>>>>> 664b80265d9afd141c28a8c699b6a593f1b7ae69
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
>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0



<<<<<<< HEAD
		if (player1CardValueIndex > player2CardValueIndex) {
			// return 'you win';
			console.log('you win')
			this.setState({ player1Score: player1Score + 1 })
		}
		if (player1CardValueIndex < player2CardValueIndex) {
			// return 'you lose';
			console.log('you lose')
			this.setState({ player2Score: player2Score + 1 })
=======
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
>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0

    // this.compareCardValues(this.state.cards[i], this.state.cards2[i]);
    // this.setState({ currentCard1: this.state.cards[i], currentCard2: this.state.cards2[i] })

		}

<<<<<<< HEAD
		if (player1CardValueIndex == player2CardValueIndex) {
			// return 'tie';
			console.log('tie')
=======
    // console.log(i)
<<<<<<< HEAD
    if (this.state.cards.length == 1 || this.state.cards2.length == 1) {
      console.log('out of cards')
    }
>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0


  };

<<<<<<< HEAD
		}




	}


	render() {
		return (
			<div>
				<Cards />
				{this.state.viewCards ? <img src={this.state.currentCard1.image} alt="your card" /> : null}
				{this.state.viewCards ? <img src={this.state.currentCard2.image} alt="your card" /> : null}



				<button onClick={this.drawCard}>draw</button>

			</div>
		)
	}
}




=======
import React, { Component } from "react";
import { createDeckAndDraw } from "./api";

let i = 0;
export default class CardGameBoardRCC extends Component {
  state = {
    currentCard1: [],
    currentCard2: [],
    deckId: null,
    cards: [],
    cards2: [],
  };

  async componentDidMount() {
    const { deckId, value, image, cards, cards2 } = await createDeckAndDraw();
    this.setState({
      deckId,
      cardValue: value,
      cardImageUrl: image,
      cards: cards,
      cards2: cards2,
    });
  }

  drawCard = () => {
    let cards = this.state.cards;
    let cards2 = this.state.cards2;
    console.log(cards);
	console.log(cards2)

 // i = index beginning with first in array 0 
    for (let i = 0; i < cards.length; i++) {
      this.setState({ currentCard1: cards[i] });
	  const c = this.state.cards[i]
	  console.log(c.value)
      break;

    }

    for (let i = 0; i < cards2.length; i++) {
      this.setState({ currentCard2: cards2[i] });
	  const c2 = this.state.cards2[i]
	  console.log(c2)
      break;
    }
=======
    
	if (this.state.player2CardsRemaining >= 31){
		alert('Player 2 has won')
	}
	else if (this.state.player1CardsRemaining >= 31){
		alert('Player 1 has won')
	}
>>>>>>> 664b80265d9afd141c28a8c699b6a593f1b7ae69
  };

  render() {
    return (
      <div>
        <img src={this.state.currentCard1.image} alt="your card" />
        <img src={this.state.currentCard2.image} alt="your card" />
        <button onClick={this.drawCard}>draw card</button>
      </div>
    );
  }
}
>>>>>>> b3739897cd361015f73fade488b63de3acfb5186
=======


  render() {
    return (
      <div>
        {/* {this.state.viewCards ? <img src={this.state.currentCard1.image} alt="your card" /> : null}
        {this.state.viewCards ? <img src={this.state.currentCard2.image} alt="your card" /> : null} */}
		{/* <center> */}
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
		{/* </center> */}
        <button onClick={this.drawCard}>draw</button>
      </div>
    );
  }
}
>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0
