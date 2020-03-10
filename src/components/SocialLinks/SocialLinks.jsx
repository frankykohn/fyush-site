import React from 'react';
import { Grid } from '@material-ui/core';

import {
  FaSoundcloud,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";



export default function SocialLinks()
{
    const xs = 4;
    const sm = 12;
    const iconSize = '40px';
    return (
        <Grid container spacing={1}>
          <Grid item xs={xs} sm={sm}>
            <a href="https://github.com/frankykohn/"><FaGithub size={iconSize}/></a>
          </Grid>
          <Grid item xs={xs} sm={sm}>
            <a href="https://www.instagram.com/earring_loss/"><FaInstagram size={iconSize}/></a>
          </Grid>
          <Grid item xs={xs} sm={sm}>
            <a href="https://www.linkedin.com/in/frankykohn/"><FaLinkedin size={iconSize}/></a>
          </Grid>
        </Grid>
    )
}
