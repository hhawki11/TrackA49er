import './App.css';
import HeatForm from './HeatMap.js';
import "leaflet/dist/leaflet.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tracka49er
        </p>
      </header>
      
      <HeatForm />

    </div>
  );
}

export default App;
