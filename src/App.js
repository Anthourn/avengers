import logo from './logo.svg';
import './App.css';
import {Heroes} from './components/heroes'
function App() {
  return (
    <div className="App">
      <h1> Avengers initiative </h1>
      <div className = 'card'>
      <div className = 'card-content'>
      <h2 className = 'card-title'>Avenger #</h2>
      <p className = 'card-body'> "There was an idea, Stark knows this, called the Avengers Initiative. The idea was to bring together a group of remarkable people, to see if they could become something more. To see if they could work together when we needed them to. To fight the battles that we never could. </p>
      <a href = '#' className = 'button'>learn more </a>
      </div>
      </div>
      <Heroes/>
    </div>
  );
}

export default App;
