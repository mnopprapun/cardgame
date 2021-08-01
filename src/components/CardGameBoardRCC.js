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


		// const previousCardValueIndex = cardValues.indexOf(previousCardValue);
		const player1CardValueIndex = cardValues.indexOf(player1Card.value);


		const player2CardValueIndex = cardValues.indexOf(player2Card.value);


		// if (previousCardValueIndex === -1 || currentCardValueIndex === -1) {
		// 	throw new Error('Supplied cardValue not found in cardValues array');
		// }

		if (player1CardValueIndex > player2CardValueIndex) {
			// return 'you win';
			console.log('you win')
			this.setState({ player1Score: player1Score + 1 })
		}
		if (player1CardValueIndex < player2CardValueIndex) {
			// return 'you lose';
			console.log('you lose')
			this.setState({ player2Score: player2Score + 1 })


		}

		if (player1CardValueIndex == player2CardValueIndex) {
			// return 'tie';
			console.log('tie')



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
