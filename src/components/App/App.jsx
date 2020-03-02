import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import HomePage from '../HomePage/HomePage';
import MusicPage from '../MusicPage/MusicPage';
import VisualsPage from '../VisualsPage/VisualsPage';
import Navigation from '../Navigation/Navigation';

import * as ROUTES from '../../constants/routes';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigation/>

            <Route exact path={ROUTES.HOME} component={HomePage}/>
            <Route exact path={ROUTES.MUSIC} component={MusicPage}/>
            <Route exact path={ROUTES.VISUALS} component={VisualsPage}/>
        </Router>

    </div>
  );
}

export default App;
