import React, { Component } from 'react';

import {
  Grid,
  Paper,
  Card
} from '@material-ui/core';

import './MusicPage.css';

export default class MusicPage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
          /* */
          <Grid container spacing={3}>
            <Grid container item xs={12} spacing={1}>
                <Grid item xs={12}>
                    <h1>Music</h1>
                </Grid>
            </Grid>

            <Grid alignContent='flex-end' container item xs={12} spacing={1}>
                <Grid item xs={3} className="grid-left">
                    <h2>Day Trip</h2>
                    <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:6oaWLVmFwrV1n8bbhu7pSK&size=basic&theme=light&show-count=0" width="100" height="35" scrolling="no" frameBorder="0" style={{border:'none', overflow:'hidden'}} allowtransparency="true"></iframe>
                </Grid>
                <Grid item xs={9} className="grid-right">
                    <iframe src="https://open.spotify.com/embed/album/4MFh1TyTxyHotEYPnyXLgp" title="day-trip-spotify" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Grid>
            </Grid>

            <Grid container item xs={12} spacing={1}>
              <Grid item xs={3} className="grid-left">
                  <h2>technical debt</h2>
              </Grid>
              <Grid item xs={9} className="grid-right">
                  <iframe title="technical-debt-soundcloud" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23445976&color=%231a1217&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              </Grid>
            </Grid>

          </Grid>
        )
    }
}
