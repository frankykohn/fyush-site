import React from 'react';
import {
  Grid
} from '@material-ui/core';

import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";



export default function Footer()
{
    const iconSize = '40px';
    return (
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <a href="https://github.com/frankykohn/"><FaGithub size={iconSize}/></a>
        </Grid>
        <Grid item>
          <a href="https://www.instagram.com/earring_loss/"><FaInstagram size={iconSize}/></a>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/frankykohn/"><FaLinkedin size={iconSize}/></a>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    )
}
