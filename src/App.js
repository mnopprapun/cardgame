import './App.css';
import CardGameBoard from './components/CardGameBoardRCC'
import React, { Component } from 'react'

import Home from './Home';
import { createDeckAndDraw } from './components/api';





export class App extends Component {


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
      cards2: cards2,
      currentCard1: cards[0],
      currentCard2: cards2[0]

    })

  }
  render() {
    return (
      <div>
        <div className="App">
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <Home />
          <div>
            <CardGameBoard currentCard1={this.state.currentCard1} currentCard2={this.state.currentCard2} player1Cards={this.state.cards} player2Cards={this.state.cards2} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
