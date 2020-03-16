import React, { Component } from 'react';

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton, Button
 } from '@material-ui/core';

 import {
   FaRegEnvelope,
   FaCity,
   FaGithub,
   FaInstagram,
   FaLinkedin,
   FaCalendarAlt
 } from "react-icons/fa";


 import {
   FiPhone
 } from 'react-icons/fi';

 import { GoNote } from "react-icons/go";

import './HomePage.css'
import { HOME } from '../../constants/pages';


const CardSocialLinks = ({iconSize}) => (
    <Grid container justify="center" style={{backgroundColor: HOME.COLOR.BORDER}}>
      <Grid item>
          <IconButton href="https://github.com/frankykohn/"><FaGithub size={iconSize} color="white"/></IconButton>
      </Grid>
      <Grid item>
          <IconButton href="https://www.instagram.com/earring_loss/"><FaInstagram size={iconSize} color="white"/></IconButton>
      </Grid>
      <Grid item>
          <IconButton href="https://www.linkedin.com/in/frankykohn/"><FaLinkedin size={iconSize} color="white"/></IconButton>
      </Grid>
      <Grid item>
          <IconButton href="https://firebasestorage.googleapis.com/v0/b/fyush-site.appspot.com/o/home%2FResume%203.pdf?alt=media&token=63b18718-c760-486d-95dc-b3ecea4760ba"><GoNote size={iconSize} color="white"/></IconButton>
      </Grid>
    </Grid>
);

function Specialties() {
    return (
      <Card className="card-shadow">
          <Grid item container xs={12} className="resume-container">
            <Grid item xs={12}>
                <h1 className="resume-header">Specialties</h1>
                <hr color='black'/>
                <p className="resume-about">
                    Laravel, PHP, React, Javascript, C++, Audio DSP, JUCE, Audio Mixing, Music Production, Music Composition.
                </p>
            </Grid>
          </Grid>
      </Card>
    );
}

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
        <div key="index">
          <Grid item xs={12}>
              <h3 className="resume-title">{experience.title}</h3>
          </Grid>
          <Grid item xs={12}>
              <p className="resume-org">{experience.company}</p>
          </Grid>
          <Grid item xs={12}>
              <p className="resume-dates"><FaCalendarAlt/> {experience.start} - {experience.end}</p>
          </Grid>
          <Grid item xs={12}>
            <p className="resume-about">{experience.about}</p>
          </Grid>
        </div>
      );
    });
    return (
      <Card className="card-shadow">
          <Grid item container xs={12} className="resume-container">
              <Grid item xs={12}>
                  <h1 className="resume-header">Experience</h1>
                  <hr color='black'/>
              </Grid>
              {experienceLines}
          </Grid>
      </Card>
    )
}

function Education() {
    return (
        <Card className="card-shadow">
          <Grid item container className="resume-container">
            <Grid item xs={12}>
              <h1 className="resume-header">Education</h1>
              <hr color='black'/>
            </Grid>
            <Grid item xs={12}>
              <p className="resume-title">B.S. Computer Science, Electronic Music Minor</p>
            </Grid>
            <Grid item xs={12}>
              <p className="resume-org">University of California, Santa Cruz</p>
            </Grid>
            <Grid item xs={12}>
              <p className="resume-dates"><FaCalendarAlt/> September 2015 - June 2019</p>
            </Grid>
        </Grid>
      </Card>

    )
}

export default class HomePage extends Component
{
    constructor(props)
    {
      super(props);
      this.cardLines = [];
      props.setColor();
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
          <div className="main-container">
            <Grid container justify="center" spacing={5}>
              <Grid item xs={10}>
                <Card className="card-shadow">
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={4}>
                          <img className="cover-image" width="100%" alt="Franky Kohn" src="https://firebasestorage.googleapis.com/v0/b/fyush-site.appspot.com/o/home%2Fwebsite-cover-photo.jpeg?alt=media&token=4dae72b7-8c49-4893-b89e-640daa1c183c"></img>
                        </Grid>
                        <Grid className="card-content" item xs={12} md={8} style={{display: 'flex', flexDirection: 'column'}}>
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

              <Grid container spacing={5} justify="center">
                  <Grid item container xs={10} md={5}>
                      <Experience/>
                  </Grid>
                  <Grid item container xs={10} md={5}>
                      <Specialties/>
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
