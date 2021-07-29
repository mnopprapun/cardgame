import "./App.css";
import CardGameBoard from "./components/CardGameBoardRCC";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <header>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/gameboard" component={CardGameBoard}></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

