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
    this.state = {
        currentPage: 'home',
        primaryColor: PAGES.HOME.COLOR.BORDER,
        secondaryColor: PAGES.HOME.COLOR.BODY,
    };
  }

  setColor = () =>
  {
      this.setState({ bgColor: '#000000'});
  }

  render()
  {
    return (
      <div className="App" style={{background: `linear-gradient(150deg, ${this.state.primaryColor} 40%, ${this.state.secondaryColor} 30% 100%)`}}>
        <CssBaseline/>
            <Navigation currentPage={this.state.currentPage} setColor={this.setColor}/>
            <Grid className="body-container" container spacing={3}>
              <Grid item xs={12}>
                  <Route exact path={PAGES.HOME.ROUTE} component={HomePage}/>
                  <Route exact path={PAGES.MUSIC.ROUTE} component={MusicPage}/>
                  <Route exact path={PAGES.VISUALS.ROUTE} component={VisualsPage}/>
                  <Route exact path={PAGES.MAX.ROUTE} component={MaxPage}/>
                  <Route exact path={PAGES.CONTACT.ROUTE} component={ContactPage}/>
              </Grid>
              <Grid item xs={12}>
                <Footer/>
              </Grid>
            </Grid>
      </div>
    );
  }
}

export default withRouter(App);
