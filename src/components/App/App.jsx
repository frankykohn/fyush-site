import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom';

import {
  Grid,
  AppBar
} from '@material-ui/core';

import HomePage from '../HomePage/HomePage';
import MusicPage from '../MusicPage/MusicPage';
import VisualsPage from '../VisualsPage/VisualsPage';
import ContactPage from '../ContactPage/ContactPage';
import MaxPage from '../MaxPage/MaxPage';
import Navigation from '../Navigation/Navigation';
import SocialLinks from '../SocialLinks/SocialLinks';
import TitleBar from '../TitleBar/TitleBar';

import * as PAGES from '../../constants/pages';

export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
        currentPage: 'Home',
        bgColor: '#ffffff',
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
              <Grid className="sidebar" item xs={12} sm={1}>
                  <Navigation currentPage={this.state.currentPage} setColor={this.setColor}/>
              </Grid>
              <Grid className="body" item xs={12} sm={10}>
                  <Route exact path={PAGES.HOME.ROUTE} component={HomePage}/>
                  <Route exact path={PAGES.MUSIC.ROUTE} component={MusicPage}/>
                  <Route exact path={PAGES.VISUALS.ROUTE} component={VisualsPage}/>
                  <Route exact path={PAGES.MAX.ROUTE} component={MaxPage}/>
                  <Route exact path={PAGES.CONTACT.ROUTE} component={ContactPage}/>
              </Grid>

              <Grid className="sidebar" item xs={12} sm={1}>
                  <SocialLinks/>
              </Grid>
            </Grid>
          </Router>
      </div>
    );
  }
}
