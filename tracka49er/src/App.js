import './App.css';
import HeatForm from './HeatMap.js';
import "leaflet/dist/leaflet.css";
import About from './about.js';
import Home from './home.js';
import Network from './Network.js';
import Ad from './Ad.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import LowActivity from './lowactivity';
import HighActivity from './highactivity';


function App() {
    return (
        <Router>
            <div>


                <ul>
                    <li className='logo'>
                        <Link className='logo' to='/home'>TrackA49er</Link>
                    </li>
                    <li className='pages'>
                        <Link className='pages' to='/home'>Home</Link>
                    </li>

                    <li className='pages'>
                        <Link className='pages' to='/HeatMap'>HeatMap</Link>
                    </li>

                    <li className='pages'>
                        <Link className='pages' to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className='pages' to='/lowactivity'>Low Activity Areas</Link>
                    </li>
                    <li>
                        <Link className='pages' to='/highactivity'>High Activity Areas</Link>
                    </li>
                    <li>
                                            <Link className='pages' to='/Network'>Network Information</Link>
                                        </li>
                                        <li>
                                                                <Link className='pages' to='/Ad'>Advertising</Link>
                                                            </li>
                </ul>


                <Routes>
                    <Route exact path='/home' element={<Home />}></Route>
                    <Route exact path='/HeatMap' element={<HeatForm />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/lowactivity' element={<LowActivity />}></Route>
                    <Route exact path='/highactivity' element={<HighActivity />}></Route>
                    <Route exact path='/Network' element={<Network />}></Route>
                    <Route exact path='/Ad' element={<Ad />}></Route>

                </Routes>
            </div>
        </Router>
    );
}

export default App;
