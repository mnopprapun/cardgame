import React, { Component } from 'react'
import { createDeckAndDraw } from './api'

let i = 0;
export default class CardGameBoardRCC extends Component {
	state = {
		currentCard1: [],
		currentCard2: [],
		deckId: null,
		cards: [],
		cards2: []
	}
	async componentDidMount() {
		const { cards, cards2, deckId, } = await createDeckAndDraw();
		this.setState({
			deckId,
			cards: cards,
			cards2: cards2
		})

	}

	compareCardValues = (player1Card) => {
		console.log(player1Card)
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
		const player1CardValueIndex = cardValues.indexOf(player1Card);
		console.log(player1Card)

		// const player2CardValueIndex = cardValues.indexOf(player2Card);


		// if (previousCardValueIndex === -1 || currentCardValueIndex === -1) {
		// 	throw new Error('Supplied cardValue not found in cardValues array');
		// }

		// if (bet === 'up' && previousCardValueIndex >= currentCardValueIndex) {
		// 	return 'Lose';
		// }
		// if (bet === 'up' && previousCardValueIndex < currentCardValueIndex) {
		// 	return 'Win';
		// }

		// if (bet === 'down' && previousCardValueIndex <= currentCardValueIndex) {
		// 	return 'Lose';
		// }
		// if (bet === 'down' && previousCardValueIndex > currentCardValueIndex) {
		// 	return 'Win';
		// }




	}


	drawCard = () => {
		let cards = this.state.cards
		let cards2 = this.state.cards2



		this.setState({ currentCard1: cards[i] });
		this.setState({ currentCard2: cards2[i] });
		i++;


		// for (let i = 0; i < cards.length; i++) {


		// 	this.setState({ currentCard1: cards[i] })

		// 	break;


		// }




		// for (let i = 0; i < cards2.length; i++) {

		// 	this.setState({ currentCard2: cards2[i] })


		// 	break;

		// }



	}


	render() {
		return (
			<div>
				<img src={this.state.currentCard1.image} alt="your card" />
				<img src={this.state.currentCard2.image} alt="your card" />

				<button onClick={this.drawCard}>draw</button>

			</div>
		)
	}
}