import React, { Component } from 'react';

import {
  Grid,
  Paper,
  Card,
  CardContent
} from '@material-ui/core';

import './MusicPage.css';

import { MUSIC } from  '../../constants/pages';

const DayTripSpotify = () => <iframe src="https://open.spotify.com/follow/1/?uri=spotify:artist:6oaWLVmFwrV1n8bbhu7pSK&size=basic&theme=light&show-count=0" width="100" height="35" scrolling="no" frameBorder="0" style={{border:'none', overflow:'hidden'}} allowtransparency="true"></iframe>;
const TechnicalDebtSoundcloud = () => <iframe title="technical-debt-soundcloud" width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/23445976&color=%231a1217&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>;


export default class MusicPage extends Component
{
    constructor(props)
    {
        super(props);
        props.setColor();
    }

    render()
    {
        return (
          <Grid container spacing={3}>

            <Grid container item xs={6} spacing={1} justify="center">
                <Grid item xs={10}>
                  <Card>
                    <div style={{padding: '50px'}}>
                       <h1>Day Trip</h1>
                       <p style={{color: MUSIC.COLOR.BORDER }}>Guitarist, Songwriter, Audio Engineer</p>
                       <p>Recorded, mixed, and mastered the album House Plant</p>
                       <DayTripSpotify/>
                    </div>
                    <iframe src="https://open.spotify.com/embed/album/4MFh1TyTxyHotEYPnyXLgp" title="day-trip-spotify" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                  </Card>
                </Grid>
            </Grid>
            <Grid container item xs={6} spacing={1} justify="center">
              <Grid item xs={10}>
                <Card>
                  <div style={{padding: '50px'}}>
                     <h1>technical debt</h1>
                     <p>Producer, Guitarist, DJ</p>
                  </div>
                  <TechnicalDebtSoundcloud/>
                </Card>
              </Grid>
            </Grid>

          </Grid>
        )
    }
}
