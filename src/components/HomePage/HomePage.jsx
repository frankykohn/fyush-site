import React, { Component } from 'react';

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton
 } from '@material-ui/core';

 import {
   FaRegEnvelope,
   FaCity,
   FaGithub,
   FaInstagram,
   FaLinkedin
 } from "react-icons/fa";


 import {
   FiPhone
 } from 'react-icons/fi';

import './HomePage.css'
import * as PAGES from '../../constants/pages';


const CardSocialLinks = ({iconSize}) => (
    <Grid container justify="center" style={{backgroundColor: PAGES.HOME.COLOR.BORDER}}>
      <Grid item>
          <IconButton><FaGithub size={iconSize} color="white"/></IconButton>
      </Grid>
      <Grid item>
          <IconButton><FaInstagram size={iconSize} color="white"/></IconButton>
      </Grid>
      <Grid item>
          <IconButton><FaLinkedin size={iconSize} color="white"/></IconButton>
      </Grid>
    </Grid>
);

function Experience() {
    const experienceArray = [
      {
        title: 'Software Engineer',
        company: 'SellHound',
        start: 'March 2018',
        end: 'Present',
        about: 'Full-stack web development PHP with Laravel, Vue, PostgreSQL, Javascript and HTML R&D to develop tools for automation and language processing'
      }
    ]
    const experienceLines = [];
    experienceArray.forEach((experience, index) => {
      experienceLines.push(
        <div key="index" className="edu-exp-container">
          <Grid item xs={12}>
              <p className="edu-exp-title">{experience.title}</p>
          </Grid>
          <Grid item xs={12}>
              <p className="edu-exp-org">{experience.company}</p>
          </Grid>
          <Grid item xs={12}>
              <p className="edu-exp-dates">{experience.start} - {experience.end}</p>
          </Grid>
          <Grid item xs={12}>
            <p className="edu-exp-about">{experience.about}</p>
          </Grid>
        </div>
      );
    });
    return (
      <div>
          <Grid item xs={12}>
              <h1 className="edu-exp-header">Experience</h1>
          </Grid>
          {experienceLines}
      </div>
    )
}

function Education() {
    return (
      <div className="edu-exp-container">
        <Grid item xs={12}>
            <h1 className="edu-exp-header">Education</h1>
        </Grid>
        <Grid item xs={12}>
            <p className="edu-exp-title">B.S. Computer Science, Electronic Music Minor</p>
        </Grid>
        <Grid item xs={12}>
            <p className="edu-exp-org">University of California, Santa Cruz</p>
        </Grid>
        <Grid item xs={12}>
            <p className="edu-exp-dates">September 2015 - June 2019</p>
        </Grid>
      </div>

    )
}

export default class HomePage extends Component
{
    constructor(props)
    {
      super(props);
      this.cardLines = [];
      this.createCardInfo();
    }

    createCardInfo()
    {
      const cardInfo = [
        { icon: <FaRegEnvelope/>, content: 'franky.kohn@gmail.com' },
        { icon: <FiPhone/>, content: '(310) 697-6593' },
        { icon: <FaCity/>, content: 'Oakland, CA'}
      ];
      cardInfo.forEach((item, index) => {
          this.cardLines.push(
            <Grid container key={index} justify="center" spacing={0}>
                <Grid item xs={2}>
                    <p>{item.icon}</p>
                </Grid>
                <Grid item xs={6}>
                    <p>{item.content}</p>
                </Grid>
            </Grid>
          );
      });
    }

    initExperience()
    {

    }

    render()
    {

        return (
          <div>
            <Grid container justify="center" spacing={5}>
              <Grid item xs={10}>
                <Card className="main-card">
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={5}>
                          <img className="cover-image" width="100%" alt="Franky Kohn" src="https://firebasestorage.googleapis.com/v0/b/fyush-site.appspot.com/o/home%2Fwebsite-cover-photo.jpeg?alt=media&token=4dae72b7-8c49-4893-b89e-640daa1c183c"></img>
                        </Grid>
                        <Grid className="card-content" item xs={12} md={7} style={{display: 'flex', flexDirection: 'column'}}>
                          <div>
                            <h1>Franky Kohn</h1>
                            <h2>Software Engineer, Sound Designer, Musician</h2>
                          </div>
                          <div className="card-content-info">
                              {this.cardLines}
                          </div>
                          <CardSocialLinks iconSize="30px"/>
                        </Grid>
                    </Grid>
                </Card>
              </Grid>
              </Grid>
              {/* Specialties */}
              <Grid container spacing={1}>
                  <Grid item xs={12}>
                      <h2>Specialties</h2>
                  </Grid>
                  <Grid item container>
                  </Grid>
              </Grid>

              {/* Experience & Education */}
              <Grid container spacing={1} justify="center">
                  <Grid item container xs={10} md={5}>
                      <Experience/>
                  </Grid>
                  <Grid item container xs={10} md={5}>
                      <Education/>
                  </Grid>
              </Grid>



              <Grid container item xs={12} spacing={1}>
                  <p>
                      This site was built from scratch using <a href="https://reactjs.org/">React</a> for the front-end, <a href="https://material-ui.com/">Material-UI</a> as a basis for css styling, and <a href="https://firebase.google.com/">Firebase</a> for hosting, cloud storage, and database.
                  </p>
              </Grid>
              </div>
        )
    }
}
