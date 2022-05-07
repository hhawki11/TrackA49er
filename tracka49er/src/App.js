import './App.css';
import HeatForm from './HeatMap.js';
import "leaflet/dist/leaflet.css";
import About from './about.js';
import Home from './home.js';
import Network from './Network.js';
import Ad from './Ad.js';
import github from './github.svg';
import uncc from './uncc.png'
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
                        <Link className='logo' to='/'>TrackA49er</Link>
                    </li>
                    <li className='pages'>
                        <Link className='pages' to='/'>Home</Link>
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
                    <Route exact path='/' element={<Home />}></Route>
                    <Route exact path='/HeatMap' element={<HeatForm />}></Route>
                    <Route exact path='/about' element={<About />}></Route>
                    <Route exact path='/lowactivity' element={<LowActivity />}></Route>
                    <Route exact path='/highactivity' element={<HighActivity />}></Route>
                    <Route exact path='/Network' element={<Network />}></Route>
                    <Route exact path='/Ad' element={<Ad />}></Route>
                </Routes>
                  <div className='footer'>

                      <div className='github'>
                        <a href='https://github.com/hhawki11/TrackA49er' target='_blank'>
                          <img src={github} alt="Github" style={{maxHeight: '50px', maxWidth: '50px'}} />
                        </a>
                      </div>

                      <div style={{marginTop: '13px', marginLeft: '5px'}}>© Copyright Group 21 UNCC 2022</div>
                      
                      <div className='uncc'>
                        <a href='https://www.charlotte.edu/' target='_blank'>
                          <img src={uncc} alt="Github" style={{maxHeight: '70px', maxWidth: '70px'}} />
                        </a>
                      </div>

                  </div>
            </div>
        </Router>
    );
}

export default App;
