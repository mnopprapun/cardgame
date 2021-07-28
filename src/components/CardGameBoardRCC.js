import React, { Component } from "react";
import { createDeckAndDraw } from "./api";

export default class CardGameBoardRCC extends Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
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

  render() {
    return (
      <div>
        <img src={this.state.cardImageUrl} alt="your card" />
      </div>
    );
  }
}
