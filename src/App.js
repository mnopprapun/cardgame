import "./App.css";
import CardGameBoard from "./components/CardGameBoard2";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <Home />
      <div>
        <CardGameBoard/>
      </div>
    </div>

  );
}

export default App;

