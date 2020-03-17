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
    let {primaryColor, secondaryColor, angle} = this.chooseColor();
    this.state = {
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        angle: angle
    };
  }

  chooseColor = () =>
  {
    let primaryColor = '';
    let secondaryColor = '';
    let angle = '';
    switch(this.props.location.pathname)
    {
        case PAGES.MUSIC.ROUTE:
          primaryColor = PAGES.MUSIC.COLOR.BORDER;
          secondaryColor = PAGES.MUSIC.COLOR.BODY;
          angle = PAGES.MUSIC.ANGLE;
          break;
        case PAGES.VISUALS.ROUTE:
          primaryColor = PAGES.VISUALS.COLOR.BORDER;
          secondaryColor = PAGES.VISUALS.COLOR.BODY;
          angle = PAGES.VISUALS.ANGLE;
          break;
        // home
        default:
          primaryColor = PAGES.HOME.COLOR.BORDER;
          secondaryColor = PAGES.HOME.COLOR.BODY;
          angle = PAGES.HOME.ANGLE;
          break;
    }
    return {primaryColor, secondaryColor, angle};
  }

  setColor = () =>
  {
    let {primaryColor, secondaryColor, angle} = this.chooseColor();
    this.setState({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        angle: angle
    });
  }

  render()
  {
    return (
      <div className="App" style={{transition: '0.5s', background: `linear-gradient(${this.state.angle}, ${this.state.primaryColor} 500px, ${this.state.secondaryColor} 100px 100%)`}}>
        <CssBaseline/>

            <Navigation currentPage={this.state.currentPage} setColor={this.setColor}/>
            <Grid className="body-container" container spacing={3}>
              <Grid item xs={12}  style={{padding: '0px'}}>
                  <Route exact path={PAGES.HOME.ROUTE}>
                      <HomePage setColor={this.setColor} primaryColor={this.primaryColor} secondaryColor={this.secondaryColor}/>
                  </Route>
                  <Route exact path={PAGES.MUSIC.ROUTE}>
                      <MusicPage setColor={this.setColor} primaryColor={this.primaryColor} secondaryColor={this.secondaryColor}/>
                  </Route>
                  <Route exact path={PAGES.VISUALS.ROUTE}>
                      <VisualsPage setColor={this.setColor} primaryColor={this.primaryColor} secondaryColor={this.secondaryColor}/>
                  </Route>
                  <Route exact path={PAGES.MAX.ROUTE}>
                      <MaxPage setColor={this.setColor} primaryColor={this.primaryColor} secondaryColor={this.secondaryColor}/>
                  </Route>
              </Grid>
              <Grid item xs={12} style={{padding: '0px'}}>
                <Footer color={this.state.primaryColor}/>
              </Grid>
            </Grid>
      </div>
    );
  }
}

export default withRouter(App);
