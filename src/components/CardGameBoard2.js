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
  };
  async componentDidMount() {
    const { cards, cards2, deckId } = await createDeckAndDraw();
    this.setState({
      deckId,
      cards: cards,
      cards2: cards2,
    });
  }

  compareCardValues = (player1Card, player2Card) => {

    // logic for comparing values and pushing winner cards into discardpile.
    if (player1Card.value > player2Card.value) {
      this.state.discardPile1.push(player1Card, player2Card);
      this.state.cards.splice(0, 1);
    } else if (player2Card.value > player1Card.value) {
      this.state.discardPile2.push(player2Card, player1Card);
      this.state.cards2.splice(0, 1);
    }
    console.log(this.state.discardPile1, this.state.discardPile2);

    if (player2Card.value > player1Card.value) {
      this.state.cards.splice(0, 1);
    } else if (player1Card.value > player2Card.value) {
      this.state.cards2.splice(0, 1);
    }

    // Tie cards still needs additional log to Play 'WAR' draw 3 then compare 4th card
    if (player1Card.value === player2Card.value) {
      this.state.discardPile1.push(player1Card);
      this.state.discardPile2.push(player2Card);
    }

    // reshuffle does not work correctly yet er
    if (this.state.cards.length === 0) {
      this.state.cards.push(this.state.discardPile1);
    } else if (this.state.cards2.length === 0) {
      this.state.cards2.push(this.state.discardPile2);
    }

    console.log(this.state.cards, this.state.cards2);
  };

  drawCard = () => {
    let cards = this.state.cards;
    let cards2 = this.state.cards2;

    i++;

    this.setState({ currentCard1: cards[i] });
    this.setState({ currentCard2: cards2[i] });

    this.compareCardValues(this.state.cards[i], this.state.cards2[i]);
  };

  render() {
    return (
      <div>
        <img src={this.state.currentCard1.image} alt="your card" />
        <img src={this.state.currentCard2.image} alt="your card" />

        <button onClick={this.drawCard}>draw</button>
      </div>
    );
  }
}
