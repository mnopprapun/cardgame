import React, { Component } from 'react'
import { createDeckAndDraw } from './api';

export default class CardGameBoard2 extends Component {
	state = {
		cardImageUrl: null,
		cardValue: null,
		deckId: null,
	}
	async componentDidMount() {
		const {deckId, value, image} = await createDeckAndDraw();
		this.setState({
			deckId,
			cardValue:value,
			cardImageUrl: image
		})

	}
	render() {
		return (
			<div>
				<img src={this.state.cardImageUrl} alt="your card"/>
			</div>
		)
	}
}




