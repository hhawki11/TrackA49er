import './App.css';
import HeatMap from './HeatMap.js';
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeatMap />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="map"></div>

    </div>
  );
}

export default App;
