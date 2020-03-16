import React, { Component } from 'react';
import './App.css';

import {
  Route,
  withRouter
} from 'react-router-dom';

import {
  CssBaseline,
  Grid
} from '@material-ui/core';

import HomePage from '../HomePage/HomePage';
import MusicPage from '../MusicPage/MusicPage';
import VisualsPage from '../VisualsPage/VisualsPage';
import ContactPage from '../ContactPage/ContactPage';
import MaxPage from '../MaxPage/MaxPage';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import * as PAGES from '../../constants/pages';

class App extends Component {

  constructor(props)
  {
    super(props);
    let primaryColor = '';
    let secondaryColor = '';
    switch(props.location.pathname)
    {
        case PAGES.MUSIC.ROUTE:
          primaryColor = PAGES.MUSIC.COLOR.BORDER;
          secondaryColor = PAGES.MUSIC.COLOR.BODY;
          break;
        case PAGES.VISUALS.ROUTE:
          primaryColor = PAGES.VISUALS.COLOR.BORDER;
          secondaryColor = PAGES.VISUALS.COLOR.BODY;
          break;
        // home
        default:
          primaryColor = PAGES.HOME.COLOR.BORDER;
          secondaryColor = PAGES.HOME.COLOR.BODY;
          break;
    }
    this.state = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
    };
  }

  setColor = () =>
  {
    let primaryColor = '';
    let secondaryColor = '';
    switch(this.props.location.pathname)
    {
        case PAGES.MUSIC.ROUTE:
          primaryColor = PAGES.MUSIC.COLOR.BORDER;
          secondaryColor = PAGES.MUSIC.COLOR.BODY;
          break;
        case PAGES.VISUALS.ROUTE:
          primaryColor = PAGES.VISUALS.COLOR.BORDER;
          secondaryColor = PAGES.VISUALS.COLOR.BODY;
          break;
        // home
        default:
          primaryColor = PAGES.HOME.COLOR.BORDER;
          secondaryColor = PAGES.HOME.COLOR.BODY;
          break;
    }
    this.setState({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
  }

  render()
  {
    return (
      <div className="App" style={{transition: '0.5s', background: `linear-gradient(160deg, ${this.state.primaryColor} 40%, ${this.state.secondaryColor} 30% 100%)`}}>
        <CssBaseline/>
            <Navigation currentPage={this.state.currentPage} setColor={this.setColor}/>
            <Grid className="body-container" container spacing={3}>
              <Grid item xs={12}>
                  <Route exact path={PAGES.HOME.ROUTE}>
                      <HomePage setColor={this.setColor}/>
                  </Route>
                  <Route exact path={PAGES.MUSIC.ROUTE}>
                      <MusicPage setColor={this.setColor}/>
                  </Route>
                  <Route exact path={PAGES.VISUALS.ROUTE}>
                      <VisualsPage setColor={this.setColor}/>
                  </Route>
                  <Route exact path={PAGES.MAX.ROUTE}>
                      <MaxPage setColor={this.setColor}/>
                  </Route>
              </Grid>
              <Grid item xs={12}>
                <Footer color={this.state.primaryColor}/>
              </Grid>
            </Grid>
      </div>
    );
  }
}

export default withRouter(App);
