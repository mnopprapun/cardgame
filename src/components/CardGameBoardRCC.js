import React, { Component } from "react";
import { createDeckAndDraw } from "./api";

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
	  const c = this.state.cards[0]
	  console.log(c.value)
      break;

    }

    for (let i = 0; i < cards2.length; i++) {
      this.setState({ currentCard2: cards2[i] });
	  const c2 = this.state.cards2[0]
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
