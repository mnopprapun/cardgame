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
	player1CardsRemaining: 27,
	player2CardsRemaining: 27
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
    });
  } 0.

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
      this.state.cards.splice(0, 1);
      this.state.cards2.splice(0, 1);
		this.setState({
			player1CardsRemaining: this.state.cards.length + this.state.discardPile1.length
		})


    } else if (player2CardValueIndex > player1CardValueIndex) {
      this.state.discardPile2.push(player2Card, player1Card);

      this.state.cards2.splice(0, 1);
      this.state.cards.splice(0, 1);
	  this.setState({
		player2CardsRemaining: this.state.cards2.length + this.state.discardPile2.length
	})

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

	if (this.state.cards.length && this.state.cards2.length <= 1 ){

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




  drawCard = () => {


    // this.setState({ viewCards: true });
    this.compareCardValues(this.state.cards[i], this.state.cards2[i]);
    this.setState({ currentCard1: this.state.cards[i], currentCard2: this.state.cards2[i] })


    // console.log(i)

    // this.compareCardValues(this.state.cards[i], this.state.cards2[i]);
    // this.setState({ currentCard1: this.state.cards[i], currentCard2: this.state.cards2[i] })


    // console.log(i)
    if (this.state.cards.length == 1 || this.state.cards2.length == 1) {
      console.log('out of cards')
    }


  };



  render() {
    return (
      <div>
        {/* {this.state.viewCards ? <img src={this.state.currentCard1.image} alt="your card" /> : null}
        {this.state.viewCards ? <img src={this.state.currentCard2.image} alt="your card" /> : null} */}
		<h3>Player 1 Card Remaining: {this.state.player1CardsRemaining}</h3>
		<h3>Player 2 Card Remaining: {this.state.player2CardsRemaining}</h3>
        <img src={this.state.currentCard1.image} alt="your card" />
        <img src={this.state.currentCard2.image} alt="your card" />
        <button onClick={this.drawCard}>draw</button>
      </div>
    );
  }
}