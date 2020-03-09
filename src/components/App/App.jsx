import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import {
  Grid
} from '@material-ui/core';

import HomePage from '../HomePage/HomePage';
import MusicPage from '../MusicPage/MusicPage';
import VisualsPage from '../VisualsPage/VisualsPage';
import ContactPage from '../ContactPage/ContactPage';
import MaxPage from '../MaxPage/MaxPage';
import Navigation from '../Navigation/Navigation';
import SocialLinks from '../SocialLinks/SocialLinks';

import * as ROUTES from '../../constants/routes';

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        currentPage: 'home',
        bgColor: '#ffffff'
    };
  }

  setColor = () =>
  {
      this.setState({ bgColor: '#000000'});
  }

  render()
  {
    return (
      <div className="App" style={{backgroundColor: this.state.bgColor}}>
          <Router>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={1}>
                  <Navigation currentPage={this.state.currentPage} setColor={this.setColor}/>
              </Grid>
              <Grid item xs={12} sm={10}>
                  <Route exact path={ROUTES.HOME} component={HomePage}/>
                  <Route exact path={ROUTES.MUSIC} component={MusicPage}/>
                  <Route exact path={ROUTES.VISUALS} component={VisualsPage}/>
                  <Route exact path={ROUTES.MAX} component={MaxPage}/>
                  <Route exact path={ROUTES.CONTACT} component={ContactPage}/>
              </Grid>
              <Grid item xs={12} sm={1}>
                  <SocialLinks/>
              </Grid>
            </Grid>
          </Router>
      </div>
    );
  }
}
