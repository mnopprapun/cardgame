import './App.css';
import CardGameBoard from './components/CardGameBoardRCC'
import Home from './Home';



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

