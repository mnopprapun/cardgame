import './App.css';
import CardGameBoard from './components/CardGameBoardRCC'
import Home from './Home';
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import CardGameBoardRCC from './components/CardGameBoardRCC';
import NavBar from './components/NavBar';
import About from './components/About';


function App() {
  return (
    <div className="App">
          <video src='/videos/video-1.mp4' autoPlay loop muted />
          <NavBar />
          <Router>
          <Switch>
          <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gameboard">
          <CardGameBoardRCC />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

