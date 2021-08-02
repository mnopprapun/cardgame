<<<<<<< HEAD
=======
import './App.css';
import CardGameBoard from './components/CardGameBoardRCC'
import Home from './Home';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import CardGameBoardRCC from './components/CardGameBoardRCC';

>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0

import "./App.css";
import CardGameBoard from "./components/CardGameBoard2";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <Home />
      <div>
        <CardGameBoard />
      </div>
=======
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
>>>>>>> e64dd06f0f8645b44f2be6202bb77ac93c6c4dc0
    </div>

  );

}

export default App
