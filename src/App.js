import './App.css';
import CardGameBoard from './components/CardGameBoardRCC'
import Home from './Home';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CardGameBoardRCC from './components/CardGameBoardRCC';



function App() {
  return (
    <div className="App">
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/gameboard">
            <CardGameBoardRCC />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;