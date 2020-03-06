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
import ProjectsPage from '../ProjectsPage/ProjectsPage';
import Navigation from '../Navigation/Navigation';
import SocialLinks from '../SocialLinks/SocialLinks';

import * as ROUTES from '../../constants/routes';

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        currentPage: 'home'
    };
  }

  setActive = (page) =>
  {
      this.setState({ currentPage: page});
  }

  render()
  {
    return (
      <div className="App">
          <Router>
            <Grid container>
              <Grid item xs={1}>
                  <Navigation currentPage={this.state.currentPage} setActive={this.setActive}/>
              </Grid>
              <Grid item xs={10}>
                  <Route exact path={ROUTES.HOME} component={HomePage}/>
                  <Route exact path={ROUTES.MUSIC} component={MusicPage}/>
                  <Route exact path={ROUTES.VISUALS} component={VisualsPage}/>
                  <Route exact path={ROUTES.PROJECTS} component={ProjectsPage}/>
                  <Route exact path={ROUTES.CONTACT} component={ContactPage}/>
              </Grid>
              <Grid item xs={1}>
                  <SocialLinks/>
              </Grid>
            </Grid>

          </Router>

      </div>
    );
  }
}
