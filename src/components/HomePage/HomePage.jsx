import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import './HomePage.css'


export default class HomePage extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
          <Grid container spacing={3}>
              <Grid container item xs={12} spacing={1}>
                <Grid item xs={12}>
                    <h1>Franky Kohn</h1>
                </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1}>
                  <Grid item xs={12} sm={6}>
                      <img className="cover-image"src="https://firebasestorage.googleapis.com/v0/b/fyush-site.appspot.com/o/home%2Fwebsite-cover-photo.jpeg?alt=media&token=4dae72b7-8c49-4893-b89e-640daa1c183c"></img>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <p>
                          Hello! I am a software engineer, musician, producer, and sound designer based in Oakland, CA.
                          My software work focuses on front-end and full-stack web development, audio plugins and DAW software.
                          If you'd like to work together, please snag my resume <a href="https://firebasestorage.googleapis.com/v0/b/fyush-site.appspot.com/o/home%2Ffinal%20resume.pdf?alt=media&token=1482baf4-d393-48e9-91cf-dd46faecef90" download>here</a> and contact me via
                          email (franky.kohn@gmail.com) or Instagram DM (@earring_loss)!
                      </p>
                  </Grid>
              </Grid>
              <Grid container item xs={12} spacing={1}>
                  <p>
                      This site was built from scratch using <a href="https://reactjs.org/">React</a> for the front-end, <a href="https://material-ui.com/">Material-UI</a> as a basis for css styling, and <a href="https://firebase.google.com/">Firebase</a> for hosting, cloud storage, and database.
                  </p>
              </Grid>
          </Grid>
        )
    }
}
